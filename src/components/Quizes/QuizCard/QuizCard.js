import './QuizCard.css'
import React from 'react'
import {Link} from 'react-router-dom'

export default function QuizCard ({quizName,id}) {
	
		return(


<li className="QuizCard" >
<div ><Link to={'/quiz/'+id} >Тест: {quizName}
</Link>
</div>
</li>



			)
	
}