import React, { Component } from 'react'

class CreateProject extends Component {

  state = {
    title: '',
    content: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault(); //prevents the page from reloading
    console.log(this.state);
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="signForm">
          <h5>Create new project</h5>

          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea id="content" onChange={this.handleChange}></textarea>
          </div>

          <div className="input-field">
            <button className="btn">Create</button>
          </div>

        </form>
      </div>
    )
  }
}

export default CreateProject
