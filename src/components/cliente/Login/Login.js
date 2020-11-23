import React, {useState} from 'react'
import HeaderCliente from '../HeaderCliente/HeaderCliente'
import {Link} from 'react-router-dom'
import FooterCliente from '../FooterCliente/FooterCliente'
import tienda from '../../../imagenes/svg/tienda.svg'
import {FaEnvelope, FaEye} from 'react-icons/fa'
import {HiLockClosed} from 'react-icons/hi'

const Login = () => {

    return (
        <>
            <HeaderCliente/>

            <div className="contenedor">
                <div className="login">
                    <div className="login__img">
                        <img src={tienda} alt="tecstore" loading="lazy"/>
                    </div>
                    <div className="login__formulario">
                        <h2>Iniciar sesión</h2>
                        <form>
                            <div className="form__box">
                                <FaEnvelope/>
                                <input type="text" placeholder="Correo" />
                            </div>
                            <div className="form__box">
                                <HiLockClosed/>
                                <input type="password" placeholder="Contraseña" />
                                <button type="button" className="ver__pas"><FaEye/></button>
                            </div>
                            <div className="form__detalles">
                                <p><Link to="/resetpass">¿Olvidaste tu contraseña?</Link></p>
                                <input type="checkbox" id="recordarAceptar" />
                                <label for="recordarAceptar">Recordar contraseña</label>
                            </div>
                            <input type="submit" value="Iniciar sesión"/>
                        </form>
                        <p>¿Aun no tienes una cuenta? <Link to="/registro">Crea una cuenta aquí</Link></p>
                    </div>
                </div>
                
            </div>

            <FooterCliente/>
        </>
    )
}

export default Login
