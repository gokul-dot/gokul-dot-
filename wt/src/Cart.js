import React,{ Component } from 'react';
import style from './Cart.module.css';
import CartColumns from'./CartColumns';
import Carttotal from './Carttotal';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from './Context';
import Cartlist from './Cartlist';
class Cart extends Component {
 render(){
   return(
        <section>
        <ProductConsumer>
          {value=>{
            const {cart}=value;
            if(cart.length > 0){
              return(
                <div>
              <CartColumns/>
              <Cartlist value={value}/>
              <Carttotal value={value}/>
              </div>
              )
              
            }
            else{
              return(
                <div>
                <h1>CART IS EMPTY</h1>
                </div>
              )
            }
          }

          }
          </ProductConsumer>
        
        
        </section>
   )
 }
}
export default Cart;