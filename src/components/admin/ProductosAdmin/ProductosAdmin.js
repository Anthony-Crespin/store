import React, {forwardRef, useEffect} from 'react'
import {HiViewGridAdd} from 'react-icons/hi'
import MaterialTable from 'material-table'
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const ProductosAdmin = () => {

    const tableIcons = {
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
        DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
        ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
        ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
      };

    const urlApiProductos = 'https://shopcodigo.herokuapp.com/List_All_Products/'
    const fetchApi = async() => {
        const response = await fetch(urlApiProductos)
        console.log(response.statusText);
    }

    useEffect(() => {
        fetchApi()
    }, [])

    const data = [
        {id: 1, nombreProd: 'Cartuchos de tintas', categoria: 'impresoras', precio: 'S/. 45.00', inventario: 'Disponible'},
        {id: 2, nombreProd: 'Laptop asus', categoria: 'laptops', precio: 'S/. 4500.00', inventario: 'Agotado'},
        {id: 3, nombreProd: 'Cartuchos de tintas', categoria: 'impresoras', precio: 'S/. 45.00', inventario: 'Disponible'},
        {id: 4, nombreProd: 'Cartuchos de tintas', categoria: 'impresoras', precio: 'S/. 45.00', inventario: 'Disponible'},
        {id: 5, nombreProd: 'Cartuchos de tintas', categoria: 'impresoras', precio: 'S/. 45.00', inventario: 'Disponible'},
        {id: 6, nombreProd: 'Cartuchos de tintas', categoria: 'impresoras', precio: 'S/. 45.00', inventario: 'Disponible'},
        {id: 7, nombreProd: 'Cartuchos de tintas', categoria: 'impresoras', precio: 'S/. 45.00', inventario: 'Disponible'},
        {id: 8, nombreProd: 'Cartuchos de tintas', categoria: 'impresoras', precio: 'S/. 45.00', inventario: 'Disponible'},
        {id: 9, nombreProd: 'Cartuchos de tintas', categoria: 'impresoras', precio: 'S/. 45.00', inventario: 'Disponible'},
        {id: 10, nombreProd: 'Cartuchos de tintas', categoria: 'impresoras', precio: 'S/. 45.00', inventario: 'Disponible'},
        {id: 11, nombreProd: 'Cartuchos de tintas', categoria: 'impresoras', precio: 'S/. 45.00', inventario: 'Disponible'}
    ]

    const columnas = [
        {
            title: 'Nombre producto',
            field: 'nombreProd'
        },
        {
            title: 'Categoría',
            field: 'categoria'
        },
        {
            title: 'Precio',
            field: 'precio'
        },
        {
            title: 'Inventario',
            field: 'inventario'
        }
    ]

    return (
        <div className="productos__admin">
            <div className="add__prodAdmin">
                <div className="add__header">
                    <p>Añadir producto</p>
                    <HiViewGridAdd/>
                </div>
                <div className="form__addProd">
                    <form>
                        <div className="add__prodBox">
                            <input type="text" placeholder="Nombre del producto..." />
                            <input type="number" placeholder="S/. 000..." />
                        </div>
                        <div className="add__prodBox">
                            <input type="file" />
                            <select value="">
                                <option disabled selected>Elige una categoría</option>
                                <option value="">Laptos</option>
                                <option value="">Cpus</option>
                                <option value="">Cocinas</option>
                                <option value="">Refrigeradoras</option>
                            </select>
                        </div>
                        <div className="add__prodBox">
                            <textarea placeholder="Descripción del producto..."></textarea>
                        </div>
                    </form>
                </div>
            </div>

            <div className="lista__productos-admin">
                <MaterialTable
                    columns={columnas}
                    data={data}
                    icons={tableIcons}
                    title="Lista de Productos"
                    actions={[
                        {
                            icon: Edit,
                            tooltip: 'Editar categoría',
                            onClick: (event, rowData) => alert("Has presionado editar la fila: " + rowData.id)
                        },
                        {
                            icon: Clear,
                            tooltip: 'Eliminar categoría',
                            onClick: (event, rowData) => window.confirm("Has presionado eliminar la fila: " + rowData.id)
                        }
                    ]}
                    options={{
                        actionsColumnIndex: -1
                    }}
                    localization={{
                        header:{
                            actions: 'Acciones'
                        }
                    }}
                />
            </div>
        </div>
    )
}

export default ProductosAdmin
