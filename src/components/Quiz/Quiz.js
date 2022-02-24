import React,{Component}  from 'react'
import './Quiz.css'
import ActiveQuiz from './ActiveQuiz/ActiveQuiz'
import FinishedQuiz from './FinishedQuiz/FinishedQuiz'
class Quiz extends Component {
state ={
  results:0,
  isFinished:false,
  activeQuestion:0,
  answerState:null,
  image:false,
  
  quizName:"Угадай песню по строчке ?",
  
  quiz:[
  
{
  question:'Будь как дома, путник',
  rightAnswerId:3,
  id:1,
  imageLink:'',
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
  imageLink:'',
  answers:[
{text:"Ария - Химера",id:1},
{text:"Крематорий - Скелеты в шкафу",id:2},
{text:"Танцы минус - Цветут цветы",id:3},
{text:"Би-2 - Лайки",id:4}
  ]
}
,{
  question:'По тёмным улицам летит ночной дозор',
  rightAnswerId:1,
  id:3,
  imageLink:'',
  answers:[
{text:"Uma2rman - Ночной дозор ",id:1},
{text:"Ночь Самайна - Дозор",id:2},
{text:"Чердакъ feat. Nagart - Последний дозор",id:3},
{text:"Ден Назгул-Бес",id:4}
  ]
},
{
  question:'Мы залетим на карнавал',
  rightAnswerId:1,
  id:4,
  imageLink:'',
  answers:[
{text:"Galibri & Mavik - Карнавал ",id:1},
{text:"Nagart - Карнавал",id:2},
{text:"Филипп Киркоров - Карнавал",id:3},
{text:"Верасы - Карнавал",id:4}
  ]
},
{
  question:'А мы, любим Рок-н-Ролл, кедами примочку в пол.',
  rightAnswerId:2,
  id:5,
  imageLink:'',
  answers:[
{text:"Би-2 — Мой рок-н-ролл",id:1},
{text:"Trubetskoy - Рок-н-ролл",id:2},
{text:"Аквариум - Рок-н-ролл мёртв",id:3},
{text:"Машина времени -  Старый рок-н-ролл",id:4}
  ]
},
{
  question:'Горгород, Горгород — дом, но капкан.',
  rightAnswerId:3,
  id:6,
  imageLink:'',
  answers:[
{text:"Oxxxymiron — Горсвет",id:1},
{text:"Oxxxymiron - Где нас нет",id:2},
{text:"Oxxxymiron - Полигон",id:3},
{text:"Oxxxymiron - накануне",id:4}
  ]
}

  ]


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


render() {
  return(
<div className="Quiz">


<div className='QuizWrapper'>
<h1>{this.state.quizName}</h1>
{
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
image={this.state.image}
imageLink={this.state.quiz.imageLink}
state={this.state.answerState}
/>
}

</div>

</div>

    )
}
}



export default Quiz