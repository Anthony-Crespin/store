import React, {forwardRef} from 'react'
import {HiOutlineViewGridAdd} from 'react-icons/hi'
import {RiImageAddFill} from 'react-icons/ri'
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

const Categorias = () => {

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

    const data = [
        {id: 1, nombreCategoria: 'Laptops'},
        {id: 2, nombreCategoria: 'Cocinas'},
        {id: 3, nombreCategoria: 'Refrigeradoras'},
        {id: 4, nombreCategoria: 'Cases'},
        {id: 5, nombreCategoria: 'Parlantes'},
        {id: 6, nombreCategoria: 'Mouses'},
        {id: 7, nombreCategoria: 'Teclados'},
        {id: 8, nombreCategoria: 'Headphones'},
    ]

    const columnas = [
        {
            title: 'Id',
            field: 'id'
        },
        {
            title: 'Nombre',
            field: 'nombreCategoria'
        }
    ]

    return (
        <div className="categorias">
            <div className="add__cat">
                <div className="add__header">
                    <p>Añadir categoría</p>
                    <HiOutlineViewGridAdd/>
                </div>
                <div className="add__form">
                    <form>
                        <input type="text" placeholder="Nombre de la categoría"/>
                        <div className="add_image">
                            <input type="file" id="catFile" />
                            <label for="catFile">
                                <RiImageAddFill/> 
                                Imagen de la categoría
                            </label>
                        </div>
                        <button type="submit">AÑADIR</button>
                    </form>
                </div>
            </div>

            <div className="lista__categorias">
                <MaterialTable
                    columns={columnas}
                    data={data}
                    icons={tableIcons}
                    title="Lista de categorías"
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

export default Categorias
