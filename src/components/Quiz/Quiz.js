import React,{Component}  from 'react'
import './Quiz.css'
import ActiveQuiz from './ActiveQuiz/ActiveQuiz'
class Quiz extends Component {
state ={
  activeQuestion:0,
  answerState:null,
 
  quizName:"Откуда эта строчка ?",
  quiz:[
  
{
  question:'Будь как дома, путник',
  rightAnswerId:3,
  id:1,
  answers:[
{text:"Би-2 - Полковнику не кто не пишет",id:1},
{text:"Nagart - Трактирщик",id:2},
{text:"Король и Шут - Лесник",id:3},
{text:"Эпидемия - Письмо Ведьмаку",id:4}
  ]
},
{
  question:'Темноты боятся скелеты в шкафу',
  rightAnswerId:4,
  id:2,
  answers:[
{text:"Ария - Химера",id:1},
{text:"Крематорий - Скелеты в шкафу",id:2},
{text:"Танцы минус - Цветут цветы",id:3},
{text:"Би-2 - Лайки",id:4}
  ]
}
  ]


}

onAnswerClick =answerId => {
const question=this.state.quiz[this.state.activeQuestion]
if (question.rightAnswerId === answerId){

this.setState({
  answerState:{[answerId]:'sucess'}
})
}else {
  this.setState({
  answerState:{[answerId]:'error'}
})

}

const timeout=window.setTimeout(() => {
  if (this.isQuiz()){
    console.log("finished")
  }else{
      this.setState({
      activeQuestion:this.state.activeQuestion+1,
      answerState:null
      }
        )
  }


window.clearTimeout(timeout)
},200)


}

 isQuiz (){
  return this.state.activeQuestion+1 === this.state.quiz.length
}


render() {
  return(
<div className="Quiz">


<div className='QuizWrapper'>
<h1>{this.state.quizName}</h1>
<ActiveQuiz 
answers={this.state.quiz[this.state.activeQuestion].answers} 
question={this.state.quiz[this.state.activeQuestion].question}
onAnswerClick={this.onAnswerClick}
quizLength={this.state.quiz.length}
AnswerNumber={this.state.activeQuestion+1}
state={this.state.answerState}
/>
</div>

</div>

    )
}
}



export default Quiz