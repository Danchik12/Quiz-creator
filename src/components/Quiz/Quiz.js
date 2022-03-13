import React,{Component}  from 'react'
import ActiveQuiz from './ActiveQuiz/ActiveQuiz'
import FinishedQuiz from './FinishedQuiz/FinishedQuiz'
import Loader from './../UI/Loader/Loader'
import {useParams} from "react-router-dom";
import {connect } from 'react-redux'
import {fetchQuizByID,quizAnswerClick,RetryQuiz,AddLike} from './../../store/action/quiz'
import Alert from 'react-bootstrap/Alert';
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
state={
  show:false

  
}
  
  





   


  

 


 
componentDidMount (){

  this.props.fetchQuizByID(this.props.router.params.id)

}

componentWillUnmount(){
  this.props.RetryQuiz()
}

render() {
   let color='currentColor'
   //eslint-disable-next-line
{this.props.isLike ? color='red': color='currentColor'}  
 


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
<div>
<p className='m-2 ' >

   <Alert variant="warning"  show={this.state.show}  onClose={() => this.setState({
      show:false
    })
    } dismissible>
        Доступно только пользователям сайта &nbsp;
       <strong>Войдите</strong>
      </Alert>

   
{this.props.isAuth 
  ?
  <svg xmlns="http://www.w3.org/2000/svg" id='like' width="24" height="24"
 fill={color} style={{cursor:"pointer"}} 
onClick={() => {this.props.AddLike(this.props.router.params.id)}} className="bi bi-heart-fill"
   viewBox="0 0 16 16">
<path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg>
:
<svg xmlns="http://www.w3.org/2000/svg" id='like' width="24" height="24" fill="currentColor"
style={{cursor:"pointer"}} 
onClick={() => {this.setState({
      show:true
    })}} className="bi bi-heart-fill"
   viewBox="0 0 16 16">
<path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg>


}

  &nbsp; {String(this.props.likes)}</p>
</div>
</div>

</div>

    )
}

}


function mapStateToProps(state){
  return {
isLike:state.quiz.isLike,
likes:state.quiz.likes,
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
    RetryQuiz:() => dispatch (RetryQuiz()),
    AddLike:(id) => dispatch (AddLike(id))
   
  }
}


export default connect (mapStateToProps,mapDispathToProps) (withRouter(Quiz))