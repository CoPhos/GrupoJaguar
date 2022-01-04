import React, { useState, useEffect, useReducer } from 'react';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import { listBitacoraDePruebasComprensionsByDate } from '../../graphql/queries';
import DiarioPruebas from './DiarioPruebas';
import DiarioPruebasDownload from './DiarioPruebasDownload';

import Container from '@mui/material/Container';
function DiarioPruebasContainer() {
  const [searchField, setsearchField] = useState(Date.now());
  const [data, setdata] = useState([]);
  const [error, seterror] = useState(false);
  const [snackbar, setsnackbar] = useState(false);

  const handleSearchFIeld = value => {
    setsearchField(value.toDateString());
  };

  const handleSnackbar = () => {
    setsnackbar(false);
  };

  const calculateEdad = array => {
    var date2 = new Date(searchField);
    array.forEach(element => {
      let date1 = new Date(element.fechaColado);
      let difference = date2 - date1;
      let days = Math.ceil(difference / (1000 * 3600 * 24));
      element.edadDias = days;
    });
  };

  const generatePdfData = () => {
    const pdfData = [...data];
    calculateEdad(pdfData);
    return pdfData;
  };

  async function fetchBitacoraByMuestra() {
    try {
      const notesData = await API.graphql(
        graphqlOperation(listBitacoraDePruebasComprensionsByDate, {
          filter: {
            or: [
              { siete: { eq: searchField } },
              { catorce: { eq: searchField } },
              { veintiocho: { eq: searchField } },
              { veintiochoDos: { eq: searchField } }
            ]
          }
        })
      );
      if (notesData.data.listBitacoraDePruebasComprensions.items.length !== 0) {
        setdata(notesData.data.listBitacoraDePruebasComprensions.items);
        setsnackbar(false);
        seterror(true);
      } else {
        setsnackbar(true);
      }
      console.log(error);
      console.log(notesData.data.listBitacoraDePruebasComprensions.items);
    } catch (err) {
      console.log('error: ', err);
      seterror(false);
    }
  }

  return (
    <Container
      sx={{
        flex: '1 1 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
      }}
      maxWidth="lg"
    >
      <DiarioPruebas
        searchField={handleSearchFIeld}
        fetchData={fetchBitacoraByMuestra}
      ></DiarioPruebas>
      <DiarioPruebasDownload
        openSnack={snackbar}
        error={error}
        pdfData={generatePdfData()}
        fecha={searchField}
        closeSnackbar={handleSnackbar}
      ></DiarioPruebasDownload>
    </Container>
  );
}

export default DiarioPruebasContainer;
