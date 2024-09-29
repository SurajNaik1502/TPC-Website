import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'

function NavBar() {
  return (
    <div className='nav-bar'>
      <Navbar>
        <Container className="container-fluid">
          <Navbar.Brand href="#home" className='logo'>DBIT</Navbar.Brand>
          <Nav className="me-auto d-flex justify-content-end w-100 sep">
            <Nav.Link href="#home" className='diff'>Home</Nav.Link>
            <Nav.Link href="#features" className='diff'>Batch 2022-23</Nav.Link>
            <Nav.Link href="#pricing" className='diff'>Batch 2023-24</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;