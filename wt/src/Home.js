import React,{ Component } from 'react';
import style from './Home.module.css';
import logo from './kid.jpg'

import {ProductConsumer} from './Context';
import Product from './Product';
class Home extends Component {
  
 render(){
  
   return(
     <React.Fragment>
     
      <div className="py-5">
      <div className="container">
      <div className="row">
      <ProductConsumer>
        {value=>{
    return value.products.map( product=>{
        return <Product key={product.id} product={product}/>;
    })
        }}
        </ProductConsumer>
        </div>
        </div>
        </div>
        </React.Fragment>
       
   )
 }
}
export default Home;