import React from "react"
import "./FinishedQuiz.css"
import {Link} from 'react-router-dom'
import Button from './../../UI/Button/Button'

const FinishedQuiz = props => {
	
	return (
<div className="FinishedQuiz	">
<p>Правильно {props.results} из {props.quizLength}</p>

<div>
<Button onClick={props.onRetry } type='primary'>Повторить</Button>
<Link to='/' >
<Button  type='sucess'>Перейти в список тестов</Button>
</Link>
</div>

</div>
)


}


export default FinishedQuiz