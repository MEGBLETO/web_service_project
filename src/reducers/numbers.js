const numbersReducers = (state = {}, action) =>{
      switch(action.type){
        case 'NUMERO':

          return action;

        default: return state;
      }
};

export default numbersReducers;