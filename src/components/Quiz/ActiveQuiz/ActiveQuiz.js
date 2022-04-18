import React from 'react'

import AnswersList from './../AnswersList/AnswersList'


 
const ActiveQuiz = props => {
	return (
<div style={{border:"2px solid #fff",padding:"20px",borderRadius:"5px"}}>


<div className='d-flex justify-content-between'style={{border:"1px solid #fff",padding:"10px",
height:"60px",width:"90%",borderRadius:"15px"}} >
<strong >Задания: {props.AnswerNumber}|{props.quizLength} </strong>

</div>

{ props.imageUrl ?
<div className='d-flex mt-3  '>
<img src={props.imageUrl} style={{height:'300px',borderRadius:'10px',borderColor: 'white',borderStyle:'solid'}} alt={props.question}/>

</div>
: <span></span>
}


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