import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

import Toolbar from '@mui/material/Toolbar';

function DiarioPruebas(props) {
  return (
    <Box>
      <Typography variant="h4" component="div" sx={{ margin: '20px' }}>
        Diario de Pruebas
      </Typography>
      <Toolbar
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '85%',
          flexWrap: 'wrap'
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            disableFuture
            label="Fecha"
            views={['year', 'month', 'day']}
            inputFormat="yyyy/MM/dd"
            disableMaskedInput={true}
            name="searchField"
            value={props.date}
            onChange={newValue => {
              props.searchField(newValue);
            }}
            renderInput={params => (
              <TextField size="small" sx={{ marginTop: '20px' }} {...params} />
            )}
          />
        </LocalizationProvider>
        <Box>
          <Button
            variant="outlined"
            onClick={() => {
              props.fetchData();
            }}
            sx={{ marginTop: '20px', color: '#008433', borderColor: '#008433' }}
          >
            Generar tabla
          </Button>
        </Box>
      </Toolbar>
    </Box>
  );
}

export default DiarioPruebas;
