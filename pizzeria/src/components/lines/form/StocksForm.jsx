import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useStocksItemForm from '../hooks/StocksItemFormHook.js';
import StocksItemForm from './StocksItemForm.jsx';

const StocksForm = ({ id }) => {
  const navigate = useNavigate();

  const {
    stocks,
    validated,
    handleSubmit,
    handleChange,
  } = useStocksItemForm(id);

  const onBack = () => {
    navigate(-1);
  };

  const onSubmit = async (event) => {
    if (await handleSubmit(event)) {
      onBack();
    }
  };

  return (
    <>
      <Form className='m-0 p-2' noValidate validated={validated} onSubmit={onSubmit}>
        <StocksItemForm item={stocks} handleChange={handleChange} />
        <Form.Group className='row justify-content-center m-0 mt-3'>
          <Button className='col-5 col-lg-2 m-0 me-2' variant='secondary' onClick={() => onBack()}>
            Назад
          </Button>
          <Button className='col-5 col-lg-2 m-0 ms-2' type='submit' variant='primary'>
            Сохранить
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};

StocksForm.propTypes = {
  id: PropTypes.string,
};

export default StocksForm;
