import './App.css';
import Home from './componentes/pages/Home';

import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FilmPage from './componentes/pages/FilmPage';
import BoostrapCarro from './componentes/pages/BoostrapCarro';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/filmes' element={<FilmPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
