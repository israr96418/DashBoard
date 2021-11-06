import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { DataGrid, GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarFilterButton } from "@mui/x-data-grid"
import { useState } from "react";
import { Link } from "react-router-dom";
import { productrows } from "../../Dummydata";
import "./ProductList.css";




function ProductList() {
    const [Data, setData] = useState(productrows);

    const handleDelete = (id) => {
    
        setData(Data.filter(item = () => item.id !== id))


    }


    const colums = [
        { field: "id", headerName: 'UserID', width: 80 },
        {
            field: "product", headerName: 'Product', width: 80,

            renderCell: (params) => {
                return (
                    <div className="productListItem">
                        <img className="productListImg" src={params.row.img} />
                        {params.row.name}
                    </div>


                )
            }

        },
        { field: "stock", headerName: 'Stock', width: 80 },
        { field: "price", headerName: 'Price', width: 80 },
        {
            field: "action", headerName: 'Action', width: 120,

            renderCell: (params) => {
                return (
                    <>
                      <Link to={"/user/" + params.row.id}>
                        <button className="productListEdit">Edit</button>
                      </Link>
                      <DeleteOutlineIcon
                        className="productListDelete"
                        onClick={() => handleDelete(params.row.id)}
                      />
                    </>
                )
            }
        },
    ]




    return (
        <div className="productlist">
            <DataGrid
                columns={colums}
                rows={Data}
                pageSize={6}
                checkboxSelection
                disableSelectionOnClick


            />
        </div>
    )
}

export default ProductList
