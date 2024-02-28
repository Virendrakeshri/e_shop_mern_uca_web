import React, { useEffect } from 'react';
import Home from './pages/Home';
import './App.css';
import LoginPage from './pages/LoginPage';

import SignupPage from './pages/SignupPage';
import PageNotFound from './pages/404';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Cart from './features/cart/Cart';
import CheckoutPage from './pages/CheckoutPage';
import ProductoverviewPage from './pages/ProductoverviewPage';

import Cartpage from './pages/CartPage';

import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsByIdAsync } from './features/products-list/productListSlice';
import { fetchItemsByUserId } from './features/cart/CartApi';
import { fetchItemsByUserIdAsync } from './features/cart/CartSlice';
import OrderSuccessPage from './pages/OrderSuccessPage';
import UserOrders from './features/user/components/UserOrder';
import UsersOrdersPage from './pages/UserOrdersPage';
import UserProfile from './features/user/components/UserProfile';
import UserProfilePage from './pages/UserProfilePage';
import Protected from './features/auth/components/Protected ';
import { fetchLoggedInUserAsync, fetchLoggedInUserOrdersAsync } from './features/user/userSlice';
import ProtectedAdmin from './features/auth/components/ProtectedAdmin';
import AdminHome from './pages/AdminHome';
import ProductForm from './features/admin/components/ProductForm';
import ProductFormPage from './pages/ProductFormPage';
import AdminProductDetailPage from './pages/AdminProductDetailPage';
import AdminOrdersPage from './pages/AdminOrdersPage';
import fetchLoggedInUserOrders from './features/user/userApi';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Protected><Home></Home></Protected>
  },
  {
    path:'/admin',
    element:<ProtectedAdmin><AdminHome></AdminHome></ProtectedAdmin>

  },
  {
    path: '/login',
    element: <LoginPage></LoginPage>
  },
  {
    path:'/signup',
    element:<SignupPage></SignupPage>
  },
  {
    path:'/cart',
    element:<Protected><Cartpage></Cartpage></Protected>
  },
  {
    path:'/checkout',
    element: <Protected><CheckoutPage></CheckoutPage></Protected>
  },
  {
    path:'/product-detail/:id',
    element:<Protected><ProductoverviewPage></ProductoverviewPage></Protected>
  },
  {
    path:'/admin/product-detail/:id',
    element:<Protected><AdminProductDetailPage></AdminProductDetailPage></Protected>
  },
  {
    path:'/admin/product-form',
    element:<ProtectedAdmin><ProductFormPage></ProductFormPage></ProtectedAdmin>
  },
  {
    path:'/admin/product-form/edit/:id',
    element:<ProtectedAdmin><ProductFormPage></ProductFormPage></ProtectedAdmin>
  },
  {
    path:'/order-success/:id',
    element:<Protected><OrderSuccessPage></OrderSuccessPage></Protected>
  },
  {
    path:'/userorders',
    element:<Protected><UsersOrdersPage></UsersOrdersPage></Protected>

  },
  {
    path:'/profile',
    element:<Protected><UserProfilePage></UserProfilePage></Protected>
  },
  {
    path:'*',
    element:<PageNotFound></PageNotFound>
  },
  {
    path:'/admin/orders',
    element:<ProtectedAdmin><AdminOrdersPage></AdminOrdersPage></ProtectedAdmin>
  },
]);


function App() {
  const dispatch=useDispatch();
  const user=useSelector((state)=>state.auth.loggedInuser);
  
   
  
  if(user){

  
  const x=user.id;
  
  dispatch(fetchItemsByUserIdAsync(x));
  dispatch(fetchLoggedInUserAsync(x));
}


  
  
  return (
  
     <div className='App'>
         <RouterProvider router={router} />
      </div>     
  );
}

export default App;
