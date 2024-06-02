import { Col, Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ProductCard = ({ line, onAddCart }) => {

  const handleAnchorClick = (event, action) => {
    event.preventDefault();
    action();
  };

  return (
    <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
      <Card>
        <Card.Img src={line.image || "./src/Images/200.png"} alt="Product Image" className="card-img-top" />
        <Card.Body>
          <Card.Title>{line.typeId}</Card.Title>
        </Card.Body>
        <Card.Footer>
          <div className="text-warning font-weight-bold">Цена {line.price} ₽</div>
          <Button variant="warning" onClick={(event) => handleAnchorClick(event, onAddCart)}>В корзину</Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

ProductCard.propTypes = {
  line: PropTypes.shape({
    image: PropTypes.string,
    typeId: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  onAddCart: PropTypes.func,
};

export default ProductCard;