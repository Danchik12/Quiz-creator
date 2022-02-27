import './Auth.css'
import React,{Component} from 'react'
import {GoEyeClosed,GoEye} from "react-icons/go"
import Button from './../UI/Button/Button';
import axios from 'axios'
export default class Auth extends Component{
	state ={
		close:false
	}
loginHandler= async ()=>{
	const authData={
	email:document.getElementById('email').value,
	password:document.getElementById('password-input').value,
	returnSecureToken:true
}
try{	

const response =await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD8U07p1wdLi2yhRMVF2fgLNMGTYYAZEnU',authData)
console.log(response.data)
}catch(e){
	console.log(e)
}

}
registerHandler = async ()=>{
const authData={
	email:document.getElementById('email').value,
	password:document.getElementById('password-input').value,
	returnSecureToken:true
}
try{	

const response =await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD8U07p1wdLi2yhRMVF2fgLNMGTYYAZEnU',authData)
console.log(response.data)
}catch(e){
	console.log(e)
}
}

submitHand =event =>{
event.preventDefault()
}

 show_hide_password =() =>{
	var input = document.getElementById('password-input');
	if (input.getAttribute('type') == 'password') {
		
		input.setAttribute('type', 'text');
		this.setState({
			close:!this.state.close
		})
	} else {
		
		input.setAttribute('type', 'password');
		this.setState({
			close:false
		})
	}
	return false;
}

render (){
		return(
<div className="Auth">
<div><h1>Авторизация</h1>

<form onSubmit={this.submitHand} className="AuthForm">

     <label  htmlFor="email">Email</label>
      <input  type='email' id='email' required/>
      
      <label  htmlFor="password-input">Password</label>
      <div className='pass'>

      <input  type="password" id='password-input' required />
      
       
      { this.state.close ? 
      	<GoEye className='control' onClick={this.show_hide_password }/>: 
      	<GoEyeClosed className='control' onClick={this.show_hide_password }/> }
       
   
    </div>
      
      <Button type="sucess" onClick={this.loginHandler}>Войти</Button>
      <Button type="primary" onClick={this.registerHandler}>Зарегистрироваться</Button>
    </form>


</div>
</div>


			)
	}
}