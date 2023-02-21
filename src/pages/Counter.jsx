const Counter = ({counter,increment,decrement}) => {
    return (
      <div className="block1">
       <button onClick={increment}>PLUS</button>
       <button onClick={decrement}>MINUS</button>
       <h2>{counter}</h2>
      </div>
    )
  }
  
  export default Counter;
  