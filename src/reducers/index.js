import {combineReducers} from 'redux';
import { stat } from 'fs';

const taskReducer = (state=[],action)=>{
    switch(action.type){
        case 'ADD_TASK':
            state = state.concat(action.payload);
            break;
        case 'DELETE_TASK':
            const foundIndex = state.indexOf(action.payload);
            console.log(foundIndex,state, action)

           if(foundIndex >= 0){
                return [
                    ...state.filter(v => v  !== action.payload)
                ]
           }

            return state
            break;  
              
              
    }
    return state;
},

reducers = combineReducers({
    tasks:taskReducer
});

export default reducers;