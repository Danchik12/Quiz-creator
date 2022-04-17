import {CREATE_QUESTION,RESET_QUIZ_CREATION} from './../action/actionTypes'
const initialState = {
	quiz : [],
	quizName:'',
	likes:0,

}


export default function createReducer(state=initialState,action){
	switch(action.type){
		case CREATE_QUESTION:
			return{
				...state,
				quiz:[...state.quiz,action.item],
				quizName:action.quizName,
			}
		case RESET_QUIZ_CREATION:
		return {
			...state,quiz:[],quizName:''
		}
		default:
		return state
	}
}