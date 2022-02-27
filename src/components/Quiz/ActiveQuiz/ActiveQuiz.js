import React from 'react'
import './ActiveQuiz.css'
import AnswersList from './../AnswersList/AnswersList'

const ActiveQuiz = props => {
	return (
<div className="ActiveQuiz	">
<p className='Question' >
<span>
<strong> {props.AnswerNumber} </strong>&nbsp;

</span>
<small >{props.AnswerNumber} из {props.quizLength} </small>
</p>
<div className='Quest'>{props.question}</div>

<AnswersList
state={props.state} 
answers={props.answers}
onAnswerClick={props.onAnswerClick}
/>

</div>
)


}


export default ActiveQuiz