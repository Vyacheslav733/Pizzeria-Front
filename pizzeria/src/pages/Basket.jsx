import { Container, Row, Col } from 'react-bootstrap';
import BasketCard from '../components/card/BasketCard';
import { Link } from 'react-router-dom';

const Basket = () => {
    return (
        <Container>
            <Row>
                <Col className="d-flex justify-content-center align-items-center">
                    <h1 className="text-warning font-weight-bold">Корзина</h1>
                </Col>
            </Row>
            <Row>
                <Col xs={10}>
                    <BasketCard />
                    <BasketCard />
                    <BasketCard />
                </Col>
            </Row>
            <div className="d-flex justify-content-start align-items-center">
                <div className="text-dark font-weight-bold" style={{ fontSize: '24px' }}>
                Сумма заказа:
                </div>
                <div className="text-end" style={{ color: '#F7D22D', fontSize: '24px' }}>
                Сумма ₽
                </div>
            </div>
            <Link to='/MakingAnOrder' className="btn btn-warning" style={{ marginLeft: '25px', marginBottom: '10px' }}>
                К оплате
            </Link>
        </Container>
    );
};

export default Basket;