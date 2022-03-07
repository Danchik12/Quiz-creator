import React,{Component}  from 'react'
import Sidebar from './components/Navigation/Sidebar'
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
  let routes=[]
    
      
if (this.props.isAuth ){
    routes.push(<Route exact path='/quiz/:id'  element={<Quiz/>}/>)
     routes.push(<Route path="*" element={<Navigate to="/Quiz-creator" />}/>)
    routes.push(<Route path='/create-quiz' element={<QuizCreator/>}/>)
     routes.push(<Route path='/logout' element={<Logout/>}/>)
    routes.push(<Route exact path='/Quiz-creator' element={<Quizes/>}/>)
     } else{
       routes.push(<Route path="*" element={<Navigate to="/Quiz-creator" />}/>)
       routes.push(<Route exact path='/Quiz-creator' element={<Quizes/>}/>)
       routes.push(<Route path='/auth' element={<Auth/>}/>)
        routes.push(<Route exact path='/quiz/:id'  element={<Quiz/>}/>)
     }
        
  return (
    <>
     
<Sidebar isAuth={this.props.isAuth}/>
<div className='container d-flex' style={{flexDirection:'column',flexGrow:"1"}}  >
<Routes>
       {routes}
    
      </Routes>
      </div>
</>
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
