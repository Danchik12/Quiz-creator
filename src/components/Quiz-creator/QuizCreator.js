import React,{Component} from 'react'
import Form from 'react-bootstrap/Form'

import {connect } from 'react-redux'
import {createQuiz,addQuizQuestion} from './../../store/action/create'
 class QuizCreator extends Component{
	state ={
		rightAnswerId:1
	}
	SelectChange = event =>{
		this.setState({
			rightAnswerId:+event.target.value
		})

	}
	

	addQuestion =event =>{
		event.preventDefault()
		
		
		
			const quizName =document.getElementById('QuizName').value
		
		const questionItem={
			question:document.getElementById('question').value,
			id:this.props.quiz.length+1,
			rightAnswerId:this.state.rightAnswerId,
			answers:[
			{text:document.getElementById('1').value,id:1},
			{text:document.getElementById('2').value,id:2},
			{text:document.getElementById('3').value,id:3},
			{text:document.getElementById('4').value,id:4}
			]
				}
				this.props.addQuizQuestion(questionItem,quizName)
				
				
				document.getElementById('question').value=''
				document.getElementById('1').value=''
				document.getElementById('2').value=''
				document.getElementById('3').value=''
				document.getElementById('4').value=''
	}


	
	CreateQuiz =  event =>{
event.preventDefault()

this.props.createQuiz()
document.getElementById('question').value=''
				document.getElementById('1').value=''
				document.getElementById('2').value=''
				document.getElementById('3').value=''
				document.getElementById('4').value=''
document.getElementById('QuizName').value=''

	}

	render(){
		return(
<div className="container d-flex justify-content-center ">
<div style={{width:"600px"}}>
<h1>Создание теста</h1>
<Form>
<Form.Group >
<Form.Label>Название теста
</Form.Label >
<Form.Control type='text' id='QuizName' placeholder='Название теста'  />
</Form.Group>
<Form.Group >
<Form.Label>Название вопроса
</Form.Label>
<Form.Control id='question' type="text" placeholder='Название вопроса'  />
</Form.Group>
<Form.Group >
<Form.Label>Варианты ответов
</Form.Label>
<Form.Control  style={{margin:"4px"}} id='1' type="text" placeholder="Вариант ответа 1"  />
<Form.Control style={{margin:"4px"}} id='2' type="text" placeholder="Вариант ответа 2"  />
<Form.Control style={{margin:"4px"}} id='3' type="text" placeholder="Вариант ответа 3"  />
<Form.Control style={{margin:"4px"}} id='4' type="text" placeholder="Вариант ответа 4"  />
</Form.Group>
<Form.Select  id="quiz" defaultValue="Выберите правильный ответ"
onChange={this.SelectChange} >
  <option>Выберите правильный ответ</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
</Form.Select>


</Form>





<div className="d-grid gap-2 d-md-block"  >
<button type='button' style={{margin:"10px"}} className='btn btn-primary'onClick={this.addQuestion}>Добавить вопрос</button>

<button type='button' onClick={this.CreateQuiz}
disabled={this.props.quiz.length === 0}
className='btn btn-success'
>Создать тест</button>
</div>









</div>


</div>


			)
	}
}

function mapStateToProps (state){
	return {
		quiz:state.create.quiz,
		quizName:state.create.quizName
	}
}
function mapDispatchToProps (dispatch){
	return {
		addQuizQuestion: (item,quizName) => dispatch(addQuizQuestion(item,quizName)),
		createQuiz:() => dispatch(createQuiz())
	}
}

export default connect (mapStateToProps,mapDispatchToProps) (QuizCreator)