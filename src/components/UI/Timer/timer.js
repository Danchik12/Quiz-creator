 import React ,{Component} from 'react'
 
 class RequestTimer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            seconds: this.props.second,
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
            
                
      <span>{this.state.minutes}m {this.state.seconds % 60}s</span>                
            
            </>
        )
    }
}

export default RequestTimer