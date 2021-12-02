import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

function Footer() {
  return (
    <footer>
      <Box
        sx={{
          width: '100%',
          height: '15px',
          backgroundColor: '#008433',
          color: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 'auto',
          flexShrink: '0'
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
