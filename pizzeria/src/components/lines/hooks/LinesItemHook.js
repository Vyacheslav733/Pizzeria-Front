import { useEffect, useState } from 'react';
import LinesApiService from '../service/LinesApiService';

const useLinesItem = (id) => {
    const emptyItem = {
        id: '',
        typeId: '',
        price: '',
        stock: '',
        count: '',
        image: '',
    };
    const [item, setItem] = useState({ ...emptyItem });

    const getItem = async (itemId = undefined) => {
        if (itemId && itemId > 0) {
            const data = await LinesApiService.get(itemId);
            setItem(data);
        } else {
            setItem({ ...emptyItem });
        }
    };

    useEffect(() => {
        getItem(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return {
        item,
        setItem,
    };
};

export default useLinesItem;
