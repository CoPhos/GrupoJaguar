import React from 'react';
import { MyContext } from './ReporteColadoContainer';

import { styled } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AddCircle from '@mui/icons-material/AddCircle';

function CreateImageReporte(props) {
  const Input = styled('input')({
    display: 'none'
  });
  return (
    <MyContext.Consumer>
      {({ posts, dispatch }) => (
        <>
          <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={props.snackbar}
            autoHideDuration={6000}
            onClose={props.handleClose}
          >
            <Alert
              onClose={props.handleClose}
              severity={props.error ? 'error' : 'success'}
              sx={{ width: '100%' }}
            >
              {props.error ? 'Hubo un error, intentelo mas tarde' : 'Operación exitosa!'}
            </Alert>
          </Snackbar>
          <Box sx={{}}>
            <Typography variant="h4" component="div" sx={{ margin: '20px' }}>
              Reporte de Colado - Añadir Imagen
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                flexWrap: 'wrap'
              }}
            >
              <TextField
                onChange={e => props.change('title', e.target.value)}
                sx={withMargin}
                label="Nombre de archivo"
                size="small"
                variant="outlined"
                value={props.value.title}
                sx={{ margin: '0', width: '55%' }}
              />
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',

                  '@media(max-width: 936px)': {
                    marginTop: '20px'
                  }
                }}
              >
                <label htmlFor="contained-button-file">
                  <Input
                    accept="image/*"
                    id="contained-button-file"
                    type="file"
                    onChange={props.setPhoto}
                  />
                  <Button
                    variant="outlined"
                    component="span"
                    sx={{ color: '#008433', borderColor: '#008433', margin: '0 20px' }}
                  >
                    Seleccionar Imagen
                  </Button>
                </label>
                <Button
                  variant="outlined"
                  startIcon={<AddCircle />}
                  onClick={props.savePhoto}
                  type="primary"
                  sx={{ color: '#008433', borderColor: '#008433' }}
                >
                  Subir Imagen
                </Button>
              </Box>
            </Box>
          </Box>
        </>
      )}
    </MyContext.Consumer>
  );
}

const withMargin = { marginTop: 10 };

export default CreateImageReporte;
