import React, {useState} from 'react'
import HeaderCliente from '../HeaderCliente/HeaderCliente'
import {Link} from 'react-router-dom'
import FooterCliente from '../FooterCliente/FooterCliente'
import contacto from '../../../imagenes/svg/contacto.svg'
import {FaEnvelope, FaUser} from 'react-icons/fa'

const Contacto = () => {
    return (
        <>
            <HeaderCliente/>

            <div className="contenedor">
                <div className="login">
                    <div className="login__formulario">
                        <h2>Contacto</h2>
                        <form>
                            <div className="form__box">
                                <FaEnvelope/>
                                <input type="text" placeholder="Nombres" />
                            </div>
                            <div className="form__box">
                                <FaEnvelope/>
                                <input type="email" placeholder="Correo" />
                            </div>
                            <div className="form__box">
                                <textarea placeholder="Mensaje"></textarea>
                            </div>
                            <input type="submit" value="Enviar mensaje"/>
                        </form>
                    </div>

                    <div className="login__img">
                        <img src={contacto} alt="tecstore" loading="lazy" className="img__contacto"/>
                    </div>
                    
                </div>
                
            </div>

            <FooterCliente/>
        </>
    )
}

export default Contacto
