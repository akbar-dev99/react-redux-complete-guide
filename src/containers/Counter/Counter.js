import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

import ActionTypes, {
  addCounter,
  decrement,
  deleteResult,
  increment,
  storeResult,
  subtract,
} from "../../store/actions/actions";

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
          clicked={() => this.props.onStoreResult(this.props.counter)}
        />
        <ul>
          {this.props.listCounter.length > 0 ? (
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
            })
          ) : (
            <li>Empty</li>
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter.counter,
    listCounter: state.results.results,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(increment()),
    onDecrementCounter: () => dispatch(decrement()),
    onAddCounter: value => dispatch(addCounter(value)),
    onSubtractCounter: value => dispatch(subtract(value)),
    onStoreResult: result => dispatch(storeResult(result)),
    onDeleteResult: id => {
      return dispatch(deleteResult(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
