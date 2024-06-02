import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

const StocksTable = ({ children }) => {
    return (
        <Table className='mt-2' striped responsive>
            <thead>
                <tr>
                    <th scope="col">№</th>
                    <th scope="col" className="w-25">Имя акции</th>
                    <th scope="col" className="w-75">Значение акции</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody >
        </Table>
    );
};

StocksTable.propTypes = {
    children: PropTypes.node,
};

export default StocksTable;
