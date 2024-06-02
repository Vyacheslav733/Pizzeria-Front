import { Container, Row, Col } from 'react-bootstrap';

const Contacts = () => {
    return (
        <Container>
            <Row>
                <Col className="d-flex justify-content-center align-items-center">
                    <h1 className="text-warning font-weight-bold">Контакты</h1>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center">
                    <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A0643c92cbdf3809080e5dfb2804b473ea00af31cfabe6fee08676c59d8675f01&amp;source=constructor"
                    className="img-fluid"
                    style={{ width: '100%', height: '500px' }}
                    title="Yandex Map"
                    ></iframe>
                </Col>
            </Row>
            <Row>
                <Col>
                    <a href="tel:71112223344" className="text-warning font-weight-bold" style={{ fontSize: '35px', marginLeft: '10px', marginTop: '10px' }}>
                        7 111 222 33 44
                    </a>
                    <h2 className="font-weight-bold" style={{ fontSize: '35px', marginLeft: '10px', marginTop: '10px' }}>
                        ул. Северный венец 32
                    </h2>
                    <p style={{ fontSize: '25px', marginLeft: '10px', marginTop: '10px' }}>Доставка и самовывоз 10:00 — 23:00</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Contacts;