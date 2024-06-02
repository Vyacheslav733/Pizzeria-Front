import PropTypes from 'prop-types';
import imgPlaceholder from '../../../Images/200.png';
import Input from '../../input/Input.jsx';
import Select from '../../input/Select.jsx';
import useTypes from '../../types/hooks/TypesHook';
import useStocks from '../../types/hooks/StockHook';
import './LinesItemForm.css';

const LinesItemForm = ({ item, handleChange, handleStockChange }) => {
    const { types } = useTypes();   
    const { stocks } = useStocks();
    return (
        <>
            <div className='text-center'>
                <img id='image-preview' className='rounded' alt='placeholder'
                    src={item.image || imgPlaceholder} />
            </div>
            <Select values={types} name='typeId' label='Товары' value={item.typeId.toString()} onChange={handleChange}
                required />
            <Input name='price' label='Цена' value={item.price} onChange={handleChange}
                type='number' min='1' step='1' required />
            <Select values={stocks} name='stock' label='Акция' value={item.stock} onChange={handleStockChange} />
            <Input name='count' label='Количество' value={item.count} onChange={handleChange}
                type='number' min='1' step='1' required />
            <Input name='image' label='Изображение' onChange={handleChange}
                type='file' accept='image/*' />
        </>
    );
};

LinesItemForm.propTypes = {
    item: PropTypes.object,

    handleChange: PropTypes.func,
    handleStockChange: PropTypes.func,
};

export default LinesItemForm;
