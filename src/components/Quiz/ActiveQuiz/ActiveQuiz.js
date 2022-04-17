import React from 'react'

import AnswersList from './../AnswersList/AnswersList'


 
const ActiveQuiz = props => {
	return (
<div style={{border:"2px solid #fff",padding:"20px",borderRadius:"5px"}}>


<div className='d-flex justify-content-between'style={{border:"1px solid #fff",padding:"10px",
height:"60px",width:"90%",borderRadius:"15px"}} >
<strong >Задания: {props.AnswerNumber}|{props.quizLength} </strong>

</div>



<div className="d-flex " style={{marginBottom: '30px'}} >{props.question}</div>

<AnswersList
state={props.state} 
answers={props.answers}
onAnswerClick={props.onAnswerClick}
/>

</div>
)


}


export default ActiveQuiz