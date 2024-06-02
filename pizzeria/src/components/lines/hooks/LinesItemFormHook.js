import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import getBase64FromFile from '../../utils/Base64';
import LinesApiService from '../service/LinesApiService';
import StocksApiService from '../service/StocksApiService';
import useLinesItem from './LinesItemHook';

const useLinesItemForm = (id, linesChangeHandle) => {
    const { item, setItem } = useLinesItem(id);
    const [stockData, setStockData] = useState(null);

    useEffect(() => {
        if (item.stock) {
            StocksApiService.getById(item.stock)
                .then(response => setStockData(response))
                .catch(error => {
                    console.error('Ошибка при получении данных акции:', error);
                    setStockData(null);
                });
        }
    }, [item.stock]);

    const [validated, setValidated] = useState(false);

    const resetValidity = () => {
        setValidated(false);
    };

    const getLineObject = (formData) => {
        const typeId = parseInt(formData.typeId, 10);
        const price = parseFloat(formData.price).toFixed(2);
        const stock = stockData.value;
        const count = parseInt(formData.count, 10);
        let sum;

        if (stockData !== null) {
            sum = parseFloat((price * ((100 - stock) / 100)) * count).toFixed(2);
        } else {
            sum = parseFloat(price * count).toFixed(2);
        }

        const image = formData.image.startsWith('data:image') ? formData.image : '';
        return {
            typeId: typeId.toString(),
            price: price.toString(),
            stock: stock,
            count: count.toString(),
            sum: sum.toString(),
            image,
        };
    };

    const handleImageChange = async (event) => {
        const { files } = event.target;
        const file = await getBase64FromFile(files.item(0));
        setItem({
            ...item,
            image: file,
        });
    };

    const handleStockChange = (event) => {
        setItem({
            ...item,
            stock: event.target.value,
        });
    };

    const handleChange = (event) => {
        if (event.target.type === 'file') {
            handleImageChange(event);
            return;
        }
        if (event.target.name === 'stock') {
            handleStockChange(event);
            return;
        }
        const inputName = event.target.name;
        const inputValue = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setItem({
            ...item,
            [inputName]: inputValue,
        });
    };

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        const body = getLineObject(item);
        if (form.checkValidity()) {
            if (id === undefined) {
                await LinesApiService.create(body);
            } else {
                await LinesApiService.update(id, body);
            }
            if (linesChangeHandle) linesChangeHandle();
            toast.success('Элемент успешно сохранен', { id: 'LinesTable' });
            return true;
        }
        setValidated(true);
        return false;
    };

    return {
        item,
        validated,
        handleSubmit,
        handleChange,
        handleStockChange,
        resetValidity,
    };
};

export default useLinesItemForm;
