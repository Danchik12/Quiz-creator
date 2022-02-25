import './Auth.css'
import React,{Component} from 'react'
import {GoEyeClosed,GoEye} from "react-icons/go"
import Button from './../UI/Button/Button';
export default class Auth extends Component{
	state ={
		close:false
	}
loginHandler=()=>{

}
registerHandler =()=>{

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

     <label  htmlFor="login">Login</label>
      <input  type="text" id='login' required/>
      
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