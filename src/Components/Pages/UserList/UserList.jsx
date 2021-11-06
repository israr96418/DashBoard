
import { DataGrid, GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport, GridToolbarFilterButton } from "@mui/x-data-grid"
import "./UserList.css";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from "react-router-dom";
import { rows } from "../../Dummydata";
import React,{useState} from 'react'
//this will create a demo data at run time  
// import { useDemoData } from '@mui/x-data-grid-generator';


function UserList() {
    const [Data, setData] = useState(rows);
    
    const handle = (id)=>{
        console.log(id);
        setData(Data.filter(map =>map.id!==id))
        console.log(setData);
    }


    const customToolbar = () => {
        return (

            <GridToolbarContainer className="gridtoolbarcontainer">
                <GridToolbarColumnsButton />
                <GridToolbarFilterButton />
                <GridToolbarDensitySelector />
                <GridToolbarExport csvOptions={{ allColumns: 'true' }} printOptions={{ allColumns: 'true' }} />
            </GridToolbarContainer>
        )
    }

    // array of object:

    const columns = [
        { field: 'id', headerName: "UserID", width: 70 },
        {
            field: 'fname', headerName: "First Name", width: 120,

            renderCell: (params) => {
                return (
                    <div className="rendercell">
                        <img className="image" src={params.row.avatar} />
                        {params.row.fname}
                    </div>
                )
            }

        },

        { field: 'email', headerName: "Email", width: 200 },
        { field: 'status', headerName: "Status", width: 100 },
        { field: 'transction', headerName: "Transction", width: 120 },

        {
            field: "action", headerName: 'Action', width: 100, 
            renderCell: (params) => {
                return (
                    //these empty tag act as a reactfragment(<React.fragment>)
                    //we dont need to add div elements to html page so that,s why we used react fragments
                    <>
                        <Link to={"/user/"+params.row.id}>
                            <button  className="btn">Edit</button>
                        </Link>
                        <DeleteOutlineIcon className="delet" onClick={()=> handle(params.row.id)} />
                    </>
                )
            }
        },

    ]


    // const {data}  = useDemoData({
    //     dataSet: 'Commodity',
    //     rowLength: 4,
    //     maxColumns: 6,
    // })


    return (
        <div className="userlist">
            <DataGrid
                columns={columns}
                rows={Data}
                //  it described how many row per pages
                pageSize={5}
                components={{
                    Toolbar: customToolbar,
                }}
                checkboxSelection
                disableSelectionOnClick
            />

        </div>
    )
}

export default UserList
