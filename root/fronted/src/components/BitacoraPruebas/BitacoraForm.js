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
    id: '',
    lab: '',
    numObra: '',
    obra: '',
    ubicacion: '',
    solicitadoPor: '',
    elementoColado: '',
    valorResistenciaCompresion: 0,
    revenimiento: 0,
    revenimientoObtenido: 0,
    fechaColado: new Date(),
    siete: new Date(),
    catorce: new Date(),
    veintiOcho: new Date(),
    veintiOchoDos: new Date(),
    equipoMezclado: '',
    resistenciaTipo: '',
    concretera: '',
    altura: 0,
    diametro: 0,
    area: 0,
    carga: 0,
    calculoResistenciaCompresion: 0,
    porcentajeResistenciaCompresion: ''
  }
  const textFields = ['lab', 'numObra', 'obra', 'ubicacion', 'solicitadoPor', 'elementoColado']
  const intFields = ['valorResistenciaCompresion', 'revenimiento', 'revenimientoObtenido']
  const textFieldsSecond = ['equipoMezclado', 'resistenciaTipo', 'concretera']
  const intFieldsSecond = ['altura', 'diametro', 'area', 'carga', 'calculoResistenciaCompresion']
  const [values, setvalues] = useState(initialState)
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <FormControl className={classes.root}>
        <Grid container>
          <Grid item xs={6}>
            {textFields.map((item, index) => {
              return (
                <TextField
                  onChange={handleInputChange}
                  size="small"
                  variant="outlined"
                  label={item}
                  value={values.item}
                  key={index}
                  name={item}
                ></TextField>
              )
            })}
            {intFields.map((item, index) => {
              return (
                <TextField
                  onChange={handleInputChange}
                  size="small"
                  variant="outlined"
                  label={item}
                  name={item}
                  value={values.item}
                  inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                  key={index}
                ></TextField>
              )
            })}

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
            {textFieldsSecond.map((item, index) => {
              return (
                <TextField
                  onChange={handleInputChange}
                  size="small"
                  variant="outlined"
                  label={item}
                  value={values.item}
                  key={index}
                  name={item}
                ></TextField>
              )
            })}
            {intFieldsSecond.map((item, index) => {
              return (
                <TextField
                  onChange={handleInputChange}
                  size="small"
                  variant="outlined"
                  label={item}
                  name={item}
                  value={values.item}
                  inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                  key={index}
                ></TextField>
              )
            })}
            <TextField
              onChange={handleInputChange}
              size="small"
              variant="outlined"
              label="porcentajeResistenciaCompresion"
              name="porcentajeResistenciaCompresion"
              value={values.porcentajeResistenciaCompresion}
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
              <Button type="submit" variant="contained" sx={{ backgroundColor: '#008433' }}>
                Cancelar
              </Button>
            </Box>
          </Grid>
        </Grid>
      </FormControl>
    </ThemeProvider>
  )
}

export default BitacoraForm
