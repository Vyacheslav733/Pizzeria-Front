import { useState } from 'react';
import { Card, Col, Row, Form } from 'react-bootstrap';

const BasketCard = () => {
  const [quantity, setQuantity] = useState(2);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <Card className="rounded-3 mb-4">
      <Card.Body className="p-4">
        <Row className="d-flex justify-content-between align-items-center">
          <Col md={2} lg={2} xl={2}>
            <img src="./src/Images/pizza.png" className="img-fluid rounded-3" alt="Cotton T-shirt" />
          </Col>
          <Col md={3} lg={3} xl={3}>
            <p className="lead fw-normal mb-2">Название пиццы</p>
          </Col>
          <Col md={3} lg={3} xl={2} className="d-flex align-items-center">
            <Form.Control
              id="form1"
              min="0"
              name="quantity"
              value={quantity}
              type="number"
              className="form-control form-control-sm text-center"
              onChange={handleQuantityChange}
            />
          </Col>
          <Col md={3} lg={2} xl={2} offset-lg={1}>
            <h5 className="mb-0">Цена ₽</h5>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default BasketCard;
