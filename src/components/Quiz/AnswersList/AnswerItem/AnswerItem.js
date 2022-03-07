import React from 'react'


const AnswerItem =props => {
	const cls =["m-2" ]
	if (props.state){
		
		cls.push('border-'+[props.state])
	}
return (
<li className={cls.join(' ')} style={{border:"2px solid #FFF",borderRadius:"10px",cursor:"pointer" ,}}
onClick={() => props.onAnswerClick(props.answer.id)}
> 
{props.answer.text}
</li>
	)
}


export default AnswerItem
