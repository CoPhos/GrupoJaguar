import React, { useState } from 'react'

import BitacoraForm from './BitacoraForm'
import BitacoraTable from './BitacoraTable'
import BitacoraContainer from './BitacoraContainer'

import Paper from '@mui/material/Paper'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Toolbar from '@mui/material/Toolbar'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import InputAdornment from '@mui/material/InputAdornment'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Slide from '@mui/material/Slide'
import Dialog from '@mui/material/Dialog'
import AppBar from '@mui/material/AppBar'

import Search from '@mui/icons-material/Search'
import AddCircle from '@mui/icons-material/AddCircle'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})
function Bitacora() {
  const [records, setrecords] = useState([{ header: 'heaader', name: 'holaMundo' }])

  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          marginTop: '20px',
          marginBottom: '20px',
          flex: '1 0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {/* <Typography variant="h4" component="div" sx={{ marginBottom: '30px' }}>
          Bitacora de pruebas
        </Typography>
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
          <AppBar sx={{ position: 'relative', backgroundColor: '#008433' }}>
            <Toolbar>
              <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                <CloseIcon />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                Bitacora de pruebas
              </Typography>
              <Button autoFocus color="inherit" onClick={handleClose}>
                save
              </Button>
            </Toolbar>
          </AppBar>

          <BitacoraForm></BitacoraForm>
        </Dialog>
        <Box sx={{ width: '100%', marginBottom: '30px' }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <TextField
              label="Search Employees"
              size="small"
              variant="outlined"
              sx={{ width: '75%' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                )
              }}
            />
            <Button
              variant="outlined"
              onClick={handleClickOpen}
              startIcon={<AddCircle />}
              sx={{ marginLeft: '10px', color: '#008433', borderColor: '#008433' }}
            >
              Añadir
            </Button>
          </Toolbar> 
        </Box>*/}
        {/* <BitacoraContainer></BitacoraContainer> */}
        <BitacoraForm></BitacoraForm>
      </Container>
    </>
  )
}

export default Bitacora
