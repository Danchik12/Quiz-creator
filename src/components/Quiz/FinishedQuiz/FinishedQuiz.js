import React from "react"
import "./FinishedQuiz.css"
import Button from './../../UI/Button/Button'

const FinishedQuiz = props => {
	
	return (
<div className="FinishedQuiz	">
<p>Правильно {props.results} из {props.quizLength}</p>

<div>
<Button onClick={props.onRetry } type='primary'>Повторить</Button>
<Button  type='sucess'>Перейти в список тестов</Button>
</div>

</div>
)


}


export default FinishedQuiz