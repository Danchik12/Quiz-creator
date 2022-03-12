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
  let likes =response.data.likes
  let isLike=response.data.isLike
  let color =response.data.color
 dispatch(fetchQuizSuccess(quiz,quizName,likes,isLike,color))
}catch(e){
  dispatch(fetchQuizesError(e))
}
	}

}


export function fetchQuizSuccess(quiz,quizName,likes,isLike,color){
	return {
		type:FETCH_QUIZ_SUCCESS,
		quiz,quizName,likes,isLike,color
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
 

 export function AddLike(quizId,isLike){
return  async (dispatch,getState) => {
		const state=getState().quiz
		if(!isLike){
	
    let likes=(Number(state.likes)+1)
  dispatch(Like(likes,true,'red'))
  await axios.patch(`https://react-quiz-c7272-default-rtdb.firebaseio.com/quizes/${quizId}.json`,{color:'red'})
await axios.patch(`https://react-quiz-c7272-default-rtdb.firebaseio.com/quizes/${quizId}.json`,{likes:likes})
await axios.patch(`https://react-quiz-c7272-default-rtdb.firebaseio.com/quizes/${quizId}.json`,{isLike:true})     
}
else{
	 	

    let likes=(Number(state.likes)-1)
  dispatch(Like(likes,false,'currentColor'))
  await axios.patch(`https://react-quiz-c7272-default-rtdb.firebaseio.com/quizes/${quizId}.json`,{color:'currentColor'})
await axios.patch(`https://react-quiz-c7272-default-rtdb.firebaseio.com/quizes/${quizId}.json`,{likes:likes})
await axios.patch(`https://react-quiz-c7272-default-rtdb.firebaseio.com/quizes/${quizId}.json`,{isLike:false}) 

}

}
  
}

export function Like(likes,isLike,color) {
	return {
		type:ADD_LIKE,
		likes,isLike,color
	}

}