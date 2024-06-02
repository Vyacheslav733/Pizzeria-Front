import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

const LinesTable = ({ children }) => {
    return (
        <Table className='mt-2' striped responsive>
            <thead>
                <tr>
                    <th scope="col">№</th>
                    <th scope="col" className="w-25">Товар</th>
                    <th scope="col" className="w-25">Цена</th>
                    <th scope="col" className="w-10">Акция</th>
                    <th scope="col" className="w-25">Количество</th>
                    <th scope="col" className="w-25">Сумма</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody >
        </Table >
    );
};

LinesTable.propTypes = {
    children: PropTypes.node,
};

export default LinesTable;
