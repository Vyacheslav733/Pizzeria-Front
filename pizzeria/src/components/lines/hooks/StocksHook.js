import { useEffect, useState } from 'react';
import StocksApiService from '../service/StocksApiService';

const useStocks = () => {
    const [stocksRefresh, setStocksRefresh] = useState(false);
    const [stocks, setStocks] = useState([]);
    const handleStocksChange = () => setStocksRefresh(!stocksRefresh);

    const getStocks = async () => {
        let expand = '?_expand=';
        const data = await StocksApiService.getAll(expand);
        setStocks(data ?? []);
    };

    useEffect(() => {
        getStocks();
    }, [stocksRefresh]);

    return {
        stocks,
        handleStocksChange,
    };
};

export default useStocks;
