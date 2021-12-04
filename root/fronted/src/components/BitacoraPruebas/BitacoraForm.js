import React from 'react'
import { useState } from 'react'

import { createStyles, makeStyles } from '@mui/styles'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { FormControl } from '@mui/material'
import TextField from '@mui/material/TextField'
import DatePicker from '@mui/lab/DatePicker'
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

  const handleAreaCalc = () => {
    setvalues({
      ...values,
      area1: calcularArea(values.diametro1, values.altura1),
      area2: calcularArea(values.diametro2, values.altura2),
      area3: calcularArea(values.diametro3, values.altura3),
      area4: calcularArea(values.diametro4, values.altura4)
    })
  }

  const handleAutomaticCalculations = () => {
    let [resisitencia1, porcentaje1] = calcularResistenciaComprension(values.area1, values.carga1),
      [resisitencia2, porcentaje2] = calcularResistenciaComprension(values.area2, values.carga2),
      [resisitencia3, porcentaje3] = calcularResistenciaComprension(values.area3, values.carga3),
      [resisitencia4, porcentaje4] = calcularResistenciaComprension(values.area4, values.carga4)

    setvalues({
      ...values,
      resistenciaComprension1: resisitencia1,
      resistenciaComprension2: resisitencia2,
      resistenciaComprension3: resisitencia3,
      resistenciaComprension4: resisitencia4,
      porcentajeResistenciaComprension1: porcentaje1,
      porcentajeResistenciaComprension2: porcentaje2,
      porcentajeResistenciaComprension3: porcentaje3,
      porcentajeResistenciaComprension4: porcentaje4
    })
  }

  const calcularResistenciaComprension = (valorArea, valorCarga) => {
    const area = parseFloat(valorArea)
    const carga = parseFloat(valorCarga)
    return [String(carga / area), String((carga / area / values.valorResistenciaCompresion) * 1000)]
  }

  const calcularArea = (valorDiametro, valorAltura) => {
    const radio = parseFloat(valorDiametro / 2)
    const altura = parseFloat(valorAltura)
    const area = 2 * Math.PI * radio * (radio + altura)

    return String(area)
  }
  const handleDates = date => {
    if (!date) {
      date = new Date()
    }
    setvalues({
      ...values,
      fechaColado: date,
      siete: date.addDays(7),
      catorce: date.addDays(14),
      veintiocho: date.addDays(28),
      veintiochoDos: date.addDays(28)
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
    laboratorista: '',
    valorResistenciaCompresion: '', //number
    revenimiento: '', //number
    revenimientoObtenido: '', //number
    fechaColado: new Date(),
    equipoMezclado: '',
    resistenciaTipo: '',
    concretera: '',
    siete: new Date(),
    catorce: new Date(),
    veintiocho: new Date(),
    veintiochoDos: new Date(),
    altura1: '',
    altura2: '',
    altura3: '',
    altura4: '',
    diametro1: '',
    diametro2: '',
    diametro3: '',
    diametro4: '',
    area1: '',
    area2: '',
    area3: '',
    area4: '',
    carga1: '',
    carga2: '',
    carga3: '',
    carga4: '',
    resistenciaComprension1: '',
    resistenciaComprension2: '',
    resistenciaComprension3: '',
    resistenciaComprension4: '',
    porcentajeResistenciaComprension1: '',
    porcentajeResistenciaComprension2: '',
    porcentajeResistenciaComprension3: '',
    porcentajeResistenciaComprension4: ''
  }

  const validate = () => {
    const numberPattern = /^[0-9]+$/
    let temp = {}
    temp.lab = values.lab ? '' : 'Debe llenar este campo.'
    temp.numObra = values.numObra ? '' : 'Debe llenar este campo.'
    temp.obra = values.obra ? '' : 'Debe llenar este campo.'
    temp.ubicacion = values.ubicacion ? '' : 'Debe llenar este campo.'
    temp.solicitadoPor = values.solicitadoPor ? '' : 'Debe llenar este campo.'
    temp.elementoColado = values.elementoColado ? '' : 'Debe llenar este campo.'
    temp.laboratorista = values.laboratorista ? '' : 'Debe llenar este campo.'
    temp.equipoMezclado = values.equipoMezclado ? '' : 'Debe llenar este campo.'
    temp.resistenciaTipo = values.resistenciaTipo ? '' : 'Debe llenar este campo.'
    temp.concretera = values.concretera ? '' : 'Debe llenar este campo.'

    temp.valorResistenciaCompresion = /^\d+$/.test(values.valorResistenciaCompresion)
      ? ''
      : 'Debe contener solo numeros'
    temp.revenimiento = numberPattern.test(values.revenimiento) ? '' : 'Debe contener solo numeros'
    temp.revenimientoObtenido = numberPattern.test(values.revenimientoObtenido)
      ? ''
      : 'Debe contener solo numeros'

    temp.altura1 = numberPattern.test(values.altura1) ? '' : 'Debe contener solo numeros'
    temp.altura2 = numberPattern.test(values.altura1) ? '' : 'Debe contener solo numeros'
    temp.altura3 = numberPattern.test(values.altura1) ? '' : 'Debe contener solo numeros'
    temp.altura4 = numberPattern.test(values.altura1) ? '' : 'Debe contener solo numeros'
    temp.diametro1 = numberPattern.test(values.diametro1) ? '' : 'Debe contener solo numeros'
    temp.diametro2 = numberPattern.test(values.diametro1) ? '' : 'Debe contener solo numeros'
    temp.diametro3 = numberPattern.test(values.diametro1) ? '' : 'Debe contener solo numeros'
    temp.diametro4 = numberPattern.test(values.diametro1) ? '' : 'Debe contener solo numeros'
    temp.carga1 = numberPattern.test(values.carga1) ? '' : 'Debe contener solo numeros'
    temp.carga2 = numberPattern.test(values.carga1) ? '' : 'Debe contener solo numeros'
    temp.carga3 = numberPattern.test(values.carga1) ? '' : 'Debe contener solo numeros'
    temp.carga4 = numberPattern.test(values.carga1) ? '' : 'Debe contener solo numeros'

    seterrors({
      ...temp
    })
    handleAutomaticCalculations()
    return Object.values(temp).every(x => x === '')
  }

  const handleSumbit = e => {
    e.preventDefault()

    if (validate()) {
      window.alert('testing...')
    }
  }
  const [values, setvalues] = useState(initialState)
  const [errors, seterrors] = useState({})

  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={handleSumbit} style={{ overflowX: 'hidden' }}>
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
                label="laboratorista"
                name="laboratorista"
                error={!!errors.laboratorista}
                helperText={errors.laboratorista ? errors.laboratorista : ''}
              ></TextField>
              <TextField
                onChange={handleInputChange}
                onBlur={handleAutomaticCalculations}
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
                    </Grid>
                    <Grid item xs={5}>
                      <DatePicker
                        readOnly
                        label="veintiOcho"
                        name="veintiOcho"
                        views={['year', 'month', 'day']}
                        value={values.veintiocho}
                        renderInput={params => <TextField size="small" {...params} />}
                        onChange={newValue => {}}
                      />
                      <DatePicker
                        readOnly
                        label="veintiOchoDos"
                        name="veintiOchoDos"
                        views={['year', 'month', 'day']}
                        value={values.veintiochoDos}
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
                      onChange={handleInputChange}
                      onBlur={handleAreaCalc}
                      size="small"
                      variant="outlined"
                      label="altura"
                      name="altura1"
                      error={!!errors.altura1}
                      helperText={errors.altura1 ? errors.altura1 : ''}
                    ></TextField>
                    <TextField
                      onChange={handleInputChange}
                      onBlur={handleAreaCalc}
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
                      onChange={handleInputChange}
                      onBlur={handleAreaCalc}
                      size="small"
                      variant="outlined"
                      label="altura"
                      name="altura3"
                      error={!!errors.altura3}
                      helperText={errors.altura3 ? errors.altura3 : ''}
                    ></TextField>
                    <TextField
                      onChange={handleInputChange}
                      onBlur={handleAreaCalc}
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
                      onChange={handleInputChange}
                      onBlur={handleAreaCalc}
                      size="small"
                      variant="outlined"
                      label="diametro"
                      name="diametro1"
                      error={!!errors.diametro1}
                      helperText={errors.diametro1 ? errors.diametro1 : ''}
                    ></TextField>
                    <TextField
                      onChange={handleInputChange}
                      onBlur={handleAreaCalc}
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
                      onChange={handleInputChange}
                      onBlur={handleAreaCalc}
                      size="small"
                      variant="outlined"
                      label="diametro"
                      name="diametro3"
                      error={!!errors.diametro3}
                      helperText={errors.diametro3 ? errors.diametro3 : ''}
                    ></TextField>
                    <TextField
                      onChange={handleInputChange}
                      onBlur={handleAreaCalc}
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
                      value={values.area1}
                    ></TextField>
                    <TextField
                      size="small"
                      variant="outlined"
                      InputProps={{
                        readOnly: true
                      }}
                      value={values.area2}
                    ></TextField>
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      size="small"
                      variant="outlined"
                      InputProps={{
                        readOnly: true
                      }}
                      value={values.area3}
                    ></TextField>
                    <TextField
                      size="small"
                      variant="outlined"
                      label="area"
                      InputProps={{
                        readOnly: true
                      }}
                      value={values.area4}
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
                      onChange={handleInputChange}
                      onBlur={handleAutomaticCalculations}
                      size="small"
                      variant="outlined"
                      label="carga"
                      name="carga1"
                      error={!!errors.carga1}
                      helperText={errors.carga1 ? errors.carga1 : ''}
                    ></TextField>
                    <TextField
                      onChange={handleInputChange}
                      onBlur={handleAutomaticCalculations}
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
                      onChange={handleInputChange}
                      onBlur={handleAutomaticCalculations}
                      size="small"
                      variant="outlined"
                      label="carga"
                      name="carga3"
                      error={!!errors.carga3}
                      helperText={errors.carga3 ? errors.carga3 : ''}
                    ></TextField>
                    <TextField
                      onChange={handleInputChange}
                      onBlur={handleAutomaticCalculations}
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
                      value={values.resistenciaComprension1}
                    ></TextField>
                    <TextField
                      size="small"
                      variant="outlined"
                      label="calculoResistenciaCompresion"
                      InputProps={{
                        readOnly: true
                      }}
                      value={values.resistenciaComprension2}
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
                      value={values.resistenciaComprension3}
                    ></TextField>
                    <TextField
                      size="small"
                      variant="outlined"
                      label="calculoResistenciaCompresion"
                      InputProps={{
                        readOnly: true
                      }}
                      value={values.resistenciaComprension4}
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
                      value={values.porcentajeResistenciaComprension1}
                    ></TextField>
                    <TextField
                      size="small"
                      variant="outlined"
                      label="porcentajeResistenciaCompresion"
                      InputProps={{
                        readOnly: true
                      }}
                      value={values.porcentajeResistenciaComprension2}
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
                      value={values.porcentajeResistenciaComprension3}
                    ></TextField>
                    <TextField
                      size="small"
                      variant="outlined"
                      label="porcentajeResistenciaCompresion"
                      InputProps={{
                        readOnly: true
                      }}
                      value={values.porcentajeResistenciaComprension4}
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
  )
}

export default BitacoraForm
