import Navbar from "../features/navbar/Navbar";
import UserOrders from "../features/user/components/UserOrder";
export default function UsersOrdersPage(){
    return (
        <div>
            <Navbar>
              <h1 className="mx-auto text-2xl">My Orders</h1>  
            <UserOrders></UserOrders>
            </Navbar>
        </div>
    );
}
