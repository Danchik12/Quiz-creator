import {CREATE_QUESTION,RESET_QUIZ_CREATION} from './actionTypes'
import axios from 'axios'

export function addQuizQuestion(item,quizName){
 return {
 	type:CREATE_QUESTION,
 	item,quizName
 }
}
export function resetQuiz(){
	return{
		type:RESET_QUIZ_CREATION
	}
}
export function createQuiz(){
	return  async (dispatch,getState) =>{
		const data ={
			quizName:getState().create.quizName,
			quiz:getState().create.quiz,
			likes:getState().create.likes
		}
		await axios.post('https://react-quiz-c7272-default-rtdb.firebaseio.com/quizes.json',data )
		dispatch(resetQuiz())
	}
}