import React from 'react';

export default class Child extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.gumar()}> գումարել </button>
        <button onClick={() => this.props.hanum()}> հանում </button>
      </div>
    );
  }
}
