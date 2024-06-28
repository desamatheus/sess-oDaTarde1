import React from 'react';
import garotosperdidos from '../../images/garotosperdidos.png';

const BackgroundComponent = () => {
  const backgroundStyle = {
    backgroundImage: `url(${garotosperdidos})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '50vh',
  };

  return <div style={backgroundStyle}>{/* Seu conteúdo aqui */}</div>;
};

export default BackgroundComponent;
