import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import { createStyles, makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      '& .MuiDataGrid-renderingZone': {
        maxHeight: 'fit-content !important'
      },
      '& .MuiDataGrid-cell': {
        maxHeight: 'fit-content !important',
        overflow: 'auto',
        whiteSpace: 'initial !important',
        lineHeight: '16px !important',
        display: 'flex !important',
        alignItems: 'center',
        paddingTop: '10px !important',
        paddingBottom: '10px !important',
        '>': {
          maxHeight: 'inherit',
          whiteSpace: 'initial !important',
          lineHeight: '16px !important'
        }
      },
      '& .MuiDataGrid-row': {
        maxHeight: 'fit-content !important'
      }
    }
  })
);

const columns = [
  { field: 'numMuestra', headerName: 'Num Muestra', width: 120, wrapText: true },
  { field: 'numObra', headerName: 'Num Obra', width: 120 },
  { field: 'nombreObra', headerName: 'Nombre obra', width: 240 },
  { field: 'ubicacion', headerName: 'Ubicacion', width: 140 },
  { field: 'solicitadoPor', headerName: 'Solicitado por', width: 140, wrapText: true },
  { field: 'elementoColado', headerName: 'Elemento Colado', width: 140 },
  {
    field: 'resistenciaComprensionProyecto',
    headerName: 'Resistencia Comprension Proyecto',
    width: 260
  },
  { field: 'revenimientoProyecto', headerName: 'Revenimiento Proyecto', width: 200 },
  { field: 'revenimientoObtenido', headerName: 'Revenimiento Obtenido', width: 200 },
  { field: 'fechaColado', headerName: 'Fecha Colado', type: 'date', width: 120 },

  { field: 'siete', headerName: '7 Dias', type: 'date', width: 120 },
  { field: 'catorce', headerName: '14 Dias', type: 'date', width: 120 },
  { field: 'veintiocho', headerName: '28 Dias', type: 'date', width: 120 },
  { field: 'veintiochoDos', headerName: '28 Dias', type: 'date', width: 120 },

  { field: 'equipoMezclado', headerName: 'Equipo Mezclado', width: 140 },
  { field: 'resistenciaTipo', headerName: 'ResistenciaTipo', width: 140 },
  { field: 'concretera', headerName: 'Concretera', width: 140 },

  { field: 'altura1', headerName: 'Altura', width: 120 },
  { field: 'altura2', headerName: 'Altura', width: 120 },
  { field: 'altura3', headerName: 'Altura', width: 120 },
  { field: 'altura4', headerName: 'Altura', width: 120 },

  { field: 'diametro1', headerName: 'Diametro', width: 140 },
  { field: 'diametro2', headerName: 'Diametro', width: 140 },
  { field: 'diametro3', headerName: 'Diametro', width: 140 },
  { field: 'diametro4', headerName: 'Diametro', width: 140 },
  { field: 'area1', headerName: 'Area', width: 140 },
  { field: 'area2', headerName: 'Area', width: 140 },
  { field: 'area3', headerName: 'Area', width: 140 },
  { field: 'area4', headerName: 'Area', width: 140 },
  { field: 'carga1', headerName: 'Carga', width: 140 },
  { field: 'carga2', headerName: 'Carga', width: 140 },
  { field: 'carga3', headerName: 'Carga', width: 140 },
  { field: 'carga4', headerName: 'Carga', width: 140 },
  {
    field: 'resistenciaComprension1',
    headerName: 'Resistencia Comprension',
    type: 'number',
    width: 200
  },
  {
    field: 'resistenciaComprension2',
    headerName: 'Resistencia Comprension',
    type: 'number',
    width: 200
  },
  {
    field: 'resistenciaComprension3',
    headerName: 'Resistencia Comprension',
    type: 'number',
    width: 200
  },
  {
    field: 'resistenciaComprension4',
    headerName: 'Resistencia Comprension',
    type: 'number',
    width: 200
  },
  {
    field: 'porcentajeResistenciaComprension1',
    headerName: 'Porcentaje Resistencia Comprension',
    width: 280
  },
  {
    field: 'porcentajeResistenciaComprension2',
    headerName: 'Porcentaje Resistencia Comprension',
    width: 280
  },
  {
    field: 'porcentajeResistenciaComprension3',
    headerName: 'Porcentaje Resistencia Comprension',
    width: 280
  },
  {
    field: 'porcentajeResistenciaComprension4',
    headerName: 'Porcentaje Resistencia Comprension',
    width: 280
  },
  { field: 'laboratorista', headerName: 'Laboratorista', width: 140 },
  { field: 'observaciones', headerName: 'Observaciones', width: 180 },
  { field: 'tipoFalla', headerName: 'Tipo Falla', width: 140 }
];

function BitacoraTable(props) {
  const rows = props.data.notes;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState('');

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

  const open = Boolean(anchorEl);
  const theme = createTheme();
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ height: '100%', width: '100%' }}>
        <DataGrid
          className={classes.root}
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
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
  );
}

export default BitacoraTable;
