import React from "react";
class CounterDemo extends React.Component{
    state={count:0};
    handleClick = e => {
        const c = this.state.count;
        this.setState({ count: c + 1 });
      };
    render(){
        return(
            <div>
                <h1>CounterDemo-ClassComponents</h1>
                <button onClick = {this. handleClick}>
                {this. state.count}
            </button>
            </div>
        );
    }
}
export default CounterDemo;