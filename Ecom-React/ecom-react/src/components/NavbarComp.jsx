import {Button, Container, Navbar , Modal} from 'react-bootstrap'

const NavbarComp = () => {
  return (
      <Navbar expand="sm">
        <Navbar.Brand href='/'>Ecom</Navbar.Brand>
       <Navbar.Toggle />
       <Navbar.Collapse className="justify-content-end">
        <Button>Cart 0 Items</Button>
       </Navbar.Collapse>
         

      </Navbar>
  )
}

export default NavbarComp