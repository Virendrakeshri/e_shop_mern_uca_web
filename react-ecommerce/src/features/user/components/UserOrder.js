import React, { useDeferredValue, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLoggedInUserOrdersAsync } from '../userSlice.js';
import { discountedPrice } from '../../../app/data.js';


export  default function  UserOrders() {

  const user=useSelector((state)=>state.auth.loggedInuser);

  const dispatch = useDispatch();
  const orders=useSelector((state)=>state.user.userOrders);
  
  useEffect(()=>{
    if(user!=null){
      dispatch(fetchLoggedInUserOrdersAsync(user.id));

    }
   

  },[dispatch])
  return (
    
    <div>
      { orders!=null && orders.length &&  orders.map((order)=>(
            <div>
       
            < div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-white mt-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">Order Number is: {order.id}</h1>
            <h3 className="text-xl font-bold tracking-tight text-red-900">Order Status: {order.status}</h3>
                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                              <div className="flow-root">
                                <ul role="list" className="-my-6 divide-y divide-gray-200">
                                  {order.items && order.items.map((item) => (
                                    <li key={item.id} className="flex py-6">
                                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                        <img
                                          src={item.product.thumbnail}
                                          alt={item.product.title}
                                          className="h-full w-full object-cover object-center"
                                        />
                                      </div>
      
                                      <div className="ml-4 flex flex-1 flex-col">
                                        <div>
                                          <div className="flex justify-between text-base font-medium text-gray-900">
                                            <h3>
                                              <a href={item.product.href}>{item.product.name}</a>
                                            </h3>
                                            <p className="ml-4">{discountedPrice(item.product)}</p>
                                          </div>
                                          <p className="mt-1 text-sm text-gray-500">{item.product.brand}</p>
                                        </div>
                                        <div className="flex flex-1 items-end justify-between text-sm">
      
                                          <div className="text-gray-500">
                                          <label htmlFor="quantity" className="inline mr-5 text-sm font-medium leading-6 text-gray-900">
                                          Qty:{item.quantity}
                                               </label>
                                                                                      
                                          </div>
      
                                          <div className="flex">
                                           
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                </div>
                 <div className="border-t border-gray-200 px-2 py-6 sm:px-2">
                            <div className="flex justify-between text-base font-medium text-gray-900 my-2">
                              <p>Subtotal</p>
                              <p>{order.totalAmount}</p>
                            </div>
                            <div className="flex justify-between text-base font-medium text-gray-900 my-2">
                              <p>Total Items in Cart</p>
                              <p>{order.totalItems} items</p>
                             
                            </div>
                            <div className="flex justify-between text-base font-medium text-gray-900 my-2">
                              <p>paymentMethod</p>
                              <p>{order.PaymentMethod}</p>
                            </div>
      
      
      
                            <p className="mt-0.5 text-sm text-gray-500">Shipping Address</p>
                            <div  className="flex justify-between gap-x-6 py-5 px-5 border-solid border-2 border-gray-200">
          <div className="flex min-w-0 gap-x-4 ">
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">{order.selectedAddress.name}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{order.selectedAddress.street}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{order.selectedAddress.pinCode}</p>
            </div>
            
           
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">{order.selectedAddress.phone}</p>
            <p className="text-sm leading-6 text-gray-900">{order.selectedAddress.city}</p>
            </div>
           
          
             </div>          
                  </div>
           </div>
          </div>
      ))}
     
    </div>
  );
}
