import React from 'react'
import { Link } from 'react-router-dom'
import FooterCliente from '../FooterCliente/FooterCliente'
import HeaderCliente from '../HeaderCliente/HeaderCliente'
import UltimosProductos from '../UltimosProductos/UltimosProductos'
import mouse from '../../../imagenes/mouse.png'
import {FaShoppingBag} from 'react-icons/fa'
import {HiOutlineTrash} from 'react-icons/hi'

export const Carrito = () => {
    return (
        <>
            <HeaderCliente/>

            <div className="contenedor">
                <div className="carrito-vacio">
                    <h6>NO TIENE NINGUN PRODUCTO AGREGADO AL CARRITO DE COMPRAS!!</h6>
                    <Link to="/tienda">Ir a comprar -></Link>
                </div>

                <div className="carrito__container">

                    <div className="carrito__mensaje">
                        <p>Los productos de tu Bolsa de Compras pueden agotarse próximamente. Cómpralos pronto para que no te quedes sin ellos.</p>
                    </div>

                   <form>
                       <div>
                           <table className="cart__tabla">
                               <thead className="cart__thead">
                                   <tr>
                                       <th>PRODUCTO</th>
                                       <th>METODO DE ENTREGA</th>
                                       <th>CANTIDAD</th>
                                       <th>PRECIO</th>
                                       <th></th>
                                   </tr>
                               </thead>
                               <tbody className="cart__tbody">
                                   <tr>
                                        <td className="cart__imagen">
                                            <Link to="/producto">
                                                <img src={mouse} alt="" loading="lazy" />
                                            </Link>
                                            <div className="cart__detalles">
                                                <span>MARCA</span>
                                                <Link to="/producto">Nombre completo del producto a comprar</Link>
                                                <span><b>SKU:</b> ######</span>
                                            </div>
                                        </td>
                                        <td>
                                            <span><FaShoppingBag/> Retiro en tienda</span>
                                        </td>
                                        <td>
                                            <input type="number" size="4" value="1" />
                                        </td>
                                        <td>
                                            <span>S/. 20000</span>
                                        </td>
                                        <td>
                                            <button type="button"><HiOutlineTrash/></button>
                                        </td>
                                   </tr>
                               </tbody>
                           </table>
                       </div>
                   </form>

                   <div className="cart__sumario">
                        <div className="sumario__detalles">
                            <p>Total</p>
                            <span>S/. 20000</span>
                        </div>
                        <div className="sumario__boton">
                            <button type="button">COMPRAR AHORA</button>
                        </div>
                   </div>
                </div>
            </div>

            <UltimosProductos/>
            <FooterCliente/>
        </>
    )
}
