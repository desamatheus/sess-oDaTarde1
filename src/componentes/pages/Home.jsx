import React from 'react';
import './home.css';

import garotosperdidos from '../../images/garotosperdidos.png';
import { Helmet } from 'react-helmet-async';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import {
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';
import testeCarousel from '../atoms/testeCarousel';
import ResponsiveCarousel from '../atoms/testeCarousel';
export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Classicos das tardes</title>
      </Helmet>
      <Box sx={{ flexGrow: 1, margin: 0 }}>
        <AppBar position='static'>
          <Toolbar>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              Classicos da tarde
            </Typography>
            <Button color='inherit'>login</Button>
            <Button color='inherit'>Cadastro</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <ResponsiveCarousel />
      <div className='back'>
        <h1>Clássicos da sessao da tarde</h1>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'nowrap',
          }}>
          {' '}
          <Link to={`/filmes`}>
            <Card sx={{ maxWidth: 400, margin: 1 }}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  image={garotosperdidos}
                  alt='poster-Garotos-Perdidos'
                />
              </CardActionArea>
            </Card>
          </Link>
          <Card sx={{ maxWidth: 400, margin: 1 }}>
            <CardActionArea>
              <CardMedia
                component='img'
                image={garotosperdidos}
                alt='poster-Garotos-Perdidos'
              />
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 400, margin: 1 }}>
            <CardActionArea>
              <CardMedia
                component='img'
                image={garotosperdidos}
                alt='poster-Garotos-Perdidos'
              />
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 400, margin: 1 }}>
            <CardActionArea>
              <CardMedia
                component='img'
                image={garotosperdidos}
                alt='poster-Garotos-Perdidos'
              />
            </CardActionArea>
          </Card>
        </Box>

        <h1>comedia</h1>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'nowrap',
          }}>
          <Card sx={{ maxWidth: 400, margin: 1 }}>
            <CardActionArea>
              <CardMedia
                component='img'
                image={garotosperdidos}
                alt='poster-Garotos-Perdidos'
              />
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 400, margin: 1 }}>
            <CardActionArea>
              <CardMedia
                component='img'
                image={garotosperdidos}
                alt='poster-Garotos-Perdidos'
              />
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 400, margin: 1 }}>
            <CardActionArea>
              <CardMedia
                component='img'
                image={garotosperdidos}
                alt='poster-Garotos-Perdidos'
              />
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 400, margin: 1 }}>
            <CardActionArea>
              <CardMedia
                component='img'
                image={garotosperdidos}
                alt='poster-Garotos-Perdidos'
              />
            </CardActionArea>
          </Card>
        </Box>
        <h1>romance</h1>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'nowrap',
          }}>
          <Card sx={{ maxWidth: 400, margin: 1 }}>
            <CardActionArea>
              <CardMedia
                component='img'
                image={garotosperdidos}
                alt='poster-Garotos-Perdidos'
              />
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 400, margin: 1 }}>
            <CardActionArea>
              <CardMedia
                component='img'
                image={garotosperdidos}
                alt='poster-Garotos-Perdidos'
              />
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 400, margin: 1 }}>
            <CardActionArea>
              <CardMedia
                component='img'
                image={garotosperdidos}
                alt='poster-Garotos-Perdidos'
              />
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 400, margin: 1 }}>
            <CardActionArea>
              <CardMedia
                component='img'
                image={garotosperdidos}
                alt='poster-Garotos-Perdidos'
              />
            </CardActionArea>
          </Card>
        </Box>
        <h1>terror</h1>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'nowrap',
          }}>
          <Card sx={{ maxWidth: 400, margin: 1 }}>
            <CardActionArea>
              <CardMedia
                component='img'
                image={garotosperdidos}
                alt='poster-Garotos-Perdidos'
              />
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 400, margin: 1 }}>
            <CardActionArea>
              <CardMedia
                component='img'
                image={garotosperdidos}
                alt='poster-Garotos-Perdidos'
              />
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 400, margin: 1 }}>
            <CardActionArea>
              <CardMedia
                component='img'
                image={garotosperdidos}
                alt='poster-Garotos-Perdidos'
              />
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 400, margin: 1 }}>
            <CardActionArea>
              <CardMedia
                component='img'
                image={garotosperdidos}
                alt='poster-Garotos-Perdidos'
              />
            </CardActionArea>
          </Card>
        </Box>
      </div>
    </div>
  );
}
