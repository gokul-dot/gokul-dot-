import React,{Component} from 'react';
import './App.css';
import Login from './Login.js';
import Signup from './Signup';
import firebase from './Fire';
import Details from './Details';
import Cart from './Cart.js';
import Home from './Home.js';
import {Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
 export default class App extends Component {
  constructor(props){
    super(props)
  this.state={
    user:''
}
  }
componentDidMount(){
this.authListener();
}
authListener(){
firebase.auth().onAuthStateChanged((user)=>{
if(user){
this.setState({user});
}
else{
 this.setState({user:null})
}
})
}

render(){
  return (
    <Router>
    <div className="h">
    
      <ul>
      <li  className="ac">SALES-CART</li>
      <Link to="/"><li className="ab">HOME</li></Link>
      <Link to="/login"><li  className="ab">LOGIN/SIGNUP</li></Link>
      <Link to="/cart"><li  className="ab">CART</li></Link>
      </ul>
      </div>
    <Switch>
   
    <Route path="/login" component={Login}/>
    <Route path="/Signup" component={Signup}/>

    <Route path="/cart" component={Cart}/>
    <Route path="/details" component={Details}/>
    <Route path="/" component={Home}/>
    </Switch>
    </Router>
    
  );
}
}


