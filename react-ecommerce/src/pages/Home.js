
import ProductList from "../features/products-list/components/ProductList";
import Navbar from "../features/navbar/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Home(){
    return (
        <>
        <div className="app">


        
       <Navbar>
        <ProductList></ProductList>
        

       </Navbar>
       </div>

        </>

    );
}
export default Home;