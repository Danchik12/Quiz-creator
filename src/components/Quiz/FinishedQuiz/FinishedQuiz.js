import React from "react"

import {Link} from 'react-router-dom'


const FinishedQuiz = props => {
	
	return (
<div className="container" style={{border:"2px solid #fff",borderRadius:'5px',padding:"20px"}}>
<p>Правильно {props.results} из {props.quizLength}</p>

<div className="d-flex ">
<button type='button' className='btn btn-primary' onClick={props.onRetry } >Повторить</button>
<Link to='/Quiz-creator' >
<button type='button' className='btn btn-outline-success ms-3' >Перейти в список тестов</button>
</Link>
</div>

</div>
)


}


export default FinishedQuiz