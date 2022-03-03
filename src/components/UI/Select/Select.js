import './Select.css'

import React from 'react'


const Select = props => {
return (
<div className='Select'>
<label htmlFor="quiz">{props.label}</label>
<select 
id='quiz'
value={props.value}
onChange={props.onChange}

 >
 {props.options.map((option,index) => {
 	return (
 	<option 
 	value={option.value} 
 	key={index}>
{option.text}
 	</option>

 )} )
}
</select>

</div>
)
}



export default Select