import { Button, ButtonGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Select from '../../input/Select.jsx';
import ModalConfirm from '../../modal/ModalConfirm.jsx';
import useLinesDeleteModal from '../hooks/LinesDeleteModalHook';
import useStocksDeleteModal from '../hooks/StocksDeleteModalHook';
import useTypeFilter from '../hooks/LinesFilterHook';
import useLines from '../hooks/LinesHook';
import LinesTable from './LinesTable.jsx';
import LinesTableRow from './LinesTableRow.jsx';
import StocksTable from './StocksTable.jsx';
import StocksTableRow from './StocksTableRow.jsx';
import useStocks from '../hooks/StocksHook.js';
import useCart from '../../card/cartHook.js';

const Lines = () => {
    const { types, currentFilter, handleFilterChange } = useTypeFilter();
    const { lines, handleLinesChange } = useLines(currentFilter);
    const navigate = useNavigate();
    const { stocks, handleStocksChange } = useStocks();

    const {
        isDeleteModalShowStock,
        showDeleteModalStock,
        handleDeleteConfirmStock,
        handleDeleteCancelStock,
    } = useStocksDeleteModal(handleStocksChange);

    const {
        isDeleteModalShow,
        showDeleteModal,
        handleDeleteConfirm,
        handleDeleteCancel,
    } = useLinesDeleteModal(handleLinesChange);

    const showEditPage = (id) => {
        navigate(`/pageEdit/${id}`);
    };

    const handleDelete = (id) => {
        showDeleteModal(id);
    };

    const showEditStocksPage = (id) => {
        navigate(`/PageEditStocks/${id}`);
    };

    const handleDeleteStock = (id) => {
        showDeleteModalStock(id);
    };

    const { addToCart } = useCart();

    return (
        <>
            <h1 className="text-warning text-center font-weight-bold">Панель администратора</h1>
            <div className="text-center">
                <ButtonGroup>
                    <Button as={Link} to='/pageEdit' variant='warning'>
                        Добавить товар
                    </Button>
                    <Button as={Link} to='/PageEditStocks' variant='warning'>
                        Добавить акцию
                    </Button>
                </ButtonGroup>
            </div>
            <Select className='mt-2' values={types} label='Фильтр по товарам'
                value={currentFilter} onChange={handleFilterChange} />
            <h2 className="text-warning text-center font-weight-bold mt-2">Таблица данных</h2>
            <LinesTable>
                {
                    lines.map((line, index) =>
                        <LinesTableRow key={line.id}
                            index={index} line={line}
                            onAddCart={() => addToCart(line)}
                            onDelete={() => handleDelete(line.id)}
                            onEditInPage={() => showEditPage(line.id)}
                        />)
                }
            </LinesTable>

            <h2 className="text-warning text-center font-weight-bold mt-2">Таблица акций</h2>
            <StocksTable>
                {
                    stocks.map((stock, index) =>
                        <StocksTableRow key={stock.id}
                            index={index} stock={stock}
                            onDelete={() => handleDeleteStock(stock.id)}
                            onEdit={() => showEditStocksPage(stock.id)}
                        />)
                }
            </StocksTable>

            <ModalConfirm show={isDeleteModalShow}
                onConfirm={handleDeleteConfirm} onClose={handleDeleteCancel}
                title='Удаление' message='Удалить элемент?' />
            <ModalConfirm show={isDeleteModalShowStock}
                onConfirm={handleDeleteConfirmStock} onClose={handleDeleteCancelStock}
                title='Удаление' message='Удалить акцию?' />
        </>
    );
};

export default Lines;
