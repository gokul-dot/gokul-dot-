import React,{ Component } from 'react';
import style from './Login.module.css';
import firebase from './Fire';
import Signup from './Signup';
import {Link} from 'react-router-dom';
class Login extends Component {
 
  state={
email:'',
password:''
 }

 handleChange=(e)=>{
  this.setState({
[e.target.id]:e.target.value
  })
   }
 handleSubmit=(e)=>{
e.preventDefault();
firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
console.log(this.state);
 }
 render(){
return(
  
  <div className={style.container}>
 <form className={style.form} >
 <h1>Login</h1>
 <div className={style.email}>
   <label className={style.emaill}>Email</label><br/>
   <input value={this.state.email} type="email" id="email" className={style.etext} onChange={this.handleChange}/>
 </div>
 <div className={style.password}>
   <label className={style.pass}>password</label>
   <input type="password" value={this.state.password} id="password" className={style.ptext} onChange={this.handleChange}/>
 </div>
 <div >
   <button onSubmit={this.handleSubmit} className={style.btn}>Login</button>
   </div>
  <p>new here ?<Link to='/Signup'>Signup</Link></p>
      </form>
  </div>
)
}
}
export default Login;