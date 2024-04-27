import React from 'react'
import { Link } from 'react-router-dom'
import { Nav,  NavDropdown, Navbar } from 'react-bootstrap';

const NavBar = (props) => { 
    // logout function variable
    const logout = ()=>{
        localStorage.clear();
        props.setUser(null);
    }
    // create variable to hold the data
    let buttons, profile,navBar;
    if (localStorage.getItem('token')) {
        // change the content of button
      
        profile=(
            <div>
                <Link className="nav-link active" to="/profile">Profile</Link>
                <Link className="nav-link active" to="/saved">Saved</Link>
                <Link className="nav-link active" to="/pending">Orders</Link>
                <Link className="nav-link active" to="/chat">Chat</Link>
            </div>
        )
        navBar=(
          <Navbar bg="white" expand="lg" className="shadow-sm fixed-top">
          <div className="container py-1">
            <Navbar.Brand>
              <Link to="/"><img src={require('../images/logos/logo_like.png')} className="logo" alt=""/></Link>
            </Navbar.Brand>
              
              <NavDropdown title="ACCOUNT" id="dropdownMenuLink" className="order-lg-1 btn btn-dark nav-acc">
                <NavDropdown.Item><Link className="nav-link active" to="/profile">Profile</Link></NavDropdown.Item>
                <NavDropdown.Item><Link className="nav-link active" to="/saved">Save Later</Link></NavDropdown.Item>
                <NavDropdown.Item><Link className="nav-link active" to="/pending">Orders</Link></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item> <Link className="nav-link active" to="/" onClick={logout}>Sign Out</Link></NavDropdown.Item>
              </NavDropdown>
           
  
            {/* Centered paragraph with image */}
            <div className="text-center mx-auto">
              <p><img src="image/index/search.png" alt="" style={{ width: '90px' }} /></p>
            </div>
  
            <Navbar.Toggle className="ms-3" aria-controls="navbarNavAltMarkup" />
            <Navbar.Collapse id="navbarNavAltMarkup" className="justify-content-center">
              <Nav className="ms-lg-4">
                <Nav.Link className="nav-link active" aria-current="page"> <Link to="/" className='link'>HOME</Link></Nav.Link>
                <Nav.Link  className="nav-link"> <Link to="/gallery" className='link' >GALLERY</Link></Nav.Link>
  
                <Nav.Link  className="nav-link"> <Link to="/about" className='link' >ABOUT</Link></Nav.Link>
                <Nav.Link  className="nav-link"> <Link to="/chat" className='link' >COSTUMER SERVICE</Link></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
          </Navbar>
        )
          
        
    } else {
      navBar=(
        <Navbar bg="white" expand="lg" className="shadow-sm fixed-top">
        <div className="container py-1">
        <Navbar.Brand>
              <Link to="/"><img src={require('../images/logos/logo_like.png')} className="logo" alt=""/></Link>
            </Navbar.Brand>
            
          <div className="order-lg-1">
              <Link to="/login" className='btn btn-dark'>SIGN IN</Link>
            </div>
         

          {/* Centered paragraph with image */}
          <div className="text-center mx-auto">
          <img src={require('../images/logos/logo_like.png')} className="logo" alt=""/>
            {/* <p><img src="image/index/search.png" /></p> */}
          </div>

          <Navbar.Toggle className="ms-3" aria-controls="navbarNavAltMarkup" />
          <Navbar.Collapse id="navbarNavAltMarkup" className="justify-content-center">
            {/* <Nav className="ms-lg-4">
              <Nav.Link className="nav-link active" aria-current="page"> <Link to="/" className='link'>HOME</Link></Nav.Link>
              <Nav.Link  className="nav-link"> <Link to="/gallery" className='link' >GALLERY</Link></Nav.Link>

              <Nav.Link  className="nav-link"> <Link to="/about" className='link' >ABOUT</Link></Nav.Link>
              <Nav.Link  className="nav-link"> <Link to="/notAvailable" className='link' >CONTACT US</Link></Nav.Link>
            </Nav> */}
          </Navbar.Collapse>
        </div>
      </Navbar>
      )
        buttons = (
            <div>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" to="/register">Register</Link>
                    </li>
                </ul>
            </div>
        );
    }
  return (
    <div>
       {navBar}
        {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Lake</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    {profile}
                    </li>
                </ul>
                <span className="navbar-text">
                    {buttons}
                </span>
                </div>
            </div>
        </nav> */}
    </div>
  )
}

export default NavBar