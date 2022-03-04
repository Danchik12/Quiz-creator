import React from 'react'
import './ActiveQuiz.css'
import AnswersList from './../AnswersList/AnswersList'
import RequestTimer from './../../UI/Timer/timer'

 
const ActiveQuiz = props => {
	return (
<div className="ActiveQuiz	">
<p className='Question' >

<div>
<strong >Задания: {props.AnswerNumber}|{props.quizLength} </strong>
<RequestTimer
second='0'
minutes='15'
/>
</div>


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