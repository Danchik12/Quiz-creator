 import React ,{Component} from 'react'
 import './timer.css'


 class Timer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            seconds: this.props.seconds,
            minutes: this.props.minutes
            
        }

        this.getTime = this.getTime.bind(this);
    }    

    getTime() {
        let second = this.state.seconds
        let minute = this.state.minutes;
         
        if (this.state.seconds == 0 ) {
        minute -= 1;
        second = 59
    }


    if (this.state.minutes == 0 && this.state.seconds == 0){
        
        

    }
        

        this.setState({
            seconds: second -=1,
            minutes: minute,
            
        })
    }

    componentDidMount() {

        this.timer = setInterval(this.getTime, 1000)

    }

    render() {
        return (
        <>
            
                
      <div className='Timer'>
      {this.state.minutes}:{this.state.seconds % 60}
      </div>                
            
            </>
        )
    }
}


export default Timer