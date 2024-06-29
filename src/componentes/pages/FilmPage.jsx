import React from 'react';
import './FilmPage.css';
import { Tabs, Tab } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';

import garotosperdidos from '../../images/garotosperdidos.png';
import { Helmet } from 'react-helmet-async';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import { CardMedia, IconButton, Typography, Button, Card } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function FilmPage() {
  return (
    <div>
      <Helmet>
        <title>Nome-Do-Filme</title>
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
            <Link className='link' to='/'>
              <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                Clássicos da tarde
              </Typography>
            </Link>
            <Button color='inherit'>Login</Button>
            <Button color='inherit'>Cadastro</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <div className='container'>
        <Card sx={{ maxWidth: 200, margin: 1 }}>
          <CardMedia
            component='img'
            image={garotosperdidos}
            alt='poster-Garotos-Perdidos'
          />
        </Card>
        <div className='infoFilme'>
          <h2>Nome do filme</h2>
          <h6>Título original</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam,
            deleniti iste nesciunt at officia incidunt nostrum. Nisi vitae fuga
            magnam, in reprehenderit reiciendis consequatur et molestiae
            quisquam excepturi, eveniet aperiam?
          </p>
        </div>
      </div>
      <div>
        <Tabs defaultActiveKey='home' id='uncontrolled-tab-example'>
          <Tab eventKey='home' title='Detalhes'>
            <div>
              <h3>Ficha técnica</h3>
              <h4>Direção:</h4>
              <p>nome-diretor</p>
            </div>
          </Tab>
          <Tab eventKey='profile' title='outro '>
            <div>Profile content goes here...</div>
          </Tab>
          <Tab eventKey='contact' title='outros'>
            <div>Contact content goes here...</div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
