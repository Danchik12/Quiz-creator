import React  from 'react'
import Layout from "./components/Layot/Layout"
import {Route,Routes} from 'react-router-dom'
import Quiz from "./components/Quiz/Quiz"
import Auth from "./components/Auth/Auth"
import QuizCreator from "./components/Quiz-creator/QuizCreator"
import Quizes from "./components/Quizes/Quizes"


function App() {
  return (
    <Layout>

 <Routes>
      <Route path='/' element={<Quizes/>}/>
      <Route path='/auth' element={<Auth/>}/>
      <Route exact path='/quiz/:id'  element={<Quiz/>}/>
      <Route path='/create-quiz' element={<QuizCreator/>}/>
        </Routes>
      


</Layout>
  );
}

export default App;
