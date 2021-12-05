import React, { useReducer, useState } from 'react';

import { createStyles, makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import DatePicker from '@mui/lab/DatePicker';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import { MyContext } from './BitacoraContainer';

function BitacoraForm(props) {
  const useStyles = makeStyles(theme =>
    createStyles({
      root: {
        '& .MuiFormControl-root': {
          width: '80%',
          margin: '8px'
        }
      }
    })
  );
  const theme = createTheme();
  const classes = useStyles();

  // const handleSumbit = e => {
  //   e.preventDefault()

  //   if (validate()) {
  //     window.alert('testing...')
  //   }
  // }

  return (
    <MyContext.Consumer>
      {({ state, dispatch }) => (
        <ThemeProvider theme={theme}>
          <FormControl className={classes.root}>
            <Grid
              container
              sx={{
                padding: '15px 0',
                '@media(max-width: 715px)': {
                  flexDirection: 'column'
                }
              }}
            >
              <Grid
                item
                xs={6}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  '@media(max-width: 715px)': {
                    maxWidth: '95%'
                  }
                }}
              >
                <TextField
                  onBlur={e =>
                    dispatch({
                      type: 'INPUT_CHANGE',
                      payload: e
                    })
                  }
                  size="small"
                  variant="outlined"
                  label="lab"
                  name="numMuestra"
                  error={!!state.formErrors.lab}
                  helperText={state.formErrors.lab}
                ></TextField>
                <TextField
                  onBlur={e =>
                    dispatch({
                      type: 'INPUT_CHANGE',
                      payload: e
                    })
                  }
                  size="small"
                  variant="outlined"
                  label="numObra"
                  name="numObra"
                  error={!!state.formErrors.numObra}
                  helperText={state.formErrors.numObra ? state.formErrors.numObra : ''}
                ></TextField>
                <TextField
                  onBlur={e =>
                    dispatch({
                      type: 'INPUT_CHANGE',
                      payload: e
                    })
                  }
                  size="small"
                  variant="outlined"
                  label="Nombre Obra"
                  name="nombreObra"
                  error={!!state.formErrors.nombreObra}
                  helperText={state.formErrors.nombreObra ? state.formErrors.nombreObra : ''}
                ></TextField>

                <TextField
                  onBlur={e =>
                    dispatch({
                      type: 'INPUT_CHANGE',
                      payload: e
                    })
                  }
                  size="small"
                  variant="outlined"
                  label="ubicacion"
                  name="ubicacion"
                  error={!!state.formErrors.ubicacion}
                  helperText={state.formErrors.ubicacion ? state.formErrors.ubicacion : ''}
                ></TextField>

                <TextField
                  onBlur={e =>
                    dispatch({
                      type: 'INPUT_CHANGE',
                      payload: e
                    })
                  }
                  size="small"
                  variant="outlined"
                  label="solicitadoPor"
                  name="solicitadoPor"
                  error={!!state.formErrors.solicitadoPor}
                  helperText={state.formErrors.solicitadoPor ? state.formErrors.solicitadoPor : ''}
                ></TextField>
                <TextField
                  onBlur={e =>
                    dispatch({
                      type: 'INPUT_CHANGE',
                      payload: e
                    })
                  }
                  size="small"
                  variant="outlined"
                  label="elementoColado"
                  name="elementoColado"
                  error={!!state.formErrors.elementoColado}
                  helperText={
                    state.formErrors.elementoColado ? state.formErrors.elementoColado : ''
                  }
                ></TextField>

                <TextField
                  onChange={e =>
                    dispatch({
                      type: 'INPUT_CHANGE',
                      payload: e
                    })
                  }
                  onBlur={e =>
                    dispatch({
                      type: 'AUTO_CALC',
                      payload: ''
                    })
                  }
                  size="small"
                  variant="outlined"
                  label="valorResistenciaCompresion"
                  name="resistenciaComprensionProyecto"
                  error={!!state.formErrors.resistenciaComprensionProyecto}
                  helperText={
                    state.formErrors.resistenciaComprensionProyecto
                      ? state.formErrors.resistenciaComprensionProyecto
                      : ''
                  }
                ></TextField>

                <TextField
                  onBlur={e =>
                    dispatch({
                      type: 'INPUT_CHANGE',
                      payload: e
                    })
                  }
                  size="small"
                  variant="outlined"
                  label="revenimiento Proyecto"
                  name="revenimientoProyecto"
                  error={!!state.formErrors.revenimientoProyecto}
                  helperText={
                    state.formErrors.revenimientoProyecto
                      ? state.formErrors.revenimientoProyecto
                      : ''
                  }
                ></TextField>

                <TextField
                  onBlur={e =>
                    dispatch({
                      type: 'INPUT_CHANGE',
                      payload: e
                    })
                  }
                  size="small"
                  variant="outlined"
                  label="revenimientoObtenido"
                  name="revenimientoObtenido"
                  error={!!state.formErrors.revenimientoObtenido}
                  helperText={
                    state.formErrors.revenimientoObtenido
                      ? state.formErrors.revenimientoObtenido
                      : ''
                  }
                ></TextField>

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    disableFuture
                    label="fechaColado"
                    views={['year', 'month', 'day']}
                    value={state.form.fechaColado}
                    name="fechaColado"
                    onChange={newValue => {
                      dispatch({
                        type: 'DATES',
                        payload: newValue
                      });
                    }}
                    renderInput={params => <TextField size="small" {...params} />}
                  />
                  <Box>
                    <Grid container sx={{ justifyContent: 'center' }}>
                      <Grid item xs={5}>
                        <DatePicker
                          readOnly
                          label="siete"
                          name="siete"
                          views={['year', 'month', 'day']}
                          value={state.form.siete}
                          renderInput={params => <TextField size="small" {...params} />}
                          onChange={newValue => {}}
                        />
                        <DatePicker
                          readOnly
                          label="catorce"
                          name="catorce"
                          views={['year', 'month', 'day']}
                          value={state.form.catorce}
                          renderInput={params => <TextField size="small" {...params} />}
                          onChange={newValue => {}}
                        />
                      </Grid>
                      <Grid item xs={5}>
                        <DatePicker
                          readOnly
                          label="veintiOcho"
                          name="veintiOcho"
                          views={['year', 'month', 'day']}
                          value={state.form.veintiocho}
                          renderInput={params => <TextField size="small" {...params} />}
                          onChange={newValue => {}}
                        />
                        <DatePicker
                          readOnly
                          label="veintiOchoDos"
                          name="veintiOchoDos"
                          views={['year', 'month', 'day']}
                          value={state.form.veintiochoDos}
                          renderInput={params => <TextField size="small" {...params} />}
                          onChange={newValue => {}}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </LocalizationProvider>
                <TextField
                  onBlur={e =>
                    dispatch({
                      type: 'INPUT_CHANGE',
                      payload: e
                    })
                  }
                  size="small"
                  variant="outlined"
                  label="equipoMezclado"
                  name="equipoMezclado"
                  error={!!state.formErrors.equipoMezclado}
                  helperText={
                    state.formErrors.equipoMezclado ? state.formErrors.equipoMezclado : ''
                  }
                ></TextField>
                <TextField
                  onBlur={e =>
                    dispatch({
                      type: 'INPUT_CHANGE',
                      payload: e
                    })
                  }
                  size="small"
                  variant="outlined"
                  label="resistenciaTipo"
                  name="resistenciaTipo"
                  error={!!state.formErrors.resistenciaTipo}
                  helperText={
                    state.formErrors.resistenciaTipo ? state.formErrors.resistenciaTipo : ''
                  }
                ></TextField>
                <TextField
                  onBlur={e =>
                    dispatch({
                      type: 'INPUT_CHANGE',
                      payload: e
                    })
                  }
                  size="small"
                  variant="outlined"
                  label="concretera"
                  name="concretera"
                  error={!!state.formErrors.concretera}
                  helperText={state.formErrors.concretera ? state.formErrors.concretera : ''}
                ></TextField>
                <TextField
                  onBlur={e =>
                    dispatch({
                      type: 'INPUT_CHANGE',
                      payload: e
                    })
                  }
                  size="small"
                  variant="outlined"
                  label="Observaciones"
                  name="observaciones"
                  multiline
                  rows={4}
                  defaultValue="Sin observaciones"
                ></TextField>
              </Grid>
              <Grid
                item
                xs={6}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',

                  '@media(max-width: 715px)': {
                    maxWidth: '95%'
                  }
                }}
              >
                <Box>
                  <Grid container sx={{ justifyContent: 'center' }}>
                    <Grid xs={9}>
                      <FormLabel>Alturas cm</FormLabel>
                    </Grid>
                    <Grid item xs={5}>
                      <TextField
                        onChange={e =>
                          dispatch({
                            type: 'INPUT_CHANGE',
                            payload: e
                          })
                        }
                        onBlur={e =>
                          dispatch({
                            type: 'AREA_CALC',
                            payload: ''
                          })
                        }
                        size="small"
                        variant="outlined"
                        label="altura"
                        name="altura1"
                        error={!!state.formErrors.altura1}
                        helperText={state.formErrors.altura1 ? state.formErrors.altura1 : ''}
                      ></TextField>
                      <TextField
                        onChange={e =>
                          dispatch({
                            type: 'INPUT_CHANGE',
                            payload: e
                          })
                        }
                        onBlur={e =>
                          dispatch({
                            type: 'AREA_CALC',
                            payload: ''
                          })
                        }
                        size="small"
                        variant="outlined"
                        label="altura"
                        name="altura2"
                        error={!!state.formErrors.altura2}
                        helperText={state.formErrors.altura2 ? state.formErrors.altura2 : ''}
                      ></TextField>
                    </Grid>
                    <Grid item xs={5}>
                      <TextField
                        onChange={e =>
                          dispatch({
                            type: 'INPUT_CHANGE',
                            payload: e
                          })
                        }
                        onBlur={e =>
                          dispatch({
                            type: 'AREA_CALC',
                            payload: ''
                          })
                        }
                        size="small"
                        variant="outlined"
                        label="altura"
                        name="altura3"
                        error={!!state.formErrors.altura3}
                        helperText={state.formErrors.altura3 ? state.formErrors.altura3 : ''}
                      ></TextField>
                      <TextField
                        onChange={e =>
                          dispatch({
                            type: 'INPUT_CHANGE',
                            payload: e
                          })
                        }
                        onBlur={e =>
                          dispatch({
                            type: 'AREA_CALC',
                            payload: e
                          })
                        }
                        size="small"
                        variant="outlined"
                        label="altura"
                        name="altura4"
                        error={!!state.formErrors.altura4}
                        helperText={state.formErrors.altura4 ? state.formErrors.altura4 : ''}
                      ></TextField>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Grid container sx={{ justifyContent: 'center' }}>
                    <Grid xs={9}>
                      <FormLabel>Diametros cm</FormLabel>
                    </Grid>
                    <Grid item xs={5}>
                      <TextField
                        onChange={e =>
                          dispatch({
                            type: 'INPUT_CHANGE',
                            payload: e
                          })
                        }
                        onBlur={e =>
                          dispatch({
                            type: 'AREA_CALC',
                            payload: e
                          })
                        }
                        size="small"
                        variant="outlined"
                        label="diametro"
                        name="diametro1"
                        error={!!state.formErrors.diametro1}
                        helperText={state.formErrors.diametro1 ? state.formErrors.diametro1 : ''}
                      ></TextField>
                      <TextField
                        onChange={e =>
                          dispatch({
                            type: 'INPUT_CHANGE',
                            payload: e
                          })
                        }
                        onBlur={e =>
                          dispatch({
                            type: 'AREA_CALC',
                            payload: ''
                          })
                        }
                        size="small"
                        variant="outlined"
                        label="diametro"
                        name="diametro2"
                        error={!!state.formErrors.diametro2}
                        helperText={state.formErrors.diametro2 ? state.formErrors.diametro2 : ''}
                      ></TextField>
                    </Grid>
                    <Grid item xs={5}>
                      <TextField
                        onChange={e =>
                          dispatch({
                            type: 'INPUT_CHANGE',
                            payload: e
                          })
                        }
                        onBlur={e =>
                          dispatch({
                            type: 'AREA_CALC',
                            payload: ''
                          })
                        }
                        size="small"
                        variant="outlined"
                        label="diametro"
                        name="diametro3"
                        error={!!state.formErrors.diametro3}
                        helperText={state.formErrors.diametro3 ? state.formErrors.diametro3 : ''}
                      ></TextField>
                      <TextField
                        onChange={e =>
                          dispatch({
                            type: 'INPUT_CHANGE',
                            payload: e
                          })
                        }
                        onBlur={e =>
                          dispatch({
                            type: 'AREA_CALC',
                            payload: ''
                          })
                        }
                        size="small"
                        variant="outlined"
                        label="diametro"
                        name="diametro4"
                        error={!!state.formErrors.diametro4}
                        helperText={state.formErrors.diametro4 ? state.formErrors.diametro4 : ''}
                      ></TextField>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Grid container sx={{ justifyContent: 'center' }}>
                    <Grid xs={9}>
                      <FormLabel>Areas cm</FormLabel>
                    </Grid>
                    <Grid item xs={5}>
                      <TextField
                        size="small"
                        variant="outlined"
                        label="area"
                        InputProps={{
                          readOnly: true
                        }}
                        value={state.form.area1}
                      ></TextField>
                      <TextField
                        size="small"
                        variant="outlined"
                        label="area"
                        InputProps={{
                          readOnly: true
                        }}
                        value={state.form.area2}
                      ></TextField>
                    </Grid>
                    <Grid item xs={5}>
                      <TextField
                        size="small"
                        variant="outlined"
                        label="area"
                        InputProps={{
                          readOnly: true
                        }}
                        value={state.form.area3}
                      ></TextField>
                      <TextField
                        size="small"
                        variant="outlined"
                        label="area"
                        InputProps={{
                          readOnly: true
                        }}
                        value={state.form.area4}
                      ></TextField>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Grid container sx={{ justifyContent: 'center' }}>
                    <Grid xs={9}>
                      <FormLabel>Cargas</FormLabel>
                    </Grid>
                    <Grid item xs={5}>
                      <TextField
                        onChange={e =>
                          dispatch({
                            type: 'INPUT_CHANGE',
                            payload: e
                          })
                        }
                        onBlur={e =>
                          dispatch({
                            type: 'AUTO_CALC',
                            payload: ''
                          })
                        }
                        size="small"
                        variant="outlined"
                        label="carga"
                        name="carga1"
                        error={!!state.formErrors.carga1}
                        helperText={state.formErrors.carga1 ? state.formErrors.carga1 : ''}
                      ></TextField>
                      <TextField
                        onChange={e =>
                          dispatch({
                            type: 'INPUT_CHANGE',
                            payload: e
                          })
                        }
                        onBlur={e =>
                          dispatch({
                            type: 'AUTO_CALC',
                            payload: ''
                          })
                        }
                        size="small"
                        variant="outlined"
                        label="carga"
                        name="carga2"
                        error={!!state.formErrors.carga2}
                        helperText={state.formErrors.carga2 ? state.formErrors.carga2 : ''}
                      ></TextField>
                    </Grid>
                    <Grid item xs={5}>
                      <TextField
                        onChange={e =>
                          dispatch({
                            type: 'INPUT_CHANGE',
                            payload: e
                          })
                        }
                        onBlur={e =>
                          dispatch({
                            type: 'AUTO_CALC',
                            payload: ''
                          })
                        }
                        size="small"
                        variant="outlined"
                        label="carga"
                        name="carga3"
                        error={!!state.formErrors.carga3}
                        helperText={state.formErrors.carga3 ? state.formErrors.carga3 : ''}
                      ></TextField>
                      <TextField
                        onChange={e =>
                          dispatch({
                            type: 'INPUT_CHANGE',
                            payload: e
                          })
                        }
                        onBlur={e =>
                          dispatch({
                            type: 'AUTO_CALC',
                            payload: ''
                          })
                        }
                        size="small"
                        variant="outlined"
                        label="carga"
                        name="carga4"
                        error={!!state.formErrors.carga4}
                        helperText={state.formErrors.carga4 ? state.formErrors.carga4 : ''}
                      ></TextField>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Grid container sx={{ justifyContent: 'center' }}>
                    <Grid xs={9}>
                      <FormLabel>Resistencias kgf/cm2</FormLabel>
                    </Grid>
                    <Grid item xs={5}>
                      <TextField
                        size="small"
                        variant="outlined"
                        label="calculoResistenciaCompresion"
                        InputProps={{
                          readOnly: true
                        }}
                        value={state.form.resistenciaComprension1}
                      ></TextField>
                      <TextField
                        size="small"
                        variant="outlined"
                        label="calculoResistenciaCompresion"
                        InputProps={{
                          readOnly: true
                        }}
                        value={state.form.resistenciaComprension2}
                      ></TextField>
                    </Grid>
                    <Grid item xs={5}>
                      <TextField
                        size="small"
                        variant="outlined"
                        label="calculoResistenciaCompresion"
                        InputProps={{
                          readOnly: true
                        }}
                        value={state.form.resistenciaComprension3}
                      ></TextField>
                      <TextField
                        size="small"
                        variant="outlined"
                        label="calculoResistenciaCompresion"
                        InputProps={{
                          readOnly: true
                        }}
                        value={state.form.resistenciaComprension4}
                      ></TextField>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Grid container sx={{ justifyContent: 'center' }}>
                    <Grid xs={9}>
                      <FormLabel>Porcentajes</FormLabel>
                    </Grid>
                    <Grid item xs={5}>
                      <TextField
                        size="small"
                        variant="outlined"
                        label="porcentajeResistenciaCompresion"
                        InputProps={{
                          readOnly: true
                        }}
                        value={state.form.porcentajeResistenciaComprension1}
                      ></TextField>
                      <TextField
                        size="small"
                        variant="outlined"
                        label="porcentajeResistenciaCompresion"
                        InputProps={{
                          readOnly: true
                        }}
                        value={state.form.porcentajeResistenciaComprension2}
                      ></TextField>
                    </Grid>
                    <Grid item xs={5}>
                      <TextField
                        size="small"
                        variant="outlined"
                        label="porcentajeResistenciaCompresion"
                        InputProps={{
                          readOnly: true
                        }}
                        value={state.form.porcentajeResistenciaComprension3}
                      ></TextField>
                      <TextField
                        size="small"
                        variant="outlined"
                        label="porcentajeResistenciaCompresion"
                        InputProps={{
                          readOnly: true
                        }}
                        value={state.form.porcentajeResistenciaComprension4}
                      ></TextField>
                    </Grid>
                    <TextField
                      onBlur={e =>
                        dispatch({
                          type: 'INPUT_CHANGE',
                          payload: e
                        })
                      }
                      size="small"
                      variant="outlined"
                      label="Laboratorista"
                      name="laboratorista"
                      error={!!state.formErrors.laboratorista}
                      helperText={
                        state.formErrors.laboratorista ? state.formErrors.laboratorista : ''
                      }
                    ></TextField>
                    <TextField
                      onBlur={e =>
                        dispatch({
                          type: 'INPUT_CHANGE',
                          payload: e
                        })
                      }
                      size="small"
                      variant="outlined"
                      label="Tipo Falla"
                      name="tipoFalla"
                    ></TextField>
                  </Grid>
                </Box>

                {/* <Box sx={{ alignSelf: 'end', margin: '25px 0' }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ backgroundColor: '#008433', marginRight: '20px' }}
                >
                  Validacion
                </Button>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: '#008433', marginLeft: '20px', marginRight: '20px' }}
                  onClick={handleAutomaticCalculations}
                >
                  Calculo automatico
                </Button>
              </Box> */}
              </Grid>
            </Grid>
          </FormControl>
        </ThemeProvider>
      )}
    </MyContext.Consumer>
  );
}

export default BitacoraForm;
