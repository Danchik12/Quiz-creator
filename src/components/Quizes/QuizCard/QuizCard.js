import './QuizCard.css'
import React from 'react'
import {Link} from 'react-router-dom'

export default function QuizCard ({quizName,id}) {
	
		return(
<Link to={'/quiz/'+Number(id+1)}>

<li className="QuizCard" ><div >Тест: {quizName}


</div>
</li>
</Link>


			)
	
}