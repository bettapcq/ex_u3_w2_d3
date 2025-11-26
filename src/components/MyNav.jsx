import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';
import { IoIosSearch } from 'react-icons/io';
import { FaRegBell, FaUserCircle } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const MyNav = () => {
  const location = useLocation();

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      data-bs-theme="dark"
      className="bg-body-tertiary"
    >
      <Container className="mx-0" fluid>
        <Link to="/" className="navbar-brand">
          <Image
            src="src/assets/logo.png"
            alt="logo"
            className="img-fluid"
            width="100"
          />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link
              to="/"
              className={
                location.pathname === '/' ? 'nav-link active' : 'nav-link'
              }
            >
              Home
            </Link>
            <Link
              to="/tvshows"
              className={
                location.pathname === '/tvshows'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              TV Shows
            </Link>
            <Link to="/movies" className="nav-link">
              Movies
            </Link>
            <Link to="/recent" className="nav-link">
              Recently Added
            </Link>
            <Link to="/mylist" className="nav-link">
              My List
            </Link>
          </Nav>
          <Nav>
            <Nav.Link href="#">
              <IoIosSearch />
            </Nav.Link>
            <Nav.Link href="#">KIDS</Nav.Link>
            <Nav.Link href="#">
              <FaRegBell />
            </Nav.Link>
            <Nav.Link href="#">
              <FaUserCircle />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
