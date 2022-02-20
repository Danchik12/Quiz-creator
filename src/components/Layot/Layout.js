import React,{Component}  from 'react'
import  './Layout.css';
import Menu from './../Navigation/Menu/Menu'
import Drawer from './../Navigation/Drawer/Drawer'
class Layout extends Component{
	state ={
		menu:false
	}
	menuClose = () => {
		this.setState({
			menu:false
		})
	}
	MenuHandler = () => {
		this.setState({
			menu:!this.state.menu
		})
	}
render(){
	return(
<div className="Layout">
<Drawer 
isOpen={this.state.menu}
onClose={this.menuClose}
/>
<Menu 
isOpen={this.state.menu}
onToggle={this.MenuHandler}

/>



<main>
{this.props.children}


</main>
</div>

		)
}

}

export default Layout