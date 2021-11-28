import "../App.css";
import Loader from "./LoadingComponent.js";
import CounterText from "./CT.js";

const Counter = (props) => {

  const onChangeInputCount = (e) => {
    const newValue = e.target.value;
    if(isNaN(props.count) || props.count<props.MIN_VAL){
        props.setCount(props.MIN_VAL);
    }else{
        props.setCount(parseInt(newValue));
    }
  };

  const onClickIncrement = () => {
    if (parseInt(props.count) < props.MAX_VAL) {
      props.setCount(parseInt(props.count) + 1);
    }
  };

  const onClickDecrement = () => {
    if (props.count > props.MIN_VAL) {
      props.setCount(parseInt(props.count) - 1);
    }
    if(isNaN(props.count) || props.count<props.MIN_VAL ){
        props.setCount(props.MIN_VAL);
    }
  };

  const selectAll = (e) => {
    e.target.select();
  };

  return (
    <div className="container-outer">
      <div className="container-inner">

        {props.isLoading && <Loader />}
        {/* <Loader /> */}
        {console.log(props.isLoading)}
        <div className="counter-buttons">
          <button className="counter-button-decrement" onClick={onClickDecrement}>-</button>
          <input className="counter-count" onChange={onChangeInputCount} value={isNaN(props.count)? props.MIN_VAL : props.count} onClick={selectAll} />
          <button className="counter-button-increment" onClick={onClickIncrement}>+</button>
        </div>

        <CounterText count={props.count} />

      </div>
    </div>
  );
}

export default Counter;
