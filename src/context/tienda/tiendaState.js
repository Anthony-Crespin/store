import React, { useReducer } from 'react'
import TiendaContext from './tiendaContext'


const tiendaReducer = (stateActual, action) => {
    if (action.type ==="SET_GLOBAL_CATEGORIA"){
        return {
            ...stateActual,
            globalCategoria: action.data
        }
    }

    if (action.type === "ACTUALIZAR_CARRITO") {
        return {
            ...stateActual,
            carrito: action.data
        }
    }
    //cualquier objeto o valor que retorne el reducer, es el valor de la nueva variable de estado
    return stateActual;
}

const TiendaState = (props) => {

    const [state, dispatch] = useReducer(tiendaReducer, {
        globalCategoria: null,
        carrito: []
    })

    const seleccionarCategoriaGlobal = (objCategoria) => {
        dispatch({
            type: "SET_GLOBAL_CATEGORIA",
            data: objCategoria
        })
    }

    const agregarCarrito = (objProducto) => {
        let {carrito} = state

        if(carrito.find(objProductoCarrito => objProductoCarrito.pk === objProducto.pk)){
            //Si hay un producto en el carrito como el que queremos aumentar

            carrito = carrito.map(objProductoCarrito => {
                if(objProductoCarrito.pk === objProducto.pk){
                    objProductoCarrito.cant++
                }
                return objProductoCarrito
            })

        } else {
            //No hay un producto en el carrito como el que queremos aumentar
            carrito.push({
                ...objProducto,
                cant: 1
            })
        }

        dispatch({
            type: "ACTUALIZAR_CARRITO",
            data: [...carrito]
        })

    }

    return (
        <TiendaContext.Provider value={{
            globalCategoria: state.globalCategoria,
            carrito: state.carrito,
            agregarCarrito: agregarCarrito,
            seleccionarCategoriaGlobal: seleccionarCategoriaGlobal
        }}>
            {props.children}
        </TiendaContext.Provider>
    )
}

export default TiendaState
