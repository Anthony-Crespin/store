import React from 'react'
import { Link } from 'react-router-dom'
import catCpu from '../../../imagenes/catCpu.png'
import catParlantes from '../../../imagenes/catParlantes.png'
import catHeadphones from '../../../imagenes/catHeadphones.png'
import catImpresoras from '../../../imagenes/catImpresoras.png'
import catMochilas from '../../../imagenes/catMochilas.png'
import catMonitor from '../../../imagenes/catMonitor.png'

const CategoriasMain = () => {
    return (
        <div className="contenedor">
            <div className="categorias__main">
                <h2>Categorías</h2>
                <div className="categorias__container">
                    <div className="categoria__box">
                        <div className="categoria__img">
                            <img src={catCpu} alt="" loading="lazy" />
                        </div>
                        <div className="categoria__content">
                            <span>COMPUTADORAS</span>
                            <h3>CASES</h3>
                            <Link to="">Ver categoría</Link>
                        </div>
                    </div>

                    <div className="categoria__box">
                        <div className="categoria__img">
                            <img src={catParlantes} alt="" loading="lazy" />
                        </div>
                        <div className="categoria__content">
                            <span>ACCESORIOS</span>
                            <h3>PARLANTES</h3>
                            <Link to="">Ver categoría</Link>
                        </div>
                    </div>

                    <div className="categoria__box">
                        <div className="categoria__img">
                            <img src={catHeadphones} alt="" loading="lazy" />
                        </div>
                        <div className="categoria__content">
                            <span>ACCESORIOS</span>
                            <h3>HEADPHONES</h3>
                            <Link to="">Ver categoría</Link>
                        </div>
                    </div>

                    <div className="categoria__box">
                        <div className="categoria__img">
                            <img src={catImpresoras} alt="" loading="lazy" />
                        </div>
                        <div className="categoria__content">
                            <span>PERIFERICOS</span>
                            <h3>IMPRESORAS</h3>
                            <Link to="">Ver categoría</Link>
                        </div>
                    </div>

                    <div className="categoria__box">
                        <div className="categoria__img">
                            <img src={catMochilas} alt="" loading="lazy" />
                        </div>
                        <div className="categoria__content">
                            <span>ACCESORIOS</span>
                            <h3>MOCHILAS</h3>
                            <Link to="">Ver categoría</Link>
                        </div>
                    </div>

                    <div className="categoria__box">
                        <div className="categoria__img">
                            <img src={catMonitor} alt="" loading="lazy" />
                        </div>
                        <div className="categoria__content">
                            <span>PERIFERICOS</span>
                            <h3>MONITORES</h3>
                            <Link to="">Ver categoría</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoriasMain
