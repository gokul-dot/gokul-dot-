import React,{Component} from 'react';
import Cartitem from './Cartitem';
class Cartlist extends Component{
  
  render(){
    const {value}=this.props
    const {cart}=value
    console.log(value,cart)
    return(
      <div className="container-fluid">
      {
        cart.map(item=>{
          return  <Cartitem key={item.id} value={value} item={item}/>
        })}
       
        </div>
    )
  }
}
export default Cartlist;