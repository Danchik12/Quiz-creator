import React from 'react';
import "./Menu.css"
import {RiMenuLine,RiCloseLine} from 'react-icons/ri'
const Menu =props => {
 const cls=["Menu"] 
	if (props.isOpen ){
		
		cls.push('open')
		return(
<RiCloseLine  className={cls.join(' ')}
onClick={props.onToggle}

/>
		 )
	}
	return (
<RiMenuLine  className={cls.join(' ')}
onClick={props.onToggle}

/>

		)
}


export default Menu