import PropTypes from 'prop-types';
import Input from '../../input/Input.jsx';

const StocksItemForm = ({ item, handleChange }) => {
  return (
    <>
      <h1 className="text-warning text-center font-weight-bold">Добавление акции</h1>
      <Input name='name' label='Наименование акции ' value={item.name} onChange={handleChange} required />
      <Input name='value' label='Значение акции' value={item.value} max='100' onChange={handleChange} required />
    </>
  );
};

StocksItemForm.propTypes = {
  item: PropTypes.object,
  handleChange: PropTypes.func,
};

export default StocksItemForm;
