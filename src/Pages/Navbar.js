import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
export default function NavBar(){
    return(
        <div>
            <Navbar style={{backgroundColor:'black', color:'white'}} variant="dark"  expand="lg"> 
          <Container> 
            <Navbar.Brand href="/">Karim Apps </Navbar.Brand> 
            <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
            <Navbar.Collapse id="basic-navbar-nav"> 
              <Nav className="me-auto"> 
              <Nav.Link as={Link} to="/">
                Accueil
            </Nav.Link>
            <Nav.Link as={Link} to="/Calculator">
                Calculator
            </Nav.Link>
            <Nav.Link as={Link} to="/Formu">
                Formulaire
            </Nav.Link>
            <Nav.Link as={Link} to="/TodoList">
                TodoList
            </Nav.Link>
            <Nav.Link as={Link} to="/WorldSlider">
                WorldSlider
            </Nav.Link>
              </Nav> 
            </Navbar.Collapse> 
          </Container> 
        </Navbar> 

        </div>
    )
}