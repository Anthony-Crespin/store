import React, {useContext, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import HeaderCliente from '../HeaderCliente/HeaderCliente'
/* import {FaStar} from 'react-icons/fa' */
import FooterCliente from '../FooterCliente/FooterCliente'
import { getCategorias } from '../../../services/categoriasServices'
import TiendaContext from '../../../context/tienda/tiendaContext'
import { getProductos } from '../../../services/productosServices'

const Tienda = () => {

    const {globalCategoria, seleccionarCategoriaGlobal} = useContext(TiendaContext)

    //Trayendo todas las categorías
    const [categorias, setCategorias] = useState([])

    const traerCategorias = async () => {
        const data = await getCategorias()
        setCategorias(data)
    }

    useEffect(() => {
        traerCategorias()
    }, [])

    //Trayendo todos los productos
    const [productos, setProductos] = useState([])

    const traerProductos = async () => {
        const data = await getProductos()
        setProductos(data)
    }

    useEffect(() => {
        traerProductos()
    }, [])

    /* const { globalCategory } = useContext(TiendaContext); */

    

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
                            {
                                categorias.map(objCategoria => {
                                    return (
                                    <li key={objCategoria.pk} onClick={()=>{
                                        seleccionarCategoriaGlobal(objCategoria)
                                    }}>
                                        <Link to="#">
                                            {objCategoria.name}
                                            <span>{objCategoria.product.length}</span>
                                        </Link>
                                    </li>
                                    )
                                })
                            }
                        </ul>
                    </aside>

                    <main className="tienda__productos">
                        {
                            globalCategoria ? globalCategoria.product.map(objProducto => {
                                return (
                                    <div className="producto2" key={objProducto.pk} objProducto={objProducto}>
                                        <div className="producto2__header">
                                            {
                                                objProducto.photos.map(objProdPhoto => {
                                                    return (
                                                        <img src={objProdPhoto.image} alt={objProdPhoto.name} loading="lazy"/>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className="producto2__footer">
                                            <h3>{objProducto.name}</h3>
                                            {/* <div className="rating2">
                                                <FaStar/>
                                                <FaStar/>
                                                <FaStar/>
                                                <FaStar/>
                                                <FaStar/>
                                            </div> */}
                                            <div className="producto2__precio">
                                                <h4>S/. {objProducto.price}</h4>
                                                <Link to="/store/producto">
                                                    <button type="button" className="producto2__btn">Ver detalles</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }) : 
                            productos.map(objProducto => {
                                return (
                                    <div className="producto2" key={objProducto.pk} objProducto={objProducto}>
                                        <div className="producto2__header">
                                            {
                                                objProducto.photos.map(objProdPhoto => {
                                                    return (
                                                        <img src={objProdPhoto.image} alt={objProdPhoto.name} loading="lazy"/>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className="producto2__footer">
                                            <h3>{objProducto.name}</h3>
                                            {/* <div className="rating2">
                                                <FaStar/>
                                                <FaStar/>
                                                <FaStar/>
                                                <FaStar/>
                                                <FaStar/>
                                            </div> */}
                                            <div className="producto2__precio">
                                                <h4>S/. {objProducto.price}</h4>
                                                <Link to="/store/producto">
                                                    <button type="button" className="producto2__btn">Ver detalles</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        
                    </main>
                </div>
            </div>

            <FooterCliente/>
        </>
    )
}

export default Tienda
