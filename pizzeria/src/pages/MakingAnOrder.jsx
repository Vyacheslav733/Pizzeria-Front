import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const MakingAnOrder = () => {
  const [deliveryMethod,  setDeliveryMethod] = useState('selfPickup');
  const [paymentMethod, setPaymentMethod] = useState('cash');

  const handleDeliveryMethodChange = (e) => {
    setDeliveryMethod(e.target.value);
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
      }

      setValidated(true);
  };

  const [name, setName] = useState('');

    useEffect(() => {
        const storedName = localStorage.getItem('nameOfUser');
        if (storedName) {
        setName(storedName);
        }
    }, []);

  return (
    <Container className="h-100">
      <Row className="d-flex justify-content-center align-items-center h-100">
        <Col xs={12} md={9} lg={7} xl={6}>
          <Card style={{ borderRadius: '15px', borderColor: 'gold' }}>
            <Card.Body className="p-5">
              <h2 className="text-uppercase text-center mb-5">Оформление заказа</h2>

              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-4" controlId="name">
                    <Form.Label>Ваше имя</Form.Label>
                    <Form.Control type="text" value={name} required onChange={(e) => setName(e.target.value)} />
                    <Form.Control.Feedback>Имя заполнено</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">Имя не заполнено</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-2">
                    <Form.Label htmlFor="form3Example5cg">Номер телефона</Form.Label>
                    <Form.Control type="tel" id="form3Example5cg" required />
                    <Form.Control.Feedback>Номер телефона заполнен</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">Номер телефона не заполнен</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Вариант получения</Form.Label>
                  <Form.Check
                    type="radio"
                    label="Самовывоз"
                    id="selfPickup"
                    name="deliveryMethod"
                    value="selfPickup"
                    checked={deliveryMethod === 'selfPickup'}
                    onChange={handleDeliveryMethodChange}
                  />
                  <Form.Check
                    type="radio"
                    label="Доставка"
                    id="delivery"
                    name="deliveryMethod"
                    value="delivery"
                    checked={deliveryMethod === 'delivery'}
                    onChange={handleDeliveryMethodChange}
                  />
                </Form.Group>

                {deliveryMethod === 'delivery' && (
                  <div>
                    <Form.Group className="mb-4" controlId="adress">
                      <Form.Label>Ваш адрес доставки</Form.Label>
                      <Form.Control type="text" required/>
                      <Form.Control.Feedback>Адрес заполнен</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">Адрес не заполнен</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>Выберите время доставки:</Form.Label>
                      <Form.Select>
                      <option value="10:00-10:30">10:00-10:30</option>
                      <option value="10:30-11:00">10:30-11:00</option>
                      <option value="11:00-11:30">11:00-11:30</option>
                      <option value="11:30-12:00">11:30-12:00</option>
                      <option value="12:00-12:30">12:00-12:30</option>
                      <option value="12:30-13:00">12:30-13:00</option>
                      <option value="13:00-13:30">13:00-13:30</option>
                      <option value="13:30-14:00">13:30-14:00</option>
                      <option value="14:00-14:30">14:00-14:30</option>
                      <option value="14:30-15:00">14:30-15:00</option>
                      <option value="15:00-15:30">15:00-15:30</option>
                      <option value="15:30-16:00">15:30-16:00</option>
                      <option value="16:00-16:30">16:00-16:30</option>
                      <option value="16:30-17:00">16:30-17:00</option>
                      <option value="17:00-17:30">17:00-17:30</option>
                      <option value="17:30-18:00">17:30-18:00</option>
                      <option value="18:00-18:30">18:00-18:30</option>
                      <option value="18:30-19:00">18:30-19:00</option>
                      <option value="19:00-19:30">19:00-19:30</option>
                      <option value="19:30-20:00">19:30-20:00</option>
                      <option value="20:00-20:30">20:00-20:30</option>
                      <option value="20:30-21:00">20:30-21:00</option>
                      <option value="21:00-21:30">21:00-21:30</option>
                      <option value="21:30-22:00">21:30-22:00</option>
                      <option value="22:00-22:30">22:00-22:30</option>
                      <option value="22:30-23:00">22:30-23:00</option>  
                      </Form.Select>
                    </Form.Group>
                  </div>
                )}

                <Form.Group className="mb-4">
                  <Form.Label>Вариант оплаты</Form.Label>
                  <Form.Check
                    type="radio"
                    label="Наличные"
                    id="cash"
                    name="paymentMethod"
                    value="cash"
                    checked={paymentMethod === 'cash'}
                    onChange={handlePaymentMethodChange}
                  />
                  <Form.Check
                    type="radio"
                    label="Оплата картой"
                    id="creditCard"
                    name="paymentMethod"
                    value="creditCard"
                    checked={paymentMethod === 'creditCard'}
                    onChange={handlePaymentMethodChange}
                  />
                </Form.Group>

                {paymentMethod === 'creditCard' && (
                  <div>
                    <Row className="mb-4">
                      <Col>
                        <Form.Group className="mb-2" controlId="formNameOnCard">
                          <Form.Label>Имя держателя карты</Form.Label>
                          <Form.Control type="text" required />
                          <Form.Control.Feedback>Имя заполнено</Form.Control.Feedback>
                          <Form.Control.Feedback type="invalid">Имя не заполнено</Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group className="mb-2" controlId="formCardNumber">
                          <Form.Label>Номер карты</Form.Label>
                          <Form.Control type="text" pattern="[0-9]{16}" required />
                          <Form.Control.Feedback>Номер карты заполнен</Form.Control.Feedback>
                          <Form.Control.Feedback type="invalid">Введите правильный номер карты</Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row className="mb-4">
                      <Col>
                        <Form.Group className="mb-2" controlId="formExpiration">
                          <Form.Label>Срок действия</Form.Label>
                          <Form.Control type="text" pattern="\d{2}/\d{2}" required />
                          <Form.Control.Feedback>Срок действия заполнен</Form.Control.Feedback>
                          <Form.Control.Feedback type="invalid">Введите правильный срок действия</Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group className="mb-2" controlId="formCVV">
                          <Form.Label>CVV</Form.Label>
                          <Form.Control type="text" pattern="\d{3}" required />
                          <Form.Control.Feedback>CVV заполнен</Form.Control.Feedback>
                          <Form.Control.Feedback type="invalid">Введите правильный CVV</Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>
                  </div>
                )}

                <div className="d-flex justify-content-center">
                  <Button variant="warning" type="submit" id="saveButton">
                    Оформить
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MakingAnOrder;
