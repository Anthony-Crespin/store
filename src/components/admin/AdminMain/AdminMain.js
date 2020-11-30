import React from 'react'
import Categorias from '../Categorias/Categorias'
import Estadisticas from '../Estadisticas/Estadisticas'
import HeaderAdmin from '../HeaderAdmin/HeaderAdmin'
import ProductosAdmin from '../ProductosAdmin/ProductosAdmin'

const AdminMain = () => {
    return (
        <>
            <HeaderAdmin/>
            <Estadisticas/>
            <div className="contenedor__admin">
                <div className="admin__main-flex">
                    <Categorias/>
                    <ProductosAdmin/>
                </div>
            </div>
        </>
    )
}

export default AdminMain
