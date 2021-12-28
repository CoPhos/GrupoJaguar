import React, { useState, useEffect, useReducer } from 'react';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import { listBitacoraDePruebasComprensions } from '../../graphql/queries';
import { listBitacoraDePruebasComprensionsByNumMuestra as listBitacoraByMuestra } from '../../graphql/queries';
import { getBitacoraDePruebasComprension } from '../../graphql/queries';
import { createBitacoraDePruebasComprension as createBitacora } from '../../graphql/mutations';
import { updateBitacoraDePruebasComprension as updateBitacora } from '../../graphql/mutations';
import { createDocumentoBitacora } from '../../graphql/mutations';
import { prettyPrint } from '@base2/pretty-print-object';
import { v4 as uuidv4 } from 'uuid';
import protectedRoute from '../../protectedRoute';
import BitacoraForm from './BitacoraForm';
import BitacoraTable from './BitacoraTable';
import Pdf from '../PDF/Pdf';

import { pdf, PDFDownloadLink } from '@react-pdf/renderer';

import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
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
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
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
      return {
        ...state,
        notes: action.notes,
        loading: false
      };
    case 'SET_MORE_NOTES':
      return {
        ...state,
        notes: [...action.notes, ...state.notes],
        loading: false
      };
    case 'SET_NEXT':
      return {
        ...state,
        next: action.payload
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case 'ADD_NOTE':
      return { ...state, notes: [action.note, ...state.notes] };
    case 'RESET_FORM':
      return {
        ...state,
        form: initialState.form,
        formErrors: initialState.formErrors,
        saveSend: false
      };
    case 'SET_FORM_UPDATE':
      const [note, update] = action.payload;
      return {
        ...state,
        form: note,
        update: update
      };
    case 'SET_INPUT':
      return { ...state, form: {} };
    case 'INPUT_CHANGE':
      const { name, value } = action.payload.target;
      return {
        ...state,
        form: { ...state.form, [name]: value.toUpperCase() }
      };
    case 'AREA_CALC':
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
          state.form.resistenciaComprensionProyecto
        ),
        [resisitencia2, porcentaje2] = calcularResistenciaComprension(
          state.form.area2,
          state.form.carga2,
          state.form.resistenciaComprensionProyecto
        ),
        [resisitencia3, porcentaje3] = calcularResistenciaComprension(
          state.form.area3,
          state.form.carga3,
          state.form.resistenciaComprensionProyecto
        ),
        [resisitencia4, porcentaje4] = calcularResistenciaComprension(
          state.form.area4,
          state.form.carga4,
          state.form.resistenciaComprensionProyecto
        );
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
      console.log(state.fechas);
      if (!date) {
        date = new Date();
      }
      return {
        ...state,
        form: {
          ...state.form,
          fechaColado: date.toDateString(),
          siete: date.addDays(parseInt(state.fechas.primera)).toDateString(),
          catorce: date.addDays(parseInt(state.fechas.segunda)).toDateString(),
          veintiocho: date.addDays(parseInt(state.fechas.tercera)).toDateString(),
          veintiochoDos: date.addDays(parseInt(state.fechas.cuarta)).toDateString()
        }
      };
    case 'VALIDATE_FORM':
      const temp = validate(state.form);
      return {
        ...state,
        formErrors: temp
      };
    case 'VALIDATE_SEND':
      return {
        ...state,
        saveSend: Object.values(state.formErrors).every(x => x === '')
      };
    case 'SET_FORM':
      return {
        ...state,
        form: action.payload
      };
    case 'SET_SEARCH_FIELD':
      return {
        ...state,
        searchField: action.payload.target.value.toUpperCase().split(',')
      };
    case 'SET_DATE':
      return {
        ...state,
        fechas: {
          ...state.fechas,
          [action.payload.target.name]: action.payload.target.value
        }
      };
    default:
      return state;
  }
}
const validate = values => {
  const numberPattern = /^[1-9]\d*(\.\d+)?$/;
  let temp = {};
  temp.lab = values.numMuestra ? '' : 'Debe llenar este campo.';
  temp.numObra = values.numObra ? '' : 'Debe llenar este campo.';
  temp.nombreObra = values.nombreObra ? '' : 'Debe llenar este campo.';
  temp.ubicacion = values.ubicacion ? '' : 'Debe llenar este campo.';
  temp.solicitadoPor = values.solicitadoPor ? '' : 'Debe llenar este campo.';
  temp.elementoColado = values.elementoColado ? '' : 'Debe llenar este campo.';
  temp.laboratorista = values.laboratorista ? '' : 'Debe llenar este campo.';
  temp.equipoMezclado = values.equipoMezclado ? '' : 'Debe llenar este campo.';
  temp.resistenciaTipo = values.resistenciaTipo ? '' : 'Debe llenar este campo.';
  temp.concretera = values.concretera ? '' : 'Debe llenar este campo.';
  temp.laboratorista = values.laboratorista ? '' : 'Debe llenar este campo.';
  temp.resistenciaComprensionProyecto = /^\d+$/.test(values.resistenciaComprensionProyecto)
    ? ''
    : 'Debe contener solo numeros';
  temp.revenimientoProyecto = numberPattern.test(values.revenimientoProyecto)
    ? ''
    : 'Debe contener solo numeros';
  temp.revenimientoObtenido = numberPattern.test(values.revenimientoObtenido)
    ? ''
    : 'Debe contener solo numeros';

  temp.altura1 = numberPattern.test(values.altura1) ? '' : 'Debe contener solo numeros';
  temp.altura2 = numberPattern.test(values.altura2) ? '' : 'Debe contener solo numeros';
  temp.altura3 = numberPattern.test(values.altura3) ? '' : 'Debe contener solo numeros';
  temp.altura4 = numberPattern.test(values.altura4) ? '' : 'Debe contener solo numeros';
  temp.diametro1 = numberPattern.test(values.diametro1) ? '' : 'Debe contener solo numeros';
  temp.diametro2 = numberPattern.test(values.diametro2) ? '' : 'Debe contener solo numeros';
  temp.diametro3 = numberPattern.test(values.diametro3) ? '' : 'Debe contener solo numeros';
  temp.diametro4 = numberPattern.test(values.diametro4) ? '' : 'Debe contener solo numeros';
  temp.carga1 = numberPattern.test(values.carga1) ? '' : 'Debe contener solo numeros';
  temp.carga2 = numberPattern.test(values.carga2) ? '' : 'Debe contener solo numeros';
  temp.carga3 = numberPattern.test(values.carga3) ? '' : 'Debe contener solo numeros';
  temp.carga4 = numberPattern.test(values.carga4) ? '' : 'Debe contener solo numeros';

  return temp;
};
const calcularResistenciaComprension = (valorArea, valorCarga, valorResistenciaCompresion) => {
  const area = parseFloat(valorArea);
  const carga = parseFloat(valorCarga);
  return [
    String((carga / area).toFixed(2)),
    String(((carga / area / valorResistenciaCompresion) * 1000).toFixed(2))
  ];
};
const calcularArea = (valorDiametro, valorAltura) => {
  const radio = parseFloat(valorDiametro / 2);
  const altura = parseFloat(valorAltura);
  const area = Math.PI * (radio * radio);

  return String(area.toFixed(2));
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
    id: '',
    numMuestra: '',
    numObra: '',
    nombreObra: '',
    laboratorista: '',
    tipoFalla: '',
    ubicacion: '',
    solicitadoPor: '',
    elementoColado: '',
    observaciones: '',
    resistenciaComprensionProyecto: '', //number
    revenimientoProyecto: '', //number
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
  },
  formErrors: {},
  saveSend: false,
  next: 'a',
  update: false,
  searchField: [],
  fechas: {
    primera: 7,
    segunda: 14,
    tercera: 28,
    cuarta: 28
  }
};

