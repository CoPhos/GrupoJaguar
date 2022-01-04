import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';
import Pdf from '../DiarioPruebasPDF/Pdf';
import { pdf } from '@react-pdf/renderer';
function DiarioPruebasDownload(props) {
  async function createDownload() {
    const blob = await pdf(<Pdf data={props.pdfData} fecha={props.fecha}></Pdf>).toBlob();
    const url = window.URL.createObjectURL(new Blob([blob], { type: 'application/pdf' }));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'file.pdf');
    document.body.appendChild(link);
    link.click();
  }

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginTop: '20px'
      }}
      maxWidth="lg"
    >
      <Typography variant="h4" component="div" sx={{ margin: '5px 0', marginBottom: '20px' }}>
        Resultado
      </Typography>
      {props.error && (
        <Button
          variant="outlined"
          onClick={() => {
            createDownload();
          }}
          sx={{ marginTop: '20px', color: '#008433', borderColor: '#008433' }}
        >
          Descargar
        </Button>
      )}
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={props.openSnack}
        autoHideDuration={6000}
        onClose={() => {
          props.closeSnackbar();
        }}
      >
        <Alert
          onClose={() => {
            props.closeSnackbar();
          }}
          severity="warning"
          sx={{ width: '100%' }}
        >
          Sin resultados, ingresa otra fecha
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default DiarioPruebasDownload;
