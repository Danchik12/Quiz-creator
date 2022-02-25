import './Quizes.css'
import React,{Component} from 'react'
import axios from 'axios'
import QuizCard from './QuizCard/QuizCard'
export default class Quizes extends Component{
	state ={
		quizes:[]
	}
	renderQuizes(){
	return this.state.quizes.map((quiz,index) => {
	return(
	<QuizCard quizName={quiz.name} id={quiz.id}  key={index}/>
	)
})
}
 async componentDidMount(){
 	try{
 	const response = await axios.get('https://react-quiz-c7272-default-rtdb.firebaseio.com/quizes.json')
 	const quizes=[]
 	

 for (const [key,value] of Object.entries(response.data)) {
 		
 		quizes.push({
 			id:key,
 		name:`${value.quizName}`
 		})
 		

 	}
 	this.setState({
 		quizes:quizes
 	})
 }catch(e){
 	console.log(e)
 }
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