import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Footer from './components/footer/Footer.jsx';
import Navigation from './components/navigation/Navigation.jsx';
import { CartProvider } from './components/card/CartContext.jsx';
import { UserProvider } from './components/users/UserContext.jsx';

const App = ({ routes }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <UserProvider>
        <CartProvider>
          <Navigation routes={routes}></Navigation>
              <Container className="flex-grow-1 p-2" as="main" fluid>
                <Outlet />
              </Container>
            <Footer />
          <Toaster position='top-center' reverseOrder={true} />
        </CartProvider>
      </UserProvider>
    </div>
  );
};

App.propTypes = {
  routes: PropTypes.array,
};

export default App;
