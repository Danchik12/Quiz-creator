import './QuizCreator.css'
import React,{Component} from 'react'
import axios from 'axios'
import Button from './../UI/Button/Button';
import Select from './../UI/Select/Select';
export default class QuizCreator extends Component{
	state ={
		
		quiz:[],
		quizName:"",
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
		const quiz=this.state.quiz.concat()
		const index=quiz.length+1
		this.setState({
			quizName:document.getElementById('QuizName').value
		})
		const questionItem={
			question:document.getElementById('question').value,
			id:index,
			rightAnswerId:this.state.rightAnswerId,
			answers:[
			{text:document.getElementById('1').value,id:1},
			{text:document.getElementById('2').value,id:2},
			{text:document.getElementById('3').value,id:3},
			{text:document.getElementById('4').value,id:4}
			]
				}
				quiz.push(questionItem)
				this.setState({
					quiz,
				})
				
				document.getElementById('question').value=''
				document.getElementById('1').value=''
				document.getElementById('2').value=''
				document.getElementById('3').value=''
				document.getElementById('4').value=''
	}


	
	CreateQuiz = async event =>{
event.preventDefault()
document.getElementById('QuizName').value=''

try{
 await axios.post('https://react-quiz-c7272-default-rtdb.firebaseio.com/quizes.json',this.state)
this.setState({
	quiz:[],
		quizName:""
})

}catch(e){
	console.log(e)
}

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
<input id='question'type="text" />



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
disabled={this.state.quiz.length === 0}

>Создать тест</Button>






</form>


</div>


</div>


			)
	}
}