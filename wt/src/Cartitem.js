import React,{Component} from 'react';
import style from './Cartitem.module.css'
export default function Cartitem({item,value}){
  const {id,img,count,total,price,title}=item;
  const {inc,dec,rem}=value
  return(
    <div className="row my-1 text-capitalize text-center">
    <div className="col-10 mx-auto col-lg-2">
    <img src={img} style={{width:'5rem',height:"5rem"}} className="img-fluid"/>
    </div>
    <div className="col-10 mx-auto col-lg-2">
   <strong className="d-lg-none"> product :</strong>
   {title}
    </div>
    <div className="col-10 mx-auto col-lg-2">
   <span className="d-lg-none"> price :</span>
   ${price}
    </div>
    <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
  <div className="d-flex justify-content-center">
  <button className={style.btn2} onClick={()=>dec(id)}>
-</button>
<span>
{count}</span>
<button className={style.btn2} onClick={()=>inc(id)}>
+</button>
    </div>
  </div>
  <div className="col-10 mx-auto col-lg-2">
<div className="cart-icon" onClick={()=>rem(id)}>
<button className={style.btn3}>DEL</button>
</div>
</div>
  <div className="col-10 mx-auto col-lg-2">
  <strong>item total : ${total}</strong>
</div>
    </div>
  )
}