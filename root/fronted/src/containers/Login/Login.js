import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../../actions/auth'

import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Avatar from '@mui/material/Avatar'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import LockOutlined from '@material-ui/icons/LockOutlined'

function Login(login) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const { username, password } = formData

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault()
    login(username, password)
  }

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
          width: '350px',
          height: '315px'
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
              name="username"
              value={username}
              onChange={e => onChange(e)}
            ></TextField>
          </Box>
          <Box>
            <TextField
              label="Contraseña"
              placeholder="Ingrese contraseña"
              required
              type="password"
              size="small"
              name="password"
              value={password}
              onChange={e => onChange(e)}
            ></TextField>
          </Box>
          <Box>
            <Button
              type="submit"
              variant="contained"
              onSubmit={onSubmit}
              sx={{ backgroundColor: '#008433' }}
            >
              Iniciar sesión
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}

// const mapStateToProps = state => ({

// })

export default connect(null, { login })(Login)
