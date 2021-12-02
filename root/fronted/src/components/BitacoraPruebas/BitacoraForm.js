import React from 'react'
import { useState } from 'react'

import { createStyles, makeStyles } from '@mui/styles'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'

import Grid from '@mui/material/Grid'
import { FormControl } from '@mui/material'
import TextField from '@mui/material/TextField'
import DatePicker from '@mui/lab/DatePicker'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import FormLabel from '@mui/material/FormLabel'

function BitacoraForm() {
  const useStyles = makeStyles(theme =>
    createStyles({
      root: {
        '& .MuiFormControl-root': {
          width: '80%',
          margin: '8px'
        }
      }
    })
  )
  const theme = createTheme()
  const classes = useStyles()
  const handleInputChange = e => {
    const { name, value } = e.target
    setvalues({
      ...values,
      [name]: value
    })
  }
  // eslint-disable-next-line
  Date.prototype.addDays = function (days) {
    const date = new Date(this.valueOf())
    date.setDate(date.getDate() + days)
    return date
  }

  const handleArrays = (arg, e) => {
    const { name, value } = e.target
    switch (name) {
      case '0':
        setvalues({
          ...values,
          arg: arg.splice(name, 1, parseInt(value))
        })
        break
      case '1':
        setvalues({
          ...values,
          arg: arg.splice(name, 1, parseInt(value))
        })
        break
      case '2':
        setvalues({
          ...values,
          arg: arg.splice(name, 1, parseInt(value))
        })
        break
      case '3':
        setvalues({
          ...values,
          arg: arg.splice(name, 1, parseInt(value))
        })
        break
    }
  }
  const handleDates = date => {
    if (!date) {
      date = new Date()
    }
    console.log(typeof date)
    setvalues({
      ...values,
      fechaColado: date,
      fechas: [date.addDays(7), date.addDays(14), date.addDays(28), date.addDays(28)]
    })
    console.log(values)
  }

  const initialState = {
    id: '1',
    lab: '',
    numObra: '',
    obra: '',
    ubicacion: '',
    solicitadoPor: '',
    elementoColado: '',
    valorResistenciaCompresion: '', //number
    revenimiento: '', //number
    revenimientoObtenido: '', //number
    fechaColado: new Date(),
    fechas: new Array(4),
    equipoMezclado: '',
    resistenciaTipo: '',
    concretera: '',
    altura: [0, 0, 0, 0], //number
    diametro: [0, 0, 0, 0], //number
    area: [0, 0, 0, 0], //number
    carga: [0, 0, 0, 0], //number
    calculoResistenciaCompresion: [0, 0, 0, 0], //number
    porcentajeResistenciaCompresion: [0, 0, 0, 0]
  }

  const validate = () => {
    let temp = {}
    temp.lab = values.lab ? '' : 'Debe llenar este campo.'
    temp.numObra = values.numObra ? '' : 'Debe llenar este campo.'
    temp.obra = values.obra ? '' : 'Debe llenar este campo.'
    temp.ubicacion = values.ubicacion ? '' : 'Debe llenar este campo.'
    temp.solicitadoPor = values.solicitadoPor ? '' : 'Debe llenar este campo.'
    temp.elementoColado = values.elementoColado ? '' : 'Debe llenar este campo.'
    temp.equipoMezclado = values.equipoMezclado ? '' : 'Debe llenar este campo.'
    temp.resistenciaTipo = values.resistenciaTipo ? '' : 'Debe llenar este campo.'
    temp.concretera = values.concretera ? '' : 'Debe llenar este campo.'
    temp.porcentajeResistenciaCompresion = values.porcentajeResistenciaCompresion
      ? ''
      : 'Debe llenar este campo.'
    temp.valorResistenciaCompresion = /^\d+$/.test(values.valorResistenciaCompresion)
      ? ''
      : 'Debe contener solo numeros'
    temp.revenimiento = /^[0-9]+$/.test(values.revenimiento) ? '' : 'Debe contener solo numeros'
    temp.revenimientoObtenido = /^[0-9]+$/.test(values.revenimientoObtenido)
      ? ''
      : 'Debe contener solo numeros'
    temp.altura = /^[0-9]+$/.test(values.altura) ? '' : 'Debe contener solo numeros'
    temp.diametro = /^[0-9]+$/.test(values.diametro) ? '' : 'Debe contener solo numeros'
    temp.area = /^[0-9]+$/.test(values.area) ? '' : 'Debe contener solo numeros'
    temp.carga = /^[0-9]+$/.test(values.carga) ? '' : 'Debe contener solo numeros'
    temp.calculoResistenciaCompresion = /^[0-9]+$/.test(values.calculoResistenciaCompresion)
      ? ''
      : 'Debe contener solo numeros'
    seterrors({
      ...temp
    })

    return Object.values(temp).every(x => x === '')
  }

  const handleSumbit = e => {
    e.preventDefault()
    console.log(validate())
    console.log(values)
    if (validate()) {
      window.alert('testing...')
    }
  }
  const [values, setvalues] = useState(initialState)
  const [errors, seterrors] = useState({})

  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={handleSumbit}>
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
                onBlur={handleInputChange}
                size="small"
                variant="outlined"
                label="lab"
                name="lab"
                error={!!errors.lab}
                helperText={errors.lab}
              ></TextField>
              <TextField
                onBlur={handleInputChange}
                size="small"
                variant="outlined"
                label="numObra"
                name="numObra"
                error={!!errors.numObra}
                helperText={errors.numObra ? errors.numObra : ''}
              ></TextField>
              <TextField
                onBlur={handleInputChange}
                size="small"
                variant="outlined"
                label="obra"
                name="obra"
                error={!!errors.obra}
                helperText={errors.obra ? errors.obra : ''}
              ></TextField>

              <TextField
                onBlur={handleInputChange}
                size="small"
                variant="outlined"
                label="ubicacion"
                name="ubicacion"
                error={!!errors.ubicacion}
                helperText={errors.ubicacion ? errors.ubicacion : ''}
              ></TextField>

              <TextField
                onBlur={handleInputChange}
                size="small"
                variant="outlined"
                label="solicitadoPor"
                name="solicitadoPor"
                error={!!errors.solicitadoPor}
                helperText={errors.solicitadoPor ? errors.solicitadoPor : ''}
              ></TextField>
              <TextField
                onBlur={handleInputChange}
                size="small"
                variant="outlined"
                label="elementoColado"
                name="elementoColado"
                error={!!errors.elementoColado}
                helperText={errors.elementoColado ? errors.elementoColado : ''}
              ></TextField>

              <TextField
                onBlur={handleInputChange}
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
                onBlur={handleInputChange}
                size="small"
                variant="outlined"
                label="revenimiento"
                name="revenimiento"
                error={!!errors.revenimiento}
                helperText={errors.revenimiento ? errors.revenimiento : ''}
              ></TextField>

              <TextField
                onBlur={handleInputChange}
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
                  value={values.fechaColado}
                  name="fechaColado"
                  onChange={newValue => {
                    handleDates(newValue)
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
                        value={values.fechas[0]}
                        renderInput={params => <TextField size="small" {...params} />}
                        onChange={newValue => {}}
                      />
                      <DatePicker
                        readOnly
                        label="catorce"
                        name="catorce"
                        views={['year', 'month', 'day']}
                        value={values.fechas[1]}
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
                        value={values.fechas[2]}
                        renderInput={params => <TextField size="small" {...params} />}
                        onChange={newValue => {}}
                      />
                      <DatePicker
                        readOnly
                        label="veintiOchoDos"
                        name="veintiOchoDos"
                        views={['year', 'month', 'day']}
                        value={values.fechas[3]}
                        renderInput={params => <TextField size="small" {...params} />}
                        onChange={newValue => {}}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </LocalizationProvider>
              <TextField
                onBlur={handleInputChange}
                size="small"
                variant="outlined"
                label="equipoMezclado"
                name="equipoMezclado"
                error={!!errors.equipoMezclado}
                helperText={errors.equipoMezclado ? errors.equipoMezclado : ''}
              ></TextField>
              <TextField
                onBlur={handleInputChange}
                size="small"
                variant="outlined"
                label="resistenciaTipo"
                name="resistenciaTipo"
                error={!!errors.resistenciaTipo}
                helperText={errors.resistenciaTipo ? errors.resistenciaTipo : ''}
              ></TextField>
              <TextField
                onBlur={handleInputChange}
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
                      onBlur={e => {
                        handleArrays(values.altura, e)
                      }}
                      size="small"
                      variant="outlined"
                      label="altura"
                      name="0"
                      error={!!errors.altura}
                      helperText={errors.altura ? errors.altura : ''}
                    ></TextField>
                    <TextField
                      onBlur={e => {
                        handleArrays(values.altura, e)
                      }}
                      size="small"
                      variant="outlined"
                      label="altura"
                      name="1"
                      error={!!errors.altura}
                      helperText={errors.altura ? errors.altura : ''}
                    ></TextField>
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      onBlur={e => {
                        handleArrays(values.altura, e)
                      }}
                      size="small"
                      variant="outlined"
                      label="altura"
                      name="2"
                      error={!!errors.altura}
                      helperText={errors.altura ? errors.altura : ''}
                    ></TextField>
                    <TextField
                      onBlur={e => {
                        handleArrays(values.altura, e)
                      }}
                      size="small"
                      variant="outlined"
                      label="altura"
                      name="3"
                      error={!!errors.altura}
                      helperText={errors.altura ? errors.altura : ''}
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
                      onBlur={e => {
                        handleArrays(values.diametro, e)
                      }}
                      size="small"
                      variant="outlined"
                      label="diametro"
                      name="0"
                      error={!!errors.diametro}
                      helperText={errors.diametro ? errors.diametro : ''}
                    ></TextField>
                    <TextField
                      onBlur={e => {
                        handleArrays(values.diametro, e)
                      }}
                      size="small"
                      variant="outlined"
                      label="diametro"
                      name="1"
                      error={!!errors.diametro}
                      helperText={errors.diametro ? errors.diametro : ''}
                    ></TextField>
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      onBlur={e => {
                        handleArrays(values.diametro, e)
                      }}
                      size="small"
                      variant="outlined"
                      label="diametro"
                      name="2"
                      error={!!errors.diametro}
                      helperText={errors.diametro ? errors.diametro : ''}
                    ></TextField>
                    <TextField
                      onBlur={e => {
                        handleArrays(values.diametro, e)
                      }}
                      size="small"
                      variant="outlined"
                      label="diametro"
                      name="3"
                      error={!!errors.diametro}
                      helperText={errors.diametro ? errors.diametro : ''}
                    ></TextField>
                  </Grid>
                </Grid>
              </Box>
              <Box>
                <Grid container sx={{ justifyContent: 'center' }}>
                  {' '}
                  <Grid xs={9}>
                    <FormLabel>Areas cm</FormLabel>
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      onBlur={e => {
                        handleArrays(values.area, e)
                      }}
                      size="small"
                      variant="outlined"
                      label="area"
                      name="0"
                      error={!!errors.area}
                      helperText={errors.area ? errors.area : ''}
                    ></TextField>
                    <TextField
                      onBlur={e => {
                        handleArrays(values.area, e)
                      }}
                      size="small"
                      variant="outlined"
                      label="area"
                      name="1"
                      error={!!errors.area}
                      helperText={errors.area ? errors.area : ''}
                    ></TextField>
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      onBlur={e => {
                        handleArrays(values.area, e)
                      }}
                      size="small"
                      variant="outlined"
                      label="area"
                      name="2"
                      error={!!errors.area}
                      helperText={errors.area ? errors.area : ''}
                    ></TextField>
                    <TextField
                      onBlur={e => {
                        handleArrays(values.area, e)
                      }}
                      size="small"
                      variant="outlined"
                      label="area"
                      name="3"
                      error={!!errors.area}
                      helperText={errors.area ? errors.area : ''}
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
                      onBlur={e => {
                        handleArrays(values.carga, e)
                      }}
                      size="small"
                      variant="outlined"
                      label="carga"
                      name="0"
                      error={!!errors.carga}
                      helperText={errors.carga ? errors.carga : ''}
                    ></TextField>
                    <TextField
                      o
                      onBlur={e => {
                        handleArrays(values.carga, e)
                      }}
                      size="small"
                      variant="outlined"
                      label="carga"
                      name="1"
                      error={!!errors.carga}
                      helperText={errors.carga ? errors.carga : ''}
                    ></TextField>
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      onBlur={e => {
                        handleArrays(values.carga, e)
                      }}
                      size="small"
                      variant="outlined"
                      label="carga"
                      name="2"
                      error={!!errors.carga}
                      helperText={errors.carga ? errors.carga : ''}
                    ></TextField>
                    <TextField
                      onBlur={e => {
                        handleArrays(values.carga, e)
                      }}
                      size="small"
                      variant="outlined"
                      label="carga"
                      name="3"
                      error={!!errors.carga}
                      helperText={errors.carga ? errors.carga : ''}
                    ></TextField>
                  </Grid>
                </Grid>
              </Box>
              <Box>
                <Grid container sx={{ justifyContent: 'center' }}>
                  {' '}
                  <Grid xs={9}>
                    <FormLabel>Resistencias kgf/cm2</FormLabel>
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      onBlur={e => {
                        handleArrays(values.calculoResistenciaCompresion, e)
                      }}
                      size="small"
                      variant="outlined"
                      label="calculoResistenciaCompresion"
                      name="0"
                      error={!!errors.calculoResistenciaCompresion}
                      helperText={
                        errors.calculoResistenciaCompresion
                          ? errors.calculoResistenciaCompresion
                          : ''
                      }
                    ></TextField>
                    <TextField
                      onBlur={e => {
                        handleArrays(values.calculoResistenciaCompresion, e)
                      }}
                      size="small"
                      variant="outlined"
                      label="calculoResistenciaCompresion"
                      name="1"
                      error={!!errors.calculoResistenciaCompresion}
                      helperText={
                        errors.calculoResistenciaCompresion
                          ? errors.calculoResistenciaCompresion
                          : ''
                      }
                    ></TextField>
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      onBlur={e => {
                        handleArrays(values.calculoResistenciaCompresion, e)
                      }}
                      size="small"
                      variant="outlined"
                      label="calculoResistenciaCompresion"
                      name="2"
                      error={!!errors.calculoResistenciaCompresion}
                      helperText={
                        errors.calculoResistenciaCompresion
                          ? errors.calculoResistenciaCompresion
                          : ''
                      }
                    ></TextField>
                    <TextField
                      onBlur={e => {
                        handleArrays(values.calculoResistenciaCompresion, e)
                      }}
                      size="small"
                      variant="outlined"
                      label="calculoResistenciaCompresion"
                      name="3"
                      error={!!errors.calculoResistenciaCompresion}
                      helperText={
                        errors.calculoResistenciaCompresion
                          ? errors.calculoResistenciaCompresion
                          : ''
                      }
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
                      onBlur={e => {
                        handleArrays(values.porcentajeResistenciaCompresion, e)
                      }}
                      size="small"
                      variant="outlined"
                      label="porcentajeResistenciaCompresion"
                      name="0"
                      error={!!errors.porcentajeResistenciaCompresion}
                      helperText={
                        errors.porcentajeResistenciaCompresion
                          ? errors.porcentajeResistenciaCompresion
                          : ''
                      }
                    ></TextField>
                    <TextField
                      onBlur={e => {
                        handleArrays(values.porcentajeResistenciaCompresion, e)
                      }}
                      size="small"
                      variant="outlined"
                      label="porcentajeResistenciaCompresion"
                      name="1"
                      error={!!errors.porcentajeResistenciaCompresion}
                      helperText={
                        errors.porcentajeResistenciaCompresion
                          ? errors.porcentajeResistenciaCompresion
                          : ''
                      }
                    ></TextField>
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      onBlur={e => {
                        handleArrays(values.porcentajeResistenciaCompresion, e)
                      }}
                      size="small"
                      variant="outlined"
                      label="porcentajeResistenciaCompresion"
                      name="2"
                      error={!!errors.porcentajeResistenciaCompresion}
                      helperText={
                        errors.porcentajeResistenciaCompresion
                          ? errors.porcentajeResistenciaCompresion
                          : ''
                      }
                    ></TextField>
                    <TextField
                      onBlur={e => {
                        handleArrays(values.porcentajeResistenciaCompresion, e)
                      }}
                      size="small"
                      variant="outlined"
                      label="porcentajeResistenciaCompresion"
                      name="3"
                      error={!!errors.porcentajeResistenciaCompresion}
                      helperText={
                        errors.porcentajeResistenciaCompresion
                          ? errors.porcentajeResistenciaCompresion
                          : ''
                      }
                    ></TextField>
                  </Grid>
                </Grid>
              </Box>

              <Box sx={{ alignSelf: 'end', margin: '25px 0' }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ backgroundColor: '#008433', marginRight: '20px' }}
                >
                  Aceptar
                </Button>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: '#e80000', marginLeft: '20px', marginRight: '20px' }}
                >
                  Cancelar
                </Button>
              </Box>
            </Grid>
          </Grid>
        </FormControl>
      </form>
    </ThemeProvider>
  )
}

export default BitacoraForm
