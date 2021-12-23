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
import Toolbar from '@mui/material/Toolbar';
import Search from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

function CreateImageReporte(props) {
  const Input = styled('input')({
    display: 'none'
  });
  return (
    <MyContext.Consumer>
      {({ posts, dispatch, formState }) => (
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
                label="Nombre"
                size="small"
                variant="outlined"
                value={props.value.title}
                sx={{ marginBottom: '20px', width: '55%' }}
              />
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  marginBottom: '20px',
                  '@media(max-width: 936px)': {}
                }}
              >
                <label htmlFor="contained-button-file">
                  <Input
                    accept="image/*"
                    id="contained-button-file"
                    type="file"
                    onChange={props.setPhoto}
                    multiple={false}
                  />
                  <Button
                    variant="outlined"
                    component="span"
                    sx={{ color: '#008433', borderColor: '#008433', margin: '0 20px' }}
                  >
                    Seleccionar Imagen
                  </Button>
                  {formState.image.name}
                </label>
                <Button
                  variant="outlined"
                  startIcon={<AddCircle />}
                  onClick={props.savePhoto}
                  type="primary"
                  sx={{ color: '#008433', borderColor: '#008433', marginLeft: '20px' }}
                >
                  Subir Imagen
                </Button>
              </Box>
              <Toolbar
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '85%'
                }}
              >
                <TextField
                  onBlur={e => {
                    props.setSearchField(e);
                  }}
                  label="Buscar por Numero Muestra"
                  size="small"
                  variant="outlined"
                  sx={{ width: '75%' }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search />
                      </InputAdornment>
                    )
                  }}
                />
                <Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Button
                      variant="outlined"
                      onClick={() => {
                        props.fetchBySearchField();
                      }}
                      sx={{ marginLeft: '10px', color: '#008433', borderColor: '#008433' }}
                    >
                      Buscar
                    </Button>
                  </Box>
                </Box>
              </Toolbar>
            </Box>
          </Box>
        </>
      )}
    </MyContext.Consumer>
  );
}

const withMargin = { marginTop: 10 };

export default CreateImageReporte;
