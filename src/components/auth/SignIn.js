import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../store/actions/authActions'
import { Redirect } from 'react-router-dom'

//View last 3 projects:
import ProjectList from '../projects/ProjectList';
import { compose } from 'redux';
import { firestoreConnect} from 'react-redux-firebase';

class SignIn extends Component {

  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state);
    this.props.signIn(this.state);
  }

  render() {
    //projects  - view last 3
    const { authError, auth, projects } = this.props;

    if (auth.uid) return <Redirect to='/' />

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="signForm">
          <h5>Sign In</h5>

          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <button className="btn">Login</button>

            { authError ? <p>{authError}</p> : null }
          </div>

        </form>
      
      <p>View last 3 projects.</p><br />
      <div className="dashboard container">
        <div className="dashboard-row">
          <div className="dashboard-row__col1"> <ProjectList projects={projects} /> </div>
        </div>
      </div>

      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return{
    authError: state.auth.authError,
    auth: state.firebase.auth,
    projects: state.firestore.ordered.projects
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}
 
//export default connect(mapStateToProps, mapDispatchToProps)(SignIn)

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'projects', orderBy: ['createdAt', 'desc'], limit: 3 } //from most recent
  ])
  )(SignIn)
