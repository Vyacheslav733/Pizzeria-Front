import { useState } from 'react';
import toast from 'react-hot-toast';
import useModal from '../../modal/ModalHook';
import StocksApiService from '../service/StocksApiService';

const useStocksDeleteModal = (linesChangeHandle) => {
    const { isModalShow, showModal, hideModal } = useModal();
    const [currentId, setCurrentId] = useState(0);

    const showModalDialogStock = (id) => {
        showModal();
        setCurrentId(id);
    };

    const onCloseStock = () => {
        hideModal();
    };

    const onDeleteStock = async () => {
        await StocksApiService.delete(currentId);
        linesChangeHandle();
        toast.success('Акция успешно удалена', { id: 'StocksTable' });
        onCloseStock();
    };

    return {
        isDeleteModalShowStock: isModalShow,
        showDeleteModalStock: showModalDialogStock,
        handleDeleteConfirmStock: onDeleteStock,
        handleDeleteCancelStock: onCloseStock,
    };
};

export default useStocksDeleteModal;
