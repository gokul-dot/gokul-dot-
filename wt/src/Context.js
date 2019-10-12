import React,{ Component } from 'react';
import {storeProducts,detailProduct} from './data';
const ProductContext=React.createContext();
class ProductProvider extends Component {
  state={
    products:storeProducts,
    detailProduct:detailProduct,
    cart:[],
    cartSub:0,
    cartTax:0,
    cartTotal:0
  };
  getItem=(id)=>{
   const product=this.state.products.find(item=>item.id===id)
   return product;
  }
  hand=(id)=>{
    const product=this.getItem(id);
    this.setState(()=> {
return {detailProduct:product}
    })
  };
  addtocart=(id)=>{
    let tempproduct=[...this.state.products];
    const index=tempproduct.indexOf(this.getItem(id));
    const product=tempproduct[index];
    product.inCart=true;
    product.count=1;
    const price=product.price;
    product.total=price
    this.setState(()=>{
      return{
        products:tempproduct,cart:[...this.state.cart,product]
      }
    },()=>{
      this.addTotal(); 
    })
  };
  inc=(id)=>{
      let tempCart=[...this.state.cart];
      const selected=tempCart.find(item=>item.id ===id)
     
      const product=this.getItem(id);
      product.count+=1;
      product.total=product.count*product.price
      this.setState(()=>{
        return{
          cart:[...tempCart]
        }
      },()=>{
        this.addTotal()
      })
  }
  dec=(id)=>{
    let tempCart=[...this.state.cart];
    const selected=tempCart.find(item=>item.id ===id)
    const product=this.getItem(id);
    product.count=product.count-1;
    if(product.count<1){
    this.rem(id);
    }
    else{
      product.total=product.price*product.count;
      this.setState(()=>{
        return{
          cart:[...tempCart]
        }
      },()=>{
        this.addTotal()
      })
    }
  
  }
  rem=(id)=>{
       const tempproduct=[...this.state.products];
       let tempCart=[...this.state.cart];
       tempCart=tempCart.filter(item=>item.id !== id);
       const index=tempproduct.indexOf(this.getItem(id));
       let removed=tempproduct[index];
       removed.inCart=false;
       removed.count=0;
       removed.total=0;
       this.setState(()=>{
         return{
           cart:[...tempCart],
           products:[...tempproduct]
         }
       },()=>{
         this.addTotal();
       })
  }
  clearCart=()=>{
    
        this.setState(()=>{
          return{
            cart:[],
            inCart:false
          }
        })
  }
  addTotal=()=>{
    let subtotal=0;
    this.state.cart.map(item=>subtotal += item.total);
    const tax=subtotal * 0.1;
    const Tax=parseFloat(tax.toFixed(2));
    const total=subtotal + Tax;
    this.setState(()=>{
      return{
      cartSub:subtotal,
      cartTax:Tax,
      cartTotal:total
    }})
  }
 render(){
   return(
        <ProductContext.Provider value={{
          ...this.state,
          hand:this.hand,
          addtocart:this.addtocart,
          inc:this.inc,
          dec:this.dec,
          rem:this.rem,
          clearCart:this.clearCart
        }}>
          {this.props.children}
          </ProductContext.Provider>
   )
 }
}
const ProductConsumer=ProductContext.Consumer;
export {ProductProvider,ProductConsumer};