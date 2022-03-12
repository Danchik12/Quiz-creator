import {FETCH_QUIZES_START,
		  FETCH_QUIZ_SUCCESS,
		  FETCH_QUIZES_SUCCESS,
		  FETCH_QUIZES_ERROR,
		  QUIZ_SET_STATE,
		   FINISH_QUIZ,
			QUIZ_NEXT,
			RETRY_QUIZ,
			ADD_LIKE
		
		
		} from './../action/actionTypes'

const inintialState  ={ 

quizes:[],
loading:false,
error:null,
results:0,
isFinished:false,
activeQuestion:0,
answerState:null,
quizName:" ",
quiz:null,
likes:' '





}

export default function quizReducer(state = inintialState ,action){
	switch(action.type){
		case FETCH_QUIZES_START:
		return {
			...state,loading:true
		}
		case FETCH_QUIZES_SUCCESS:
		return {
			...state,loading:false,quizes:action.quizes
		}
		case FETCH_QUIZES_ERROR:
		return {
			...state,loading:false,error:action.error
		}
		case FETCH_QUIZ_SUCCESS:{
			return {
				...state,loading:false,quiz:action.quiz,
				quizName:action.quizName,likes:action.likes
			}
		}
		case QUIZ_SET_STATE:{
			return{
				...state,
				answerState:action.answerState,
				results:action.results
			}
		}
		case FINISH_QUIZ:{
			return{
				...state,isFinished:true
			}
		}
		case QUIZ_NEXT:{
			return {
				...state,answerState:null,
				activeQuestion:action.number
			}
		}
		
		case RETRY_QUIZ:{
			return{
...state,activeQuestion:0,
  answerState:null,
  isFinished:false,
  results:0,
  
 

  
			}

		}
		case ADD_LIKE:{
			return {
				...state,likes:action.likes
			}
		}
		
	

		default:
		return state
	}
}