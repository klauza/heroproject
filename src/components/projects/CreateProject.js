import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../store/actions/projectActions.js';
import { Redirect } from 'react-router-dom'

/* head svg */
import head1 from '../svg/head/helmet.svg'
import head2 from '../svg/head/police.svg'
/* chest svg */
import chest1 from '../svg/chest/torso.svg'
import chest2 from '../svg/chest/torso2.svg'
/* legs svg */
import legs1 from '../svg/legs/men-legs.svg'
import legs2 from '../svg/legs/clothes.svg'
//import svgjs from '../svg/javascript.svg'
//import svgjs2 from '../svg/github.svg'

class CreateProject extends Component {

  state = {
    title: '',
    content: '',
    svg1: '',
    svg2: '',
    svg3: ''
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
    this.props.history.push('/');
  }

  handleClick = (e) => {
    
    this.setState({
      [e.target.id]: e.target.src
    })
  }







  render() {

    const { auth, projError } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />

    
    const { title, content, svg1, svg2, svg3 } = this.state;
    const isEnabled =
      title.length > 0 &&
      content.length > 0 &&
      svg1.length > 0 &&
      svg2.length > 0 &&
      svg3.length > 0;
    

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
      

          <p>choose helmet:</p>
          <div className="input-field">
            <label>
              <img className="svg-icons" src={head1} />
              <input id="svg1" type="radio" src={head1} name="head-radio" onClick={this.handleClick} />
            </label>
          </div>

          <div className="input-field">
            <label>
              <img className="svg-icons" src={head2} />
              <input id="svg1" type="radio" src={head2} name="head-radio" onClick={this.handleClick} />
            </label>
          </div>

          <p>choose chest</p>
          <div className="input-field">
            <label>
              <img className="svg-icons" src={chest1} />
              <input id="svg2" type="radio" src={chest1} name="chest-radio" onClick={this.handleClick} />
            </label>
          </div>
          
          <div className="input-field">
            <label>
              <img className="svg-icons" src={chest2} />
              <input id="svg2" type="radio" src={chest2} name="chest-radio" onClick={this.handleClick} />
            </label>
          </div>

         <p>choose legs</p>

         <div className="input-field">
            <label>
              <img className="svg-icons" src={legs1} />
              <input id="svg3" type="radio" src={legs1} name="legs-radio" onClick={this.handleClick} />
            </label>
          </div>

          <div className="input-field">
            <label>
              <img className="svg-icons" src={legs2} />
              <input id="svg3" type="radio" src={legs2} name="legs-radio" onClick={this.handleClick} />
            </label>
          </div>
     

          <div className="input-field">
            
            <button disabled={!isEnabled}>Create</button>
          </div>


        </form>
      </div>
    )
  }
}
const mapToStateProps = (state) => {
  return {
    auth: state.firebase.auth,
    
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}
export default connect(mapToStateProps, mapDispatchToProps)(CreateProject)
