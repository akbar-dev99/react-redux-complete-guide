import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  state = {
    counter: 0,
  };

  counterChangedHandler = (action, value) => {
    switch (action) {
      case "inc":
        this.setState(prevState => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case "dec":
        this.setState(prevState => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case "add":
        this.setState(prevState => {
          return { counter: prevState.counter + value };
        });
        break;
      case "sub":
        this.setState(prevState => {
          return { counter: prevState.counter - value };
        });
        break;
    }
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.counter} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl
          label="Add 5"
          clicked={() => this.props.onAddCounter(5)}
        />
        <CounterControl
          label="Subtract 5"
          clicked={() => this.props.onSubtractCounter(5)}
        />
        <br />
        <hr />
        <CounterControl
          label="Store Result"
          clicked={this.props.onStoreResult}
        />
        <ul>
          {this.props.result !== [] &&
            this.props.result.map((item, i) => {
              return (
                <li
                  style={{ cursor: "pointer" }}
                  key={i}
                  onClick={this.props.onDeleteResult}
                >
                  {item.value}
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter,
    result: state.result,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: "INC" }),
    onDecrementCounter: () => dispatch({ type: "DEC" }),
    onAddCounter: value =>
      dispatch({
        type: "ADD_MORE",

        value: value,
      }),
    onSubtractCounter: value =>
      dispatch({
        type: "SUBTRACT_MORE",
        value: value,
      }),
    onStoreResult: () => dispatch({ type: "STORE_RESULT" }),
    onDeleteResult: () => dispatch({ type: "DELETE_RESULT" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
