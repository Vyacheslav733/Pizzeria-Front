import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useUser from '../components/users/userHook';
import useSubmit from '../components/users/loginHook';

const PersonalAccountLogin = () => {
  const [validated, setValidated] = useState(false);
  const { userLogin } = useUser();
  const { onSubmit } = useSubmit();
  const navigate = useNavigate();

    const handleSubmit = async (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
      } else {
        event.preventDefault();
        setValidated(true);
  
        const formData = {
          handle: form.elements.formHandle.value,
          password: form.elements.formPassword.value,
        };

        const result = await onSubmit(formData);

        if (result === 1) {
          alert('Пользователь с таким хэндлом не существует');
        } else if (result === 2) {
          alert('Введен неверный пароль');
        } else if (result === 3) {
          userLogin(formData);
          navigate('/PersonalAccount');
        }
      }
    };

  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center h-100">
        <Col xs={12} md={9} lg={7} xl={6}>
          <Card style={{ borderRadius: '15px', borderColor: 'gold' }}>
            <Card.Body className="p-5">
              <h2 className="text-uppercase text-center mb-5">Войти</h2>

              <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-4">
                  <Form.Control type="text" id="formHandle" required />
                  <Form.Control.Feedback>Имя заполнено</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">Имя не заполнено</Form.Control.Feedback>
                  <Form.Label htmlFor="formHandle">Имя</Form.Label>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Control type="password" id="formPassword" size="lg" required />
                  <Form.Control.Feedback>Пароль заполнен</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">Пароль не заполнен</Form.Control.Feedback>
                  <Form.Label htmlFor="formPassword">Пароль</Form.Label>
                </Form.Group>

                <Form.Group className="mb-2" controlId="formRememberMe">
                  <Form.Check type="checkbox" label="Запомнить меня" />
                </Form.Group>

                <p className="text-center text-muted mb-0">
                  Забыли пароль?{' '}
                  <Link to='/PasswordRecovery' className="fw-bold text-body" style={{ color: 'black', textDecoration: 'none' }}>
                    <u>Восстановление пароля</u>
                  </Link>
                </p>

                <div className="d-flex justify-content-center">
                  <Button to='/personalAccount' type="submit" className="btn-block btn-warning text-body mb-0">
                    Вход
                  </Button>
                </div>

                <p className="text-center text-muted mb-0">
                  У вас нет аккаунта?{' '}
                  <Link to='/personalAccountRegister' className="fw-bold text-body" style={{ color: 'black', textDecoration: 'none' }}>
                    <u>Регистрация</u>
                  </Link>
                </p>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PersonalAccountLogin;