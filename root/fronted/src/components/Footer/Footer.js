import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function Footer() {
  return (
    <footer>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: '30px',
          backgroundColor: '#008433',
          color: 'white'
        }}
      >
        <Typography variant="h6" component="div" sx={{ fontSize: '50%', margin: '0px 8px' }}>
          Copyright © 2021 Grupo Jaguar
        </Typography>
        <Typography variant="h6" component="div" sx={{ fontSize: '50%', margin: '0px 8px' }}>
          Jaguar y Asociados S.A. de C.V.
        </Typography>
      </Box>
    </footer>
  )
}

export default Footer
