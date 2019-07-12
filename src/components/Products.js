import React from 'react';
import {Product} from './Product';
export const Products = (props)=>{
    return (
        <ul>
           {
              props.prods.map((singleProd,index)=><Product key={index} prod={singleProd}/>) 
           }
        </ul>
    )
}