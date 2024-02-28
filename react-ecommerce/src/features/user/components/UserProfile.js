import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserAsync } from '../userSlice';
import { useForm } from "react-hook-form";
export  default function  UserProfile() {
  // we will add payment section when we will work on backened;
const user=useSelector((state)=>state.user.userInfo);
  const dispatch = useDispatch();
  const [selectedEditIndex,setSelectedEditIndex]=useState(-1);
  const [showAddAddressForm,setSowAddAddressForm]=useState(false);
  const handleRemove=(e,index)=>{
    const newuser={...user,addresses:[...user.addresses]};
    newuser.addresses.splice(index,1);
    dispatch(updateUserAsync(newuser));
  }
  const handleEdit=(addressUpdate,index)=>{
   
    const newuser={...user,addresses:[...user.addresses]};
    newuser.addresses.splice(index,1,addressUpdate);
    

    dispatch(updateUserAsync(newuser));

  }
  const handleEditForm=(index)=>{
    const address=user.addresses[index];
    setSelectedEditIndex(index);
    setValue('name',address.name);
    setValue('email',address.email);
   
    setValue('state',address.state);
    setValue('pinCode',address.pinCode);
    setValue('phone',address.phone);
    setValue('street',address.street);
    setValue('City',address.City);
    

  }
  const handleAdd=(data)=>{
    const newuser={...user,addresses:[...user.addresses,data]};
    dispatch(updateUserAsync(newuser));
    setSowAddAddressForm(false);
   
  }
 
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  

  
  

  return (
    <div>
       <div>
       
       < div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-white mt-12">
       <h3 className="text-xl font-bold tracking-tight text-gray-900">Name:{ user && user.name ? user.name : 'New User'}</h3>
       <h3 className="text-xl font-bold tracking-tight text-red-900">Email address:{user && user.email}</h3>
       { user && user.role=="admin" ? <h3 className="text-xl font-bold tracking-tight text-red-900">role:{user && user.role}</h3> :null}
          
            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <button
                onClick={e=>{
                  setSowAddAddressForm(true);
                  setSelectedEditIndex(-1);
                }}
               type="submit"
                className="rounded-md my-5 bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                 >
                     Add New Address
               </button>
               { showAddAddressForm ?
                       <form className="bg-white px-5 mt-12 py-12 " noValidate onSubmit={handleSubmit((data)=>{
            console.log(data);
            handleAdd(data);
            reset();
            setSelectedEditIndex(-1);

            
         })}>
         {/* <div className="space-y-12"> */}
       
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-2xl font-semibold leading-7 text-gray-900">Personal Information</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Full name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  {...register('name',{required:' name is required'})}
                 
                  id="name"

               
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
                
            </div>

         

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                {...register('email',{required:'email is required'})}
                  id="email"
                  name="email"
                  type="email"
              
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Phone
              </label>
              <div className="mt-2">
              <input
                  id="Phone"
                  {...register('phone',{required:'phone is required'})}
                  type="tel"
             
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
               
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Street address
              </label>
              <div className="mt-2">
                <input
                {...register('street',{required:' street is required'})}
                  type="text"
                 
                  id="street"
                  
                  
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                City
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  {...register('City',{required:' City is required'})}
                  id="City"
                 
                  
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                State / Province
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  {...register('state',{required:' state is required'})}
                  id="state"
                 
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                ZIP / Postal code
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  {...register('pinCode',{required:' pinCode is required'})}
                  id="pinCode"
                
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add address
        </button>
       
      </div>
                              </form> : null}

                       <p className="mt-0.5 text-sm text-gray-500">Your Address</p>
                  {user && user.addresses && user.addresses.length>0 && user.addresses.map((address,index)=>(
                    <div>
                      { index==selectedEditIndex ?
                       <form className="bg-white px-5 mt-12 py-12 " noValidate onSubmit={handleSubmit((data)=>{
              console.log(data);
            handleEdit(data,index);
            reset();
            setSelectedEditIndex(-1);
            
         })}>
         {/* <div className="space-y-12"> */}
       
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-2xl font-semibold leading-7 text-gray-900">Personal Information</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Full name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  {...register('name',{required:' name is required'})}
                 
                  id="name"

               
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
                
            </div>

         

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                {...register('email',{required:'email is required'})}
                  id="email"
                  name="email"
                  type="email"
              
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Phone
              </label>
              <div className="mt-2">
              <input
                  id="Phone"
                  {...register('phone',{required:'phone is required'})}
                  type="tel"
             
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
               
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Street address
              </label>
              <div className="mt-2">
                <input
                {...register('street',{required:' street is required'})}
                  type="text"
                 
                  id="street"
                  
                  
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                City
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  {...register('City',{required:' City is required'})}
                  id="City"
                 
                  
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                State / Province
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  {...register('state',{required:' state is required'})}
                  id="state"
                 
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                ZIP / Postal code
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  {...register('pinCode',{required:' pinCode is required'})}
                  id="pinCode"
                
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Edit address
        </button>
        <button
          onClick={(e)=>{
            setSelectedEditIndex(-1);
          }}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Cancel
        </button>
      </div>
                              </form> : null}
                      
                       
    
                    <div  className="flex justify-between gap-x-6 py-5 px-5 border-solid border-2 border-gray-200">
               <div className="flex min-w-0 gap-x-4 ">
                 <div className="min-w-0 flex-auto">
                   <p className="text-sm font-semibold leading-6 text-gray-900">{address.name}</p>
                   <p className="mt-1 truncate text-xs leading-5 text-gray-500">{ address.street}</p>
                   <p className="mt-1 truncate text-xs leading-5 text-gray-500">{address.pinCode}</p>
                 </div>
                
               </div>
               <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                 <p className="text-sm leading-6 text-gray-900">{address.phone}</p>
                 <p className="text-sm leading-6 text-gray-900">{ address.City}</p>
                 </div>
                 <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                 <button
                                        onClick={()=>{
                                          handleEditForm(index);
                                          
                                        }}
                                        type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                                      >
                                        Edit
                                      </button>
                               <button
                                        onClick={(e)=>{
                                          handleRemove(e,index);
                                          e.preventDefault();
                                          setSowAddAddressForm(false);

                                        }}
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                      >
                                        Remove
                                      </button>
                                     
                       </div>

               
                    </div> 
                </div> )) };        
                            
             </div>
      </div>
     </div> 
    </div>
  );
}
