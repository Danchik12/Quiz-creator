import './QuizCreator.css'
import React,{Component} from 'react'
import Button from './../UI/Button/Button';

export default class QuizCreator extends Component{
	state ={
		image:false,
		quiz:[]

	}
	changeImage =() =>{
	var check = document.getElementById('image');
	if (check.getAttribute('value') == 'false') {
		
		check.setAttribute('value', 'true');
		this.setState({
			image:!this.state.image
		})
	} else {
		
		check.setAttribute('value', 'false');
		this.setState({
			image:false
		})
	}
	return false;
}
	submitHandler=event =>{
		event.preventDefault()

	}
	addQuestion =()=>{

	}
	CreateQuiz = () =>{

	}

	render(){
		return(
<div className='QuizCreator'>
<div className='CreateForm'>
<h1>Создание теста</h1>
<form  onSubmit={this.submitHandler}>


<label for='QuizName'>Название теста</label>
<input id='QuizName' type="text" />
<label for='question'>Название Вопроса</label>
<input id='question'type="text" />
<label for='image'>Будут ли изображения?</label>
<input id='image' type="checkbox" name='image' value='false' onClick={this.changeImage}/>
{this.state.image ?
	<>
	<label for='imageLink'>Ссылка на изображение</label>
	<input id='imageLink' type="text" required/> 
	</> :
	<span></span>


}


<label for='1'>Варианты ответов</label>
<input id='1' type="text" />
<input id='2' type="text"/>
<input id='3' type="text" />
<input id='4' type="text" />







<select >

</select>

<Button
type='primary'
onClick={this.addQuestion}


>Добавить вопрос</Button>

<Button
type='sucess'
onClick={this.CreateQuiz}


>Создать тест</Button>






</form>


</div>


</div>


			)
	}
}