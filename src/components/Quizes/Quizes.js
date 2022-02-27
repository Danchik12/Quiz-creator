import './Quizes.css'
import React,{Component} from 'react'
import QuizCard from './QuizCard/QuizCard'
import Loader from './../UI/Loader/Loader'
import {connect } from 'react-redux'
import {fetchQuizes} from './../../store/action/quiz'
 class Quizes extends Component{
renderQuizes(){
	return this.props.quizes.map((quiz,index) => {
	return(
	<QuizCard quizName={quiz.name} id={quiz.id}  key={index}/>
	)
})
}
componentDidMount(){
	this.props.fetchQuizes()
 	}


	render(){
		return(

<div className="QuizList">

<div>
<h1>Тесты</h1>
{this.props.loading  && this.props.quizes.length !== 0 ?
<Loader /> :

<ul>
{this.renderQuizes()}

</ul>

}

</div>
</div>


			)
	}
}
function mapStateToProps(state){
return {
	quizes:state.quiz.quizes,
	loading:state.quiz.loading
}
}
function mapDispatchToProps(dispatch){
return {
fetchQuizes:() => dispatch(fetchQuizes())
}
}
export default connect (mapStateToProps,mapDispatchToProps) (Quizes)