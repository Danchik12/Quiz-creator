import './Quizes.css'
import React,{Component} from 'react'

import QuizCard from './QuizCard/QuizCard'
export default class Quizes extends Component{
	renderQuizes(){
	return ['Угадай песню по строчке',
	'Угадай покемона по силуэту','Угадай аниме по опенингу'].map((quiz,index) => {
	return(
	<QuizCard quizName={quiz} id={index}  key={index}/>
	)
})
}
	render(){
		return(
<div className="QuizList">

<div>
<h1>Тесты</h1>
<ul>
{this.renderQuizes()}

</ul>
</div>
</div>


			)
	}
}