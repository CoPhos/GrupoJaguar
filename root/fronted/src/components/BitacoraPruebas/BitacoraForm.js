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

  // const validate = () => {
  //   const numberPattern = /^[0-9]+$/
  //   let temp = {}
  //   temp.lab = values.lab ? '' : 'Debe llenar este campo.'
  //   temp.numObra = values.numObra ? '' : 'Debe llenar este campo.'
  //   temp.obra = values.obra ? '' : 'Debe llenar este campo.'
  //   temp.ubicacion = values.ubicacion ? '' : 'Debe llenar este campo.'
  //   temp.solicitadoPor = values.solicitadoPor ? '' : 'Debe llenar este campo.'
  //   temp.elementoColado = values.elementoColado ? '' : 'Debe llenar este campo.'
  //   temp.laboratorista = values.laboratorista ? '' : 'Debe llenar este campo.'
  //   temp.equipoMezclado = values.equipoMezclado ? '' : 'Debe llenar este campo.'
  //   temp.resistenciaTipo = values.resistenciaTipo ? '' : 'Debe llenar este campo.'
  //   temp.concretera = values.concretera ? '' : 'Debe llenar este campo.'

  //   temp.valorResistenciaCompresion = /^\d+$/.test(values.valorResistenciaCompresion)
  //     ? ''
  //     : 'Debe contener solo numeros'
  //   temp.revenimiento = numberPattern.test(values.revenimiento) ? '' : 'Debe contener solo numeros'
  //   temp.revenimientoObtenido = numberPattern.test(values.revenimientoObtenido)
  //     ? ''
  //     : 'Debe contener solo numeros'

  //   temp.altura1 = numberPattern.test(values.altura1) ? '' : 'Debe contener solo numeros'
  //   temp.altura2 = numberPattern.test(values.altura1) ? '' : 'Debe contener solo numeros'
  //   temp.altura3 = numberPattern.test(values.altura1) ? '' : 'Debe contener solo numeros'
  //   temp.altura4 = numberPattern.test(values.altura1) ? '' : 'Debe contener solo numeros'
  //   temp.diametro1 = numberPattern.test(values.diametro1) ? '' : 'Debe contener solo numeros'
  //   temp.diametro2 = numberPattern.test(values.diametro1) ? '' : 'Debe contener solo numeros'
  //   temp.diametro3 = numberPattern.test(values.diametro1) ? '' : 'Debe contener solo numeros'
  //   temp.diametro4 = numberPattern.test(values.diametro1) ? '' : 'Debe contener solo numeros'
  //   temp.carga1 = numberPattern.test(values.carga1) ? '' : 'Debe contener solo numeros'
  //   temp.carga2 = numberPattern.test(values.carga1) ? '' : 'Debe contener solo numeros'
  //   temp.carga3 = numberPattern.test(values.carga1) ? '' : 'Debe contener solo numeros'
  //   temp.carga4 = numberPattern.test(values.carga1) ? '' : 'Debe contener solo numeros'

  //   seterrors({
  //     ...temp
  //   })
  //   handleAutomaticCalculations()
  //   return Object.values(temp).every(x => x === '')
  // }

  // const handleSumbit = e => {
  //   e.preventDefault()

  //   if (validate()) {
  //     window.alert('testing...')
  //   }
  // }
  // const [values, setvalues] = useState(initialState)

  const errors = { name: '' };

  return (
    <MyContext.Consumer>
      {({ state, dispatch }) => (
        <ThemeProvider theme={theme}>
          <form style={{ overflowX: 'hidden' }}>
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
                    name="lab"
                    error={!!errors.lab}
                    helperText={errors.lab}
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
                    error={!!errors.numObra}
                    helperText={errors.numObra ? errors.numObra : ''}
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
                    label="obra"
                    name="obra"
                    error={!!errors.obra}
                    helperText={errors.obra ? errors.obra : ''}
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
                    error={!!errors.ubicacion}
                    helperText={errors.ubicacion ? errors.ubicacion : ''}
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
                    error={!!errors.solicitadoPor}
                    helperText={errors.solicitadoPor ? errors.solicitadoPor : ''}
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
                    error={!!errors.elementoColado}
                    helperText={errors.elementoColado ? errors.elementoColado : ''}
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
                    label="laboratorista"
                    name="laboratorista"
                    error={!!errors.laboratorista}
                    helperText={errors.laboratorista ? errors.laboratorista : ''}
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
                    name="valorResistenciaCompresion"
                    error={!!errors.valorResistenciaCompresion}
                    helperText={
                      errors.valorResistenciaCompresion ? errors.valorResistenciaCompresion : ''
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
                    label="revenimiento"
                    name="revenimiento"
                    error={!!errors.revenimiento}
                    helperText={errors.revenimiento ? errors.revenimiento : ''}
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
                    error={!!errors.revenimientoObtenido}
                    helperText={errors.revenimientoObtenido ? errors.revenimientoObtenido : ''}
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
                    error={!!errors.equipoMezclado}
                    helperText={errors.equipoMezclado ? errors.equipoMezclado : ''}
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
                    error={!!errors.resistenciaTipo}
                    helperText={errors.resistenciaTipo ? errors.resistenciaTipo : ''}
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
                    error={!!errors.concretera}
                    helperText={errors.concretera ? errors.concretera : ''}
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
                          error={!!errors.altura1}
                          helperText={errors.altura1 ? errors.altura1 : ''}
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
                          error={!!errors.altura2}
                          helperText={errors.altura2 ? errors.altura2 : ''}
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
                          error={!!errors.altura3}
                          helperText={errors.altura3 ? errors.altura3 : ''}
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
                          error={!!errors.altura4}
                          helperText={errors.altura4 ? errors.altura4 : ''}
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
                          error={!!errors.diametro1}
                          helperText={errors.diametro1 ? errors.diametro1 : ''}
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
                          error={!!errors.diametro2}
                          helperText={errors.diametro2 ? errors.diametro2 : ''}
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
                          error={!!errors.diametro3}
                          helperText={errors.diametro3 ? errors.diametro3 : ''}
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
                          error={!!errors.diametro4}
                          helperText={errors.diametro4 ? errors.diametro4 : ''}
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
                          InputProps={{
                            readOnly: true
                          }}
                          value={state.form.area1}
                        ></TextField>
                        <TextField
                          size="small"
                          variant="outlined"
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
                          error={!!errors.carga1}
                          helperText={errors.carga1 ? errors.carga1 : ''}
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
                          error={!!errors.carga2}
                          helperText={errors.carga2 ? errors.carga2 : ''}
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
                          error={!!errors.carga3}
                          helperText={errors.carga3 ? errors.carga3 : ''}
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
                          error={!!errors.carga4}
                          helperText={errors.carga4 ? errors.carga4 : ''}
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
          </form>
        </ThemeProvider>
      )}
    </MyContext.Consumer>
  );
}

export default BitacoraForm;
