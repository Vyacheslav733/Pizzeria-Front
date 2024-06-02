import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UsersApiService from '../components/users/service/UsersApiService';
import useSubmit from '../components/users/regHook';
import useUser from '../components/users/userHook';

const PersonalAccountRegister = () => {
    const [validated, setValidated] = useState(false);
    const { userLogin } = useUser();
    const { onSubmit } = useSubmit();
    const navigate = useNavigate();
      
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            setValidated(true);
    
            const formData = {
                handle: name,
                email: email,
                password: password,
            };
    
            const result = await onSubmit(formData);
    
            if (result === 1) {
                alert('Пользователь с таким хэндлом уже существует');
            } else if (result === 2) {
                alert('Пользователь с таким email уже существует');
            } else if (result === 3) {
                await UsersApiService.create(formData);
                userLogin(formData);
                navigate('/PersonalAccount');
            }
        }
    };
    

    return (
        <Container className="h-100">
            <Row className="justify-content-center align-items-center h-100">
                <Col xs={12} md={9} lg={7} xl={6}>
                    <Card style={{ borderRadius: '15px', borderColor: 'gold' }}>
                        <Card.Body className="p-5">
                            <h2 className="text-uppercase text-center mb-5">Создать учетную запись</h2>

                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Form.Group className="mb-4">
                                    <Form.Control
                                        type="text"
                                        id="formHandle"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                    <Form.Control.Feedback>Имя заполнено</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">Имя не заполнено</Form.Control.Feedback>
                                    <Form.Label>Ваше имя</Form.Label>
                                </Form.Group>
                                <Form.Group className="mb-4">
                                    <Form.Control
                                        type="email"
                                        id="formEmail"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <Form.Control.Feedback>Email заполнен</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">Email не заполнен</Form.Control.Feedback>
                                    <Form.Label>Ваш адрес электронной почты</Form.Label>
                                </Form.Group>
                                <Form.Group className="mb-4">
                                    <Form.Control
                                        type="password"
                                        id="formPassword"
                                        size="lg"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <Form.Control.Feedback>Пароль заполнен</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">Пароль не заполнен</Form.Control.Feedback>
                                    <Form.Label htmlFor="form3Example4cg">Пароль</Form.Label>
                                </Form.Group>
                                <Form.Group controlId="formCheckbox" className="d-flex justify-content-center mb-5">
                                    <Form.Check type="checkbox" label={
                                        <span>
                                            Я согласен со всеми утверждениями в{' '}
                                            <a href="#!" className="text-body">
                                                <u>Условиях обслуживания</u>
                                            </a>
                                        </span>
                                    } />
                                </Form.Group>

                                <div className="d-flex justify-content-center">
                                    <Button to='/personalAccount' type="submit" className="btn-block btn-warning text-body mb-0">
                                        Вход
                                    </Button>
                                </div>

                                <p className="text-center text-muted mb-0">
                                    У вас уже есть учетная запись?{' '}
                                    <Link to='/PersonalAccountLogin' className="fw-bold text-body" style={{ color: 'black', textDecoration: 'none' }}>
                                        <u>Войдите здесь</u>
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

export default PersonalAccountRegister;
