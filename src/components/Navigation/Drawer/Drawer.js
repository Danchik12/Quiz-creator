import React,{Component} from 'react'
import './Drawer.css'
import Back from './../../UI/Back/Back'
import {NavLink} from 'react-router-dom'
class Drawer extends Component{




	render(){
		const cls=['Drawer']
		if (!this.props.isOpen){
			cls.push('close')
		}
		const links = [<li><NavLink to="/" onClick={this.props.onClose}>Тесты</NavLink></li>]
		if (this.props.isAuth){
			links.push(<li><NavLink to="/create-quiz" onClick={this.props.onClose}>Создать тест</NavLink></li>)
			links.push(<li><NavLink to="/logout" onClick={this.props.onClose}>Выйти</NavLink></li>)
		}else{
			links.push(<li><NavLink to="/auth" onClick={this.props.onClose}>Авторизация</NavLink></li>)
		}
		return(
			<>

			<nav className={cls.join(' ')}>
			<ul>
			{links}
			</ul>
			</nav>
			{this.props.isOpen ? <Back onClick={this.props.onClose}/> : null}
</>


			)


	}
}


export default Drawer
