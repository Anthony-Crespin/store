import React from 'react'
import { Link } from 'react-router-dom'
import HeaderCliente from '../HeaderCliente/HeaderCliente'
import catCpu from '../../../imagenes/catCpu.png'
import catMochilas from '../../../imagenes/catMochilas.png'
import catHeadphones from '../../../imagenes/catHeadphones.png'
import catMonitor from '../../../imagenes/catMonitor.png'
import {FaStar} from 'react-icons/fa'
import FooterCliente from '../FooterCliente/FooterCliente'

const Tienda = () => {
    return (
        <>
            <HeaderCliente/>
            
            <div className="contenedor">
                <div className="tienda">
                    <aside className="tienda__categorias">
                        <div className="tienda__titulo">
                            <h4>CATEGORÍAS</h4>
                        </div>
                        <ul>
                            <li><Link to="#">Cat 1</Link></li>
                            <li><Link to="#">Cat 2</Link></li>
                            <li><Link to="#">Cat 3</Link></li>
                            <li><Link to="#">Cat 4</Link></li>
                            <li><Link to="#">Cat 5</Link></li>
                            <li><Link to="#">Cat 6</Link></li>
                        </ul>
                    </aside>

                    <main className="tienda__productos">
                        <div className="producto2">
                            <div className="producto2__header">
                                <img src={catCpu} alt="" loading="lazy"/>
                            </div>
                            <div className="producto2__footer">
                                <h3>Case ultima generacion</h3>
                                <div className="rating2">
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                </div>
                                <div className="producto2__precio">
                                    <h4>S/. 200</h4>
                                    <Link to="/producto">
                                        <button type="button" className="producto2__btn">Ver detalles</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="producto2">
                            <div className="producto2__header">
                                <img src={catMonitor} alt="" loading="lazy"/>
                            </div>
                            <div className="producto2__footer">
                                <h3>Case ultima generacion</h3>
                                <div className="rating2">
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                </div>
                                <div className="producto2__precio">
                                    <h4>S/. 200</h4>
                                    <Link to="/producto">
                                        <button type="button" className="producto2__btn">Ver detalles</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="producto2">
                            <div className="producto2__header">
                                <img src={catMochilas} alt="" loading="lazy"/>
                            </div>
                            <div className="producto2__footer">
                                <h3>Case ultima generacion</h3>
                                <div className="rating2">
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                </div>
                                <div className="producto2__precio">
                                    <h4>S/. 200</h4>
                                    <Link to="/producto">
                                        <button type="button" className="producto2__btn">Ver detalles</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="producto2">
                            <div className="producto2__header">
                                <img src={catHeadphones} alt="" loading="lazy"/>
                            </div>
                            <div className="producto2__footer">
                                <h3>Case ultima generacion</h3>
                                <div className="rating2">
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                </div>
                                <div className="producto2__precio">
                                    <h4>S/. 200</h4>
                                    <Link to="/producto">
                                        <button type="button" className="producto2__btn">Ver detalles</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>

            <FooterCliente/>
        </>
    )
}

export default Tienda
