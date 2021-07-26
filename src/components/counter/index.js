import {Component} from 'react'
import './index.css'

class Counter extends Component{
    state={
        count:0
    }

    onClickButton=()=>{
        this.setState(prevState=>(
            {count:prevState.count+1}
        ))
    }

    render(){
        const {count}=this.state

        return(
            <div className='bg-container'>
                <h1>The button has been clicked<br/>
                    <span className='count'>{count}</span> times</h1>
                <p>click the button to increase the count</p>
                <button type='button' onClick={this.onClickButton}>click</button>    
            </div>
        )
    }
}

export default  Counter;