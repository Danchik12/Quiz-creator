import React from 'react'
import './ActiveQuiz.css'
import AnswersList from './../AnswersList/AnswersList'

const ActiveQuiz = props => {
	return (
<div className="ActiveQuiz	">
<p className='Question' >
<span>
<strong> {props.AnswerNumber}. </strong>&nbsp;
{props.question}
</span>
<small >{props.AnswerNumber} из {props.quizLength} </small>
</p>

{ props.image ?
<img src={props.imageLink} alt="Изображение"/>:
<span></span>
}

<AnswersList
state={props.state} 
answers={props.answers}
onAnswerClick={props.onAnswerClick}
/>

</div>
)


}


export default ActiveQuiz