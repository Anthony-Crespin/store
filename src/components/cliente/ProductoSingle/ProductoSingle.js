import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import FooterCliente from '../FooterCliente/FooterCliente'
import HeaderCliente from '../HeaderCliente/HeaderCliente'
import {FaStar} from 'react-icons/fa'
import catCpu from '../../../imagenes/catCpu.png'
import UltimosProductos from '../UltimosProductos/UltimosProductos'
import TiendaContext from '../../../context/tienda/tiendaContext'
import { getProductos } from '../../../services/productosServices'

const ProductoSingle = () => {

    //Trayendo todos los productos
    const [productos, setProductos] = useState([])

    const traerProductos = async () => {
        const data = await getProductos()
        setProductos(data)
    }

    useEffect(() => {
        traerProductos()
    }, [])

    const {agregarCarrito} = useContext(TiendaContext)

    return (
        <>
            <HeaderCliente/>
                <div className="contenedor">

                    {
                        productos.map(objProducto => {
                            return(
                                <div className="ProductoSingle" key={objProducto.pk} objProducto={objProducto}>
                                    <div className="productoSingle__imagen">
                                        <img src={objProducto.image} alt="" loading="lazy" />
                                    </div>
                                    <div className="productoSingle__content">
                                        <div className="productoSingle__title">
                                            <h5>{objProducto.name}</h5>
                                        </div>
                                        {/* <div className="productoSingle__rating">
                                            <FaStar/>
                                            <FaStar/>
                                            <FaStar/>
                                            <FaStar/>
                                            <FaStar/>
                                        </div> */}
                                        <div className="productoSingle__descripcion">
                                            <p>{objProducto.description}</p>
                                        </div>
                                        <div className="productoSingle__precio">
                                            <p>S/. {objProducto.price}</p>
                                        </div>
                                        <div className="productoSingle__actions">
                                            <input type="number" />
                                            <button type="submit" onClick={() => {agregarCarrito(objProducto)}}>AGREGAR AL CARRITO</button>
                                            <Link to="">COMPRAR AHORA</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            <UltimosProductos/>
            <FooterCliente/>
        </>
    )
}

export default ProductoSingle
