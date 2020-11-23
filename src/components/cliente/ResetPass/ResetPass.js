import React, {useState} from 'react'
import HeaderCliente from '../HeaderCliente/HeaderCliente'
import {Link} from 'react-router-dom'
import FooterCliente from '../FooterCliente/FooterCliente'
import tienda from '../../../imagenes/svg/tienda.svg'
import {FaEnvelope, FaEye} from 'react-icons/fa'
import {HiLockClosed} from 'react-icons/hi'

const ResetPass = () => {
    return (
        <>
            <HeaderCliente/>

            <div className="contenedor">
                <div className="login">
                    <div className="login__img">
                        <img src={tienda} alt="tecstore" loading="lazy"/>
                    </div>
                    <div className="login__formulario">
                        <h2>Reestablecer contraseña</h2>
                        <form>
                            <div className="form__box">
                                <FaEnvelope/>
                                <input type="text" placeholder="Correo" />
                            </div>
                            <input type="submit" value="Enviar Link"/>
                        </form>
                    </div>
                </div>
                
            </div>

            <FooterCliente/>
        </>
    )
}

export default ResetPass
