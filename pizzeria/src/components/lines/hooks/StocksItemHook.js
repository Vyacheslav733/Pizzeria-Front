import { useEffect, useState } from 'react';
import TypesApiService from '../service/StocksApiService';

const useStocksItem = (id) => {
    const emptyStocks = {
        id: '',
        name: '',
        stock: '',
    };
    const [stocks, setStock] = useState({ ...emptyStocks });

    const getStock = async (stockId = undefined) => {
        if (stockId && stockId > 0) {
            const data = await TypesApiService.get(stockId);
            setStock(data);
        } else {
            setStock({ ...emptyStocks });
        }
    };

    useEffect(() => {
        getStock(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return {
        stocks,
        setStock,
    };
};

export default useStocksItem;
