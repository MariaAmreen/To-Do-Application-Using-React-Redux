import React, { Component } from 'react';
import {connect} from 'react-redux';
import Task from '../task';
import '../custom.css';
class Tasklist extends Component{
   
    render(){
    
        return(
            <table id='table'>
                <thead>
                    <tr>
                        <th>Tasks</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.tasks.map((task,index)=><Task key={index} task={task} />)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state){
    return{
        tasks: state.tasks
    }
}

export default connect(mapStateToProps)(Tasklist);