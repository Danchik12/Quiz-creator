import Card from 'react-bootstrap/Card'
import React from 'react'
import {Link} from 'react-router-dom'

export default function QuizCard ({quizName,id}) {
	
		return(

<Card className='m-3 '>
<Card.Body  >
<Link  className ='link-dark text-decoration-none' to={'/quiz/'+id} >Тест: {quizName}
</Link>
</Card.Body>
</Card>



			)
	
}