import './App.css';
import Home from './componentes/pages/Home';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FilmPage from './componentes/pages/FilmPage';
import BoostrapCarro from './componentes/pages/BoostrapCarro';
import MovieFetcher from './componentes/pages/teste';
import { LinkContainer } from 'react-router-bootstrap';

import {
  Container,
  Nav,
  NavDropdown,
  Navbar,
  ToastContainer,
} from 'react-bootstrap';
import { Link } from '@mui/material';
import TelaUser from './componentes/pages/TelaUser';

function App() {
  return (
    <BrowserRouter>
      <div className='d-flex flex-column site-container'>
        <ToastContainer position='bottom-center' limit={1} />
        <header>
          <Navbar bg='dark' variant='dark'>
            <Container>
              <LinkContainer to='/'>
                <Navbar.Brand>classicos das tardes</Navbar.Brand>
              </LinkContainer>
              <Nav className='me-auto'>
                <Link to='/cart' className='nav-link'>
                  teste
                </Link>
                <NavDropdown>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>2</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/orderhistory'>
                    <NavDropdown.Item>1y</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Divider />
                </NavDropdown>

                <Link className='nav-link' to='/login'>
                  Login
                </Link>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/filmes' element={<FilmPage />} />
          <Route path='/teste' element={<MovieFetcher />} />
          <Route path='/login' element={<TelaUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
