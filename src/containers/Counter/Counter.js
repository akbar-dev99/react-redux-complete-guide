import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

import ActionTypes from "../../store/actions";

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
            this.props.listCounter.map((item, i) => {
              return (
                <li
                  style={{ cursor: "pointer" }}
                  key={i}
                  onClick={() => this.props.onDeleteResult(item.id)}
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
    listCounter: state.results,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: ActionTypes.INCREMENT_COUNTER }),
    onDecrementCounter: () => dispatch({ type: ActionTypes.DECREMENT_COUNTER }),
    onAddCounter: value =>
      dispatch({ type: ActionTypes.ADD_COUNTER, value: value }),
    onSubtractCounter: value =>
      dispatch({ type: ActionTypes.SUBTRACT_COUNTER, value: value }),
    onStoreResult: () => dispatch({ type: ActionTypes.STORE_RESULTS }),
    onDeleteResult: id => {
      return dispatch({ type: ActionTypes.DELETE_RESULT, payload: { id } });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
