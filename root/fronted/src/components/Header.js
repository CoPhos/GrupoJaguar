import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logotipo from '../assets/images/jaguaresLogo.jpg';
import { Auth, Hub } from 'aws-amplify';
import { useHistory } from 'react-router';
function Header() {
  const history = useHistory();
  useEffect(() => {
    checkUser();
    Hub.listen('auth', data => {
      const { payload } = data;
      if (payload.event === 'signOut') {
        setUser(null);
      }
    });
  }, []);
  const [user, setUser] = useState(null);
  async function checkUser() {
    try {
      const data = await Auth.currentUserPoolUser();
      const userInfo = { username: data.username, ...data.attributes };
      setUser(userInfo);
    } catch (err) {
      console.log('error: ', err);
    }
  }
  function signOut() {
    Auth.signOut().catch(err => console.log('error signing out: ', err));
    history.push({
      pathname: '/login'
    });
  }

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
          {user ? (
            <Button color="inherit" sx={{ fontSize: '50%' }} onClick={signOut}>
              Cerrar sesión
            </Button>
          ) : (
            ''
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
