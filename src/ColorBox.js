import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    const newValue = this.props.opacity - 0.1;
    const opacityStyle = { opacity : this.props.opacity };
    if (this.props.opacity >= 0.2) {
      return (
        <div style={opacityStyle}>
        <ColorBox opacity={newValue} /> 
        </div>
      );
    } else {
      return null;
    }

  }
  
}
