import { AiOutlineClose } from 'react-icons/ai';
import { useGlobalContext } from '../context';
const Sidebar = () => {
    const { sidebar, setSidebar } = useGlobalContext();
    return (
        <div className={`${sidebar ? 'sidebar show-sidebar' : 'sidebar '}`}>
            <div className='container-col'>
                <AiOutlineClose className='icon-close' onClick={() => setSidebar(false)} />
            </div>
        </div>
    );
};

export default Sidebar;
