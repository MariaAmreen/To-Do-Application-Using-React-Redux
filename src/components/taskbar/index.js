import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addTask} from '../../actions';
import '../custom.css';

class Taskbar extends Component{
    constructor(props){
        super(props);
        this.state = ({
            addTask:''
        })
    }

    changeInput = (e) => {
        this.props.addTask(this.state.addTask)
        this.setState({
            addTask:''
        })
    }

    setAddTask = (e) => {
        this.setState({
            addTask: e.target.value
        })
    }

    render(){

        return(
           <div>
               <input type = 'text' ref = 'task' value={this.state.addTask} onChange={this.setAddTask} 
               placeholder = 'Enter your task here' />
               <button className='btnAdd' onClick = {this.changeInput} title = 'Click to add task'>Add Task</button>
           </div>
        );
    }
};

function mapDispatchToProps(dispatch){
    return bindActionCreators({addTask}, dispatch);
}

export default connect(()=>{},mapDispatchToProps)(Taskbar);