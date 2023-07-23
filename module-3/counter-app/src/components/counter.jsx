// IMPORT REACT CORE AND REACT COMPONENT FROM REACT
import React, { Component } from "react";

// CREATE A CLASS COMPONENT CALLED COUNTER THAT EXTENDS THE REACT COMPONENT
class Counter extends Component {
  // STATE OBJECT - USED TO STORE DATA THAT THE COMPONENT NEEDS
  state = {
    count: 0,
    // imageUrl: "https://picsum.photos/200",
  };

  // STYLES OBJECT - CONTAINS CSS PROPERTIES IN CAMAL CASE
  styles = {
    // REACT WILL AUTOMATICALLY CONVERT THE VALUE TO PX
    fontSize: 15,
    fontWeight: "bold",
    textTransform: "uppercase",
  };

  // RENDER METHOD - RETURNS THE VIRTUAL DOM (JSX)
  render() {
    // IN ORDER TO RETURN MULTIPLE ELEMENTS, WE NEED TO WRAP THEM IN A DIV

    // ------------------------------------------------------------

    // THIS WOULD WRAP THE ELEMENTS IN A DIV
    // return (
    //   <div>
    //     <h1>HELLO WORLD</h1>
    //     <button>Increment</button>
    //   </div>
    // );

    // ------------------------------------------------------------

    // WE CAN ALSO USE REACT FRAGMENT TO AVOID WRAPPING IN A DIV

    // ------------------------------------------------------------

    // THIS WOULD WRAP THE ELEMENTS IN A REACT FRAGMENT WITHOUT A DIV
    return (
      <React.Fragment>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        <span style={this.styles} className={this.getBtnClasses()}>
          {this.formatCount()}
        </span>
        <button style={this.styles} className="btn btn-secondary btn-sm">
          Increment
        </button>
      </React.Fragment>
    );
  }

  // CONDITIONAL RENDERING - IF THE COUNT IS ZERO, DISPLAY YELLOW BUTTON, ELSE DISPLAY BLUE BUTTON
  getBtnClasses() {
    let classes = "btn btn-sm m-2";
    classes += this.state.count === 0 ? " btn-warning" : " btn-primary";

    // THIS IS THE SAME AS THE ABOVE CODE
    // let classes = "btn btn-sm m-2 btn-";
    // classes += this.state.count === 0 ? "warning" : "primary";

    return classes;
  }

  // METHOD TO FORMAT THE COUNT
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "ZERO" : count;
    // THIS CAN RETURN A JSX EXPRESSION ALSO
    // return count === 0 ? <h1>ZERO</h1> : count;
  }
}

// EXPORT COUNTER COMPONENT
export default Counter;
