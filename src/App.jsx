import { useEffect } from "react";
import { useSelector } from "react-redux";
import Counter from "./contaniers/Counter";
import Settings from "./pages/Settings";


const App = () => {
  const theme = useSelector((state) => {
    return state.theme
    })

    useEffect(() => {
    document.body.className = ''
    document.querySelector('body').classList.add(theme)
    },[theme])
  return (
    <div className="block1">
     <>
     <Counter />
     <Settings />
     </>
    </div>
  )
}

export default  App;
