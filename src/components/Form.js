import React, { Component } from 'react'

class Form extends Component {
  render() {
    return (
      <form id="create-weather-form" onSubmit={this.props.getWeather} >
        <input type="text" id="city" name="city" placeholder="Enter City..." />
        <input type="text" name="country" placeholder="Enter Country..." />
        <button>Get Weather</button>
        <a className="btn btn-primary" href="https://github.com/sumitkumar1207"target="_blank"><i className="fab fa-github">Get The Code</i></a>
      </form>
    )
  }
}

export default Form;
