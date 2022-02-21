import React,{Component} from 'react'
import './Drawer.css'
import Back from './../../UI/Back/Back'

class Drawer extends Component{




	render(){
		const cls=['Drawer']
		if (!this.props.isOpen){
			cls.push('close')
		}
		return(
			<>

			<nav className={cls.join(' ')}>
			<ul>
<li><a href="/auth">Авторизация</a></li>
<li><a href="/">Тесты</a></li>
<li><a href="/create-quiz">Создать тест</a></li>

			</ul>
			</nav>
			{this.props.isOpen ? <Back onClick={this.props.onClose}/> : null}
</>


			)


	}
}


export default Drawer
