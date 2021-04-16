

import {combineReducers} from 'redux';
import operationReducer from './operation';
import numbersReducers from './numbers';
import resultReducers from './result';



const allReducers = combineReducers({
    choosedoperation: operationReducer,
    enterednumbers: numbersReducers,
    reponse: resultReducers
});


export default allReducers;