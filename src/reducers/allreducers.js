

import {combineReducers} from 'redux';
import operationReducer from './operation';
import numbersReducers from './numbers';



const allReducers = combineReducers({
    choosedoperation: operationReducer,
    enterednumbers: numbersReducers
});


export default allReducers;