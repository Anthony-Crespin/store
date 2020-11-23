import React from 'react'
import CategoriasMain from '../CategoriasMain/CategoriasMain'
import FooterCliente from '../FooterCliente/FooterCliente'
import HeaderCliente from '../HeaderCliente/HeaderCliente'
import SliderGlide from '../SliderGlider/SliderGlide'
import UltimosProductos from '../UltimosProductos/UltimosProductos'

const MainCliente = () => {
    return (
        <>
            <HeaderCliente/>
            <SliderGlide/>
            <CategoriasMain/>
            <UltimosProductos/>
            <FooterCliente/>
        </>
    )
}

export default MainCliente