import React, { Component } from 'react'

class Form extends Component {
  render() {
    return (
      <form id="create-weather-form" onSubmit={this.props.getWeather} >
        <input type="text" id="city" name="city" placeholder="Enter City..." />
        <input type="text" name="country" placeholder="Enter Country..." />
        <button>Get Weather</button>
      </form>
    )
  }
}

export default Form;
