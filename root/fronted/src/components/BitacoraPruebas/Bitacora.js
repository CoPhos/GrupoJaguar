import React from 'react'

import BitacoraForm from './BitacoraForm'
import Paper from '@mui/material/Paper'
import Container from '@mui/material/Container'

function Bitacora() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        marginTop: '20px',
        marginBottom: '20px',
        flex: '1 0 auto',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Paper>
        <BitacoraForm></BitacoraForm>
      </Paper>
    </Container>
  )
}

export default Bitacora
