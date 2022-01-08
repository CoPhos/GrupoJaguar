import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Search from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { CardActions } from '@mui/material';

import pdfImage from '../../assets/images/pdfResize.png';

import { MyContext } from './InformePruebasContainer';
function InformePruebas(props) {
  return (
    <MyContext.Consumer>
      {({ posts, dispatch }) => (
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            marginTop: '10px'
          }}
          maxWidth="lg"
        >
          <Typography variant="h4" component="div" sx={{ margin: '5px 0' }}>
            Documentos PDF
          </Typography>
          <Toolbar
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '85%'
            }}
          >
            <TextField
              onBlur={e => {
                props.setSearchField(e);
              }}
              label="Buscar por Num Ensaye,Num Obra"
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
            <Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between'
                }}
              >
                <Button
                  variant="outlined"
                  onClick={() => {
                    props.fetchBySearchField();
                  }}
                  sx={{ marginLeft: '10px', color: '#008433', borderColor: '#008433' }}
                >
                  Buscar
                </Button>
              </Box>
            </Box>
          </Toolbar>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
          >
            {posts.length === 0 ? (
              <p>sin resultados</p>
            ) : (
              posts.map(post => (
                <Card sx={{ width: 350, margin: '12px' }} key={post.id}>
                  {/* <CardMedia
                    component="img"
                    height="140"
                    image={pdfImage}
                    alt="documento Digitalizado"
                  /> */}
                  <CardContent sx={{ minHeight: 200 }}>
                    <Typography gutterBottom variant="h5" component="div">
                      {post.numEnsaye + ' - ' + post.numMuestra}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      {post.nombreObra}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => {
                        window.open(post.imageUrl);
                      }}
                      sx={{ color: '#008433' }}
                    >
                      DESCARGAR
                    </Button>
                  </CardActions>
                </Card>
              ))
            )}
          </Box>
        </Container>
      )}
    </MyContext.Consumer>
  );
}

export default InformePruebas;
