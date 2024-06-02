import { Button, ButtonGroup, Card, Col, Row, Form, Container } from 'react-bootstrap';
import { DashLg, PlusLg, XLg } from 'react-bootstrap-icons';
import imgPlaceholder from 'D:/Файлы/УлГТУ/3 семестр/ИП/lab5/src/Images/200.png';
import useCart from './cartHook';
import { Link } from 'react-router-dom';

const Cart = () => {
    const {
        cart,
        getCartSum,
        addToCart,
        removeFromCart,
        clearCart,
    } = useCart();

    const handleQuantityChange = (cartItem, event) => {
        const newQuantity = parseInt(event.target.value, 10);
        addToCart({ ...cartItem, count: newQuantity });
    };

    return (
        <Container>
            <Row>
                <Col className="d-flex justify-content-center align-items-center">
                    <h1 className="text-warning font-weight-bold">Корзина</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <strong className='d-flex justify-content-center mb-2'>
                        <Button variant='danger' onClick={() => clearCart()}>
                            <XLg /> Очистить
                        </Button>
                    </strong>
                    {cart.map((cartItem) => (
                        <Card key={cartItem.id} className='rounded-3 mb-4'>
                            <Card.Body className='p-4'>
                                <Row className="d-flex justify-content-between align-items-center">
                                    <Col md={2} lg={2} xl={2}>
                                        <img src={cartItem.image || imgPlaceholder} alt="Cart Image" className="img-fluid rounded-3" />
                                    </Col>
                                    <Col md={3} lg={3} xl={3}>
                                        <p className="lead fw-normal mb-2">{cartItem.typeId}</p>
                                    </Col>
                                    <Col md={4} lg={4} xl={3} className="d-flex align-items-center">
                                        <ButtonGroup className="w-100 align-items-center" aria-label="Cart counter">
                                            <Button variant="link" onClick={() => addToCart(cartItem)}>
                                                <PlusLg />
                                            </Button>
                                            <Form.Control
                                                id={`quantity-${cartItem.id}`}
                                                min="0"
                                                name="quantity"
                                                value={cartItem.count}
                                                type="number"
                                                className="form-control form-control-sm text-center"
                                                onChange={(e) => handleQuantityChange(cartItem, e)}
                                            />
                                            <Button variant="link" onClick={() => removeFromCart(cartItem)}>
                                                <DashLg />
                                            </Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col md={3} lg={2} xl={2}>
                                        <h5 className="mb-0">{parseFloat(cartItem.price * cartItem.count).toFixed(2)} ₽</h5>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    ))}
                    <div className='d-flex justify-content-between mb-2'>
                        <strong>Итого: {getCartSum()} ₽</strong>
                    </div>
                    {getCartSum() > 0 && (
                        <Link to='/MakingAnOrder' className="btn btn-warning">
                            К оплате
                        </Link>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default Cart;
