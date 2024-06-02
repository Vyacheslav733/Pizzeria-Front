import { useEffect, useState } from 'react';
import StocksApiService from '../../lines/service/StocksApiService';

const useStocks = () => {
    const [stocks, setStocks] = useState([]);

    const getStocks = async () => {
        const data = await StocksApiService.getAll();
        setStocks(data ?? []);
    };

    useEffect(() => {
        getStocks();
    }, []);

    return {
        stocks,
    };
};

export default useStocks;
