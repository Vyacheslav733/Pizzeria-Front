import PropTypes from 'prop-types';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import './Navigation.css';
import { Cart2 } from 'react-bootstrap-icons';
import useCart from '../card/cartHook';

const Navigation = ({ routes }) => {
  const { getCartSum } = useCart();
  const location = useLocation();
  const indexPageLink = routes.find((route) => route.index === true); 
  const pages = routes.filter((route) => Object.prototype.hasOwnProperty.call(route, 'title'));

  const storedUserData = localStorage.getItem('user');
  const storedUser = storedUserData ? JSON.parse(storedUserData) : {};
  const userName = storedUser && storedUser.handle ? storedUser.handle : '';
  const isAdmin = userName.toLowerCase() === 'admin';

  return (
    <Navbar expand='md' className='my-navbar'>
      <Container fluid>
        <Navbar.Brand as={Link} to={indexPageLink?.path ?? '/'}>
          <Image src="./src/Images/logo.png" width="128" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='main-navbar' />
        <Navbar.Collapse id='main-navbar'>
          <Nav className='me-auto link' activeKey={location.pathname}>
            {pages.map((page) => (
              <Nav.Link as={Link} key={page.path} eventKey={page.path} to={page.path ?? '/'}>
                {page.title}
              </Nav.Link>
            ))}
          </Nav>
          <Nav>
            {userName ? (
              <>
                <Button className="custom-btn" as={Link} to="/personalAccount">
                  {userName}
                </Button>
                {isAdmin && (
                  <Button className="custom-btn" as={Link} to="/administrator">
                    Панель
                  </Button>
                )}
              </>
            ) : (
              <Button className="custom-btn" as={Link} to="/personalAccountLogin">
                Профиль
              </Button>
            )}
            <Button variant="warning" as={Link} to="/Basket">
              <Cart2 className='d-inline-block align-top me-1 logo' /> {getCartSum() ?? ''} &#8381;
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

Navigation.propTypes = {
  routes: PropTypes.array,
};

export default Navigation;
