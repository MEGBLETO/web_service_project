const resultReducers= (state = 0, action) =>{
  switch(action.type){
    case 'RESULT':

      return action;

    default: return state;
  }
};

export default resultReducers;