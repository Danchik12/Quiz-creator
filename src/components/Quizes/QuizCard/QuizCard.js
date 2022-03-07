import Card from 'react-bootstrap/Card'
import React from 'react'
import {Link} from 'react-router-dom'

export default function QuizCard ({quizName,id}) {
	
		return(

<Link  className ='link-dark text-decoration-none' to={'/quiz/'+id} >
<Card className='m-3 '>
<Card.Body  >
Тест: {quizName}

</Card.Body>
</Card>
</Link>



			)
	
}