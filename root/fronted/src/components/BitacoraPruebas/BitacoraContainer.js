import React, { useState, useEffect, useReducer } from 'react';
import API, { graphqlOperation } from '@aws-amplify/api';
import { listBitacoraDePruebasComprensions } from '../../graphql/queries';
import { createBitacoraDePruebasComprension as createBitacora } from '../../graphql/mutations';
import { v4 as uuidv4 } from 'uuid';

import BitacoraForm from './BitacoraForm';
import BitacoraTable from './BitacoraTable';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';

import Search from '@mui/icons-material/Search';
import AddCircle from '@mui/icons-material/AddCircle';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export const MyContext = React.createContext();
const CLIENT_ID = uuidv4();

function reducer(state, action) {
  switch (action.type) {
    case 'SET_NOTES':
      return { ...state, notes: action.notes, loading: false };
    case 'ADD_NOTE':
      return { ...state, notes: [action.note, ...state.notes] };
    case 'RESET_FORM':
      return { ...state, form: initialState.form };
    case 'SET_INPUT':
      return { ...state, form: {} };
    case 'ERROR':
      return { ...state, loading: false, error: true };
    case 'INPUT_CHANGE':
      const { name, value } = action.payload.target;
      return {
        ...state,
        form: { ...state.form, [name]: value }
      };
    case 'AREA_CALC':
      console.log(state);
      return {
        ...state,
        form: {
          ...state.form,
          area1: calcularArea(state.form.diametro1, state.form.altura1),
          area2: calcularArea(state.form.diametro2, state.form.altura2),
          area3: calcularArea(state.form.diametro3, state.form.altura3),
          area4: calcularArea(state.form.diametro4, state.form.altura4)
        }
      };
    case 'AUTO_CALC':
      let [resisitencia1, porcentaje1] = calcularResistenciaComprension(
          state.form.area1,
          state.form.carga1,
          state.form.valorResistenciaCompresion
        ),
        [resisitencia2, porcentaje2] = calcularResistenciaComprension(
          state.form.area2,
          state.form.carga2,
          state.form.valorResistenciaCompresion
        ),
        [resisitencia3, porcentaje3] = calcularResistenciaComprension(
          state.form.area3,
          state.form.carga3,
          state.form.valorResistenciaCompresion
        ),
        [resisitencia4, porcentaje4] = calcularResistenciaComprension(
          state.form.area4,
          state.form.carga4,
          state.form.valorResistenciaCompresion
        );
      console.log(state);
      return {
        ...state,
        form: {
          ...state.form,
          resistenciaComprension1: resisitencia1,
          resistenciaComprension2: resisitencia2,
          resistenciaComprension3: resisitencia3,
          resistenciaComprension4: resisitencia4,
          porcentajeResistenciaComprension1: porcentaje1,
          porcentajeResistenciaComprension2: porcentaje2,
          porcentajeResistenciaComprension3: porcentaje3,
          porcentajeResistenciaComprension4: porcentaje4
        }
      };
    case 'DATES':
      const date = action.payload;
      console.log(date);
      if (!date) {
        date = new Date();
      }
      console.log(state);
      return {
        ...state,
        form: {
          ...state.form,
          fechaColado: date,
          siete: date.addDays(7),
          catorce: date.addDays(14),
          veintiocho: date.addDays(28),
          veintiochoDos: date.addDays(28)
        }
      };
    default:
      return state;
  }
}

const calcularResistenciaComprension = (valorArea, valorCarga, valorResistenciaCompresion) => {
  const area = parseFloat(valorArea);
  const carga = parseFloat(valorCarga);
  return [String(carga / area), String((carga / area / valorResistenciaCompresion) * 1000)];
};

const calcularArea = (valorDiametro, valorAltura) => {
  const radio = parseFloat(valorDiametro / 2);
  const altura = parseFloat(valorAltura);
  const area = 2 * Math.PI * radio * (radio + altura);

  return String(area);
};
Date.prototype.addDays = function (days) {
  const date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

const initialState = {
  notes: [],
  loading: true,
  error: false,
  form: {
    id: '1',
    lab: '',
    numObra: '',
    obra: '',
    ubicacion: '',
    solicitadoPor: '',
    elementoColado: '',
    laboratorista: '',
    valorResistenciaCompresion: '', //number
    revenimiento: '', //number
    revenimientoObtenido: '', //number
    fechaColado: new Date(),
    equipoMezclado: '',
    resistenciaTipo: '',
    concretera: '',
    siete: new Date(),
    catorce: new Date(),
    veintiocho: new Date(),
    veintiochoDos: new Date(),
    altura1: '',
    altura2: '',
    altura3: '',
    altura4: '',
    diametro1: '',
    diametro2: '',
    diametro3: '',
    diametro4: '',
    area1: '',
    area2: '',
    area3: '',
    area4: '',
    carga1: '',
    carga2: '',
    carga3: '',
    carga4: '',
    resistenciaComprension1: '',
    resistenciaComprension2: '',
    resistenciaComprension3: '',
    resistenciaComprension4: '',
    porcentajeResistenciaComprension1: '',
    porcentajeResistenciaComprension2: '',
    porcentajeResistenciaComprension3: '',
    porcentajeResistenciaComprension4: ''
  }
};

function BitacoraContainer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [records, setrecords] = useState([{ header: 'heaader', name: 'holaMundo' }]);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    dispatch({
      type: 'RESET_FORM'
    });
  };
  // useEffect(() => {
  //   fetchNotes()
  // }, [])

  async function fetchNotes() {
    try {
      const notesData = await API.graphql(graphqlOperation(listBitacoraDePruebasComprensions));
      dispatch({
        type: 'SET_NOTES',
        notes: notesData.data.listBitacoraDePruebasComprensions.items
      });
    } catch (err) {
      console.log('error: ', err);
      dispatch({ type: 'ERROR' });
    }
  }

  async function createNote() {
    const { form } = state;
    const note = { ...form, clientId: CLIENT_ID, completed: false };
    dispatch({ type: 'ADD_NOTE', note });
    dispatch({ type: 'RESET_FORM' });
    try {
      await API.graphql(graphqlOperation(createBitacora, { input: note }));
      console.log('successfully created note!');
    } catch (err) {
      console.log('error: ', err);
    }
  }

  return (
    <MyContext.Provider value={{ state: state, dispatch: dispatch }}>
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
          <Typography variant="h4" component="div" sx={{ marginBottom: '30px' }}>
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
          </Box>
          <BitacoraTable data={state.notes}></BitacoraTable>
        </Container>
      </>
    </MyContext.Provider>
  );
}

export default BitacoraContainer;
