import React from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Avatar from '@mui/material/Avatar'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import LockOutlined from '@material-ui/icons/LockOutlined'

function Login() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '1 0 auto'
      }}
    >
      <Paper
        elevation={10}
        sx={{
          padding: '10px',
          margin: 'auto auto',
          width: '250px',
          height: '300px'
        }}
      >
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-evenly'
          }}
        >
          <Box>
            <Avatar sx={{ backgroundColor: '#1bbd7e' }}>
              <LockOutlined></LockOutlined>
            </Avatar>
          </Box>
          <Box>
            <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
              Iniciar sesión
            </Typography>
          </Box>
          <Box>
            <TextField
              label="Usuario"
              placeholder="Ingrese usuario"
              required
              size="small"
            ></TextField>
          </Box>
          <Box>
            <TextField
              label="Contraseña"
              placeholder="Ingrese contraseña"
              required
              type="password"
              size="small"
            ></TextField>
          </Box>
          <Box>
            <Button type="submit" variant="contained" sx={{ backgroundColor: '#008433' }}>
              <Link to="/home">Iniciar sesión</Link>
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}

export default Login
