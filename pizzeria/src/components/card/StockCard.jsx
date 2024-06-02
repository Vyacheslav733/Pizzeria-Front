import { Col, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import useTypes from '../types/hooks/TypesHook';

const StockCard = ({ stock, lines }) => {
  const { typesById } = useTypes();

  return (
    <Col lg={4} md={6} sm={12} className="mb-4">
      <Card>
        <Card.Img src="./src/Images/stock.png" alt="Stock Image" className="card-img-top" />
        <Card.Body>
          <Card.Title>{stock.name}</Card.Title>
          <Card.Text>
            Размер акции: {stock.value}
          </Card.Text>
          {lines && (
            <Card.Text>
              Акция применена к товару: {typesById[lines.find(line => line.stock === stock.value)?.typeId]}
            </Card.Text>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

StockCard.propTypes = {
  stock: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string.isRequired,
  }).isRequired,
  lines: PropTypes.oneOfType([
    PropTypes.object, 
    PropTypes.arrayOf(PropTypes.object),
  ]),
};

export default StockCard;
