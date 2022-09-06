import React from "react";
import "./style.css";
import Child from './Child';

export default  class App extends React.Component {
  state = {count: 0}
  gumar = () => {
       this.setState({
         count: this.state.count + 1,
        });
      };

  hanum = () => {
        this.setState({
          count: this.state.count - 1,
      });
    };
 

  render() {
    const {count} = this.state;
    return (
      <div>
       <Child gumar={this.gumar} 
              hanum={this.hanum} />
       <h1>{count}</h1>
      </div>
     );
   }
}