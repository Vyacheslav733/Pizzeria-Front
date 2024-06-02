import { useParams } from 'react-router-dom';
import StocksForm from '../components/lines/form/StocksForm';

const PageEditStocks = () => {
  const { id } = useParams();

  return (
      <StocksForm id={id} />
  );
};

export default PageEditStocks;
