import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Carrito } from './Carrito/Carrito'
import Contacto from './Contacto/Contacto'
import Login from './Login/Login'
import MainCliente from './MainCliente/MainCliente'
import ProductoSingle from './ProductoSingle/ProductoSingle'
import Registro from './Registro/Registro'
import ResetPass from './ResetPass/ResetPass'
import Tienda from './Tienda/Tienda'

const ClienteRouter = () => {
    return (
        <>
            <Router>
                <Route exact path="/store" component={MainCliente} />
                <Route exact path="/store/tienda" component={Tienda} />
                <Route exact path="/store/contacto" component={Contacto} />
                <Route exact path="/store/login" component={Login} />
                <Route exact path="/store/producto" component={ProductoSingle} />
                <Route exact path="/store/carrito" component={Carrito} />
                <Route exact path="/store/registro" component={Registro} />
                <Route exact path="/store/resetpass" component={ResetPass} />
            </Router>
        </>
    )
}

export default ClienteRouter
