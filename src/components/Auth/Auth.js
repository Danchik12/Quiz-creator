import './Auth.css'
import React,{Component} from 'react'
import {connect } from 'react-redux'
import {GoEyeClosed,GoEye} from "react-icons/go"
import Button from './../UI/Button/Button';
import {auth} from './../../store/action/auth'
 class Auth extends Component{
	state ={
		close:false,
		check:true
	}
loginHandler=  ()=>{
	this.props.auth(
		document.getElementById('email').value,
	document.getElementById('password-input').value,
true
	)
	}

registerHandler =  ()=>{
this.props.auth(
		document.getElementById('email').value,
	document.getElementById('password-input').value,
false
	)
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

CheckOut =() =>{
	this.setState({
			check:!this.state.check
		})
}


render (){
	const login=(
<>
<div id='login'>
<h1>Вход</h1>
<hr/>

			<p>
     <label  htmlFor="email">Email</label>
      <input  type='email' id='email' required/>
      </p>
      
      
      <label  htmlFor="password-input">Password</label>
      <div className='pass'>
			<input  type="password" id='password-input' required />
      
       { this.state.close ? 
      	<GoEye className='control' onClick={this.show_hide_password }/>: 
      	<GoEyeClosed className='control' onClick={this.show_hide_password }/> }

       
      
      </div>
      <Button type="sucess" onClick={this.loginHandler}>Войти</Button>

      <p >
                    Не зарегистрированы еще ?
                    <a href="#login" onClick={this.CheckOut} >Присоединяйтесь</a>
                </p>

                </div>

</>

		)

const register =(
	<>
<div id='register'>
                <h1>Регистрация</h1>
								<hr/>
								<p>
     <label  htmlFor="email">Email</label>
      <input  type='email' id='email' required/>
      </p>
      
      
      <label  htmlFor="password-input">Password</label>
      <div className='pass'>
			<input  type="password" id='password-input' required />
      
       { this.state.close ? 
      	<GoEye className='control' onClick={this.show_hide_password }/>: 
      	<GoEyeClosed className='control' onClick={this.show_hide_password }/> }

       
      
      </div>

								<Button type="primary" onClick={this.registerHandler}>Зарегестрироваться</Button>
								<p >  
                 Уже зарегистрированы ?
                 <a href="#register" onClick={this.CheckOut} > Войдите на сайт </a>
                 </p>


                </div>
                </>
)



		return(
<div className="Auth">
<div>
<form onSubmit={this.submitHand} className="AuthForm">
{this.state.check ?
login :
register}

                
    </form>
</div>


</div>


			)
	}
}

function mapDispathToProps(dispatch){
	return{
		auth:(email,password,isLogin) => dispatch (auth(email,password,isLogin)) 
	}
}



export default connect (null,mapDispathToProps) (Auth)