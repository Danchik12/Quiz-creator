import React,{Component}  from 'react'
import Layout from "./components/Layot/Layout"
import {Route,Routes,Navigate,useParams} from 'react-router-dom'
import Quiz from "./components/Quiz/Quiz"
import Auth from "./components/Auth/Auth"
import QuizCreator from "./components/Quiz-creator/QuizCreator"
import Quizes from "./components/Quizes/Quizes"
import Logout from './components/Logout/Logout'
import {connect} from 'react-redux'
import {autoLogin} from './store/action/auth'

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

class  App extends Component {
  

  componentDidMount () {
    this.props.autoLogin()
  }
render (){
  let routes=(
      <Routes>
      <Route exact path='/Quiz-creator' element={<Quizes/>}/>
      <Route path='/auth' element={<Auth/>}/>
      <Route exact path='/quiz/:id'  element={<Quiz/>}/>
      <Route path="*" element={<Navigate to="/" />}/>
      </Routes>
      )

  if (this.props.isAuth ){
     routes=(
      <Routes>
      <Route path='/logout' element={<Logout/>}/>
        <Route exact path='/' element={<Quizes/>}/>
        <Route exact path='/quiz/:id'  element={<Quiz/>}/>
      <Route path='/create-quiz' element={<QuizCreator/>}/>
      <Route path="*" element={<Navigate to="/" />} />
    
      </Routes>)
  }
  return (
    <Layout>

      
      {routes}
      
</Layout>
  )
}

}


function mapStateToProps(state){
  return {
    isAuth:!!state.auth.token
  }
}

function mapDispatchToProps(dispatch){
  return{
    autoLogin: () => dispatch(autoLogin())
  }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps) (App))
