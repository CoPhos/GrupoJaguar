import React, { useState, useReducer, useEffect } from 'react';

import InformePruebas from './InformePruebas';

import protectedRoute from '../../protectedRoute';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import { listDocumentoBitacoras } from '../../graphql/queries';
import '@aws-amplify/ui-react/styles.css';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export const MyContext = React.createContext();
function reducer(state, action) {
  switch (action.type) {
    case 'SET_POSTS':
      return action.posts;
    default:
      return state;
  }
}

async function getSignedPosts(posts) {
  const signedPosts = await Promise.all(
    posts.map(async item => {
      const signedUrl = await Storage.get(item.documentKey);
      item.imageUrl = signedUrl;
      return item;
    })
  );
  return signedPosts;
}

function InformePruebasContainer() {
  const [posts, dispatch] = useReducer(reducer, []);
  const [seachField, setSeachField] = useState('');

  function handleSearchField(e) {
    setSeachField(e.target.value);
  }

  async function fetchPosts() {
    try {
      const postData = await API.graphql(graphqlOperation(listDocumentoBitacoras));
      const {
        data: {
          listDocumentoBitacoras: { items }
        }
      } = postData;
      const signedPosts = await getSignedPosts(items);
      console.log(signedPosts);
      dispatch({ type: 'SET_POSTS', posts: signedPosts });
    } catch (err) {
      console.log('error: ', err);
    }
  }

  async function fetchInformeByMuestra() {
    if (seachField !== '') {
      const input = seachField.toUpperCase().split(',');
      try {
        const postData = await API.graphql(
          graphqlOperation(listDocumentoBitacoras, {
            limit: 5,
            filter: {
              and: [{ numEnsaye: { eq: input[0] } }, { numMuestra: { eq: input[1] } }]
            }
          })
        );
        const {
          data: {
            listDocumentoBitacoras: { items }
          }
        } = postData;
        const signedPosts = await getSignedPosts(items);
        dispatch({ type: 'SET_POSTS', posts: signedPosts });
        console.log(posts);
      } catch (err) {
        console.log('error: ', err);
      }
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <MyContext.Provider value={{ posts: posts, dispatch: dispatch }}>
      <Container
        sx={{
          flex: '1 1 auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start'
        }}
        maxWidth="lg"
      >
        <InformePruebas
          setSearchField={handleSearchField}
          fetchBySearchField={fetchInformeByMuestra}
        ></InformePruebas>
      </Container>
    </MyContext.Provider>
  );
}

export default protectedRoute(InformePruebasContainer);
