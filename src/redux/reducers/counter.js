export const PLUS = 'PLUS'
export const MINUS = 'MINUS'

const reducer = (state = 0,{type}) => {
    switch(type){
      case PLUS:
        return state + 1;
      case MINUS:
        return state - 1;
      default:
        return state;
    }
    }

    export default reducer;
  
