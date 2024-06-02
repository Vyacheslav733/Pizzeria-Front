import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import StocksApiService from '../components/lines/service/StocksApiService.js'
import StockCard from '../components/card/StockCard';
import LinesApiService from '../components/lines/service/LinesApiService.js';

const Stock = () => {
    const [stocks, setStocks] = useState([]);
    const [lines, setLines] = useState([]);

    useEffect(() => {
        StocksApiService.getAll()
            .then(data => {
                setStocks(data);
            })
            .catch(error => {
                console.error('Error fetching data from StockApiService:', error);
            });
        LinesApiService.getAll()
            .then(data => {
                setLines(data);
            })
            .catch(error => {
                console.error('Error fetching data from LinesApiService:', error);
            });
    }, []); 

    const filteredStocks = stocks.slice(1);

    return (
        <Container>
            <Row>
                <Col className="d-flex justify-content-center align-items-center">
                    <h1 className="text-warning font-weight-bold">Акции</h1>
                </Col>
            </Row>
            <Row>
            {filteredStocks.map(stock => (
                <StockCard key={stock.id} stock={stock} lines={lines} />
            ))}
            </Row>
        </Container>
    );
};

export default Stock;
