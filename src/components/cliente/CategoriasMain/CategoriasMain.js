import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { getCategorias } from '../../../services/categoriasServices'

const CategoriasMain = () => {

    const [categorias, setCategorias] = useState([])

    const traerCategorias = async () => {
        const data = await getCategorias()
        setCategorias(data)
    }

    useEffect(() => {
        traerCategorias()
    }, [])

    return (
        <div className="contenedor">
            <div className="categorias__main">
                <h2>Categorías</h2>
                <div className="categorias__container">
                    {
                        categorias.map(objCategoria => {
                            return (
                                <div className="categoria__box" key={objCategoria.pk}>
                                    <div className="categoria__img">
                                        <img src={objCategoria.image} alt="" loading="lazy" />
                                    </div>
                                    <div className="categoria__content">
                                        <span>{objCategoria.slug}</span>
                                        <h3>{objCategoria.name}</h3>
                                        <Link to="">Ver categoría</Link>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default CategoriasMain
