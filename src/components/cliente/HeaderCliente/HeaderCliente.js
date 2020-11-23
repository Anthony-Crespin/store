import React, {useState} from 'react'
import {HiMenu} from 'react-icons/hi'
import {CgClose} from 'react-icons/cg'
import {AiOutlineShoppingCart, AiOutlineUser} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const HeaderCliente = () => {
    const [menuMovil, setMenuMovil] = useState(false)
    
    const showMenu = () => setMenuMovil(!menuMovil)

    return (
        <header className="header" id="header">
            <div className="navigation">
                <div className="contenedor">
                    <nav className="nav">
                        <div className="nav--hamburger" onClick={showMenu}>
                            <HiMenu fontSize="2.3rem"/>
                        </div>

                        <div className="nav--logo">
                            <Link to="/" className="scroll-link">TecStore</Link>
                        </div>

                        <div className={menuMovil ? 'nav--menu open' : 'nav--menu'} id="navMenu">
                            <div className="menu--top">
                                <span className="nav--category">TecStore</span>
                                <Link to="#" className="close--toggle" onClick={showMenu}>
                                    <CgClose fontSize="2.5rem"/>
                                </Link>
                            </div>

                            <ul className="nav--list">
                                <li className="nav--item">
                                    <Link to="/" className="nav--link scroll-link">Inicio</Link>
                                </li>
                                <li className="nav--item">
                                    <Link to="/tienda" className="nav--link scroll-link">Tienda</Link>
                                </li>
                                <li className="nav--item">
                                    <Link to="/contacto" className="nav--link scroll-link">Contacto</Link>
                                </li>
                            </ul>
                        </div>

                         <div className="nav--icons">
                            <Link to="/login" className="icon--item">
                                <AiOutlineUser fontSize="1.6rem"/>
                            </Link>
                            <Link to="/carrito" className="icon--item">
                                <AiOutlineShoppingCart fontSize="1.6rem"/>
                                <span id="cartTotal">0</span>
                            </Link>
                         </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default HeaderCliente
