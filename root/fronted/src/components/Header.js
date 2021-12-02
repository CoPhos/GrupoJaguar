import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import logotipo from '../assets/images/jaguaresLogo.jpg'

function Header() {
  const isLoggedIn = false

  return (
    <Box sx={{ height: '64px', flexShrink: '0' }}>
      <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }}>
        <Toolbar>
          <img
            src={logotipo}
            alt="Logotipo de la empresa"
            style={{ height: '50px', width: '55px', marginRight: '10px' }}
          ></img>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: '90%' }}>
            Jaguar y Asociados S.A. de C.V.
          </Typography>
          {isLoggedIn && (
            <Button color="inherit" sx={{ fontSize: '50%' }}>
              Iniciar sesión
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
