import { useEffect, useState } from "react";
import { ITEMS_PER_PAGE } from "../../../app/data";
import { fetchAllOrdersAsync, orderSlice, updateOrderAsync } from "../../order/OrderSlice";
import { useDispatch, useSelector } from "react-redux";
import {PencilIcon, EyeIcon } from "@heroicons/react/24/solid";
import { discountedPrice } from "../../../app/data"; 
import Pagination from "../../common/Pagination";
export default function AdminOrder(){
  const [page,setPage]=useState(-1);
  const dispatch=useDispatch();
  const [editableOrderId,seteditableOrderId]=useState(-1);
useEffect(()=>{
        const pagination={_page:page,_limit:ITEMS_PER_PAGE};
       dispatch(fetchAllOrdersAsync());
       
},[dispatch,page]);
const orders=useSelector((state)=>state.order.orders);
const totalOrders=useSelector((state)=>state.order.totalOrders);
const handleshow=(order)=>{
  console.log("handle show is called");
}
const handleEdit=(order)=>{
  seteditableOrderId(order.id);
}
const handleUpdate=(e,order)=>{
  const x={...order,status:e.target.value};
  dispatch(updateOrderAsync(x));
  seteditableOrderId(-1);
}
const chooseColor=(status)=>{
    switch(status){
      case 'pending':
      return 'bg-purple-200 text-purple-600';
      case 'dispatched':
        return 'bg-yellow-200 text-yellow-600';
      case 'delievered':
        return 'bg-green-200 text-green-600';
        case 'cancelled':
          return 'bg-red-200 text-red-600';
    }
}
    return(
        <div>
            <div className="overflow-x-auto">
  <div className="bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
    <div className="w-full ">
      <div className="bg-white shadow-md rounded my-6">
        <table className="min-w-max w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">#Order</th>
              <th className="py-3 px-6 text-left">Items</th>
              <th className="py-3 px-6 text-center">Total Amount</th>
              <th className="py-3 px-6 text-center">Shipping Address</th>
              <th className="py-3 px-6 text-center">Status</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
           {orders!=null && orders.length>0 && orders.map((order)=>(<tr className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left whitespace-nowrap">
                <div className="flex items-center">
                  <div className="mr-2">
                   
                  </div>
                  <span className="font-medium">{order.id}</span>
                </div>
              </td>
              <td className="py-3 px-6 text-left">
                {  order.items && order.items.map((item)=><div className="flex items-center">
                  <div className="mr-2">
                    <img
                      className="w-6 h-6 rounded-full"
                      src={item.thumbnail}  
                    />
                  </div>
                  <span>{item.title}-{item.quantity}-{discountedPrice(item)}</span>
                </div>)}
               
              </td>
              <td className="py-3 px-6 text-center">
                <div className="flex items-center justify-center">
                    ${order.totalAmount}
                </div>
              </td>
              <td className="py-3 px-6 text-center">
                <div className="">
                  <div> <strong>{order.selectedAddress.name}</strong></div>,
                  <div>{order.selectedAddress.street}</div>,
                  <div>{order.selectedAddress.city}</div>,
                  <div>{order.selectedAddress.state}</div>,
                  <div> {order.selectedAddress.pinCode}</div>,
                  <div> {order.selectedAddress.phone}</div>,
                </div>
              </td>
              <td className="py-3 px-6 text-center">
               
                {order.id===editableOrderId ?  <select onChange={(e)=>{
                  handleUpdate(e,order);
                }}>
                   <option >choose</option>
                   <option value="pending">Pending</option>
                   <option value="dispatched">Dispatched</option>
                   <option value="delievered">Delievered</option>
                   <option value="cancelled">Cancelled</option>
                </select> : <span className={`${chooseColor(order.status)} py-1 px-3 rounded-full text-xs`}>
                  {order.status}

                </span>}
               
              </td>
              <td className="py-3 px-6 text-center">
                <div className="flex item-center justify-center">
                  <div className="w-6 mr-6 transform hover:text-purple-500 hover:scale-110">
                    <EyeIcon className="w-8 h-8" onClick={(e)=>{
                      handleshow(order);
                    }}></EyeIcon>
                  </div>
                  
                  <div className="w-6 mr-2 transform hover:text-purple-500 hover:scale-110">
                    <PencilIcon className="w-8 h-8" onClick={(e)=>{
                      handleEdit(order);
                    }}></PencilIcon>
                    
                  </div>
                </div>
              </td>
            </tr>)) }
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>


        </div>

    )
}

