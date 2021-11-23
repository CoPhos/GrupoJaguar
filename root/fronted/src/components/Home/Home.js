import React from 'react'

import MenuItem from './MenuItem'
import { itemList } from './ItemList'

import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

function Home() {
  return (
    <Container maxWidth="sm" sx={{ flex: '1 0 600px' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '80%'
        }}
      >
        <Typography variant="h4" component="div" sx={{ marginBottom: '30px' }}>
          Contenido
        </Typography>
        <Paper sx={{ padding: '30px 0' }}>
          {itemList.map((item, index) => {
            return <MenuItem text={item.text} link={item.link} />
          })}
        </Paper>
      </Box>
    </Container>
  )
}

export default Home
