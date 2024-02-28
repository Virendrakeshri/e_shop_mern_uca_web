import AdminProductList from "../features/admin/components/AdminProductList";
import Navbar from "../features/navbar/Navbar";



export default function AdminHome(){
    return (
        <>
        <div className="app">
        <Navbar>
            <AdminProductList></AdminProductList>
        </Navbar>

        
      
       </div>

        </>

    );
}
