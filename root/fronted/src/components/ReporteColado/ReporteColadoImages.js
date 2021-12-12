import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, CardActionArea, CardActions } from '@mui/material';

import { MyContext } from './ReporteColadoContainer';
function ReporteColadoImages() {
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
            Imagenes
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
          >
            {posts.map(post => (
              <Card sx={{ width: 250, margin: '12px' }} key={post.id}>
                <CardMedia
                  component="img"
                  height="140"
                  image={post.imageUrl}
                  alt="documento Digitalizado"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {post.title}
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
            ))}
          </Box>
        </Container>
      )}
    </MyContext.Consumer>
  );
}
const postContainer = {
  padding: '20px 0px 0px',
  borderBottom: '1px solid #ddd'
};
const heading = { margin: '20px 0px' };
const postImage = { width: 400 };
const postTitle = { marginTop: 4 };

export default ReporteColadoImages;
