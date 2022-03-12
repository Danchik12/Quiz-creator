import Card from 'react-bootstrap/Card'
import React from 'react'
import {Link} from 'react-router-dom'

export default function QuizCard ({quizName,id,likes}) {
	
		return(

<Link  className ='link-dark text-decoration-none' to={'/quiz/'+id} >
<Card className='m-3  '>
<Card.Body  >
Тест: {quizName}

<p><small>  
<svg xmlns="http://www.w3.org/2000/svg" id='like' width="8" height="8" fill="currentColor" 
 className="bi bi-heart-fill"
   viewBox="0 0 16 16">
<path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg>
&nbsp; {likes}

</small></p>
</Card.Body>
</Card>
</Link>



			)
	
}