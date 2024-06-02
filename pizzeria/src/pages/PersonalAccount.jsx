import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PersonalAccount = () => {
    const [validated, setValidated] = useState(false);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    useEffect(() => {
        const storedUserData = localStorage.getItem('user');
        const storedUser = storedUserData ? JSON.parse(storedUserData) : {};

        if (storedUser) {
            setName(storedUser.handle || '');
            setSurname(storedUser.surname || '');
            setEmail(storedUser.email || '');
            setBirthdate(storedUser.birthdate || '');
            setPhoneNumber(storedUser.phoneNumber || '');
        }
    }, []);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            const storedUserData = localStorage.getItem('user');
            const storedUser = storedUserData ? JSON.parse(storedUserData) : {};

            const newUserData = {
                ...storedUser,
                handle: name,
                surname: surname,
                email: email,
                birthdate: birthdate,
                phoneNumber: phoneNumber,
            };

            localStorage.setItem('user', JSON.stringify(newUserData));
        }

        setValidated(true);
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        history.push('/');
    };

    return (
        <Container className="h-100">
            <Row className="justify-content-center align-items-center h-100">
                <Col xs={12} md={9} lg={7} xl={6}>
                    <Card style={{ borderRadius: '15px', borderColor: 'gold' }}>
                        <Card.Body className="p-5">
                            <h2 className="text-uppercase text-center mb-5">Личный кабинет</h2>

                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Form.Group className="mb-4">
                                    <Form.Label>Ваше имя</Form.Label>
                                    <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} readOnly />
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label>Ваша фамилия</Form.Label>
                                    <Form.Control type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label>Ваш адрес электронной почты</Form.Label>
                                    <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label>Дата рождения</Form.Label>
                                    <Form.Control type="date" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
                                </Form.Group>

                                <Form.Group className="mb-2">
                                    <Form.Label>Номер телефона</Form.Label>
                                    <Form.Control type="tel"value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                                </Form.Group>

                                <div className="d-flex justify-content-center">
                                    <Button variant="warning" type="submit" id="saveButton">
                                        Сохранить
                                    </Button>
                                </div>

                                <div className="d-flex justify-content-center mt-2">
                                    <Link className="btn btn-outline-danger" type="button" onClick={handleLogout} to="/">
                                        Выйти
                                    </Link>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default PersonalAccount;
