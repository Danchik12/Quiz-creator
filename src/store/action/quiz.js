import axios from 'axios'
import {FETCH_QUIZES_START,
	     FETCH_QUIZ_SUCCESS,
	     FETCH_QUIZES_SUCCESS,
		  FETCH_QUIZES_ERROR,
		  QUIZ_SET_STATE,
			FINISH_QUIZ,
			QUIZ_NEXT,
			RETRY_QUIZ,
			ADD_LIKE,
			
			
			} from './actionTypes'

export  function fetchQuizes(){
	return async dispatch => {
		dispatch(fetchQuizesStart())
		try{
 	const response = await axios.get('https://react-quiz-c7272-default-rtdb.firebaseio.com/quizes.json')
 	const quizes=[]
 	
 	

 for (const [key,value] of Object.entries(response.data)) {
 		
 		quizes.push({
 			id:key,
 		name:`${value.quizName}`,
 		likes:`${value.likes}`
 		})
 		

 	}
 	dispatch(fetchQuizesSuccess(quizes))
 }catch(e){
 	dispatch (fetchQuizesError(e))
 }
}

	
}


export function fetchQuizesStart() {
	return{
		type:FETCH_QUIZES_START
	}
}

export function fetchQuizesSuccess(quizes){
return{
		type:FETCH_QUIZES_SUCCESS,
		quizes:quizes
	}
}

export function fetchQuizesError(e){
return{
		type:FETCH_QUIZES_ERROR,
		error:e
	}
}


export function fetchQuizByID(quizId) {
	return async dispatch => {
		dispatch(fetchQuizesStart())

		 try{
	
	
	
	const response = await axios.get(`https://react-quiz-c7272-default-rtdb.firebaseio.com/quizes/${quizId}.json`)
 
  const quiz=response.data.quiz
  const quizName=response.data.quizName 
  const likes =response.data.likes
  
  let  token = localStorage.getItem('userId')
	if (token != null){
		try{
	const res =await axios.get(`https://react-quiz-c7272-default-rtdb.firebaseio.com/quizId/${token}/${quizId}.json`)
	const isLike = res.data.liked
dispatch(fetchQuizSuccess(quiz,quizName,likes,isLike))
	

}
catch(e){
  await axios.patch(`https://react-quiz-c7272-default-rtdb.firebaseio.com/quizId/${token}/${quizId}.json`,{liked:false})
const isLike=false
dispatch(fetchQuizSuccess(quiz,quizName,likes,isLike))
}

}



 
}catch(e){
  dispatch(fetchQuizesError(e))
}
	}

}


export function fetchQuizSuccess(quiz,quizName,likes,isLike){
	return {
		type:FETCH_QUIZ_SUCCESS,
		quiz,quizName,likes,isLike
	}
} 

export function quizSetState(answerState,results){
	return {
		type:QUIZ_SET_STATE,
		answerState,results
	}
}

export function finishQuiz(){
	return{
		type:FINISH_QUIZ
	}
}
export function quizNext(number){
	return{
		type:QUIZ_NEXT,
		number

	}
}
export function quizAnswerClick(answerId){
	return (dispatch,getState) => {
		const state=getState().quiz
const question=state.quiz[state.activeQuestion]
const results=state.results
if (question.rightAnswerId === answerId){

dispatch(quizSetState({[answerId]:'success'},results+1))
}else {
 dispatch(quizSetState({[answerId]:'danger'},results))
}

const timeout=window.setTimeout(() => {
  if (isQuiz(state)){
  	dispatch(finishQuiz())
    
  }else{
  	dispatch(quizNext(state.activeQuestion+1))
      
  }


window.clearTimeout(timeout)
},300)

	}
}


function isQuiz(state){
	return state.activeQuestion +1 === state.quiz.length
}

export function RetryQuiz(){
	return {
		type:RETRY_QUIZ
	}
}
 

 export function AddLike(quizId){
return  async (dispatch,getState) => {
		const state=getState().quiz
		const token = localStorage.getItem('userId')
		const response = await axios.get(`https://react-quiz-c7272-default-rtdb.firebaseio.com/quizId/${token}/${quizId}.json`)
		const isLike = response.data.liked
		if(!isLike){
		document.getElementById('like').setAttribute('fill','red')
    let likes=(Number(state.likes)+1)
  dispatch(Like(likes))
  axios.patch(`https://react-quiz-c7272-default-rtdb.firebaseio.com/quizId/${token}/${quizId}.json`,{liked:true})
  axios.patch(`https://react-quiz-c7272-default-rtdb.firebaseio.com/quizes/${quizId}.json`,{likes:likes})
 

}else {
document.getElementById('like').setAttribute('fill','currentColor')
    let likes=(Number(state.likes)-1)
  dispatch(Like(likes))
  axios.patch(`https://react-quiz-c7272-default-rtdb.firebaseio.com/quizId/${token}/${quizId}.json`,{liked:false})
 axios.patch(`https://react-quiz-c7272-default-rtdb.firebaseio.com/quizes/${quizId}.json`,{likes:likes})


}




}
  
}

export function Like(likes) {
	return {
		type:ADD_LIKE,
		likes
	}

}