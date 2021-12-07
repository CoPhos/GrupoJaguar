import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LockOutlined from '@mui/icons-material/LockOutlined';

function Login({ signIn, updateFormState }) {
  return (
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
            name="username"
            onChange={e => {
              e.persist();
              updateFormState(e);
            }}
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
            onChange={e => {
              e.persist();
              updateFormState(e);
            }}
          ></TextField>
        </Box>
        <Box>
          <Button
            type="submit"
            variant="contained"
            sx={{ backgroundColor: '#008433' }}
            onClick={signIn}
          >
            Iniciar sesión
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}

export default Login;
