import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import { createStyles, makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { MyContext } from './BitacoraContainer';
const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      '& .MuiDataGrid-renderingZone': {
        maxHeight: 'fit-content !important'
      },
      '& .MuiDataGrid-cell': {
        maxHeight: 'fit-content !important',
        overflow: 'auto !important',
        whiteSpace: 'initial !important',
        lineHeight: '14px !important',
        display: 'flex !important',
        alignItems: 'center',
        paddingTop: '10px !important',
        paddingBottom: '5px !important',
        '>': {
          maxHeight: 'inherit',
          whiteSpace: 'initial !important',
          lineHeight: '14px !important'
        }
      },
      '& .MuiDataGrid-row': {
        maxHeight: 'fit-content !important'
      }
    }
  })
);

function BitacoraTable(props) {
  const [detail, setdetail] = useState('');
  const [click, setclick] = useState(false);
  const [clickUpdate, setclickUpdate] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState('');
  const [page, setPage] = React.useState(0);
  const open = Boolean(anchorEl);
  const theme = createTheme();
  const classes = useStyles();
  const rows = props.data.notes;
  const columns = [
    { field: 'id', headerName: '', width: 1, hide: true },
    {
      field: 'action2',
      headerName: 'Detalles',
      sortable: false,
      renderCell: params => {
        return (
          <Button
            onClick={e => {
              e.stopPropagation();
              const api = params.api;
              const thisRow = {};

              api
                .getAllColumns()
                .filter(c => c.field !== '__check__' && !!c)
                .forEach(c => (thisRow[c.field] = params.getValue(params.id, c.field)));

              setdetail(thisRow.id);
              setclick(!click);
              props.dialog();
            }}
          >
            Detalles
          </Button>
        );
      }
    },
    {
      field: 'action',
      headerName: 'Editar',
      sortable: false,
      renderCell: params => {
        return (
          <Button
            onClick={e => {
              e.stopPropagation();
              const api = params.api;
              const thisRow = {};

              api
                .getAllColumns()
                .filter(c => c.field !== '__check__' && !!c)
                .forEach(c => (thisRow[c.field] = params.getValue(params.id, c.field)));
              props.handleOpenUpdate(thisRow.id);
            }}
          >
            Editar
          </Button>
        );
      }
    },
    { field: 'numMuestra', headerName: 'Num Muestra', width: 120, wrapText: true },
    { field: 'numObra', headerName: 'Num Obra', width: 120 },
    { field: 'nombreObra', headerName: 'Nombre obra', width: 240 },
    { field: 'ubicacion', headerName: 'Ubicacion', width: 140 },
    { field: 'solicitadoPor', headerName: 'Solicitado por', width: 140, wrapText: true }
  ];
  // const columns = [
  //   { field: 'id', headerName: '', width: 1, hide: true },
  //   {
  //     field: 'action',
  //     headerName: 'Editar',
  //     sortable: false,
  //     renderCell: params => {
  //       return (
  //         <Button
  //           onClick={e => {
  //             e.stopPropagation();
  //             const api = params.api;
  //             const thisRow = {};

  //             api
  //               .getAllColumns()
  //               .filter(c => c.field !== '__check__' && !!c)
  //               .forEach(c => (thisRow[c.field] = params.getValue(params.id, c.field)));
  //             props.handleOpenUpdate(thisRow);
  //           }}
  //         >
  //           Editar
  //         </Button>
  //       );
  //     }
  //   },
  //   { field: 'numMuestra', headerName: 'Num Muestra', width: 120, wrapText: true },
  //   { field: 'numObra', headerName: 'Num Obra', width: 120 },
  //   { field: 'nombreObra', headerName: 'Nombre obra', width: 240 },
  //   { field: 'ubicacion', headerName: 'Ubicacion', width: 140 },
  //   { field: 'solicitadoPor', headerName: 'Solicitado por', width: 140, wrapText: true },
  //   { field: 'elementoColado', headerName: 'Elemento Colado', width: 140 },
  //   {
  //     field: 'resistenciaComprensionProyecto',
  //     headerName: 'Resistencia Comprension Proyecto',
  //     width: 260
  //   },
  //   { field: 'revenimientoProyecto', headerName: 'Revenimiento Proyecto', width: 200 },
  //   { field: 'revenimientoObtenido', headerName: 'Revenimiento Obtenido', width: 200 },
  //   { field: 'fechaColado', headerName: 'Fecha Colado', type: 'date', width: 120 },

  //   { field: 'siete', headerName: '7 Dias', type: 'date', width: 120 },
  //   { field: 'catorce', headerName: '14 Dias', type: 'date', width: 120 },
  //   { field: 'veintiocho', headerName: '28 Dias', type: 'date', width: 120 },
  //   { field: 'veintiochoDos', headerName: '28 Dias', type: 'date', width: 120 },

  //   { field: 'equipoMezclado', headerName: 'Equipo Mezclado', width: 140 },
  //   { field: 'resistenciaTipo', headerName: 'ResistenciaTipo', width: 140 },
  //   { field: 'concretera', headerName: 'Concretera', width: 140 },

  //   { field: 'altura1', headerName: 'Altura', width: 120 },
  //   { field: 'altura2', headerName: 'Altura', width: 120 },
  //   { field: 'altura3', headerName: 'Altura', width: 120 },
  //   { field: 'altura4', headerName: 'Altura', width: 120 },

  //   { field: 'diametro1', headerName: 'Diametro', width: 140 },
  //   { field: 'diametro2', headerName: 'Diametro', width: 140 },
  //   { field: 'diametro3', headerName: 'Diametro', width: 140 },
  //   { field: 'diametro4', headerName: 'Diametro', width: 140 },
  //   { field: 'area1', headerName: 'Area', width: 140 },
  //   { field: 'area2', headerName: 'Area', width: 140 },
  //   { field: 'area3', headerName: 'Area', width: 140 },
  //   { field: 'area4', headerName: 'Area', width: 140 },
  //   { field: 'carga1', headerName: 'Carga', width: 140 },
  //   { field: 'carga2', headerName: 'Carga', width: 140 },
  //   { field: 'carga3', headerName: 'Carga', width: 140 },
  //   { field: 'carga4', headerName: 'Carga', width: 140 },
  //   {
  //     field: 'resistenciaComprension1',
  //     headerName: 'Resistencia Comprension',
  //     type: 'number',
  //     width: 200
  //   },
  //   {
  //     field: 'resistenciaComprension2',
  //     headerName: 'Resistencia Comprension',
  //     type: 'number',
  //     width: 200
  //   },
  //   {
  //     field: 'resistenciaComprension3',
  //     headerName: 'Resistencia Comprension',
  //     type: 'number',
  //     width: 200
  //   },
  //   {
  //     field: 'resistenciaComprension4',
  //     headerName: 'Resistencia Comprension',
  //     type: 'number',
  //     width: 200
  //   },
  //   {
  //     field: 'porcentajeResistenciaComprension1',
  //     headerName: 'Porcentaje Resistencia Comprension',
  //     width: 280
  //   },
  //   {
  //     field: 'porcentajeResistenciaComprension2',
  //     headerName: 'Porcentaje Resistencia Comprension',
  //     width: 280
  //   },
  //   {
  //     field: 'porcentajeResistenciaComprension3',
  //     headerName: 'Porcentaje Resistencia Comprension',
  //     width: 280
  //   },
  //   {
  //     field: 'porcentajeResistenciaComprension4',
  //     headerName: 'Porcentaje Resistencia Comprension',
  //     width: 280
  //   },
  //   { field: 'laboratorista', headerName: 'Laboratorista', width: 140 },
  //   { field: 'observaciones', headerName: 'Observaciones', width: 180 },
  //   { field: 'tipoFalla', headerName: 'Tipo Falla', width: 140 }
  // ];
  // const rows = [
  //   {
  //     id: 'd50dcbf3-c2bb-4b5c-a673-dd2a6601c1ad',
  //     numMuestra: 'num',
  //     numObra: 'obra',
  //     nombreObra: 'nombre',
  //     ubicacion: 'ubicacion',
  //     solicitadoPor: 'solicitado',
  //     elementoColado: 'elemento',
  //     resistenciaComprensionProyecto: '250',
  //     revenimientoProyecto: '300',
  //     revenimientoObtenido: 'revenimiento',
  //     fechaColado: '2021-09-05',
  //     siete: '2021-09-05',
  //     catorce: '2021-09-05',
  //     veintiocho: '2021-09-05',
  //     veintiochoDos: '2021-09-05',
  //     equipoMezclado: 'equipo',
  //     resistenciaTipo: 'resistencia',
  //     concretera: 'concretera',
  //     observaciones: '',
  //     altura1: 15,
  //     altura2: 15,
  //     altura3: 15,
  //     altura4: 15,
  //     diametro1: 30,
  //     diametro2: 30,
  //     diametro3: 30,
  //     diametro4: 30,
  //     area1: 176,
  //     area2: 176,
  //     area3: 176,
  //     area4: 176,
  //     carga1: 450,
  //     carga2: 450,
  //     carga3: 450,
  //     carga4: 450,
  //     resistenciaComprension1: 200,
  //     resistenciaComprension2: 200,
  //     resistenciaComprension3: 200,
  //     resistenciaComprension4: 200,
  //     porcentajeResistenciaComprension1: '105',
  //     porcentajeResistenciaComprension2: '100',
  //     porcentajeResistenciaComprension3: '102',
  //     porcentajeResistenciaComprension4: '110',
  //     tipoFalla: '',
  //     laboratorista: 'laboratorista',
  //     createdAt: '2021-12-04T04:44:35.413Z',
  //     updatedAt: '2021-12-04T04:44:35.413Z'
  //   },
  //   {
  //     id: 'b57a2241-525e-419a-addd-2b0fb743a4fe',
  //     numMuestra: '005',
  //     numObra: '62',
  //     nombreObra: 'REMODELACION Y AMPLIACION DEL AEROPUERTO DE TAMPICO',
  //     ubicacion: 'TAMPICO TAMPS.',
  //     solicitadoPor: 'ICA CONSTRUCTORA S.A.DE C.V.',
  //     elementoColado: 'ZAPATAS Y DADOS DE CED 14',
  //     resistenciaComprensionProyecto: '250',
  //     revenimientoProyecto: '10',
  //     revenimientoObtenido: '12',
  //     fechaColado: '2021-12-03T03:19:47.000Z',
  //     siete: '2021-12-10T03:19:47.000Z',
  //     catorce: '2021-12-17T03:19:47.000Z',
  //     veintiocho: '2021-12-31T03:19:47.000Z',
  //     veintiochoDos: '2021-12-31T03:19:47.000Z',
  //     equipoMezclado: 'OLLA',
  //     resistenciaTipo: 'NORMAL',
  //     concretera: 'CONCRETOS TANCOL SA. DE C.V',
  //     observaciones: '',
  //     altura1: 30,
  //     altura2: 29.9,
  //     altura3: 29.9,
  //     altura4: 29.9,
  //     diametro1: 30,
  //     diametro2: 30,
  //     diametro3: 30,
  //     diametro4: 30,
  //     area1: 4241.15008234622,
  //     area2: 4231.725304385451,
  //     area3: 4231.725304385451,
  //     area4: 4231.725304385451,
  //     carga1: 4505,
  //     carga2: 4550,
  //     carga3: 4550,
  //     carga4: 4550,
  //     resistenciaComprension1: 1.0622118794503534,
  //     resistenciaComprension2: 1.0752115680298795,
  //     resistenciaComprension3: 1.0752115680298795,
  //     resistenciaComprension4: 1.0752115680298795,
  //     porcentajeResistenciaComprension1: '4.248847517801414',
  //     porcentajeResistenciaComprension2: '4.300846272119518',
  //     porcentajeResistenciaComprension3: '4.300846272119518',
  //     porcentajeResistenciaComprension4: '4.300846272119518',
  //     tipoFalla: '',
  //     laboratorista: 'Elena Ruiz',
  //     createdAt: '2021-12-05T03:20:38.192Z',
  //     updatedAt: '2021-12-05T03:20:38.192Z'
  //   }
  // ];

  const handlePopoverOpen = event => {
    const field = event.currentTarget.dataset.field;
    const id = event.currentTarget.parentElement.dataset.id;
    const row = rows.find(r => r.id === id);
    setValue(row[field]);
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    props.next(props.data.next);
  }, [page]);

  useEffect(() => {
    props.detail(detail);
  }, [click]);
  let rowCount = 1;
  return (
    <MyContext.Consumer>
      {({ state, dispatch }) => (
        <ThemeProvider theme={theme}>
          <Box sx={{ height: '100%', width: '100%' }}>
            <DataGrid
              className={classes.root}
              pagination
              paginationMode="server"
              onPageChange={newPage => setPage(newPage)}
              rows={rows}
              columns={columns}
              loading={props.loading}
              pageSize={1}
              rowsPerPageOptions={[1]}
              rowCount={state.next !== null ? ++rowCount : rowCount}
              checkboxSelection={false}
              disableSelectionOnClick
              componentsProps={{
                cell: {
                  onMouseEnter: handlePopoverOpen,
                  onMouseLeave: handlePopoverClose
                }
              }}
            />
            <Popover
              sx={{
                pointerEvents: 'none'
              }}
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              onClose={handlePopoverClose}
              disableRestoreFocus
            >
              <Typography sx={{ p: 1 }}>{`${value}`}</Typography>
            </Popover>
          </Box>
        </ThemeProvider>
      )}
    </MyContext.Consumer>
  );
}

export default BitacoraTable;
