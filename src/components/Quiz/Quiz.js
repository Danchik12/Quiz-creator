import React,{Component}  from 'react'

import ActiveQuiz from './ActiveQuiz/ActiveQuiz'
import FinishedQuiz from './FinishedQuiz/FinishedQuiz'
import Loader from './../UI/Loader/Loader'
import {useParams} from "react-router-dom";
import {connect } from 'react-redux'
import {fetchQuizByID,quizAnswerClick,RetryQuiz} from './../../store/action/quiz'
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

 


 
componentDidMount (){
  this.props.fetchQuizByID(this.props.router.params.id)
}

componentWillUnmount(){
  this.props.RetryQuiz()
}

render() {
  return(
<div  className='d-flex ' style={{justifyContent:'center',paddingTop: '100',flexGrow:"1",width: '100%' }}  >


<div className='container' style={{width:"600px"}}>
<h1>{this.props.quizName}</h1>
{this.props.loading || !this.props.quiz 
? <Loader /> :  

  this.props.isFinished 
   ? <FinishedQuiz
   results={this.props.results}
   quizLength={this.props.quiz.length}
   onRetry={this.props.RetryQuiz}

   />
   : <ActiveQuiz 
answers={this.props.quiz[this.props.activeQuestion].answers} 
question={this.props.quiz[this.props.activeQuestion].question}
onAnswerClick={this.props.quizAnswerClick}
quizLength={this.props.quiz.length}
AnswerNumber={this.props.activeQuestion+1}
state={this.props.answerState}

/>
}


</div>

</div>

    )
}
}


function mapStateToProps(state){
  return {
results:state.quiz.results,
isFinished:state.quiz.isFinished,
activeQuestion:state.quiz.activeQuestion,
answerState:state.quiz.answerState,
quizName:state.quiz.quizName,
quiz:state.quiz.quiz,
loading:state.quiz.loading
  }
}

function mapDispathToProps(dispatch){
  return {
    fetchQuizByID:id => dispatch(fetchQuizByID(id)),
    quizAnswerClick:answerId =>dispatch(quizAnswerClick(answerId)),
    RetryQuiz:() => dispatch (RetryQuiz())
  }
}


export default connect (mapStateToProps,mapDispathToProps) (withRouter(Quiz))