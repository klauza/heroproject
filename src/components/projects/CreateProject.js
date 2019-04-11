import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../store/actions/projectActions.js';
import { Redirect } from 'react-router-dom'

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
    //console.log(this.state);
    this.props.createProject(this.state);
  }

  render() {

    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />

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
const mapToStateProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}
export default connect(mapToStateProps, mapDispatchToProps)(CreateProject)
