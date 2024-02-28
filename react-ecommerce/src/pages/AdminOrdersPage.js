import AdminOrder from "../features/admin/components/AdminOrder";
import AdminProductDetail from "../features/admin/components/AdminProductDetail";
import Navbar from "../features/navbar/Navbar";



export default function AdminOrdersPage(){
    return (
        <>
        <Navbar>
            <AdminOrder></AdminOrder>
        </Navbar>
    </>
    );

}