import PropTypes from 'prop-types';
import { Cart, PencilSquare, Trash3 } from 'react-bootstrap-icons';

const LinesTableRow = ({
    index, line, onAddCart, onDelete, onEditInPage,
}) => {
    const handleAnchorClick = (event, action) => {
        event.preventDefault();
        action();
    };

    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{line.type.name}</td>
            <td>{parseFloat(line.price).toFixed(2)}</td>
            <td>{line.stock}</td>
            <td>{line.count}</td>
            <td>{parseFloat(line.sum).toFixed(2)}</td>
            <td><a href="#" onClick={(event) => handleAnchorClick(event, onAddCart)}><Cart /></a></td>
            <td><a href="#" onClick={(event) => handleAnchorClick(event, onEditInPage)}><PencilSquare /></a></td>
            <td><a href="#" onClick={(event) => handleAnchorClick(event, onDelete)}><Trash3 /></a></td>
        </tr>
    );
};

LinesTableRow.propTypes = {
    index: PropTypes.number,
    line: PropTypes.object,
    onAddCart: PropTypes.func,
    onDelete: PropTypes.func,
    onEditInPage: PropTypes.func,
};

export default LinesTableRow;
