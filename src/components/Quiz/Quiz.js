import React,{Component}  from 'react'
import './Quiz.css'
import ActiveQuiz from './ActiveQuiz/ActiveQuiz'
import FinishedQuiz from './FinishedQuiz/FinishedQuiz'
import axios from 'axios'
import Loader from './../UI/Loader/Loader'
import {useParams} from "react-router-dom";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    
    let params = useParams();
    return (
      <Component
        {...props}
        router={{  params }}
      />
    );
  }

  return ComponentWithRouterProp;
}
class Quiz extends Component {
state ={
  results:0,
  isFinished:false,
  activeQuestion:0,
  answerState:null,
  quizName:" ",
  quiz:[],
  loading:true,


}
 

onRetry =() =>  {
this.setState({
  activeQuestion:0,
  answerState:null,
  isFinished:false,
  results:0
})
}
onAnswerClick =answerId => {
const question=this.state.quiz[this.state.activeQuestion]
if (question.rightAnswerId === answerId){

this.setState({
  answerState:{[answerId]:'sucess'},
  results:this.state.results+1
})
}else {
  this.setState({
  answerState:{[answerId]:'error'}
})

}

const timeout=window.setTimeout(() => {
  if (this.isQuiz()){
    this.setState({
      isFinished:true,


    })
  }else{
      this.setState({
      activeQuestion:this.state.activeQuestion+1,
      answerState:null
      }
        )
  }


window.clearTimeout(timeout)
},300)


}

 isQuiz (){
  return this.state.activeQuestion+1 === this.state.quiz.length
}
async componentDidMount (){
  
  try{

  const response = await axios.get(`https://react-quiz-c7272-default-rtdb.firebaseio.com/quizes/${this.props.router.params.id}.json`)
  const quiz=response.data.quiz
  const quizName=response.data.quizName 
  this.setState({
  quiz:quiz,
  quizName:quizName,
  loading:false
}) 
}catch(e){
  console.log(e)
}
}


render() {
  return(
<div className="Quiz">


<div className='QuizWrapper'>
<h1>{this.state.quizName}</h1>
{this.state.loading 
? <Loader /> :  

  this.state.isFinished
   ? <FinishedQuiz
   results={this.state.results}
   quizLength={this.state.quiz.length}
   onRetry={this.onRetry}

   />
   : <ActiveQuiz 
answers={this.state.quiz[this.state.activeQuestion].answers} 
question={this.state.quiz[this.state.activeQuestion].question}
onAnswerClick={this.onAnswerClick}
quizLength={this.state.quiz.length}
AnswerNumber={this.state.activeQuestion+1}

state={this.state.answerState}
/>





}


</div>

</div>

    )
}
}



export default withRouter(Quiz)