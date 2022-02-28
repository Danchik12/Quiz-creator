import './QuizCreator.css'
import React,{Component} from 'react'

import Button from './../UI/Button/Button';
import Select from './../UI/Select/Select';
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
	
	submitHandler=event =>{
		event.preventDefault()

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
<div className='QuizCreator'>
<div className='CreateForm'>
<h1>Создание теста</h1>
<form  onSubmit={this.submitHandler}>


<label  htmlFor='QuizName'>Название теста</label>
<input id='QuizName' type="text" />
<label  htmlFor='question'>Название Вопроса</label>
<input id='question' type="text" />



<label  htmlFor='1'>Варианты ответов</label>
<input id='1' type="text" />
<input id='2' type="text"/>
<input id='3' type="text" />
<input id='4' type="text" />







<Select
label="Выберите правильный ответ"
value={this.state.rightAnswerId}
onChange={this.SelectChange}
options={[
	{text:1,value:1},
	{text:2,value:2},
	{text:3,value:3},
	{text:4,value:4}
	]}
/>

<Button
type='primary'
onClick={this.addQuestion}


>Добавить вопрос</Button>

<Button
type='sucess'
onClick={this.CreateQuiz}
disabled={this.props.quiz.length === 0}

>Создать тест</Button>






</form>


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