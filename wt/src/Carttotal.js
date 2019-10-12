import React from 'react';
import {Link} from 'react-router-dom';
import style from './Cart.module.css';
export default function Carttotal({value}){
const {cartSub,cartTotal,cartTax,clearCart}=value
  return(
    <div className="container">
    <div className="row">
       <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
         <Link to='/'>
         <button className={style.clear} onClick={()=>clearCart()}>clearcart</button> 
         </Link>
         <h5>
           <span>SUBTOTAL : </span>
           <strong>${cartSub}</strong>
           </h5>
           <h5>
           <span>TAX : </span>
           <strong>${cartTax}</strong>
           </h5>
           <h5>
           <span>TOTAL : </span>
           <strong>${cartTotal}</strong>
           </h5>
       </div>
      </div>

      </div>
  )
}