function BitacoraContainer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [openCreate, setOpenCreate] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [snackbar, setSnackbar] = useState(false);
  const [snackbarMoreNotes, setSnackbarMoreNotes] = useState(false);
  const [open, setOpen] = useState(false);
  const [edad, setEdad] = useState('');

  const generatePdfData = () => {
    const pdfData = { ...state.form };
    const fecha = new Date(pdfData.fechaColado);
    const siete = new Date(pdfData.siete);
    const catorce = new Date(pdfData.catorce);
    const veintiocho = new Date(pdfData.veintiocho);
    const veintiochoDos = new Date(pdfData.veintiochoDos);
    const nuevaFecha = new Date(fecha.addDays(parseInt(edad)));

    if (!(nuevaFecha.getTime() === siete.getTime())) {
      pdfData.altura1 = ' ';
      pdfData.diametro1 = ' ';
      pdfData.area1 = ' ';
      pdfData.carga1 = ' ';
      pdfData.resistenciaComprension1 = ' ';
      pdfData.porcentajeResistenciaComprension1 = ' ';
    }
    if (!(nuevaFecha.getTime() === catorce.getTime())) {
      pdfData.altura2 = ' ';
      pdfData.diametro2 = ' ';
      pdfData.area2 = ' ';
      pdfData.carga2 = ' ';
      pdfData.resistenciaComprension2 = ' ';
      pdfData.porcentajeResistenciaComprension2 = ' ';
    }
    if (!(nuevaFecha.getTime() === veintiocho.getTime())) {
      pdfData.altura3 = ' ';
      pdfData.diametro3 = ' ';
      pdfData.area3 = ' ';
      pdfData.carga3 = ' ';
      pdfData.resistenciaComprension3 = ' ';
      pdfData.porcentajeResistenciaComprension3 = ' ';
    }
    if (!(nuevaFecha.getTime() === veintiochoDos.getTime())) {
      pdfData.altura4 = ' ';
      pdfData.diametro4 = ' ';
      pdfData.area4 = ' ';
      pdfData.carga4 = ' ';
      pdfData.resistenciaComprension4 = ' ';
      pdfData.porcentajeResistenciaComprension4 = ' ';
    }
    pdfData.fechaRuptura = nuevaFecha;
    pdfData.edadDias = edad;
    pdfData.fechaRecibo = new Date();
    pdfData.fechaColado = fecha;
    console.log(pdfData);
    return pdfData;
  };

  async function savePdf() {
    const pdfData = generatePdfData();
    const blob = await pdf(<Pdf info={pdfData}></Pdf>).toBlob();
    console.log(blob);
    const numEnsaye = pdfData.numObra;
    const numMuestra = pdfData.numMuestra;
    const nombreObra = pdfData.nombreObra;
    try {
      const documentKey = uuidv4() + '.pdf'.toLowerCase();
      var file = new Blob([blob], { type: 'application/pdf' });
      await Storage.put(documentKey, file);
      const post = { numEnsaye, numMuestra, nombreObra, documentKey };
      await API.graphql(graphqlOperation(createDocumentoBitacora, { input: post }));
      setSnackbar(true);
    } catch (err) {
      console.log('error: ', err);
    }
  }

  const handleEdad = e => {
    setEdad(e.target.value);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbar(false);
    setSnackbarMoreNotes(false);
  };

  const handleClickOpenCreate = () => {
    dispatch({ type: 'RESET_FORM' });
    setOpenCreate(true);
  };

  const handleCloseCreate = () => {
    setOpenCreate(false);
    dispatch({
      type: 'RESET_FORM'
    });
  };

  const handleClickOpenUpdate = () => {
    setOpenUpdate(true);
  };

  const handleCloseUpdate = () => {
    dispatch({
      type: 'SET_FORM_UPDATE',
      payload: [
        {
          id: '',
          numMuestra: '',
          numObra: '',
          nombreObra: '',
          laboratorista: '',
          tipoFalla: '',
          ubicacion: '',
          solicitadoPor: '',
          elementoColado: '',
          observaciones: '',
          resistenciaComprensionProyecto: '', //number
          revenimientoProyecto: '', //number
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
        },
        false
      ]
    });
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  useEffect(() => {
    fetchNotes();
  }, []);

  useEffect(() => {
    setOpenUpdate(state.update);
  }, [state.update]);

  async function fetchNotes() {
    try {
      const notesData = await API.graphql(
        graphqlOperation(listBitacoraDePruebasComprensions, { limit: 2 })
      );
      dispatch({
        type: 'SET_NOTES',
        notes: notesData.data.listBitacoraDePruebasComprensions.items
      });
      dispatch({
        type: 'SET_NEXT',
        payload: notesData.data.listBitacoraDePruebasComprensions.nextToken
      });
      dispatch({ type: 'SET_ERROR', payload: false });
    } catch (err) {
      console.log('error: ', err);
      dispatch({ type: 'SET_ERROR', payload: true });
    }
  }
  async function fetchNextNotes(nextToken) {
    try {
      if (nextToken !== null) {
        const notesData = await API.graphql(
          graphqlOperation(listBitacoraDePruebasComprensions, { limit: 2, nextToken })
        );
        console.log(notesData);

        if (notesData !== null) {
          dispatch({
            type: 'SET_MORE_NOTES',
            notes: notesData.data.listBitacoraDePruebasComprensions.items
          });
          console.log(state.notes);
          dispatch({
            type: 'SET_NEXT',
            payload: notesData.data.listBitacoraDePruebasComprensions.nextToken
          });
          dispatch({ type: 'SET_ERROR', payload: false });
        }
      } else {
        setSnackbarMoreNotes(true);
      }
    } catch (err) {
      console.log('error: ', err);
      dispatch({ type: 'SET_ERROR', payload: true });
    }
  }
  async function fetchBitacoraByMuestra() {
    console.log(state.searchField);
    try {
      const notesData = await API.graphql(
        graphqlOperation(listBitacoraByMuestra, {
          limit: 100,
          filter: {
            and: [
              { numMuestra: { eq: state.searchField[0] } },
              { nombreObra: { contains: state.searchField[1] } }
            ]
          }
        })
      );
      dispatch({
        type: 'SET_NOTES',
        notes: notesData.data.listBitacoraDePruebasComprensions.items
      });
      dispatch({
        type: 'SET_NEXT',
        payload: notesData.data.listBitacoraDePruebasComprensions.nextToken
      });
      dispatch({ type: 'SET_ERROR', payload: false });
    } catch (err) {
      console.log('error: ', err);
      dispatch({ type: 'SET_ERROR', payload: true });
    }
  }
  async function createNote() {
    const { form, saveSend } = state;
    if (saveSend) {
      const note = { ...form, id: CLIENT_ID };

      dispatch({ type: 'ADD_NOTE', note });
      dispatch({ type: 'RESET_FORM' });
      try {
        await API.graphql(graphqlOperation(createBitacora, { input: note }));
        dispatch({ type: 'SET_ERROR', payload: false });
        setSnackbar(true);
        handleCloseCreate();
      } catch (err) {
        dispatch({ type: 'SET_ERROR', payload: true });
        setSnackbar(true);
      }
    }
  }
  async function updateNote() {
    const { form, saveSend } = state;

    if (saveSend) {
      try {
        console.log(form);
        await API.graphql(graphqlOperation(updateBitacora, { input: form }));
        dispatch({ type: 'RESET_FORM' });
        dispatch({ type: 'SET_ERROR', payload: false });
        console.log('note successfully updated!');
        setSnackbar(true);
        handleCloseUpdate();
      } catch (err) {
        console.log('error: ', err);
        dispatch({ type: 'SET_ERROR', payload: true });
        setSnackbar(true);
      }
    }
  }
  async function getNoteUpdate(id) {
    try {
      const noteDetial = await API.graphql(
        graphqlOperation(getBitacoraDePruebasComprension, { id: id })
      );
      dispatch({
        type: 'SET_FORM_UPDATE',
        payload: [noteDetial.data.getBitacoraDePruebasComprension, true]
      });
      dispatch({ type: 'SET_ERROR', payload: false });
    } catch (err) {
      console.log('error: ', err);
      dispatch({ type: 'SET_ERROR', payload: true });
    }
  }
  async function getNote(id) {
    try {
      const noteDetial = await API.graphql(
        graphqlOperation(getBitacoraDePruebasComprension, { id: id })
      );
      dispatch({
        type: 'SET_FORM',
        payload: noteDetial.data.getBitacoraDePruebasComprension
      });
      dispatch({ type: 'SET_ERROR', payload: false });
    } catch (err) {
      console.log('error: ', err);
      dispatch({ type: 'SET_ERROR', payload: true });
    }
  }

  return (
    <MyContext.Provider value={{ state: state, dispatch: dispatch }}>
      <>
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={snackbar}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity={state.error ? 'error' : 'success'}
            sx={{ width: '100%' }}
          >
            {state.error ? 'Hubo un error, intentelo mas tarde' : 'Operación exitosa!'}
          </Alert>
        </Snackbar>
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={snackbarMoreNotes}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
            No hay mas informacion que extraer
          </Alert>
        </Snackbar>

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
          <Dialog
            fullScreen
            open={openCreate}
            onClose={handleCloseCreate}
            TransitionComponent={Transition}
          >
            <form
              style={{ overflowX: 'hidden' }}
              onSubmit={e => {
                e.preventDefault();
                createNote();
              }}
            >
              <AppBar sx={{ position: 'relative', backgroundColor: '#008433' }}>
                <Toolbar>
                  <IconButton
                    edge="start"
                    color="inherit"
                    onClick={handleCloseCreate}
                    aria-label="close"
                  >
                    <CloseIcon />
                  </IconButton>
                  <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                    Bitacora de pruebas
                  </Typography>
                  <Button
                    autoFocus
                    color="inherit"
                    type="submit"
                    onClick={() => {
                      dispatch({
                        type: 'VALIDATE_FORM'
                      });
                      dispatch({
                        type: 'VALIDATE_SEND'
                      });
                    }}
                  >
                    Guardar
                  </Button>
                </Toolbar>
              </AppBar>
              <BitacoraForm></BitacoraForm>
            </form>
          </Dialog>
          <Dialog
            fullScreen
            open={openUpdate}
            onClose={handleCloseUpdate}
            TransitionComponent={Transition}
          >
            <form
              style={{ overflowX: 'hidden' }}
              onSubmit={e => {
                e.preventDefault();
                updateNote();
              }}
            >
              <AppBar sx={{ position: 'relative', backgroundColor: '#008433' }}>
                <Toolbar>
                  <IconButton
                    edge="start"
                    color="inherit"
                    onClick={handleCloseUpdate}
                    aria-label="close"
                  >
                    <CloseIcon />
                  </IconButton>
                  <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                    Bitacora de pruebas
                  </Typography>
                  <Button
                    autoFocus
                    color="inherit"
                    type="submit"
                    onClick={() => {
                      dispatch({
                        type: 'VALIDATE_FORM'
                      });
                      dispatch({
                        type: 'VALIDATE_SEND'
                      });
                    }}
                  >
                    Actualizar
                  </Button>
                </Toolbar>
              </AppBar>
              <BitacoraForm></BitacoraForm>
            </form>
          </Dialog>
          <Dialog
            open={open}
            onClose={handleCloseDialog}
            scroll={'paper'}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
          >
            <DialogTitle id="scroll-dialog-title">Detalles</DialogTitle>
            <DialogContent dividers={true}>
              <pre>
                {prettyPrint(state.form, {
                  indent: '   ',
                  singleQuotes: false,
                  inlineCharacterLimit: 12
                })}
              </pre>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog}>Cerrar</Button>
            </DialogActions>
          </Dialog>
          <Box sx={{ width: '100%', marginBottom: '30px' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
              <TextField
                onChange={e => {
                  dispatch({ type: 'SET_SEARCH_FIELD', payload: e });
                }}
                label="Numero Muestra"
                size="small"
                variant="outlined"
                sx={{ width: '75%' }}
                name="searchField"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  )
                }}
              />

              <Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    '@media(max-width: 975px)': {
                      '> button': { marginTop: '15px' },
                      width: '65vw'
                    }
                  }}
                >
                  <Button
                    variant="outlined"
                    onClick={fetchBitacoraByMuestra}
                    sx={{ marginLeft: '10px', color: '#008433', borderColor: '#008433' }}
                  >
                    Buscar
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={handleClickOpenCreate}
                    startIcon={<AddCircle />}
                    sx={{ marginLeft: '10px', color: '#008433', borderColor: '#008433' }}
                  >
                    Añadir
                  </Button>
                </Box>
              </Box>
            </Toolbar>
          </Box>
          <BitacoraTable
            data={state}
            handleOpenUpdate={getNoteUpdate}
            loading={state.loading}
            next={fetchNextNotes}
            detail={getNote}
            dialog={handleClickOpen}
            setEdad={handleEdad}
            PdfData={savePdf}
          ></BitacoraTable>
          <Box>
            <Button
              onClick={() => {
                fetchNextNotes(state.next);
              }}
            >
              Mas resultados
            </Button>
          </Box>
        </Container>
      </>
    </MyContext.Provider>
  );
}

export default protectedRoute(BitacoraContainer);
