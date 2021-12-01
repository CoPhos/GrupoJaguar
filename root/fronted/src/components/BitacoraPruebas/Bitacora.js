import React from 'react'

import BitacoraForm from './BitacoraForm'
import Paper from '@mui/material/Paper'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

function Bitacora() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        marginTop: '20px',
        marginBottom: '20px',
        flex: '1 0 auto',
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Typography variant="h4" component="div" sx={{ marginBottom: '30px' }}>
        Bitacora de pruebas
      </Typography>
      <Paper>
        <BitacoraForm></BitacoraForm>
      </Paper>
    </Container>
  )
}

export default Bitacora
