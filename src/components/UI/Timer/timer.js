 import React ,{Component} from 'react'
 import './timer.css'
import {connect } from 'react-redux'
import {finishQuiz} from './../../../store/action/quiz'
 class Timer extends Component {


   GetTimer (finish){
    
    // на сколько таймер в миллисекундах
      const deadline = new Date(Date.now() + 420000);
      // id таймера
      let timerId = null;
          // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
      function countdownTimer() {
        const diff = deadline - new Date();
        if (diff <= 0) {
         finish()
          clearInterval(timerId);


        }
        const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
        const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
        $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
        $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
      
      }
      // получаем элементы, содержащие компоненты даты
      const $minutes = document.querySelector('#minutes');
      const $seconds = document.querySelector('#seconds');
      // вызываем функцию countdownTimer
      countdownTimer();
      // вызываем функцию countdownTimer каждую секунду
      timerId = setInterval(countdownTimer, 1000);
       
  }

  componentDidMount (){
    this.GetTimer(this.props.finishQuiz)
  }
   

    render() {
        return (
        <>
            
                
      <div className='Timer'>
      <span id='minutes'></span >:<span id='seconds'></span>
      </div>                
            
            </>
        )
    }
}

function mapDispathToProps(dispatch){
  return{
    finishQuiz:() => dispatch(finishQuiz())
  }
}



export default  connect(null,mapDispathToProps)(Timer)