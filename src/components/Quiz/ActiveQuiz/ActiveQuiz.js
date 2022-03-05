import React from 'react'
import './ActiveQuiz.css'
import AnswersList from './../AnswersList/AnswersList'
import Timer from './../../UI/Timer/timer'

 
const ActiveQuiz = props => {
	return (
<div className="ActiveQuiz	">


<div className='Question'>
<strong >Задания: {props.AnswerNumber}|{props.quizLength} </strong>
<Timer
minutes='7'
seconds='0'

/>
</div>



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