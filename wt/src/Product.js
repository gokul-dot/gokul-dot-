import React,{ Component } from 'react';
import {ProductConsumer} from './Context';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
class Product extends Component {
 render(){
   const {id,title,img,price,inCart,info,count,total}=this.props.product;
   return(
     <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
       <div className="card">
      <ProductConsumer>
      {value=>(<div className="img-container p-5" onClick={()=>
      value.hand(id)
      }>
       <Link to="/details">
       <img src={img}  alt="products" className="card-img-top"/>
       </Link>
       <button className="cart-btn" disabled={inCart? true:false} onClick={()=>
      value.addtocart(id)
      }>
       {
         inCart ? (
           <p disabled>
             {" "}
             incart
             </p>
         ):(
          <p disabled>
             {" "}
             cart
             </p>
         )
       }
       </button>
       </div>)} 
       </ProductConsumer>
       <div className="card-footer d-flex justify-content-between">
       <p className="align-self-center">
       {title}</p>
       <h5 className="text-blue">
       <span>
         ${price}
       </span>
       </h5>
       </div>
       </div>
       </ProductWrapper>
   )
 }
}
export default Product;
const ProductWrapper=styled.div`
  .card{
    border-color:transparent;
    transition:all 1s linear;
  }
  .card-footer{
    background:transparent;
    border-top:transparent;
    transition:all 1s linear;
  }
  &:hover{
    .card{
      border:0.04rem solid rgba(0,0,0,0.2);
     
      box-shadow:0 4px 8px 0 rgba(0,0,0,0.2);
    }
    .card-footer{
      background:black;
      color:white;
    }
  }
  .img-container{
    position:relative;
    overflow:hidden;
  }
  .img-container:hover .card-img-top{
    transform:scale(1.1);
    transition:all 1s linear;
      }
      .cart-btn{
        position:absolute;
        bottom:0;
        color:black;
        right:0;
        padding:0.2rem 0.4rem;
        background:var(--lightblue); 
        width:60px;
        height:25px;
        text-align:center;
        border-radius:0.5rem 0 0 0;
        transform:translate(100%,100%);
        border:none;
      }
      .img-container:hover .cart-btn{
        transform:translate(0,0);
        transition:all 1s linear;
      }
`