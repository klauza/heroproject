import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signUp } from '../store/actions/authActions'

class SignUp extends Component {

  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state);
    this.props.signUp(this.state);
  }

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to='/' />

    const { firstName, lastName, email, password } = this.state;
    const isEnabled =
    email.length > 3 &&
    password.length > 1 &&
    firstName.length > 1 &&
    lastName.length > 1;

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="signForm">
          <h5>Sign Up</h5>

          <div className="input-field-sign">
            <input type="email" id="email" placeholder="email" onChange={this.handleChange} />
          </div>

          <div className="input-field-sign">
            <input type="password" id="password" placeholder="password" onChange={this.handleChange} />
          </div>

          <div className="input-field-sign">
            <input type="text" id="firstName" placeholder="first name" onChange={this.handleChange} />
          </div>

          <div className="input-field-sign">
            <input type="text" id="lastName" placeholder="last name" onChange={this.handleChange} />
          </div>


          <div className="input-field-sign">
            <button className="btn-sign" disabled={!isEnabled}>Create user</button>
            <div>{authError ? <p>{ authError }</p> : null }</div>
          </div>

        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
