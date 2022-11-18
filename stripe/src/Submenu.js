import { useGlobalContext } from './context';

const Submenu = () => {
    const { submenu } = useGlobalContext();
    return <aside className={`${submenu ? 'submenu show' : 'submenu'}`}>Submenu</aside>;
};

export default Submenu;
