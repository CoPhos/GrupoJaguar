import React, { useState, useReducer, useEffect } from 'react';
import { createImagenReportColado } from '../../graphql/mutations';

import { v4 as uuidv4 } from 'uuid';

import protectedRoute from '../../protectedRoute';
import { listImagenReportColados } from '../../graphql/queries';
import { onCreateImagenReportColado } from '../../graphql/subscriptions';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';

import ReporteColadoImages from './ReporteColadoImages';
import CreateImageReporte from './CreateImageReporte';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export const MyContext = React.createContext();
function reducer(state, action) {
  switch (action.type) {
    case 'SET_POSTS':
      return action.posts;
    case 'ADD_POST':
      return [action.post, ...state];
    default:
      return state;
  }
}
async function getSignedPosts(posts) {
  const signedPosts = await Promise.all(
    posts.map(async item => {
      const signedUrl = await Storage.get(item.imageKey);
      item.imageUrl = signedUrl;
      return item;
    })
  );
  return signedPosts;
}
const initialFormState = {
  title: '',
  image: {}
};

function ReporteColadoContainer() {
  const [formState, updateFormState] = useState(initialFormState);
  const [posts, dispatch] = useReducer(reducer, []);
  const [snackbar, setSnackbar] = useState(false);
  const [error, setError] = useState(false);
  const [seachField, setSeachField] = useState('');
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbar(false);
  };
  function handleSearchField(e) {
    setSeachField(e.target.value);
  }
  function onChange(key, value) {
    updateFormState({ ...formState, [key]: value });
  }
  function setPhoto(e) {
    if (!e.target.files[0]) return;
    const file = e.target.files[0];
    console.log(file);
    updateFormState({ ...formState, image: file });
  }
  async function savePhoto() {
    try {
      const { title, image } = formState;
      if (!title || !image.name) return;
      const imageKey = uuidv4() + formState.image.name.replace(/\s/g, '-').toLowerCase();
      await Storage.put(imageKey, formState.image);
      const post = { title, imageKey };
      await API.graphql(graphqlOperation(createImagenReportColado, { input: post }));
      setSnackbar(true);
      setError(false);
      updateFormState({ title: '', image: {} });
    } catch (err) {
      console.log('error: ', err);
      setError(true);
    }
  }

  // useEffect(() => {
  //   fetchPosts();
  //   const subscription = API.graphql(graphqlOperation(onCreateImagenReportColado)).subscribe({
  //     next: async post => {
  //       const newPost = post.value.data.onCreateImagenReportColado;
  //       const signedUrl = await Storage.get(newPost.imageKey);
  //       newPost.imageUrl = signedUrl;
  //       dispatch({ type: 'ADD_POST', post: newPost });
  //       updateFormState({ title: '', image: {} });
  //     }
  //   });
  //   return () => subscription.unsubscribe();
  // }, []);
  async function fetchReporteByMuestra() {
    if (seachField !== '') {
      try {
        const postData = await API.graphql(
          graphqlOperation(listImagenReportColados, {
            limit: 5,
            filter: { title: { eq: seachField } }
          })
        );
        const {
          data: {
            listImagenReportColados: { items }
          }
        } = postData;
        const signedPosts = await getSignedPosts(items);
        dispatch({ type: 'SET_POSTS', posts: signedPosts });
      } catch (err) {
        console.log('error: ', err);
      }
    }
  }
  async function fetchPosts() {
    try {
      const postData = await API.graphql(graphqlOperation(listImagenReportColados));
      const {
        data: {
          listImagenReportColados: { items }
        }
      } = postData;
      const signedPosts = await getSignedPosts(items);
      dispatch({ type: 'SET_POSTS', posts: signedPosts });
    } catch (err) {
      console.log('error: ', err);
    }
  }

  return (
    <MyContext.Provider value={{ posts: posts, dispatch: dispatch, formState }}>
      <Container
        sx={{
          flex: '1 1 auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start'
        }}
        maxWidth="lg"
      >
        <CreateImageReporte
          savePhoto={savePhoto}
          setPhoto={setPhoto}
          change={onChange}
          handleClose={handleClose}
          snackbar={snackbar}
          error={error}
          value={formState}
          setSearchField={handleSearchField}
          fetchBySearchField={fetchReporteByMuestra}
        ></CreateImageReporte>
        <ReporteColadoImages></ReporteColadoImages>
      </Container>
    </MyContext.Provider>
  );
}

export default protectedRoute(ReporteColadoContainer);
