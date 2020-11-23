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
                <Route exact path="/" component={MainCliente} />
                <Route exact path="/tienda" component={Tienda} />
                <Route exact path="/contacto" component={Contacto} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/producto" component={ProductoSingle} />
                <Route exact path="/carrito" component={Carrito} />
                <Route exact path="/registro" component={Registro} />
                <Route exact path="/resetpass" component={ResetPass} />
            </Router>
        </>
    )
}

export default ClienteRouter
