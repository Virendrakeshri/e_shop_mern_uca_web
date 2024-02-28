import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  
  increment,
  
  incrementAsync,
  
} from './counterSlice.js';


export  default function  Order() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  

  const incrementValue = Number(incrementAmount) || 0;

  return (
    
    <div>
    
     
    </div>
  );
}
