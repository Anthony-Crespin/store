import { URL_BACKEND } from "./environments/environments"

export const getProductos = async () => {
    const peticion = await fetch(`${URL_BACKEND}/api/products/`)
    const data = await peticion.json()
    return data
}