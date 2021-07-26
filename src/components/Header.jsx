import { Link } from 'react-router-dom'
import { BiCartAlt } from 'react-icons/bi'

import '../styles/headerStyle.css'

function Header() {
    return (
        <div className='header-container'>
            <div className="logo">
                <h1>E-Commerce</h1>    
            </div>
            <div className="profile">
                <Link to="/" className="product-link">Produtos</Link>
                <span>Olá!</span>
                <i><BiCartAlt /></i>
                <Link to="/form" className="login">Login</Link>
            </div>
        </div>
    )
}

export default Header