import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../components/card/ProductCard';
import { useEffect, useState } from 'react';
import LinesApiService from '../components/lines/service/LinesApiService';
import useTypes from '../components/types/hooks/TypesHook';
import useCart from '../components/card/cartHook';


const Index = () => {
    const { typesById } = useTypes();
    const [lines, setLines] = useState([]);

    useEffect(() => {
        LinesApiService.getAll()
            .then(data => {
                const mappedLines = data.map((item, index) => ({
                    typeId: typesById[item.typeId] || 'Тип не найден',
                    price: parseFloat(item.price),
                    image: item.image,
                    id: index + 1,
                }));

                setLines(mappedLines);
            })
            .catch(error => {
                console.error('Error fetching data from LinesApiService:', error);
            });
    }, [typesById]);

    const { addToCart } = useCart();

    return (
        <Container>
            <Row>
                <Col className="d-flex justify-content-center align-items-center">
                    <h1 className="text-warning font-weight-bold">Каталог</h1>
                </Col>
            </Row>
            <Row>
                {lines.map(line => (
                    <ProductCard key={line.id} line={line} 
                    onAddCart={() => addToCart(line)}/>
                ))}
            </Row>
        </Container>
    );
};

export default Index;
