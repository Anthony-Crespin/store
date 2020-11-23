import React from 'react'
import { Link } from 'react-router-dom'
import FooterCliente from '../FooterCliente/FooterCliente'
import HeaderCliente from '../HeaderCliente/HeaderCliente'
import {FaStar} from 'react-icons/fa'
import catCpu from '../../../imagenes/catCpu.png'
import UltimosProductos from '../UltimosProductos/UltimosProductos'

const ProductoSingle = () => {
    return (
        <>
            <HeaderCliente/>
                <div className="contenedor">
                    <div className="ProductoSingle">
                        <div className="productoSingle__imagen">
                            <img src={catCpu} alt="" loading="lazy" />
                        </div>
                        <div className="productoSingle__content">
                            <div className="productoSingle__title">
                                <h5>Nombre del producto</h5>
                            </div>
                            <div className="productoSingle__rating">
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                            </div>
                            <div className="productoSingle__descripcion">
                                <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</p>
                            </div>
                            <div className="productoSingle__precio">
                                <p>S/. 2000</p>
                            </div>
                            <div className="productoSingle__actions">
                                <input type="number" />
                                <button type="submit">AGREGAR AL CARRITO</button>
                                <Link to="">COMPRAR AHORA</Link>
                            </div>
                        </div>
                    </div>
                </div>
            <UltimosProductos/>
            <FooterCliente/>
        </>
    )
}

export default ProductoSingle
