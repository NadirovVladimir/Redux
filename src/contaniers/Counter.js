import { connect } from "react-redux";
import Counter from "../pages/Counter";
import { decrement, increment } from "../redux/actions/counter";


const mapStateToProps = ({counter}) => ({counter})

const mapDispatchToProps = (dispatch) => ( {
  increment:() => {
    dispatch(increment)
  },
  decrement:() => {
    dispatch(decrement)
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(Counter);