import React , {Component} from 'react'
import {connect} from 'react-redux'
import {logout} from './../../store/action/auth'
import {Link} from 'react-router-dom'



class Logout extends Component {
	componentDidMount(){
		this.props.logout()
	}
render () {
	return <Link to='/'/>

		
}


}

function mapDispathToProps(dispatch){
	return {
		logout:() => dispatch(logout())
	}
}

export default connect (null,mapDispathToProps) (Logout)