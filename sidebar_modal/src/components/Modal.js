import { AiOutlineClose } from 'react-icons/ai';
import { useGlobalContext } from '../context';

const Modal = () => {
    const { setShowModal, showModal } = useGlobalContext();
    return (
        <div className={`${showModal ? 'show-modal modal-overlay' : 'modal-overlay'}`}>
            <div className='modal-container'>
                <AiOutlineClose className='icon-close' onClick={() => setShowModal(false)} />
                <h3>Modal content</h3>
            </div>
        </div>
    );
};

export default Modal;
