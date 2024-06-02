import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const PasswordRecovery = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Container className="h-100">
            <Row className="d-flex justify-content-center align-items-center h-100">
                <Col xs={12} md={9} lg={7} xl={6}>
                    <Card style={{ borderRadius: '15px', borderColor: 'gold' }}>
                        <Card.Body className="p-5">
                            <h2 className="text-uppercase text-center mb-5">Восстановление пароля</h2>
                            <h4 className="text-black text-center mb-5">
                                Введите свой адрес электронной почты, и мы вышлем вам электронное письмо с инструкциями по сбросу вашего пароля
                            </h4>
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Form.Group className="mb-4">
                                    <Form.Label htmlFor="form3Example3cg">Ваш адрес электронной почты</Form.Label>
                                    <Form.Control type="email" id="form3Example3cg" required />
                                    <Form.Control.Feedback>Email заполнен</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">Email не заполнен</Form.Control.Feedback>
                                </Form.Group>

                                <div className="d-flex justify-content-center">
                                    <Button type="submit" className="btn-block btn-warning text-body mb-0">
                                        Сбросить пароль
                                    </Button>
                                </div>

                                <p className="text-center text-muted mb-0">
                                    <Link className="fw-bold text-body" to='/PersonalAccountLogin' style={{ color: 'black', textDecoration: 'none' }}><u>Войти</u></Link>
                                </p>

                                <p className="text-center text-muted mb-0">
                                    <Link className="fw-bold text-body" to='/PersonalAccountRegister' style={{ color: 'black', textDecoration: 'none' }}><u>Регистрация</u></Link>
                                </p>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
  );
};

export default PasswordRecovery;
