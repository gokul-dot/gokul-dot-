import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from './Context';
import style from './Details.module.css'
class Details extends Component {
 render(){
   return(
        <ProductConsumer>
          {value=>{
            const {id,title,img,price,inCart,info,count,total}=value.detailProduct;
            return(
              <div className="container py-5">
                  <div className="row">
                  <div className="col-10 mx-auto text-center text-blue my-5">
                  <h1>{title}</h1>
                  </div>
                  </div>
                  <div className="row">
                  <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <img src={img} alt="detail"/>
                  </div>
                  <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h3>price : ${price}</h3>
                  <p>{info}</p>
                  <Link to="/">
                  <button className={style.btn}>BACK</button>
                  </Link>
                  <button className={style.btn1} disabled={inCart?true:false} onClick={()=>{
                    value.addtocart(id);
                  }}>{inCart?"InCart":"Add To Cart"}</button>
                  </div>
                  </div>
              </div>
            )
          }}
          </ProductConsumer>
   )
 }
}
export default Details;