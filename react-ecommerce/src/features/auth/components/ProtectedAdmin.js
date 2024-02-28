import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedAdmin({children}){
    const user=useSelector((state)=>state.auth.loggedInuser);
    if(!user){
        return <Navigate to='/login' replace={true}></Navigate>
    }
    if(user && user.role==='user'){
        return <Navigate to='/login' replace={true}></Navigate>
    }
    return children;


}