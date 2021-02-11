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
        <CounterControl label="Add 5" clicked={() => this.props.onAddMore(5)} />
        <CounterControl
          label="Subtract 5"
          clicked={() => this.props.onSubtractMore(5)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: "INC" }),
    onDecrementCounter: () => dispatch({ type: "DEC" }),
    onAddMore: value =>
      dispatch({
        type: "ADD_MORE",

        value: value,
      }),
    onSubtractMore: value =>
      dispatch({
        type: "SUBTRACT_MORE",

        value: value,
      }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
