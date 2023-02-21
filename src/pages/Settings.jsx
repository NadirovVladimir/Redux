import { useSelector,useDispatch } from "react-redux";
import { makeDark, makeLight } from "../redux/actions/theme";
import { Theme } from "../redux/reducers/theme";

const Settings = () => {
    const dispatch = useDispatch()

    const changeToLight = () => {
    dispatch(makeLight)
    }
    const changeToDark = () => {
        dispatch(makeDark)
    }
    return (
      <div className="block1">
       <button onClick={changeToLight}>LIGHT</button>
       <button onClick={changeToDark}>DARK</button>
      </div>
    )
  }
  
  export default Settings;