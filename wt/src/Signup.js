import React,{ Component} from 'react';
import style from './Signup.module.css';
import firebase from './Fire';
import 'firebase/firestore';
class Signup extends Component {
  constructor(props){
    super(props)
  this.state={
    fname:'',
    lname:'',
    email:'',
    password:''
 }
}

 handleChange=(e)=>{
  this.setState({
[e.target.id]:e.target.value
  })
   }
 signup=(e)=>{
  const fname=document.querySelector("#fname").value;
 const email=document.querySelector("#email").value;
 const password=document.querySelector("#email").value;
 firebase.auth().createUserWithEmailAndPassword(email,password)
alert(`u are logged in as ${fname}`)
} 
render(){
return(
  <div className={style.container}>
 <form className={style.form} >
 
 <div className={style.email}>
   <label className={style.emaill}>FirstName</label><br/>
   <input type="text" id="fname" className={style.etext} onChange={this.handleChange}/>
 </div>
 <div className={style.email}>
   <label className={style.emaill}>LastName</label><br/>
   <input type="text" id="lname" className={style.etext} onChange={this.handleChange}/>
 </div>
 <div className={style.email}>
   <label className={style.emaill}>Email</label><br/>
   <input type="email" id="email" className={style.etext} onChange={this.handleChange}/>
 </div>
 <div className={style.password}>
   <label className={style.pass}>password</label>
   <input type="password" id="password" className={style.ptext} onChange={this.handleChange}/>
 </div>
 <div >
   <button onClick={this.signup} className={style.btn}>SignUp</button>
   </div>
    </form>
  </div>
)
}
}
export default Signup;