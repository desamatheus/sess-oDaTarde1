// CarrosselComponent.js
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import '../../App.css';
import garotosperdidos from '../../images/garotosperdidos.png';
const items = [
  {
    name: 'Item 1',
    description: 'voce e um amigo meu amigo',
    imageUrl: garotosperdidos,
  },
  {
    name: 'Item 2',
    description: 'Descrição do item 2',
    imageUrl: 'https://via.placeholder.com/800x400',
  },
  {
    name: 'Item 3',
    description: 'Descrição do item 2',
    imageUrl: 'https://via.placeholder.com/800x400',
  },
  {
    name: 'Item 4',
    description: 'Descrição do item 2',
    imageUrl: 'https://via.placeholder.com/800x400',
  },
];

function CarrosselComponent() {
  return (
    <Carousel
      NextIcon={<ArrowForwardIosIcon fontSize='large' />}
      PrevIcon={<ArrowBackIosIcon fontSize='large' />}
      navButtonsProps={{
        style: {
          backgroundColor: 'black',
          borderRadius: 0,
        },
      }}
      navButtonsWrapperProps={{
        style: {
          top: 'calc(50% - 20px)',
          height: 'auto',
        },
      }}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper className='carousel-item'>
      <div className='image-container'>
        <img
          src={props.item.imageUrl}
          alt={props.item.name}
          className='carousel-image'
        />
      </div>
    </Paper>
  );
}

export default CarrosselComponent;
