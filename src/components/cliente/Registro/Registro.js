import React, {useState} from 'react'
import HeaderCliente from '../HeaderCliente/HeaderCliente'
import {Link} from 'react-router-dom'
import FooterCliente from '../FooterCliente/FooterCliente'
import tienda from '../../../imagenes/svg/tienda.svg'
import {FaUser, FaEye, FaEnvelope} from 'react-icons/fa'
import {HiLockClosed} from 'react-icons/hi'

const Registro = () => {
    return (
        <>
            <HeaderCliente/>

            <div className="contenedor">
                <div className="login">
                    <div className="login__img">
                        <img src={tienda} alt="tecstore" loading="lazy"/>
                    </div>
                    <div className="login__formulario">
                        <h2>Regístro</h2>
                        <form>
                            <div className="form__box">
                                <FaUser/>
                                <input type="text" placeholder="Nombres" />
                            </div>
                            <div className="form__box">
                                <FaUser/>
                                <input type="text" placeholder="Apellidos" />
                            </div>
                            <div className="form__box">
                                <FaEnvelope/>
                                <input type="email" placeholder="Correo" />
                            </div>
                            <div className="form__box">
                                <HiLockClosed/>
                                <input type="password" placeholder="Contraseña" />
                                <button type="button" className="ver__pas"><FaEye/></button>
                            </div>
                            <div className="form__box">
                                <HiLockClosed/>
                                <input type="password" placeholder="Repetir contraseña" />
                                <button type="button" className="ver__pas"><FaEye/></button>
                            </div>
                            <div className="form__detalles">
                                <input type="checkbox" id="recordarAceptar" />
                                <label for="recordarAceptar">Aceptar términos y condiciones</label>
                            </div>
                            <input type="submit" value="Registrar"/>
                        </form>
                        <p>¿Ya tienes una cuenta? <Link to="/login">Accede aquí</Link></p>
                    </div>
                </div>
                
            </div>

            <FooterCliente/>  
        </>
    )
}

export default Registro