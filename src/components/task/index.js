import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteTask} from '../../actions';
import '../custom.css';

class Task extends Component{
    render(){
        return(
            <tr>
                <td>
                    {this.props.task}
                </td>
                <td className='action'>
                    <button onClick = {()=>{this.props.deleteTask(this.props.task)}}>Delete</button>
                </td>
            </tr>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({deleteTask}, dispatch);
}

export default connect(()=>{return{};},mapDispatchToProps)(Task);