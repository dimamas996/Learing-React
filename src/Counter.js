import React, { Component } from "react";
import { ThemeContext } from "./App";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: props.initialCount,
    };
  }
  render() {
    return (
      <ThemeContext.Consumer>
        {(style) => (
          <div style={style}>
            <button onClick={() => this.changeCounterValue(-1)}>-</button>
            <span>{this.state.count}</span>
            <button onClick={() => this.changeCounterValue(+1)}>+</button>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }

  changeCounterValue(dir) {
    //if new value not depends on previuos state use this.setState({count: this.state.count})

    /*     this.setState((prevState) => {
      return { count: prevState.count + dir };
    }); */

    this.setState({ count: this.state.count + dir });
  }
}
