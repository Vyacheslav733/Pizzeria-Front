import { useState } from 'react';
import toast from 'react-hot-toast';
import StocksApiService from '../service/StocksApiService';
import useStocksItem from './StocksItemHook.js';

const useStocksItemForm = (id, linesChangeHandle) => {
  const { stocks, setStock } = useStocksItem(id);
  const [validated, setValidated] = useState(null);

  const resetValidity = () => {
    setValidated(false);
  };

  const getStockObject = (formData) => {
    const name = formData.name;
    const value = parseInt(formData.value, 10);
    return {
      name: name.toString(),
      value: value.toString(),
    };
  };

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setStock({
      ...stocks,
      [inputName]: inputValue,
    });
  };

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    const body = getStockObject(stocks);

    if (form.checkValidity()) {
      if (id === undefined) {
        await StocksApiService.create(body);
      } else {
        await StocksApiService.update(id, body);
      }
      if (linesChangeHandle) linesChangeHandle();
      toast.success('Акция успешно сохранена', { id: 'StocksTable' });
      return true;
    }

    setValidated(true);
    return false;
  };

  return {
    stocks,
    validated,
    handleSubmit,
    handleChange,
    resetValidity,
  };
};

export default useStocksItemForm;
