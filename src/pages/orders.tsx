import { ReactElement, useState } from "react";
import TableHOC from "../components/admin/TableHOC"
import { Link } from "react-router-dom";
import { Column } from "react-table";
type DataType ={
    _id:string;
    amount:number;
    quantity:number;
    discount:number;
    status: ReactElement;
    action: ReactElement;

}
//alt+ shift + o remove uwanted import

const column: Column<DataType>[] = [
    {
        Header: "ID",
        accessor:"_id",
    },
    {
        Header:"Quantity",
        accessor:"quantity",
    },
    {
        Header:"Discount",
        accessor:"discount",
    },
    {
        Header:"Amount",
        accessor:"amount",
    },
    {
        Header:"Status",
        accessor:"status",
    },
    {
        Header:"Action",
        accessor:"action",
    },

];
const Orders = () => {

    const [rows] = useState<DataType[]>([
        {
            _id:"asdasfs",
            amount:46515,
            quantity:21,
            discount:156,
            status: <span className="red">
                Processing
            </span>,
            action: <Link to={`/orders/asdasfs`}>View</Link>,
    
        }
    ])

    const Table = TableHOC<DataType>(
        column,
        rows,
        "dashboard-producr-box",
        "Orders",
        rows.length > 6
    )();
  return (
    <div className="container">
      <h1>My Orders</h1>
      {
        Table
      }
    </div>
  )
}

export default Orders
