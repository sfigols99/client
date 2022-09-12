import { Link } from 'react-router-dom';

const NavbarItem = (props) => {
    return(
        <Link to={props.path}>
            <li className={"py-2 text-black px-10 cursor-pointer transition-colors duration-1000 hover:bg-black hover:text-white"}>
                {props.title}
            </li>
        </Link>
    );
}

const Navbar = () => {
    const navItems = [
        {id: 1, name: "Landlords", path:'/landlords'},
        {id: 2, name: "Tenants", path:'/tenants'},
        {id: 3, name: "GRMNT's", path:'/grmnts'},
        {id: 4, name: "My GRMNT's", path:'/grmnts'}, 
        {id: 5, name: "My Offers", path:'/my_offers'}
    ];

    return (
        <nav className='w-full flex md:justify-center justify-between items-center p-6 bg-white'>
            <div className='md:flex-[0.5] flex-initial justify-center items-center'>
                <Link to="/">
                    <h1 className='text-black text-5xl'>GRMNT</h1>
                </Link>
            </div>
            <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
                {
                    navItems.map((items) => (
                    <NavbarItem key={items.id} title={items.name} path={items.path}/>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;