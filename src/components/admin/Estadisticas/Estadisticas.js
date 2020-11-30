import React from 'react'
import {FaRegClock} from 'react-icons/fa'
import {CgClose} from 'react-icons/cg'
import {BsArrowRepeat, BsCollection} from 'react-icons/bs'

const Estadisticas = () => {
    return (
        <div className="contenedor__admin">
            <div className="estadisticas">
                <div className="card__stat">
                    <div className="card__left">
                        <p>ORDENES TOTALES</p>
                        <span>10</span>
                    </div>
                    <div className="card__right">
                        <span>
                            <BsCollection/>
                        </span>
                    </div>
                </div>

                <div className="card__stat">
                    <div className="card__left">
                        <p>ORDENES CANCELADAS</p>
                        <span>2</span>
                    </div>
                    <div className="card__right">
                        <span>
                            <CgClose/>
                        </span>
                    </div>
                </div>

                <div className="card__stat">
                    <div className="card__left">
                        <p>ORDENES EN PROCESO</p>
                        <span>5</span>
                    </div>
                    <div className="card__right">
                        <span>
                            <BsArrowRepeat/>
                        </span>
                    </div>
                </div>

                <div className="card__stat">
                    <div className="card__left">
                        <p>ORDENES PENDIENTES</p>
                        <span>3</span>
                    </div>
                    <div className="card__right">
                        <span>
                            <FaRegClock/>
                        </span>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default Estadisticas
