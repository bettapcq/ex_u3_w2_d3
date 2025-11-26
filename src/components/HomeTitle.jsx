import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CiGrid41 } from 'react-icons/ci';
import { BsGrid3X3 } from 'react-icons/bs';

function HomeTitle(props) {
  return (
    <Navbar data-bs-theme="dark" className="bg-body-tertiary">
      <Container className="bg-body-tertiary justify-content-between" fluid>
        <Nav className="d-flex w-100">
          <Navbar.Brand href="#">TV {props.title}</Navbar.Brand>
          <Nav.Item className="flex-grow-1">
            <NavDropdown title="Genres" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Comedy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Drama</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Thriller</NavDropdown.Item>
            </NavDropdown>
          </Nav.Item>
          <Nav>
            <Nav.Link href="#home">
              <CiGrid41 />
            </Nav.Link>
            <Nav.Link href="#link">
              <BsGrid3X3 />
            </Nav.Link>
          </Nav>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default HomeTitle;
