import PropTypes from 'prop-types';
import { PencilSquare, Trash3 } from 'react-bootstrap-icons';

const StocksTableRow = ({
     index, stock, onDelete, onEdit 
}) => {
    const handleAnchorClick = (event, action) => {
        event.preventDefault();
        action();
    };

    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{stock.name}</td>
            <td>{stock.value}</td>
            <td><a href="#" onClick={(event) => handleAnchorClick(event, onEdit)}><PencilSquare /></a></td>
            <td><a href="#" onClick={(event) => handleAnchorClick(event, onDelete)}><Trash3 /></a></td>
        </tr>
    );
};

StocksTableRow.propTypes = {
    index: PropTypes.number,
    stock: PropTypes.object,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func,
};

export default StocksTableRow;
