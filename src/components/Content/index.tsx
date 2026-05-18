import { NavLink } from 'react-router-dom';
import './styles.css';

export default function Content(){

    return(
       <div className="card">
            <div className="card-content-container container">                 
                <nav className="nav-bar-content">
                    <NavLink to="/products/computers" className={({isActive}) => isActive ? "sub-menu-item sub-menu-active" : "sub-menu-item"} >
                        Computadores
                    </NavLink>
                    <NavLink to="/products/electronics" className={({isActive}) => isActive ? "sub-menu-item sub-menu-active" : "sub-menu-item"} >
                        Eletrônicos
                    </NavLink>
                    <NavLink to="/products/books" className={({isActive}) => isActive ? "sub-menu-item sub-menu-active" : "sub-menu-item"} >
                        Livros
                    </NavLink>
                </nav> 
            </div>
       </div>
    );
}