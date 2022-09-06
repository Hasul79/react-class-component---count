import React from "react";
import "./style.css";
import Child from './Child';

export default  class App extends React.Component {
  

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