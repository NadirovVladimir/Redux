export const LIGHT = 'LIGHT'
export const DARK = 'DARK'

export const Theme = {
    LIGHT:'light',
    DARK:'dark'
}

const reducer = (state = Theme.LIGHT,{type}) => {
switch(type){
case LIGHT:
  return Theme.LIGHT;
  case DARK:
    return Theme.DARK;
    default:
        return state
}
}
export default reducer;