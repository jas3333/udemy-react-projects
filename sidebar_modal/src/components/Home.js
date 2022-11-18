import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../context';

const Home = () => {
    const { setShowModal, setSidebar } = useGlobalContext();
    return (
        <main>
            <FaBars className='icon' onClick={() => setSidebar(true)} />
            <button className='btn' onClick={() => setShowModal(true)}>
                SHOW MODAL
            </button>
        </main>
    );
};

export default Home;
