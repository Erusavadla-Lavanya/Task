import AgGridSolid from "ag-grid-solid";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { Component } from "solid-js/types/server/index.js";

type User = {
    id: number;
    name: string;
    age: number;
    PhoneNumber: number;
    email: string;
    martialstatus: string;
    Action: string;
}

const  Dashboard: Component=()=> {

const rowData : User[] = [
    { id: 1, name: "Lavanya", age: 20, PhoneNumber: 1234567890 , email: "Lavanya@gmail.com", martialstatus: "single", Action: "edit"},
    { id: 2, name: "sukanya", age: 25, PhoneNumber: 987654321, email: "sukanya@gmail.com", martialstatus: "married", Action: "edit" },
    { id: 3, name: "sandy", age: 40, PhoneNumber: 1122334455, email: "sandy@gmail.com", martialstatus: "divorced", Action: "edit" },
    {
        id:4, name: "navya", age: 45, PhoneNumber: 9876543210, email:"Navya@gmail.com", martialstatus: "single", Action: "edit"
    },
    {
        id:5, name: "sri", age: 30, PhoneNumber: 1234567890, email:"sri@gmail.com", martialstatus: "married", Action: "edit"
    }
    ];
    
    const columnDefs = [
    { headerName: "ID", field: "id" },
    { headerName: "Name", field: "name" },
    { headerName: "Age", field: "age" },
    { headerName: "PhoneNumber", field: "PhoneNumber" },
        { headerName: "Email", field: "email" },
        { headerName: "Martialstatus", field: "martialstatus" },
        { headerName: "Action", field: "Action" },
       
    ];

    return (
        <div style={{ "text-align": "center",padding: "20px"}}>
            <h3 style ={{color: "blue"}}>Dashboard</h3>
        <div class="ag-theme-alpine" style={{ height: "70vh", width: "100%", "max-width": "1200px", margin: "auto"}}>
           <AgGridSolid
                rowData={rowData}
                columnDefs ={columnDefs}
                />
                </div>
        </div>
    )
}
export default Dashboard;