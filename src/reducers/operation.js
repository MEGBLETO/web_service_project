




const operationReducer = (state = 'add', action) =>{
  switch(action.type){
    case 'SELECTED':
          return action;

  default: return state;
  }
}


export default operationReducer;