import React, {useState} from 'react'
import {RiDoorOpenLine} from 'react-icons/ri'
import bannerOne from '../../../imagenes/bannerOne.jpg'

const HeaderAdmin = () => {
    const [menuMovil, setMenuMovil] = useState(false)
    
    const showMenu = () => setMenuMovil(!menuMovil)
    return (
        <>
        <header className="header" id="header">
            <div className="navigation">
                <div className="contenedor__admin">
                    <nav className="nav__admin">
                        <div className="nav__logo-admin">
                            <h3 className="logo__admin">E-Store</h3>
                        </div>

                         <div className="nav--icons">
                            <h3>Panel de administración</h3>
                            <button className="icon--item">
                                <RiDoorOpenLine fontSize="1.6rem"/>
                            </button>
                         </div>
                    </nav>
                </div>
            </div>
        </header>
        
        </>
    )
}

export default HeaderAdmin