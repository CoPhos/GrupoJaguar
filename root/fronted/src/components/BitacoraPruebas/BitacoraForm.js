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

  Date.prototype.addDays = function (days) {
    const date = new Date(this.valueOf())
    date.setDate(date.getDate() + days)
    return date
  }
  const handleDates = date => {
    if (!date) {
      date = new Date()
    }
    console.log(typeof date)
    setvalues({
      ...values,
      fechaColado: date,
      siete: date.addDays(7),
      catorce: date.addDays(14),
      veintiOcho: date.addDays(28),
      veintiOchoDos: date.addDays(28)
    })
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
    siete: new Date(),
    catorce: new Date(),
    veintiOcho: new Date(),
    veintiOchoDos: new Date(),
    equipoMezclado: '',
    resistenciaTipo: '',
    concretera: '',
    altura: '', //number
    diametro: '', //number
    area: '', //number
    carga: '', //number
    calculoResistenciaCompresion: '', //number
    porcentajeResistenciaCompresion: ''
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
          <Grid container sx={{ padding: '15px 0' }}>
            <Grid item xs={6}>
              <TextField
                onChange={handleInputChange}
                size="small"
                variant="outlined"
                label="lab"
                name="lab"
                error={!!errors.lab}
                helperText={errors.lab}
              ></TextField>
              <TextField
                onChange={handleInputChange}
                size="small"
                variant="outlined"
                label="numObra"
                name="numObra"
                error={!!errors.numObra}
                helperText={errors.numObra ? errors.numObra : ''}
              ></TextField>
              <TextField
                onChange={handleInputChange}
                size="small"
                variant="outlined"
                label="obra"
                name="obra"
                error={!!errors.obra}
                helperText={errors.obra ? errors.obra : ''}
              ></TextField>

              <TextField
                onChange={handleInputChange}
                size="small"
                variant="outlined"
                label="ubicacion"
                name="ubicacion"
                error={!!errors.ubicacion}
                helperText={errors.ubicacion ? errors.ubicacion : ''}
              ></TextField>

              <TextField
                onChange={handleInputChange}
                size="small"
                variant="outlined"
                label="solicitadoPor"
                name="solicitadoPor"
                error={!!errors.solicitadoPor}
                helperText={errors.solicitadoPor ? errors.solicitadoPor : ''}
              ></TextField>
              <TextField
                onChange={handleInputChange}
                size="small"
                variant="outlined"
                label="elementoColado"
                name="elementoColado"
                error={!!errors.elementoColado}
                helperText={errors.elementoColado ? errors.elementoColado : ''}
              ></TextField>

              <TextField
                onChange={handleInputChange}
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
                onChange={handleInputChange}
                size="small"
                variant="outlined"
                label="revenimiento"
                name="revenimiento"
                error={!!errors.revenimiento}
                helperText={errors.revenimiento ? errors.revenimiento : ''}
              ></TextField>

              <TextField
                onChange={handleInputChange}
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
                <DatePicker
                  readOnly
                  label="siete"
                  name="siete"
                  views={['year', 'month', 'day']}
                  value={values.siete}
                  renderInput={params => <TextField size="small" {...params} />}
                  onChange={newValue => {}}
                />
                <DatePicker
                  readOnly
                  label="catorce"
                  name="catorce"
                  views={['year', 'month', 'day']}
                  value={values.catorce}
                  renderInput={params => <TextField size="small" {...params} />}
                  onChange={newValue => {}}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  readOnly
                  label="veintiOcho"
                  name="veintiOcho"
                  views={['year', 'month', 'day']}
                  value={values.veintiOcho}
                  renderInput={params => <TextField size="small" {...params} />}
                  onChange={newValue => {}}
                />
                <DatePicker
                  readOnly
                  label="veintiOchoDos"
                  name="veintiOchoDos"
                  views={['year', 'month', 'day']}
                  value={values.veintiOchoDos}
                  renderInput={params => <TextField size="small" {...params} />}
                  onChange={newValue => {}}
                />
              </LocalizationProvider>

              <TextField
                onChange={handleInputChange}
                size="small"
                variant="outlined"
                label="equipoMezclado"
                name="equipoMezclado"
                error={!!errors.equipoMezclado}
                helperText={errors.equipoMezclado ? errors.equipoMezclado : ''}
              ></TextField>
              <TextField
                onChange={handleInputChange}
                size="small"
                variant="outlined"
                label="resistenciaTipo"
                name="resistenciaTipo"
                error={!!errors.resistenciaTipo}
                helperText={errors.resistenciaTipo ? errors.resistenciaTipo : ''}
              ></TextField>
              <TextField
                onChange={handleInputChange}
                size="small"
                variant="outlined"
                label="concretera"
                name="concretera"
                error={!!errors.concretera}
                helperText={errors.concretera ? errors.concretera : ''}
              ></TextField>

              <TextField
                onChange={handleInputChange}
                size="small"
                variant="outlined"
                label="altura"
                name="altura"
                error={!!errors.altura}
                helperText={errors.altura ? errors.altura : ''}
              ></TextField>

              <TextField
                onChange={handleInputChange}
                size="small"
                variant="outlined"
                label="diametro"
                name="diametro"
                error={!!errors.diametro}
                helperText={errors.diametro ? errors.diametro : ''}
              ></TextField>

              <TextField
                onChange={handleInputChange}
                size="small"
                variant="outlined"
                label="area"
                name="area"
                error={!!errors.area}
                helperText={errors.area ? errors.area : ''}
              ></TextField>

              <TextField
                onChange={handleInputChange}
                size="small"
                variant="outlined"
                label="carga"
                name="carga"
                error={!!errors.carga}
                helperText={errors.carga ? errors.carga : ''}
              ></TextField>

              <TextField
                onChange={handleInputChange}
                size="small"
                variant="outlined"
                label="calculoResistenciaCompresion"
                name="calculoResistenciaCompresion"
                error={!!errors.calculoResistenciaCompresion}
                helperText={
                  errors.calculoResistenciaCompresion ? errors.calculoResistenciaCompresion : ''
                }
              ></TextField>

              <TextField
                onChange={handleInputChange}
                size="small"
                variant="outlined"
                label="porcentajeResistenciaCompresion"
                name="porcentajeResistenciaCompresion"
                error={!!errors.porcentajeResistenciaCompresion}
                helperText={
                  errors.porcentajeResistenciaCompresion
                    ? errors.porcentajeResistenciaCompresion
                    : ''
                }
              ></TextField>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  alignItems: 'center'
                }}
              >
                <Button type="submit" variant="contained" sx={{ backgroundColor: '#008433' }}>
                  Aceptar
                </Button>
                <Button variant="contained" sx={{ backgroundColor: '#008433' }}>
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
