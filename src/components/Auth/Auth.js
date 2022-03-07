
import React,{Component} from 'react'
import {connect } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {auth} from './../../store/action/auth'
 class Auth extends Component{
	state ={
	
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
<Form>
  <Form.Group className="mb-3" >
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" id='email' placeholder="Enter email" required />
    <Form.Text className="text-light">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" id='password-input' placeholder="Password" required/>
  </Form.Group>
 
  <Button variant="outline-success"  onClick={this.loginHandler}>
    Войти
  </Button>
</Form>
 
 <p >
Не зарегистрированы еще ? &nbsp;
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
								<Form>
  <Form.Group className="mb-3" >
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" id='email' placeholder="Enter email" required />
    <Form.Text className="text-light">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" id='password-input' placeholder="Password" required/>
  </Form.Group>
 
  <Button variant="outline-info"  onClick={this.registerHandler}>
    Зарегестрироваться
  </Button>
</Form>
<p >  
Уже зарегистрированы ? &nbsp;
<a href="#register" onClick={this.CheckOut} > Войдите на сайт </a>
    </p>


                </div>
                </>
)



		return(
<div className="d-flex justify-content-center ">
<div>


{this.state.check ?
login :
register}

                
    
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