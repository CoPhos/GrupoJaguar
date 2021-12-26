import React from 'react';

import MenuItem from './MenuItem';
import Pdf from '../PDF/Pdf';
import { itemList } from './ItemList';

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import protectedRoute from '../../protectedRoute';
function Protected() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        marginTop: '20px',
        marginBottom: '20px',
        flex: '1 0 auto',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Box sx={{ width: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <Typography variant="h4" component="div" sx={{ marginBottom: '30px' }}>
            Contenido
          </Typography>
          <Paper sx={{ padding: '30px 0' }}>
            {itemList.map((item, index) => {
              return <MenuItem key={index} text={item.text} link={item.link} />;
            })}
          </Paper>
        </Box>
      </Box>
    </Container>
  );
}

export default protectedRoute(Protected);
