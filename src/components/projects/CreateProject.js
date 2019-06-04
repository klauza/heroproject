import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../store/actions/projectActions.js';
import { Redirect } from 'react-router-dom'

/* head svg */
import head1 from '../svg/head/head1.svg'
import head2 from '../svg/head/head2.svg'
import head3 from '../svg/head/head3.svg'
import head4 from '../svg/head/head4.svg' 
import head5 from '../svg/head/head5.svg' 
import head6 from '../svg/head/head6.svg' 
import head7 from '../svg/head/head7.svg' 
import head8 from '../svg/head/head8.svg' 
import head9 from '../svg/head/head9.svg' 
import head10 from '../svg/head/head10.svg' 
import head11 from '../svg/head/head11.svg' 
import head12 from '../svg/head/head12.svg' 
import head13 from '../svg/head/head13.svg' 
import head14 from '../svg/head/head14.svg' 
import head15 from '../svg/head/head15.svg' 
import head16 from '../svg/head/head16.svg' 
import head17 from '../svg/head/head17.svg' 
import head18 from '../svg/head/head18.svg' 
import head19 from '../svg/head/head19.svg' 
 
/* chest svg */
import chest1 from '../svg/chest/chest1.svg'
import chest2 from '../svg/chest/chest2.svg'
import chest3 from '../svg/chest/chest3.svg'
import chest4 from '../svg/chest/chest4.svg'
import chest5 from '../svg/chest/chest5.svg'
import chest6 from '../svg/chest/chest6.svg'
import chest7 from '../svg/chest/chest7.svg'

/* legs svg */
import legs1 from '../svg/legs/legs1.svg'
import legs2 from '../svg/legs/legs2.svg'
import legs3 from '../svg/legs/legs3.svg'
import legs4 from '../svg/legs/legs4.svg'
import legs5 from '../svg/legs/legs5.svg'


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
/*
  handleClick = (e) => {
    this.setState({
      [e.target.id]: e.target.src
    })
  }
*/
  clickIcon = (e) => {
    //e.stopPropagation();
    this.setState({
      [e.target.nextSibling.id]: e.target.src 
    })
    e.preventDefault();
    //console.log(e.target);
    //console.log(svgTarget);
    //state update, fill svg state
    
  

    const currentIcon = e.target.parentNode.className; //clicked svg (svg-helmets-1)
    
    const svgTarget = document.getElementsByClassName(currentIcon +'-svg')[0]; //target (svg-helmets-1-svg)
    const currentTargetCloned = svgTarget.cloneNode(true); //clone the svg


    //console.log(currentTargetCloned);


    const parentHelmet = document.getElementsByClassName("helmets")[0]; //helmets section in 'completed' svg
    const parentTorsos = document.getElementsByClassName("torsos")[0]; //torsos section in 'completed' svg
    const parentLegs = document.getElementsByClassName("legs")[0]; //legs section in 'completed' svg
    // const completed = document.getElementsByClassName("completed")[0]; //merged all svgs

    //change to string "svg-helmets or svg-torsos" also remove any number
    const myNewItem = currentIcon.split('s-').join('').replace(/[0-9]/g, ''); 
    


    // Check if we click on helmet or torso or legs
    if(myNewItem === 'svg-helmet'){  //HELMET

        //delete previous helmet if there is
      if(parentHelmet.hasChildNodes()){
        parentHelmet.removeChild(parentHelmet.firstChild);
      }
      
        //add helmet-item to helmets complete svg
      parentHelmet.appendChild(currentTargetCloned); 
        //displaying - removing display: none; css
        
    } else 
    if (myNewItem === 'svg-torso'){  //TORSO
      if(parentTorsos.hasChildNodes()){
        parentTorsos.removeChild(parentTorsos.firstChild);
      }
      parentTorsos.appendChild(currentTargetCloned); 
    } else
    if (myNewItem === 'svg-leg'){  //LEGS
      if(parentLegs.hasChildNodes()){
        parentLegs.removeChild(parentLegs.firstChild);
      }
      parentLegs.appendChild(currentTargetCloned); 
    } 

    //console.log(this.state);
    //console.log(completed);

    // console.log('completed: ', completed);
    //const helmetLabel1 = document.querySelector(".svg-helmets-1");
    //const svgHelmet1 = document.querySelector(".police-helmet"); //svg helmet-1 
    //console.log(helmetLabel1);
    //console.log(svgHelmet1);
    //svgHelmet1.classList.add("remove");
    //helmetLabel1.addEventListener()
  }





  render() {

    const { auth} = this.props;
    //const { projError } = this.props; // is not being used
    if (!auth.uid) return <Redirect to='/signin' />

    
    const { title, content, svg1, svg2, svg3 } = this.state;
    const isEnabled =
      title.length > 1 &&
      content.length > 4 &&
      svg1.length > 0 &&
      svg2.length > 0 &&
      svg3.length > 0;
    

    return (
      <div className="container create-project-container">
        <form onSubmit={this.handleSubmit}>
          
          <div className="hero-details">
            <h5>Create new hero</h5>
            <div className="input-field">
             <input maxLength="18" className="input-name" type="text" id="title" placeholder="Hero name (minimum 2 chars)" onChange={this.handleChange} />
            </div>

            <div className="input-field">
              <textarea maxLength="75" className="input-textfield textfield" id="content" placeholder={`Hero description - min 5 chars`} onChange={this.handleChange}></textarea>
            </div>
          </div>


          
          <div className="hero-accessories">

            <p>choose a helmet</p>
            <div className="input-field">
                <label className="svg-helmets-1" onClick={this.clickIcon} >
                  <img className="svg-icons" src={head1} alt="svg-icon"/>
                  <input id="svg1" type="radio" src={head1} name="head-radio" />
                </label>
              
                <label className="svg-helmets-2" onClick={this.clickIcon}>
                  <img className="svg-icons" src={head2} alt="svg-icon"/>
                  <input id="svg1" type="radio" src={head2} name="head-radio" />
                </label>
              
                <label className="svg-helmets-3" onClick={this.clickIcon}>
                  <img className="svg-icons" src={head3} alt="svg-icon"/>
                  <input id="svg1" type="radio" src={head3} name="head-radio" />
                </label>
              
                <label className="svg-helmets-4" onClick={this.clickIcon}>
                  <img className="svg-icons" src={head4} alt="svg-icon"/>
                  <input id="svg1" type="radio" src={head4} name="head-radio" />
                </label>
              
                <label className="svg-helmets-5" onClick={this.clickIcon}>
                  <img className="svg-icons" src={head5} alt="svg-icon"/>
                  <input id="svg1" type="radio" src={head5} name="head-radio" />
                </label>
              
                <label className="svg-helmets-6" onClick={this.clickIcon}>
                  <img className="svg-icons" src={head6} alt="svg-icon"/>
                  <input id="svg1" type="radio" src={head6} name="head-radio" />
                </label>
              
                <label className="svg-helmets-7" onClick={this.clickIcon}>
                  <img className="svg-icons" src={head7} alt="svg-icon"/>
                  <input id="svg1" type="radio" src={head7} name="head-radio" />
                </label>
              
                <label className="svg-helmets-8" onClick={this.clickIcon}>
                  <img className="svg-icons" src={head8} alt="svg-icon"/>
                  <input id="svg1" type="radio" src={head8} name="head-radio" />
                </label>
              
                <label className="svg-helmets-9" onClick={this.clickIcon}>
                  <img className="svg-icons" src={head9} alt="svg-icon"/>
                  <input id="svg1" type="radio" src={head9} name="head-radio" />
                </label>
              
                <label className="svg-helmets-10" onClick={this.clickIcon}>
                  <img className="svg-icons" src={head10} alt="svg-icon"/>
                  <input id="svg1" type="radio" src={head10} name="head-radio" />
                </label>
              
                <label className="svg-helmets-11" onClick={this.clickIcon}>
                  <img className="svg-icons" src={head11} alt="svg-icon"/>
                  <input id="svg1" type="radio" src={head11} name="head-radio" />
                </label>
              
                <label className="svg-helmets-12" onClick={this.clickIcon}>
                  <img className="svg-icons" src={head12} alt="svg-icon"/>
                  <input id="svg1" type="radio" src={head12} name="head-radio" />
                </label>
              
                <label className="svg-helmets-13" onClick={this.clickIcon}>
                  <img className="svg-icons" src={head13} alt="svg-icon"/>
                  <input id="svg1" type="radio" src={head13} name="head-radio" />
                </label>
              
                <label className="svg-helmets-14" onClick={this.clickIcon}>
                  <img className="svg-icons" src={head14} alt="svg-icon"/>
                  <input id="svg1" type="radio" src={head14} name="head-radio" />
                </label>
              
                <label className="svg-helmets-15" onClick={this.clickIcon}>
                  <img className="svg-icons" src={head15} alt="svg-icon"/>
                  <input id="svg1" type="radio" src={head15} name="head-radio" />
                </label>
              
                <label className="svg-helmets-16" onClick={this.clickIcon}>
                  <img className="svg-icons" src={head16} alt="svg-icon"/>
                  <input id="svg1" type="radio" src={head16} name="head-radio" />
                </label>
              
                <label className="svg-helmets-17" onClick={this.clickIcon}>
                  <img className="svg-icons" src={head17} alt="svg-icon"/>
                  <input id="svg1" type="radio" src={head17} name="head-radio" />
                </label>
              
                <label className="svg-helmets-18" onClick={this.clickIcon}>
                  <img className="svg-icons" src={head18} alt="svg-icon"/>
                  <input id="svg1" type="radio" src={head18} name="head-radio" />
                </label>
              
                <label className="svg-helmets-19" onClick={this.clickIcon}>
                  <img className="svg-icons" src={head19} alt="svg-icon"/>
                  <input id="svg1" type="radio" src={head19} name="head-radio" />
                </label>
              
                
              
                
            </div>


            <p>choose a chest</p>
            <div className="input-field">
              <label className="svg-torsos-1" onClick={this.clickIcon}>
                <img className="svg-icons" src={chest1} alt="svg-icon"/>
                <input id="svg2" type="radio" src={chest1} name="chest-radio"/>
              </label>
   
              <label className="svg-torsos-2" onClick={this.clickIcon}>
                <img className="svg-icons" src={chest2} alt="svg-icon"/>
                <input id="svg2" type="radio" src={chest2} name="chest-radio"/>
              </label>
   
              <label className="svg-torsos-3" onClick={this.clickIcon}>
                <img className="svg-icons" src={chest3} alt="svg-icon"/>
                <input id="svg2" type="radio" src={chest3} name="chest-radio"/>
              </label>
   
              <label className="svg-torsos-4" onClick={this.clickIcon}>
                <img className="svg-icons" src={chest4} alt="svg-icon"/>
                <input id="svg2" type="radio" src={chest4} name="chest-radio"/>
              </label>
   
              <label className="svg-torsos-5" onClick={this.clickIcon}>
                <img className="svg-icons" src={chest5} alt="svg-icon"/>
                <input id="svg2" type="radio" src={chest5} name="chest-radio"/>
              </label>
   
              <label className="svg-torsos-6" onClick={this.clickIcon}>
                <img className="svg-icons" src={chest6} alt="svg-icon"/>
                <input id="svg2" type="radio" src={chest6} name="chest-radio"/>
              </label>
   
              <label className="svg-torsos-7" onClick={this.clickIcon}>
                <img className="svg-icons" src={chest7} alt="svg-icon"/>
                <input id="svg2" type="radio" src={chest7} name="chest-radio"/>
              </label>
   
   
            
   
            </div>


          <p>choose legs</p>
          <div className="input-field">
              <label className="svg-legs-1" onClick={this.clickIcon}>
                <img className="svg-icons" src={legs1} alt="svg-icon"/>
                <input id="svg3" type="radio" src={legs1} name="legs-radio"/>
              </label>

              <label className="svg-legs-2" onClick={this.clickIcon}>
                <img className="svg-icons" src={legs2} alt="svg-icon"/>
                <input id="svg3" type="radio" src={legs2} name="legs-radio"/>
              </label>

              <label className="svg-legs-3" onClick={this.clickIcon}>
                <img className="svg-icons" src={legs3} alt="svg-icon"/>
                <input id="svg3" type="radio" src={legs3} name="legs-radio"/>
              </label>

              <label className="svg-legs-4" onClick={this.clickIcon}>
                <img className="svg-icons" src={legs4} alt="svg-icon"/>
                <input id="svg3" type="radio" src={legs4} name="legs-radio"/>
              </label>

              <label className="svg-legs-5" onClick={this.clickIcon}>
                <img className="svg-icons" src={legs5} alt="svg-icon"/>
                <input id="svg3" type="radio" src={legs5} name="legs-radio"/>
              </label>

             

            </div>
          </div>

          <div className="all-svg-container">
            <svg className="svg-helmets-1-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55.996 55.996"><path d="M29.205 41h-2c-9.389 0-17-7.611-17-17h36c0 9.389-7.611 17-17 17z" fill="#d2b467"/><path d="M48.514 23.779c-.814.3-1.516.221-1.516.221h-.793c.264 4.298-2.331 8.393-5.628 11.807-6.744 6.983-18 6.983-24.743 0-3.298-3.414-5.893-7.509-5.629-11.807H8.998s-.485.06-1.116-.093l-.467 4.207a17.121 17.121 0 0 0 0 3.773l.379 3.408a17.075 17.075 0 0 0 4.899 10.192L21.205 54s1.327 1.529 2.817 1.954c.091.026.183-.048.183-.143v-2.337c0-.814.66-1.474 1.474-1.474h4.052c.814 0 1.474.66 1.474 1.474v2.373c0 .083.069.154.152.149C33.137 55.89 35.205 54 35.205 54l8.513-8.513a17.075 17.075 0 0 0 4.899-10.192l.379-3.408a17.121 17.121 0 0 0 0-3.773l-.482-4.335zM46.573 10.206a4.385 4.385 0 0 0-1.247-2.403c-.865-.854-1.689-1.749-2.315-2.792l-.835-1.392a4.39 4.39 0 0 0-2.813-2.027L36.11.868a36.428 36.428 0 0 0-15.81 0l-3.253.723a4.39 4.39 0 0 0-2.813 2.027l-.835 1.392c-.626 1.043-1.449 1.938-2.315 2.792a4.392 4.392 0 0 0-1.247 2.403L9.205 14h38l-.632-3.794z" fill="#464f5d"/><path d="M46.998 14l2.782 3.478c1.152 1.439 1.386 3.5.354 5.028C48.958 24.245 46.998 24 46.998 24h-38s-1.96.245-3.136-1.494c-1.032-1.527-.798-3.588.354-5.028L8.998 14h38z" fill="#4e5765"/><path d="M47.591 34.21l-9.156 7.122-4.098 7.172a1 1 0 0 0 1.736.992l3.902-6.828 8.517-6.624c.039-.25.096-.497.124-.749l.125-1.126a.991.991 0 0 0-1.15.041zM17.926 41.279L8.76 35.168a.983.983 0 0 0-.986-.053l.02.18c.069.619.173 1.233.308 1.838l8.383 5.589 3.889 5.833a.995.995 0 0 0 1.386.277 1 1 0 0 0 .277-1.387l-4.111-6.166z" fill="#5c697c"/><path d="M35.653 53.552l1.473-1.473-6.194-11.27c-.719.114-1.442.184-2.168.208l6.889 12.535zM18.319 51.114l1.46 1.46 6.855-11.606a17.404 17.404 0 0 1-2.124-.335l-6.191 10.481z" fill="#5c697c"/><g fill="#5c697c"><path d="M41.209 8.877c-.991-1-2.276-1.597-3.822-1.797l1.925-5.501-1.967-.437L32.845 14h2.12l1.737-4.963c1.285.087 2.328.489 3.076 1.238 1.45 1.452 1.464 3.712 1.464 3.735l2 .014c.001-.126.004-3.092-2.033-5.147zM17.275 1.54l1.76 5.574c-1.534.203-2.811.799-3.797 1.794-2.037 2.055-2.034 5.021-2.033 5.146l2-.014c0-.023.014-2.283 1.464-3.735.73-.731 1.742-1.131 2.985-1.231L21.209 14h2.096L19.234 1.105l-1.959.435z"/></g><path d="M16.52 24c2.57 8.555 6.405 14 10.685 14h2c4.28 0 8.115-5.445 10.685-14H16.52z" fill="#dfc57d"/></svg>
            <svg className="svg-helmets-2-svg" height="504pt" viewBox="-16 0 504 504" width="504pt" xmlns="http://www.w3.org/2000/svg"><path d="m456 144v232c0 4.40625-3.609375 8-8 8h-16v-167.992188l-8-8.007812h-376l-8 8.007812v167.992188h-16c-4.40625 0-8-3.59375-8-8v-232c0-79.59375 64.390625-144 144-144h152c79.59375 0 144 64.40625 144 144zm0 0" fill="#656d78"/><path d="m432 384v64c0 24-24 56-196 56s-196-32-196-56v-231.992188l8-8.007812h376l8 8.007812zm0 0" fill="#5d9cec"/><path d="m472 200v80c0 4.40625-3.609375 8-8 8h-8v-96h8c4.390625 0 8 3.59375 8 8zm0 0" fill="#545c66"/><path d="m16 192v96h-8c-4.40625 0-8-3.59375-8-8v-80c0-4.40625 3.59375-8 8-8zm0 0" fill="#545c66"/><path d="m155.71875 501.015625c18.722656 1.59375 40.394531 2.609375 65.488281 2.886719l79.28125-295.902344h-66.25zm0 0" fill="#87bcf4"/><path d="m308.769531 208-79.296875 295.953125c2.183594.015625 4.296875.046875 6.527344.046875.59375 0 1.144531-.015625 1.734375-.015625l79.3125-295.984375zm0 0" fill="#87bcf4"/><g fill="#434a54"><path d="m138 147.351562c-2.207031 0-4-1.792968-4-4v-56c0-2.207031 1.792969-4 4-4s4 1.792969 4 4v56c0 2.207032-1.792969 4-4 4zm0 0"/><path d="m146 123.351562c-2.207031 0-4-1.792968-4-4 0-2.207031 1.792969-4 4-4 6.617188 0 12-5.382812 12-12 0-6.617187-5.382812-12-12-12-2.207031 0-4-1.792968-4-4 0-2.207031 1.792969-4 4-4 11.03125 0 20 8.96875 20 20s-8.96875 20-20 20zm0 0"/><path d="m146 123.351562h-8c-2.207031 0-4-1.792968-4-4 0-2.207031 1.792969-4 4-4h8c2.207031 0 4 1.792969 4 4 0 2.207032-1.792969 4-4 4zm0 0"/><path d="m146 91.351562h-8c-2.207031 0-4-1.792968-4-4 0-2.207031 1.792969-4 4-4h8c2.207031 0 4 1.792969 4 4 0 2.207032-1.792969 4-4 4zm0 0"/><path d="m202 135.351562c-2.207031 0-4-1.792968-4-4v-32.007812c0-2.207031 1.792969-4 4-4s4 1.792969 4 4v32.007812c0 2.207032-1.792969 4-4 4zm0 0"/><path d="m178 135.351562c-2.207031 0-4-1.792968-4-4v-32.007812c0-2.207031 1.792969-4 4-4s4 1.792969 4 4v32.007812c0 2.207032-1.792969 4-4 4zm0 0"/><path d="m222 147.34375c-2.207031 0-4-1.792969-4-4v-55.992188c0-2.207031 1.792969-4 4-4s4 1.792969 4 4v55.992188c0 2.207031-1.792969 4-4 4zm0 0"/><path d="m238 147.351562h-16c-2.207031 0-4-1.792968-4-4 0-2.207031 1.792969-4 4-4h16c2.207031 0 4 1.792969 4 4 0 2.207032-1.792969 4-4 4zm0 0"/><path d="m258 147.351562c-2.207031 0-4-1.792968-4-4v-56c0-2.207031 1.792969-4 4-4s4 1.792969 4 4v56c0 2.207032-1.792969 4-4 4zm0 0"/><path d="m317.984375 147.351562c-2.207031 0-4-1.792968-4-4v-56c0-2.207031 1.792969-4 4-4s4 1.792969 4 4v56c0 2.207032-1.792969 4-4 4zm0 0"/><path d="m301.984375 103.34375c-2.207031 0-4-1.792969-4-4 0-4.40625-3.585937-7.992188-8-7.992188-4.410156 0-7.984375 3.585938-7.984375 7.992188 0 2.207031-1.792969 4-4 4s-4-1.792969-4-4c0-8.824219 7.167969-15.992188 15.984375-15.992188 8.824219 0 16 7.167969 16 15.992188 0 2.207031-1.792969 4-4 4zm0 0"/><path d="m201.984375 103.34375c-2.207031 0-4-1.792969-4-4 0-4.40625-3.578125-7.992188-7.984375-7.992188-4.414062 0-8 3.585938-8 7.992188 0 2.207031-1.792969 4-4 4s-4-1.792969-4-4c0-8.824219 7.175781-15.992188 16-15.992188 8.816406 0 15.984375 7.167969 15.984375 15.992188 0 2.207031-1.792969 4-4 4zm0 0"/><path d="m190 147.335938c-8.824219 0-16-7.167969-16-15.984376 0-2.207031 1.792969-4 4-4s4 1.792969 4 4c0 4.410157 3.585938 7.984376 8 7.984376 4.40625 0 7.984375-3.574219 7.984375-7.984376 0-2.207031 1.792969-4 4-4s4 1.792969 4 4c0 8.816407-7.167969 15.984376-15.984375 15.984376zm0 0"/><path d="m289.984375 147.34375c-8.824219 0-16-7.175781-16-16 0-2.207031 1.792969-4 4-4s4 1.792969 4 4c0 4.417969 3.582031 8 8 8 4.414063 0 8-3.582031 8-8 0-2.207031 1.792969-4 4-4s4 1.792969 4 4c0 8.824219-7.175781 16-16 16zm0 0"/><path d="m277.984375 135.34375c-2.207031 0-4-1.792969-4-4l.015625-32c0-2.207031 1.792969-4 4-4s4 1.792969 4 4l-.015625 32c0 2.207031-1.792969 4-4 4zm0 0"/><path d="m334 91.351562h-16.015625c-2.207031 0-4-1.792968-4-4 0-2.207031 1.792969-4 4-4h16.015625c2.207031 0 4 1.792969 4 4 0 2.207032-1.792969 4-4 4zm0 0"/><path d="m334 147.351562h-16.015625c-2.207031 0-4-1.792968-4-4 0-2.207031 1.792969-4 4-4h16.015625c2.207031 0 4 1.792969 4 4 0 2.207032-1.792969 4-4 4zm0 0"/><path d="m329.984375 119.34375h-12c-2.207031 0-4-1.792969-4-4s1.792969-4 4-4h12c2.207031 0 4 1.792969 4 4s-1.792969 4-4 4zm0 0"/></g><path d="m56 216c0 4.417969-3.582031 8-8 8s-8-3.582031-8-8 3.582031-8 8-8 8 3.582031 8 8zm0 0" fill="#5d9cec"/><path d="m432 216c0 4.417969-3.582031 8-8 8s-8-3.582031-8-8 3.582031-8 8-8 8 3.582031 8 8zm0 0" fill="#5d9cec"/></svg>
            <svg className="svg-helmets-3-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 323 337"><path d="M315 162A154 154 0 0 1 49 266l-9-10-4-6-6-9a154 154 0 0 1-14-128l2-6 4-11 2-4a154 154 0 0 1 291 70z" fill="#b0ddff"/><path d="M162 8a155 155 0 0 0-23 1 154 154 0 0 1 0 305A154 154 0 1 0 162 8z" fill="#84caff"/><path d="M210 107v123a26 26 0 0 1-26 26H40l-4-6-6-9a154 154 0 0 1-14-128l2-6z" fill="#e1e4fb"/><path d="M210 107v123a26 26 0 0 1-26 26H40l-4-6-6-9a154 154 0 0 1-14-128l2-6z" fill="#e1e4fb"/><path d="M248 337H74a10 10 0 0 1-10-10v-30a10 10 0 0 1 10-10h174a10 10 0 0 1 10 10v30a10 10 0 0 1-10 10z" fill="#7985eb"/><path d="M248 287h-45a10 10 0 0 1 10 10v30a10 10 0 0 1-10 10h45a10 10 0 0 0 10-10v-30a10 10 0 0 0-10-10z" fill="#4b5be5"/><path d="M260 107a46 46 0 1 1-46-46 46 46 0 0 1 46 46z" fill="#7985eb"/><path d="M230 107a16 16 0 1 1-16-16 16 16 0 0 1 16 16z" fill="#fff"/><path d="M214 131a24 24 0 1 0-24-24 24 24 0 0 0 24 24zm0-32a9 9 0 1 1-9 8 9 9 0 0 1 9-8zM71 143a9 9 0 1 1-9-8 9 9 0 0 1 9 8zM139 143a9 9 0 1 1-8-8 9 9 0 0 1 8 8zM78 232a44 44 0 0 0 17 3 41 41 0 0 0 14-2 42 42 0 0 0 19-16 8 8 0 0 0-12-9 27 27 0 0 1-13 10 27 27 0 0 1-19 0 8 8 0 1 0-6 14z"/><path d="M30 255l4 5a163 163 0 0 0 26 27 18 18 0 0 0-4 10v30a18 18 0 0 0 1 2h17a2 2 0 0 1-2-2v-30a2 2 0 0 1 2-2h174a2 2 0 0 1 2 2v29a2 2 0 0 1-2 3h17a17 17 0 0 0 0-3v-29a18 18 0 0 0-3-9 162 162 0 0 0 61-126C323 72 251 0 162 0A161 161 0 0 0 17 89a159 159 0 0 0-6 15l-3 6a162 162 0 0 0 15 135l7 10zm-7-140v-1h19a8 8 0 1 0 0-15H29l2-3a146 146 0 0 1 131-81c80 0 146 66 146 147a146 146 0 0 1-60 118H75a147 147 0 0 1-18-17h127a33 33 0 0 0 34-33v-69a54 54 0 1 0-57-62H75a8 8 0 0 0 0 15h86a54 54 0 0 0 41 46v70a18 18 0 0 1-18 18H44l-2-2-6-9a146 146 0 0 1-13-122zm152-8a38 38 0 1 1 39 39 38 38 0 0 1-39-39z"/><path d="M56 324h209v3a10 10 0 0 1-10 10H66a10 10 0 0 1-10-10v-3z"/></svg>
            <svg className="svg-helmets-4-svg" viewBox="-54 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M51 190h301v111H51zm0 0" fill="#cccac8"/><path d="M372 200l-8 128c-2 21-9 40-22 56l-80 103c-8 11-22 18-36 18h-49c-14 0-28-7-36-18L61 384c-13-16-20-35-22-56l-8-128h32l6 126c1 15 6 28 15 40l80 102c3 4 8 7 13 7h49c5 0 10-3 13-7l80-102c9-12 14-25 15-40l6-126zm0 0" fill="#78909c"/><path d="M378 171H25v-30C25 67 85 8 158 8h87c73 0 133 59 133 133zm0 0" fill="#4dd0e1"/><path d="M245 8h-30c73 0 133 59 133 133v30h30v-30C378 67 318 8 245 8zm0 0" fill="#26c6da"/><path d="M383 204H20c-7 0-12-6-12-12v-18c0-7 5-12 12-12h363c7 0 13 5 13 12v18c0 6-6 12-13 12zm0 0" fill="#26c6da"/><path d="M383 162h-30c7 0 13 5 13 12v18c0 6-6 12-13 12h30c7 0 13-6 13-12v-18c0-7-6-12-13-12zm0 0" fill="#00bcd4"/><path d="M134 121H94a16 16 0 0 1 0-32h40c2 0 4 2 4 4v24c0 2-2 4-4 4zm0 0M269 121h40a16 16 0 0 0 0-32h-40c-2 0-4 2-4 4v24c0 2 2 4 4 4zm0 0" fill="#53626b"/><path d="M347 68a7 7 0 1 0 13-9l-12-14a8 8 0 0 0-11 10l10 13zm0 0"/><path d="M403 174c0-10-8-19-18-20v-13c0-18-3-35-9-52a7 7 0 0 0-14 6c5 14 8 30 8 46v13H33v-13C33 71 89 15 158 15h87c24 0 48 7 69 21a7 7 0 1 0 8-13C299 8 272 0 245 0h-87C81 0 18 63 18 141v13c-10 1-18 10-18 20v18c0 5 2 9 5 13l-1 7v20c0 3 0 6 2 8-2 3-2 5-2 8v74c0 9 6 16 15 16h14c3 18 10 36 22 51l21 27a7 7 0 1 0 12-9l-21-28a94 94 0 0 1-19-41h15c3 11 8 23 15 32l80 103c5 6 12 9 19 9h49c7 0 14-3 19-9l80-103c7-9 12-21 15-32h15c-3 15-9 29-19 41l-80 103c-7 10-18 15-30 15h-49c-12 0-23-5-30-15l-39-50a8 8 0 0 0-12 9l39 50c10 13 25 21 42 21h49c17 0 32-8 42-21l80-102c12-15 19-33 22-51h14c9 0 15-7 15-16v-74c0-3 0-5-2-8 2-2 2-5 2-8v-20l-1-7c3-4 5-8 5-13zm-388 0c0-3 2-5 5-5h363c3 0 5 2 5 5v18c0 2-2 4-5 4h-64v-9a7 7 0 1 0-15 0v9H99v-9a7 7 0 1 0-15 0v9H20c-3 0-5-2-5-4zm369 37v22h-6l1-22zM77 323l-1-15h251l-1 15zm159 34c-22-3-46-4-69 0 4-11 15-19 28-19h13c13 0 24 8 28 19zm53 34l-36 47v-62c17 5 30 12 36 15zM19 232v-20-1h5l1 22h-6v-1zm20-21h17l1 22H40zm293 0l-1 22H72l-1-22zm-4 82H75l-2-45h257zM58 248l4 75H46l-5-75zm287 0h17l-5 75h-16zm1-15l1-22h17l-1 22zM19 322v-74h7l5 75H19v-1zm60 16h83c-6 6-10 14-11 23-22 6-38 14-45 20l-16-20c-5-7-9-15-11-23zm71 39v61l-35-45c10-7 23-13 35-16zm45 90c-16 0-30-14-30-30v-64c24-5 50-5 73 0v64c0 16-14 30-30 30zm118-106l-15 19c-7-5-23-13-46-19-1-9-5-17-11-23h83c-2 8-6 16-11 23zm71-39v1h-12l5-75h7zm0 0"/><path d="M94 82a23 23 0 0 0 0 47h40c6 0 11-6 11-12V93c0-6-5-11-11-11zm36 32H94a8 8 0 0 1 0-17h36zm0 0M309 82h-40c-6 0-11 5-11 11v24c0 6 5 12 11 12h40a23 23 0 0 0 0-47zm0 32h-36V97h36a8 8 0 0 1 0 17zm0 0"/></svg>
            <svg className="svg-helmets-5-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M461 247a204 204 0 0 1-52 137 198 198 0 0 1-44 37 151 151 0 0 1-15 8 186 186 0 0 1-26 12l-17 5a204 204 0 0 1-42 6h-18-2a197 197 0 0 1-40-6l-16-5a201 201 0 0 1-27-12 151 151 0 0 1-15-8 198 198 0 0 1-44-37A205 205 0 0 1 245 43h11c113 0 205 91 205 204z" fill="#fec108"/><path d="M439 247a204 204 0 0 1-52 137 198 198 0 0 1-44 37 151 151 0 0 1-14 8 186 186 0 0 1-27 12l-16 5a201 201 0 0 1-41 6 197 197 0 0 1-40-6l-16-5a201 201 0 0 1-27-12 151 151 0 0 1-15-8 198 198 0 0 1-44-37A205 205 0 0 1 245 43a205 205 0 0 1 194 204z" fill="#ffeb3a"/><path d="M393 247a137 137 0 0 1-137 137 143 143 0 0 1-15-1 137 137 0 0 1 0-271 146 146 0 0 1 15-1 137 137 0 0 1 137 136z" fill="#f57c00"/><path d="M363 247c0-75-55-135-122-135s-122 60-122 135 55 136 122 136 122-61 122-136z" fill="#ff9801"/><path d="M360 247a102 102 0 0 1-3 26 92 92 0 0 1-6 17 103 103 0 0 1-27 36 100 100 0 0 1-15 12 104 104 0 0 1-53 14 86 86 0 0 1-10-1 103 103 0 0 1-43-13 100 100 0 0 1-15-12 103 103 0 0 1-27-36 92 92 0 0 1-6-17 103 103 0 0 1 0-51 92 92 0 0 1 6-17 103 103 0 0 1 27-37 102 102 0 0 1 15-11 103 103 0 0 1 43-13 91 91 0 0 1 10-1 104 104 0 0 1 53 14 102 102 0 0 1 15 11 103 103 0 0 1 27 37 92 92 0 0 1 6 17 102 102 0 0 1 3 25z" fill="#37474f"/><path d="M341 247a102 102 0 0 1-3 26 92 92 0 0 1-6 17 103 103 0 0 1-27 36 100 100 0 0 1-16 12 103 103 0 0 1-43 13 103 103 0 0 1-43-13 100 100 0 0 1-15-12 103 103 0 0 1-27-36 92 92 0 0 1-6-17 103 103 0 0 1 0-51 92 92 0 0 1 6-17 103 103 0 0 1 27-37 102 102 0 0 1 15-11 103 103 0 0 1 43-13 103 103 0 0 1 43 13 101 101 0 0 1 16 11 103 103 0 0 1 27 37 92 92 0 0 1 6 17 102 102 0 0 1 3 25z" fill="#607d8b"/><path d="M256 461a213 213 0 1 1 0-427 213 213 0 0 1 0 427zm0-410a196 196 0 1 0 0 393 196 196 0 0 0 0-393z"/><path d="M256 393a145 145 0 1 1 145-146 145 145 0 0 1-145 146zm0-274a128 128 0 1 0 128 128 128 128 0 0 0-128-128z"/><path d="M256 360a113 113 0 1 1 113-113 113 113 0 0 1-113 113zm0-208a96 96 0 1 0 96 95 96 96 0 0 0-96-95zM324 60a9 9 0 0 1-8-9V26a9 9 0 0 0-9-9H205a9 9 0 0 0-9 9v25a9 9 0 0 1-17 0V26a26 26 0 0 1 26-26h102a26 26 0 0 1 26 26v25a9 9 0 0 1-9 9zM486 316h-34a9 9 0 1 1 0-17h34a9 9 0 0 0 9-9V188a9 9 0 0 0-9-9h-34a9 9 0 1 1 0-17h34a26 26 0 0 1 26 26v102a26 26 0 0 1-26 26zM60 316H26a26 26 0 0 1-26-26V188a26 26 0 0 1 26-26h34a9 9 0 1 1 0 17H26a9 9 0 0 0-9 9v102a9 9 0 0 0 9 9h34a9 9 0 1 1 0 17z"/><path d="M196 341a9 9 0 0 1-8-8V162a9 9 0 0 1 17 0v171a9 9 0 0 1-9 8zM316 341a9 9 0 0 1-9-8V162a9 9 0 0 1 17 0v171a9 9 0 0 1-8 8z"/><path d="M154 205h204v17H154zM154 273h204v17H154zM121 456l26-34 13 10-25 34zM352 432l13-10 26 34-14 10zM333 512a9 9 0 0 1-8-6l-17-60a9 9 0 1 1 16-5l17 60a9 9 0 0 1-6 11 9 9 0 0 1-2 0zM180 512a9 9 0 0 1-3 0 9 9 0 0 1-5-11l17-60a9 9 0 1 1 16 5l-17 60a9 9 0 0 1-8 6zM256 512a9 9 0 0 1-9-9v-51a9 9 0 0 1 18 0v51a9 9 0 0 1-9 9zM265 77a9 9 0 1 1-9-9 9 9 0 0 1 9 9zM384 367a9 9 0 1 1-9-9 9 9 0 0 1 9 9zM435 247a9 9 0 1 1-8-8 9 9 0 0 1 8 8zM384 128a9 9 0 1 1-9-9 9 9 0 0 1 9 9zM145 128a9 9 0 1 1-8-9 9 9 0 0 1 8 9zM94 247a9 9 0 1 1-9-8 9 9 0 0 1 9 8zM145 367a9 9 0 1 1-8-9 9 9 0 0 1 8 9zM265 418a9 9 0 1 1-9-8 9 9 0 0 1 9 8z"/></svg>
            <svg className="svg-helmets-6-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M58 27.1a4 4 0 0 0-1-.1H7a4 4 0 0 0-1 .1 26 26 0 0 1 52 0z" fill="#ffda44"/><path d="M8 37h48a24 24 0 0 1-48 0z" fill="#ffdaaa"/><path fill="#d80027" d="M39 12v6h-4v4h-6v-4h-4v-6h4V8h6v4h4z"/><path d="M61 31v2a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-2a4 4 0 0 1 3-3.9 4 4 0 0 1 1-.1h50a4 4 0 0 1 1 .1 4 4 0 0 1 3 3.9z" fill="#ff5023"/><path d="M58.9 26.4a27 27 0 0 0-53.8 0A5 5 0 0 0 2 31v2a5 5 0 0 0 5 5 25 25 0 0 0 50 0 5 5 0 0 0 5-5v-2a5 5 0 0 0-3.1-4.6zM32 4a25 25 0 0 1 24.8 22H13v-2h-2v2H7.2A25 25 0 0 1 32 4zm0 56A23 23 0 0 1 9 38h46a23 23 0 0 1-23 22zm28-27a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h50a3 3 0 0 1 3 3z" fill="#231f20"/><path d="M25 19h3v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3h3a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-3V8a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v3h-3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm1-6h3a1 1 0 0 0 1-1V9h4v3a1 1 0 0 0 1 1h3v4h-3a1 1 0 0 0-1 1v3h-4v-3a1 1 0 0 0-1-1h-3zM11 20h2v2h-2z" fill="#231f20"/></svg>
            <svg className="svg-helmets-7-svg" xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 512 512"><path d="M273 504h-42c-86 0-157-71-157-157v-8h17v8c0 77 63 140 140 140h42c77 0 140-63 140-140v-8h16v8c0 86-70 157-156 157zm0 0" fill="#6f6571"/><path d="M413 347c0 11-1 22-4 33h17l3-33v-8h-16zm0 0M91 347v-8H74v8c0 11 2 22 4 33h17c-3-11-4-22-4-33zm0 0" fill="#5d5360"/><path d="M495 264H17c-10 0-17-7-17-16v-17c0-9 7-16 17-16h478c10 0 17 7 17 16v17c0 9-7 16-17 16zm0 0" fill="#6f6571"/><path d="M17 215h33v49H17zm0 0" fill="#5d5360"/><path d="M495 215c10 0 17 7 17 16v17c0 9-7 16-17 16zm0 0" fill="#867e88"/><path d="M289 19h-66A223 223 0 0 0 33 239v108c0 9 7 16 17 16h412c10 0 17-7 17-16V239c0-111-82-204-190-220zm0 0" fill="#ff8087"/><path d="M293 20l-4-1h-66A223 223 0 0 0 33 239v108c0 9 7 16 17 16h57V239c0-110 81-202 186-219zm0 0" fill="#e6646e"/><path d="M273 0h-34c-9 0-16 7-16 17v165h66V17c0-10-7-17-16-17zm0 0" fill="#ff9ba0"/><path d="M273 512h-34a17 17 0 1 1 0-33h34a17 17 0 1 1 0 33zm0 0" fill="#5d5360"/><path d="M413 215H99c-18 0-33 15-33 33v115h380V248c0-18-15-33-33-33zm0 0" fill="#c4deff"/><path d="M413 215H99c-18 0-33 15-33 33v115h58v-99c0-18 15-33 33-33h256c18 0 33 15 33 33v-16c0-18-15-33-33-33zm0 0" fill="#a5cdff"/><path d="M39 190h434l-4-17H43l-4 17zm0 0" fill="#e6646e"/><path d="M39 190h74l4-17H43l-4 17zm0 0" fill="#dc4655"/><path d="M222 495c0 10 7 17 17 17h34c10 0 17-7 17-17zm0 0" fill="#4b3f4e"/></svg>
            <svg className="svg-helmets-8-svg" viewBox="-44 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 168l-11 1a325 325 0 0 1-66 0l-11-1-1-63c27-21 39-51 28-70-8-11-20-18-34-18l-2-16 18-1h71l17 1c-6 55-9 111-9 167zm0 0" fill="#f0c419"/><path d="M424 185l-1 12-3 78c-3 61-32 118-79 158l-81 69c-8 6-18 10-29 10h-38c-11 0-21-4-29-10l-81-69C36 393 7 336 4 275l-3-74v-4l-1-12C-4 91 66 10 159 1c6 55 9 111 9 167l-93-9a36 36 0 0 0-39 41l4 25c8 55 51 98 106 105l29 3a348 348 0 0 0 74 0l29-3c55-7 98-50 107-105l3-25 1-5a36 36 0 0 0-40-36l-93 9c0-56 3-112 9-167 94 9 163 90 159 184zm0 0" fill="#e64c3c"/><path d="M424 168v17l-1 12-3 78c-3 61-32 118-79 158l-81 69c-8 6-18 10-29 10h-38c-11 0-21-4-29-10l-81-69C36 393 7 336 4 275l-3-74v-4l-1-12v-17l1 11v5l1 13 2 60c3 61 32 119 79 158l81 69c8 7 18 10 29 10h38c11 0 21-3 29-10l81-69c47-39 76-97 79-158l3-60v-18zm0 0" fill="#c03a2b"/><path d="M389 195l-1 5-3 25c-9 55-52 98-107 105l-29 3a348 348 0 0 1-74 0l-29-3A123 123 0 0 1 40 225l-4-25v-5a36 36 0 0 1 39-36l93 9 11 1a325 325 0 0 0 66 0l11-1 93-9a36 36 0 0 1 40 36zm0 0" fill="#67b9cc"/><path d="M389 195l-1 5-3 25c-9 55-52 98-107 105l-29 3a348 348 0 0 1-74 0l-29-3c-34-5-65-23-85-51a567 567 0 0 1 328-84zm0 0" fill="#2fa8cc"/><path d="M212 477h19c5 0 9-2 13-5l16-17c3-3 5-7 5-12v-60a18 18 0 0 0-21-18l-29 5h-6l-29-5a18 18 0 0 0-21 18v60c0 5 2 9 5 12l16 17c4 3 8 5 13 5zm0 0" fill="#35495e"/><path d="M212 415l-4-1-18-9a9 9 0 1 1 8-16l14 7 14-7a9 9 0 1 1 8 16l-18 9-4 1zm0 0M212 459l-4-1-18-9a9 9 0 1 1 8-15l14 6 14-7a9 9 0 0 1 8 16l-18 9-4 1zm0 0" fill="#2c3e50"/><path d="M167 105l-6-88c14 0 26 7 34 18 11 19-1 49-28 70zm0 0" fill="#f3d55b"/><path d="M167 105c-5 5-11 8-17 12-38 22-79 21-93-3-13-23 7-60 45-82 18-10 38-16 59-15l6 88zm0 0" fill="#fb7b76"/></svg>
            <svg className="svg-helmets-9-svg"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 287 409"><path d="M159 60l-15 32-16-32A119 119 0 0 0 24 178v54l120-29 119 29v-54A119 119 0 0 0 159 60z" fill="#c6c5ca"/><g fill="#898890"><path d="M252 225v-33l-89-15-89 15v33l89-22 89 22zM163 61l-4-1-1 2 5-1z"/><path d="M183 203l-20 5 100 24v-10l-80-19zM64 178a119 119 0 0 1 69-108l-5-10A119 119 0 0 0 24 178v54l40-10v-44z"/><path d="M280 333l-136 68L8 333v-97l136-33 136 33v97z"/></g><path fill="#57565c" d="M52 333v-97l114-28-22-5L8 236v97l136 68 22-11-114-57z"/><path fill="#ff7956" d="M160 59l-16 33-16-33 8-51h16l8 51z"/><path fill="#ff3f62" d="M142 59l9-51h-15l-8 51 16 33 7-15-9-18z"/><path fill="#898890" d="M233 225v-33l-89-15-89 15v33l89-22 89 22z"/><g fill="#1d1d1f"><path d="M287 337V230l-47-11v-34l-89-15V94l7-15 6-10a112 112 0 0 1 91 110v33h15v-34A127 127 0 0 0 166 55l-8-54h-29l-8 54A127 127 0 0 0 17 178v34h15v-34a112 112 0 0 1 92-110l12 26v76l-89 15v34L0 230v107l144 72zM135 58l7-43h3l7 43-8 17zM62 198l82-14 81 14v17l-81-20-82 20zm74 190L15 328v-86l121-30v28h15v-28l121 30v86l-121 60V251h-15z"/><path d="M66 121a96 96 0 0 0-19 51l15 1a82 82 0 0 1 16-43zM103 232h15v124h-15zM68 330h15v15H68zM68 241h15v54H68zM68 305h15v15H68zM33 249h15v78H33zM169 232h15v15h-15zM169 257h15v15h-15zM169 282h15v74h-15zM204 241h15v104h-15zM239 249h15v78h-15z"/></g></svg>
            <svg className="svg-helmets-10-svg" version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#c6c5ca" d="M409 437l-153 67-153-67-28-260L115 8h282l40 169z"/><g fill="#898890"><path d="M136 177h107v36H136zM310 177h107v36H310z"/><path d="M163 437l-28-260L174 8h-59L75 177l28 260 153 67 30-13z"/><path d="M116 177h107v36H116zM290 177h107v36H290z"/></g><g fill="#57565c"><path d="M290 177h34v36h-34zM116 177h34v36h-34z"/></g><g fill="#1d1d1f"><path d="M161 29h15v15h-15zM186 29h15v15h-15zM136 29h15v15h-15zM211 29h14v15h-14zM311 29h15v15h-15zM336 29h15v15h-15zM361 29h15v15h-15zM286 29h14v15h-14zM108 140h15v15h-15zM183 140h14v15h-14zM158 140h15v15h-15zM133 140h15v15h-15zM339 140h15v15h-15zM389 140h15v15h-15zM315 140h14v15h-14zM364 140h15v15h-15zM289 428h15v15h-15zM289 378h15v15h-15zM289 278h15v15h-15zM289 303h15v15h-15zM289 403h15v15h-15zM289 328h15v15h-15zM289 253h15v15h-15zM289 353h15v15h-15zM331 404h15v15h-15zM331 379h15v15h-15zM331 304h15v15h-15zM331 279h15v15h-15zM331 329h15v15h-15zM331 354h15v15h-15zM373 329h15v15h-15zM373 379h15v15h-15zM373 354h15v15h-15zM373 304h15v15h-15zM207 328h15v15h-15zM207 353h15v15h-15zM207 303h15v15h-15zM207 403h15v15h-15zM207 428h15v15h-15zM207 378h15v15h-15zM207 253h15v15h-15zM207 278h15v15h-15zM166 379h15v15h-15zM166 304h15v15h-15zM166 354h15v15h-15zM166 404h15v15h-15zM166 279h15v15h-15zM166 329h15v15h-15zM124 354h15v15h-15zM124 329h15v15h-15zM124 379h15v15h-15zM124 304h15v15h-15z"/></g><g fill="#fff"><path d="M330 236h15v15h-15zM380 236h33v15h-33zM355 236h15v15h-15z"/></g><g fill="#1d1d1f"><path d="M403 0H109L67 176l29 266 160 70 160-70 29-266L403 0zM121 15h128v42h15V15h127l10 42h-19v15h23l4 18h-50v15h54l14 64H297v-58l-41-37-41 37v58H85l18-77h33V77h-30l15-62zm176 169h92v21h-92v-21zm-174 0h92v21h-92v-21zm279 248l-138 60v-69h-15v69l-139-60-18-172h30v-15H90l-7-61h25v36h122V117l26-23 26 23v103h122v-36h25l-27 248z"/><path d="M248 278h15v126h-15z"/></g><g fill="#fff"><path d="M248 172h15v84h-15zM248 122h15v15h-15zM248 147h15v15h-15z"/></g></svg>
            <svg className="svg-helmets-11-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 476 420"><path d="M454 256a216 216 0 0 0 2-28 213 213 0 0 0-9-59H28a213 213 0 0 0-8 59 216 216 0 0 0 2 28z" fill="#31363e"/><path d="M468 257a38 38 0 1 1-37-38 38 38 0 0 1 37 38zM83 257a38 38 0 1 1-38-38 38 38 0 0 1 38 38z" fill="#d7a37e"/><path d="M426 228c0-102-84-185-188-185S50 126 50 228s84 185 188 185 188-83 188-185z" fill="#394048"/><path d="M238 340c-13 0-27 14-38 18a67 67 0 0 1-65-12c-34-29-55-71-55-118 0-85 71-155 158-155s158 70 158 155c0 47-22 90-55 118a67 67 0 0 1-65 12c-11-4-25-18-38-18z" fill="#f1be8c"/><path d="M339 289h-23a8 8 0 0 1 0-15h23a8 8 0 0 1 0 15zM160 289h-23a8 8 0 0 1 0-15h23a8 8 0 0 1 0 15z" fill="#e98e8f"/><path d="M362 44C333 23 292 8 238 8s-95 15-124 36l124 35z" fill="#bfbfbf"/><path d="M80 221h316a153 153 0 0 0-48-104H128a153 153 0 0 0-48 104z" fill="#d7a37e"/><path d="M423 114c10 19 14 33 14 33l-199 22-199-22s4-14 14-33l185-35z" fill="#bfbfbf"/><path d="M437 147H39a22 22 0 0 0 0 44h398a22 22 0 0 0 0-44zM423 114H53c11-21 30-49 61-70h248c31 21 50 49 61 70z" fill="#d6d6d6"/><path d="M280 79a42 42 0 1 1-42-43 42 42 0 0 1 42 43z" fill="#a6a6a6"/><path d="M255 79a17 17 0 1 1-17-17 17 17 0 0 1 17 17z" fill="#f3c44b"/><path d="M327 264a8 8 0 0 0 8-8v-17a8 8 0 1 0-15 0v17a8 8 0 0 0 7 8zM148 264a8 8 0 0 0 8-8v-17a8 8 0 0 0-15 0v17a8 8 0 0 0 7 8zM259 268a7 7 0 0 0-11 1 14 14 0 0 1-20 0 8 8 0 1 0-12 10 29 29 0 0 0 44 0 7 7 0 0 0-1-11zM262 79a24 24 0 1 0-24 24 24 24 0 0 0 24-24zm-24 9a9 9 0 1 1 9-9 9 9 0 0 1-9 9z"/><path d="M463 226a222 222 0 0 0-4-38 29 29 0 0 0-17-48 195 195 0 0 0-12-30c-11-20-31-49-63-72l-1-1C331 13 287 0 238 0c-50 0-93 13-128 37-33 24-53 53-64 73a196 196 0 0 0-13 30 29 29 0 0 0-17 48 222 222 0 0 0-3 38 45 45 0 0 0 44 75c20 49 61 88 112 107l16 6v-1a195 195 0 0 0 55 7h1c4 0 24-1 43-5a173 173 0 0 0 23-7c51-19 92-58 112-107a45 45 0 0 0 44-75zm-53-120H279a50 50 0 0 0 6-10 50 50 0 0 0-6-45h81a190 190 0 0 1 50 55zM238 15c36 0 69 7 97 21h-71a49 49 0 0 0-14-6 49 49 0 0 0-25 0 49 49 0 0 0-13 6h-71c28-14 61-21 97-21zm35 64c0 13-8 25-19 31a34 34 0 0 1-16 4c-19 0-35-16-35-35s16-35 35-35 35 16 35 35zM57 121h66c5 0 8-2 8-7a8 8 0 0 0-7-8H66a190 190 0 0 1 50-55h80a50 50 0 0 0 0 55h-42a8 8 0 0 0-8 8 8 8 0 0 0 8 7h58a50 50 0 0 0 13 6 50 50 0 0 0 25 0 50 50 0 0 0 14-6h154a184 184 0 0 1 8 19H49a186 186 0 0 1 8-19zM45 287a30 30 0 0 1-3-60v1a191 191 0 0 0 9 59 30 30 0 0 1-6 0zm-17-72l2-18a30 30 0 0 0 9 2h5v1l-1 12h-3a46 46 0 0 0-12 3zm390 31c-8 75-63 135-135 154a185 185 0 0 1-91 0c-71-19-126-79-134-154a177 177 0 0 1 2-47h15a160 160 0 0 0-3 29c0 48 21 93 58 124 20 16 47 21 72 13l16-8c7-5 14-9 20-9s13 4 20 9l16 8a76 76 0 0 0 24 4 74 74 0 0 0 37-10 8 8 0 1 0-7-13 60 60 0 0 1-49 5l-13-7c-9-5-18-11-28-11s-19 6-28 11l-13 7a60 60 0 0 1-57-11c-33-28-53-69-53-112a145 145 0 0 1 4-29h295a145 145 0 0 1-37 129 8 8 0 0 0 11 10 160 160 0 0 0 41-139h15a177 177 0 0 1 2 47zM39 184a15 15 0 0 1-14-15 14 14 0 0 1 14-14h398a14 14 0 0 1 14 14 15 15 0 0 1-14 15zm409 31l-2-1a45 45 0 0 0-11-2h-2v-2l-2-11h6a30 30 0 0 0 9-2l2 18zm-17 72a30 30 0 0 1-7 0 190 190 0 0 0 10-60 31 31 0 0 1 3 0 30 30 0 0 1-6 60z"/></svg>
            <svg className="svg-helmets-12-svg" viewBox="-16 1 511 512" xmlns="http://www.w3.org/2000/svg"><path d="M350 227l12 50h-62zm-157-78l-43 34 50 50h81l50-50-43-34zm-62 78l-13 50h63zm0 0" fill="#fe512e"/><path d="M282 191a42 42 0 1 1-84 0 42 42 0 0 1 84 0zm0 0" fill="#feef7f"/><g fill="#fe512e"><path d="M366 325l-126 21-125-21-11-16 14-32h244l15 32-11 16zm0 0M102 491l-68-18 37-90 56 15zm0 0M378 491l69-18-37-90-57 15zm0 0"/><path d="M115 325l-11-16 3-7-8-2-33 81 61 17 19-68zm0 0M381 300l-7 2 3 7-11 16-31 5 18 68 62-17zm0 0"/></g><path d="M301 403h-33l-28-27-28 27h-32l-19-19-9 4v61l55 55h66l56-55v-61l-9-4-19 19zm0 0" fill="#fff5cc"/><path d="M300 277l123-123 46-143-41 12-14 24-23-13-38 11 25 39v52l-97 97h-81l-97-97V84l24-39-37-11-24 13-14-24-40-12 46 143 123 123zm0 0" fill="#feef7f"/><path d="M152 449v-61l9-4 19 19h32l28-27 28 27h33l19-19 9 4v61l-36 36 79-19-19-68-18-68-95 16-95-16-18 68-18 68 79 19zm0 0" fill="#8ca4b7"/><path d="M263 471h-45l-15-15v-13h75v13l-15 15zm0 0" fill="#8ca4b7"/><path d="M350 227l-50 50h30l26-26zm0 0M131 227l-13 50h30l7-26zm0 0M223 149h-30l-43 34 50 50h30l-50-50zm0 0" fill="#c70024"/><path d="M228 191c0-18 12-33 27-40a42 42 0 1 0 0 79c-15-6-27-21-27-39zm0 0" fill="#ffb655"/><path d="M145 325l-11-16 14-32h-30l-14 32 11 16 125 21 15-3zm0 0M64 473l34-83-27-7-37 90 68 18 2-7zm0 0M383 398l30-8-3-7-57 15 25 93 28-7zm0 0" fill="#c70024"/><path d="M96 381l23-55-4-1-11-16 3-7-8-2-33 81 61 17 2-8zm0 0M365 330l27-4-11-26-7 2 3 7-11 16-31 5 18 68 28-8zm0 0" fill="#c70024"/><path d="M182 403h-2l-19-19-9 4v61l55 55h30l-55-55zm0 0" fill="#ffc477"/><path d="M45 21L12 11l46 143 123 123h30L88 154zm0 0" fill="#ffb655"/><path d="M425 386l-39-95-8 2-8-18-7-27-15 3 5 19h-35l111-112L480 0l-57 16-11 21-20-11-50 14 29 47v46l-93 92h-2a49 49 0 0 0 0-69h9l26 20 9-12-30-23H190l-29 23 9 12 26-20h9a49 49 0 0 0 0 69h-2l-93-92V87l29-47-50-14-20 11-12-21L0 0l52 158 111 112h-35l4-18-14-4-7 27-8 18-8-2-39 95 5 2-37 90 84 23 6-26 34 8 3-14-33-8 33-122 89 14 90-14 32 122-35 8 3 15 36-9 7 26 84-23-37-90zm-41 96l-21-79 42-11 32 76zM206 191a35 35 0 1 1 69 0 35 35 0 0 1-69 0zM65 150L23 22l24 7 17 28 27-15 25 7-21 33v57l102 101h87l102-101V82l-21-33 25-7 27 15 16-28 24-7-41 128-120 120H184zM44 468l32-76 42 11-21 79zm92-132l-14 53-2-1-44-12 24-59 10 15zm104 2l-121-19-6-11 10-23h235l10 23-6 11-122 19zm131-6l9-15 25 59-46 13-14-53zm0 0"/><path d="M336 383l-18-8-20 21h-27l-31-31-31 31h-26l-21-21-18 8v69l60 60h72l60-60zm-15 63l-51 51h-59l-52-51v-52l18 17h39l24-25 25 25h39l17-17zm0 0"/><path d="M270 429l-12-10-14 17h-7l-14-17-12 10 6 7h-21v23l19 19h51l19-19v-23h-21zm0 22v2l-10 10h-39l-10-10v-2zm0 0"/><path d="M250 247h30v15h-30zm0 0M225 247h15v15h-15zm0 0M200 247h15v15h-15zm0 0" fill="#fff"/></svg>
            <svg className="svg-helmets-13-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51 57"><g fill-rule="evenodd"><path d="M38 32.2a6.1 6.1 0 0 0 5.2 7.2c3.6.7 7-1.3 7.7-4.9a6.5 6.5 0 0 0-5.2-7.7 6.7 6.7 0 0 0-7.7 5.4zM13.1 32.2a6.1 6.1 0 0 1-5.2 7.2c-3.6.7-7-1.3-7.7-4.9a6.5 6.5 0 0 1 5.2-7.7 6.7 6.7 0 0 1 7.7 5.4z" fill="#f6c085"/><path d="M43.4 9.3a19.5 19.5 0 0 0-14.8-8.1h-.3V1H22.6v.2h-.3a19.5 19.5 0 0 0-14.7 8C4.1 14 3.6 20 4 25.8 4.7 40.4 6 57 25.5 57.1S46.3 40.3 47 25.7a25 25 0 0 0-3.6-16.4z" fill="#f8c997"/><path d="M6.1 30.4c.3-5.4.3-15.2 5-15.2.2 0 14.5-6 31-6 3.7 0 4.7 10.8 4.7 18 .1 6-1 8.8-.6 9s2.6-3.3 2.6-12c0-3.8 0-9.8-3.5-15.5-1.1-2-2-4.4-4.4-6-5.8-4-18.2-3-24.8-.9C-2.4 8 4.2 36.1 4.8 36.1s1.3-4.9 1.3-5.7z" fill="#bf9141"/><path d="M27.8 6.2C30.1 6 41.4 9 41.4 9a40.9 40.9 0 0 1-34 11.8s5.4-3.5 5-3.1a20.4 20.4 0 0 1-6.6 1.1c-1.6-.2-1.5-.8-1.5-.8 9.2-8.5 9-8.4 23.5-12z" fill="#bf9141"/><path d="M23 28.3a3.9 3.9 0 0 0-1.6-1.2c-4-1.4-14.7-.8-17.6 0-.4 0-.4 0-.5.3a8 8 0 0 0 0 2c.2.2.8.3 1.3 1 .9 1.3.8 6.2 3 8.5s10.7 2.4 13-.7a25.5 25.5 0 0 0 3-6.7A2 2 0 0 1 25 31a4 4 0 0 1 1 0 2 2 0 0 1 1.4.6 25.8 25.8 0 0 0 3 6.7c2.4 3.1 10.8 3 13 .7s2.2-7.2 3-8.5c.6-.7 1.1-.8 1.3-1a8 8 0 0 0 0-2c0-.3 0-.3-.4-.4a49.2 49.2 0 0 0-17.7.1 4 4 0 0 0-1.5 1.2 8 8 0 0 1-2.5.2 8 8 0 0 1-2.6-.2zm20.3-.5a1.8 1.8 0 0 1 1.4 1.2 11.8 11.8 0 0 1 0 4.7 11 11 0 0 1-1.5 4.1c-2.3 3-10 2.6-12 0-1.5-1.9-4-7.6-.9-9.2a25 25 0 0 1 13-.8zm-35.6 0a25 25 0 0 1 13 .8c3.1 1.6.6 7.3-1 9.3-1.8 2.5-9.6 2.8-12 0a10.6 10.6 0 0 1-1.4-4.2 11.8 11.8 0 0 1 0-4.7 1.8 1.8 0 0 1 1.4-1.2z" fill="#3e3b3a"/><g fill="#3e3b3a"><path d="M14.6 35.1a1.7 1.7 0 1 0-1.7-1.7 1.7 1.7 0 0 0 1.7 1.7zM36.4 35.1a1.7 1.7 0 1 0-1.6-1.7 1.7 1.7 0 0 0 1.6 1.7z"/></g><path d="M33.6 45.7a10.4 10.4 0 0 1-15.2 0 13 13 0 0 0 7.5 2.7 13.6 13.6 0 0 0 7.7-2.7z" fill="#d6825b"/><path d="M22.1 43.4a.3.3 0 0 1 .1-.2 35.6 35.6 0 0 0 2.7-9.5c.7 0-.7 7.3-1.3 9a11.7 11.7 0 0 1 2.1-.2c2 0 3.6.4 3.6 1s-1.6.8-3.6.8-3.5-.4-3.6-.9z" fill="#e5b17d"/><path d="M8.7 24.9c-.6-1 2.3-1.4 5.3-1.4 4.9 0 7.5 2.5 5.2 2.4-1.8 0-10.4-.7-10.5-1zM42.2 24.8c.5-1-2.4-1.4-5.3-1.4-5 0-7.6 2.5-5.2 2.4 1.8-.1 10.3-.8 10.5-1z" fill="#bf9141"/></g></svg>
            <svg className="svg-helmets-14-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.4 61.2"><g fill-rule="evenodd"><path d="M38 36.9a6.6 6.6 0 0 0 5.2 8 6.4 6.4 0 0 0 7.7-5.4c.7-4-1.6-7.7-5.2-8.4s-7 1.9-7.7 5.8zM13 36.9a6.6 6.6 0 0 1-5.1 8A6.4 6.4 0 0 1 0 39.4c-.7-4 1.7-7.7 5.2-8.4s7 1.9 7.8 5.8z" fill="#f6c085"/><path d="M43.4 13.5a19.5 19.5 0 0 0-14.7-8.1h-.3v-.2H22.7v.2h-.3a19.5 19.5 0 0 0-14.7 8C4.2 18.3 3.7 24.3 4 30c.2 4.4 1 11.3 1.2 15.7 5.5 20.7 35.5 21 40.7 0 .2-4.4 1-11.3 1.1-15.7.3-5.7-.1-11.7-3.6-16.4z" fill="#f8c997"/><path d="M7.8 21.4c-.3.6 1.3-5.4 4.8-5.5 3.6 0 26.3 1.3 27.4-.2 3.9 4.8 6.4 24.8 6.6 24.7C47.8 40.2 48 30 48 28.7c0-5.2 1.5-15.4-8-21.7C34 3 22 2.7 15.2 4.9A17.9 17.9 0 0 0 4.3 15c-1.8 5.1-1.8 9.1-1.2 19.2 0 1.1.2 2.2.4 3.3 0 .8.2 1.5.3 2.2 1 3.9 1-13.8 4-18.4z" fill="#402412"/><path d="M6.5 16c.1.5.7 2.7 8.3 5.3A46.2 46.2 0 0 0 29 23.8a10.7 10.7 0 0 1-2.2-1.6s5.5 1.8 9.4 1.4 7-2.6 6.4-2.6a16.2 16.2 0 0 1-2.7-1 28.4 28.4 0 0 0 7.9-5.7c2.8-3.3 3.8-6.5 3.4-6.2s-2.8 1.6-2.5 1.1.7-5.3.7-5.3a16.8 16.8 0 0 1-2.7 1.6c-.7.1.6-4 .6-4s-5.8 1-9.2.6S32.9.6 28 .4a17.6 17.6 0 0 0-8 1.2l.7-1.6S13.8 2 12 3.4a18 18 0 0 0-3.6 4.1A11.1 11.1 0 0 0 5.2 7a5 5 0 0 0-2 .4l3.2 1A7.3 7.3 0 0 0 4 9.8c-1 1-2 2-1.5 1.8a17 17 0 0 1 3.1-.6z" fill="#402412"/><path d="M6.6 31.3a6.8 6.8 0 0 0-1.6 3 2.5 2.5 0 0 0-1.1.3 1.1 1.1 0 0 0 0 1.3 2.6 2.6 0 0 0 1 .2c0 6 3.3 10.2 9.5 10a8.1 8.1 0 0 0 7.1-4.3 15.4 15.4 0 0 0 1.9-4.8c.1-1.1.2-1.7.5-1.8a9 9 0 0 1 3.3 0c.2.1.4.7.5 1.8a16 16 0 0 0 1.8 4.8 8.1 8.1 0 0 0 7.2 4.3c6.2.3 9.4-4 9.4-10a2.7 2.7 0 0 0 1.1-.2 1.1 1.1 0 0 0 0-1.3 2.6 2.6 0 0 0-1.1-.3 6.7 6.7 0 0 0-1.6-3c-.9-.9-2.9-1.6-5.4-1.8-6.1-.5-20.4-.4-26.6 0-2.7.1-5 .8-5.8 1.8zM24 34c-.2 0-.4-.3-.4-.4-.2-1.2 0-3-1.6-3.2h7.3c-1.7.3-1.4 2-1.6 3.2 0 0-.3.5-.4.4a16.1 16.1 0 0 0-3.4 0zm5.3-2.8a8 8 0 0 1 3.6-1c2.7-.1 9.4-.3 11.4 2.1a5.2 5.2 0 0 1 1.2 3 14 14 0 0 1-.4 4c-1.2 4.3-4 6.3-8.3 6-5.7-.2-8.5-6.4-8.3-11.5 0-1.2.2-2.2.8-2.7zm-7.4 0c.6.4.8 1.4.8 2.7.2 5-2.6 11.2-8.3 11.5-4.2.3-7.1-1.8-8.3-6.1a14.4 14.4 0 0 1-.4-3.9 5.2 5.2 0 0 1 1.2-3c2-2.4 8.7-2.3 11.4-2.1a8 8 0 0 1 3.6.9z" fill="#3e3b3a"/><path d="M6.7 32.3a5.3 5.3 0 0 0-1.2 3 15 15 0 0 0 .4 4 8.3 8.3 0 0 0 3.4 5.2 8.4 8.4 0 0 0 5 1c5.8-.2 8.7-6.5 8.5-11.7 0-1.2-.3-2.2-.9-2.7a7.9 7.9 0 0 0-3.6-1 25 25 0 0 0-10 1 4.4 4.4 0 0 0-1.6 1.1zM28.3 33.8c-.2 5.1 2.6 11.4 8.3 11.7a8.3 8.3 0 0 0 5-1.1 8.2 8.2 0 0 0 3.4-5 14.8 14.8 0 0 0 .5-4 5.2 5.2 0 0 0-1.2-3.1 4.3 4.3 0 0 0-1.6-1.1 25 25 0 0 0-10-1 7.9 7.9 0 0 0-3.6.9c-.6.5-.8 1.5-.8 2.7z" fill="#5a5858"/><path d="M34 51.4a10.4 10.4 0 0 1-15.2 0 13 13 0 0 0 7.5 2.7 13.6 13.6 0 0 0 7.7-2.7z" fill="#d6825b"/><path d="M22.6 49.1a.3.3 0 0 1 .1-.3 35.6 35.6 0 0 0 2.7-9.4c.7 0-.7 7.2-1.3 9a11.6 11.6 0 0 1 2.1-.2c2 0 3.6.4 3.6.9s-1.6.9-3.6.9-3.5-.4-3.6-.9z" fill="#e5b17d"/></g></svg>
            <svg className="svg-helmets-15-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51 61.2"><g fill-rule="evenodd"><path d="M38 33.2a6.1 6.1 0 0 0 5.2 7.2c3.6.7 7-1.3 7.7-4.9a6.5 6.5 0 0 0-5.2-7.7 6.7 6.7 0 0 0-7.7 5.4zM13 33.2a6.1 6.1 0 0 1-5.2 7.2c-3.5.7-7-1.3-7.7-4.9a6.5 6.5 0 0 1 5.2-7.7 6.7 6.7 0 0 1 7.8 5.4z" fill="#f6c085"/><path d="M43.4 10.3a19.5 19.5 0 0 0-14.8-8.1h-.3V2h-5.6v.2h-.3a19.5 19.5 0 0 0-14.7 8C4.2 15 3.7 21 4 26.8 4.7 41.4 6 58 25.6 58.1S46.3 41.3 47 26.7a25 25 0 0 0-3.6-16.4z" fill="#f8c997"/><path d="M31.3 45.7c-1 5.8-10.3 5.8-11.3 0a33.8 33.8 0 0 0 11.3 0z" fill="#d6825b"/><path d="M5 31.2c.3-5.5.4-15.3 5.1-15.3 3.6 0 4.5.9 15.2.9 9.4 0 12.2-1.1 15.7-1.1 3.8 0 4.7 5 4.8 12.2l.2 4.3.2 2.6c0 .4 0 1.3.5 1.2s.6-2 .6-2.4a68.1 68.1 0 0 0 .5-8.5c0-5.3 1.5-15.4-8-21.7-5.7-3.9-17.7-4.3-24.4-2a17.7 17.7 0 0 0-10.7 10c-1.8 5.2-1.8 9.1-1.2 19.2 0 1.1.2 2.2.4 3.3a19.5 19.5 0 0 0 .3 2.2c.4 1.5 1 .4 1-.5-.1-1.5-.2-3-.1-4.4z" fill="#59341a"/><path d="M16.5 46a14.2 14.2 0 0 1-2.4.3 9 9 0 0 1-7-3.1A6.2 6.2 0 0 1 6 40.4l-.6-3.2c-.3-3.7-1.1-1-1.2 1.8a9.3 9.3 0 0 0 .4 2 49.2 49.2 0 0 0-.4 5.6C5.1 57.4 19 60.2 25.7 61.2c3.4-.5 12.6-2.7 14.7-4.2 5.5-3.8 7.3-8.1 6.5-16a9.3 9.3 0 0 0 .3-2c0-2.9-.8-5.5-1.2-1.8l-.5 3.2a6.2 6.2 0 0 1-1.1 2.8 9 9 0 0 1-7 3 14.4 14.4 0 0 1-2.5-.2 4 4 0 0 1 .6 2c0 2.8-3 5-6.9 5.9a3.2 3.2 0 0 1-.7-.4 7.5 7.5 0 0 1-2-2 7.9 7.9 0 0 1-2 2 3.8 3.8 0 0 1-1 .4c-4-.7-7-3-7-5.8a4 4 0 0 1 .6-2.1z" fill="#402412"/><path d="M25.7 41.5c-2.2-1.9-7.6 2.7-8.7 3.1a4.6 4.6 0 0 1-5.5-1.4 9.5 9.5 0 0 0 2 3.9c3 3.2 9 2.3 12.1-.4 3.1 2.7 9.2 3.6 12.1.4a9.4 9.4 0 0 0 2-3.9 4.6 4.6 0 0 1-5.3 1.4c-1.2-.4-6.5-5-8.7-3.1z" fill="#5d331a"/><g fill="#3e3b3a"><path d="M14.4 38a1.7 1.7 0 1 0-1.7-1.7 1.7 1.7 0 0 0 1.7 1.6zM36.6 38a1.7 1.7 0 1 0-1.6-1.7 1.7 1.7 0 0 0 1.6 1.6z"/></g><g fill="#59341a"><path d="M9 31.2c-.5-1 2.4-1.4 5.3-1.5 5 0 7.7 2.4 5.3 2.3-1.8 0-10.4-.6-10.5-.8zM42 31c.5-.9-2.4-1.3-5.3-1.3-5 0-7.6 2.4-5.2 2.3 1.7 0 10.3-.7 10.5-1z"/></g><path d="M23.3 40.4a.3.3 0 0 1 .2-.2 29.4 29.4 0 0 0 2.2-7.8c.5 0-.6 6-1 7.4a9.7 9.7 0 0 1 1.7-.2c1.6 0 3 .4 3 .8s-1.4.7-3 .7-3-.3-3-.7z" fill="#e5b17d"/></g></svg>
            <svg className="svg-helmets-16-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54.1 68.4"><path d="M5 37c-2-2.4-3-1.2-4 .9a10.9 10.9 0 0 0 1 8.7c1.5 2.3 4 .8 4.2-.9S4.9 37 4.9 37z" fill="#ffc49d"/><path d="M5 41.8s-.6-3.2-1.4-4.2S1.8 41 1.8 41s1-1.3 1.2-.4.5 4.6 1 5.5 1-4.2 1-4.2z" fill="#ff5947" opacity=".4"/><path d="M49.7 37c1.8-2.4 3-1.2 4 .9a10.9 10.9 0 0 1-1 8.7c-1.6 2.3-4 .8-4.2-.9s1.2-8.7 1.2-8.7z" fill="#ffc49d"/><path d="M50.6 44s.1-3.9.7-4.8 2 2 2 2-.5-3.8-1.6-4.1-1.6 3.8-1.6 3.8z" fill="#ff5947" opacity=".4"/><path d="M50.4 49.6A30 30 0 0 1 49 57c-2.4 6.7-9.7 10.4-19.6 10.4s-19.3.8-22-5.7-3.6-20.4-3.1-30.2a22.2 22.2 0 0 1 3-10.2 20.3 20.3 0 0 1 18-10.1 29.5 29.5 0 0 1 5.9.5c7.8 1.7 12.7 6.4 14.5 11A126.4 126.4 0 0 1 49.3 35a46.2 46.2 0 0 1 1.1 14.7z" fill="#ffc49d"/><path d="M50.4 49.6c-1 1.1-2.4 1.8-4.5 2.8-5.3 2.4-29.3-4.3-29.3-4.3s9.6-4 16-2.7 7.8.1 7.8.1 2.8-2.4 2.8-9-5.7-14.9-5.7-14.9-2.4 3-12 3-13.2-4.5-13.2-4.5L7.5 25l-.1-3.7A20.3 20.3 0 0 1 25.3 11a29.5 29.5 0 0 1 5.9.6c7.8 1.6 12.7 6.4 14.5 11A126.4 126.4 0 0 1 49.4 35a46.2 46.2 0 0 1 1 14.6z" fill="#ff5947" opacity=".4"/><path d="M49.2 33.8v.6h-.7l-1.2-.2a131.4 131.4 0 0 0-5.8-11.9c-2.2-3.7-1.7-4.7-4.2-3.8s-5.5 3.4-13.6 2.5-12-2.8-12-2.8a25.3 25.3 0 0 0-3 5.6 23.7 23.7 0 0 0-.8 2.4c-1.3 4.7-.8 10.2-1.6 11.7a1.3 1.3 0 0 1-.3.4c-.7.6-1.6-.7-1.7-.8a3.7 3.7 0 0 0-1-1.6.8.8 0 0 0-1.1.2 28 28 0 0 1-1.7-5.9 18 18 0 0 1-.2-5c.6-5 5-11.6 5.2-11.8-.3-.3-3.2-7 1.2-11.4 4.5-4.6 7.4.1 12.7 1.8l.6.2 1 .3c4.3 1.2 6.6.6 6.6.6s-1-2.5 1.4-1.7l3 1.2a6.5 6.5 0 0 0 2 .5c1.7 0 1.1-2 2.6-1.6a10 10 0 0 1 3 1.7 18.3 18.3 0 0 1 4.9 6.1c2.5 5 4.3 7 4.7 12.8v9.9z" fill="#cb3300"/><path d="M30.8 7.2c-1.3 0-5.7-1.5-10.1-2.8S11.4 2.1 9.9 3c-1.8 1-1.6 4.6-1.7 7.7 0 1.9-.1 3.6-.8 4.4A18.5 18.5 0 0 0 2 25.7a9.6 9.6 0 0 1-1.8 4.5 18 18 0 0 1-.2-5c.6-5 5-11.6 5.2-11.8-.2-.3-3.2-7 1.2-11.4 4.5-4.6 7.4 0 12.7 1.8l.6.2 1 .3c4.3 1.1 6.6.6 6.6.6s-1-2.5 1.5-1.7l3 1.2c-.2 1 .7 3-1.1 2.8z" fill="#e08c56" opacity=".5"/><path d="M49.2 33.8a1.9 1.9 0 0 1-.7.6l-1.2-.2a131.4 131.4 0 0 0-5.8-11.9c-2.2-3.7-1.7-4.7-4.2-3.8s-5.5 3.4-13.6 2.5-12-2.8-12-2.8a26.4 26.4 0 0 0-3.8 8C6.6 30.9 7 36.4 6.3 37.9a1.3 1.3 0 0 1-.3.4c0-1.5-.7-15 .2-18a7 7 0 0 1 3.7-4.5s-2.5-7.6 1.5-10c2-1 4.7-1 7.4-.2l.5.2a43.3 43.3 0 0 1 7 2.8c3.8 2 13.3 2.2 13.2-3.6a18.3 18.3 0 0 1 4.9 6c2.5 5 4.3 7.1 4.7 12.9.2 4.4.1 8.3.1 9.9z" fill="#590022" opacity=".4"/><path d="M42.4 66.5c-8.4 2-25 3-31 0s-5.6-5.7-6.2-8l-.1-1.2c-.6-4.9-1.3-20.6-1.3-20.6L5.2 35s2 11.2 3.9 13c1.8.7 6.9-2.3 18.1-2.3s15.5 1.1 17.8 3a35.6 35.6 0 0 0 2-7.5 22.4 22.4 0 0 0 .3-7.2l.7-1.4 1.2 1.6s-.4-.3.3 1.2 2 16.1 2.4 19.1-1 9.8-9.4 11.9z" fill="#cb3300"/><path d="M42.4 66.5c-8.4 2-25 3-31 0s-5.6-5.7-6.2-8l-.1-1.2a12 12 0 0 0 5.5 5c7.4 3.5 27.6 2.7 34.2-5.6s3.2-24 3.2-24l1.2 1.6s-.4-.3.3 1.2 2 16.1 2.4 19-1 10-9.5 12z" fill="#590022" opacity=".4"/><path d="M19.7 25.7c0 1.5.3 2.5 0 3.5s-1 .8-3.7.4-5.4-.4-6.8.8-2-2.5-2.2-3.5-.5-1.9 1.3-2.5a24 24 0 0 1 8.1-.9c2 .4 3.1.6 3.3 2.2zM32 25.7c-.1 1.5-.3 2.5 0 3.5s.9.8 3.7.4 5.3-.4 6.8.8 2-2.5 2.1-3.5.6-1.9-1.3-2.5a23.9 23.9 0 0 0-8-.9c-2 .4-3.2.6-3.3 2.2z" fill="#cb3300"/><path d="M32.2 39.2c0-2.5.1-4 1.8-4.4a10.3 10.3 0 0 1 6.4.5c1.7.9 2 2 2 3.9s0 2.5-1 2.7-4.3-.4-6.4-.6-2.8 0-2.8-2.1zM19.6 39.2c0-2.5-.1-4-1.8-4.4a10.3 10.3 0 0 0-6.4.5c-1.6.9-2 2-2 3.9s0 2.5 1 2.7 4.4-.4 6.4-.6 2.9 0 2.8-2.1z" fill="#fff"/><path d="M17.6 37.9a3 3 0 1 1-3-3.1 3 3 0 0 1 3 3zM34 37.9a3 3 0 1 0 3.1-3.1 3 3 0 0 0-3 3z" fill="#cb3300"/><path d="M17.6 37.9a3 3 0 1 1-3-3.1 3 3 0 0 1 3 3z" fill="#cb3300"/><path d="M16.4 37.9a1.9 1.9 0 1 1-1.8-1.9 1.8 1.8 0 0 1 1.8 1.9z" fill="#2e0500"/><path d="M34 37.9a3 3 0 1 0 3.1-3.1 3 3 0 0 0-3 3z" fill="#cb3300"/><path d="M35.3 37.9A1.9 1.9 0 1 0 37 36a1.8 1.8 0 0 0-1.8 1.9z" fill="#2e0500"/><circle cx="13.6" cy="36.7" r="1.1" fill="#fff"/><circle cx="36.2" cy="36.7" r="1.1" fill="#fff"/><path d="M31.8 47.2c0 2.4-2.3 3.2-4.7 3.4h-.7c-2.6 0-5-1.1-5.1-3.3s.8-4.4 5-4.4c3.1 0 5.5 1.7 5.5 4.3z" fill="#ff997d"/><path d="M31.8 47.2c0 2.4-2.3 3.2-4.7 3.4l.4-.3c2.2-1.6 1.5-5.4-1.1-7.3 3 0 5.4 1.6 5.4 4.2z" fill="#ff5947" opacity=".4"/><path d="M35.7 57.4c-1.3 1.5-3.7 2.7-8 2.7S21.3 59 20 57.6a6 6 0 0 1-1.4-5.2l1.3.4a29.8 29.8 0 0 0 7.4.9 31.8 31.8 0 0 0 8.2-1.2l1.5-.4a6.7 6.7 0 0 1-1.3 5.3z" fill="#a73333"/><path d="M35.7 57.4c-1.3 1.5-3.7 2.7-8 2.7S21.3 59 20 57.6c2.5-1 2.8-1.5 7.4-1.5 4.3 0 6.3.4 8.3 1.3z" fill="#ff5959"/><path d="M35.7 52.5c.8 5-10.4 4.4-13.9 3.6-2.7-.6-2-1.9-2-3.3a30.6 30.6 0 0 0 7.6.9 33 33 0 0 0 8.3-1.2z" fill="#fff"/><path d="M19.7 39s0-2.5-.9-3.1a6.4 6.4 0 0 0-5-1 4.5 4.5 0 0 0-3.7 2.5c-.5.8 0 3-.2 3.3s-.5.3-.5-.2a32 32 0 0 1 0-3.7c.2-.6 1.1-1.7 3-2.2a11.4 11.4 0 0 1 5.3-.4 2.8 2.8 0 0 1 1.9 1.6 29 29 0 0 1 .1 3.3zM32.3 39s0-2.5.9-3.1a6.3 6.3 0 0 1 5-1 4.5 4.5 0 0 1 3.6 2.5c.5.8.2 3 .3 3.3s.5.3.5-.2a32 32 0 0 0 0-3.7c-.2-.6-1.2-1.7-3-2.2a11.4 11.4 0 0 0-5.3-.4 2.9 2.9 0 0 0-1.9 1.6 29 29 0 0 0-.2 3.3z" fill="#2e0500"/></svg>
            <svg className="svg-helmets-17-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.4 66"><defs><clipPath id="a" transform="translate(-181.2 -42.5)"><path d="M193.2 78.4s1-4.6-3.1-5.1c-4.6-.6-2.8 3.7-2.7 5s2.9 1.3 3.6 1.4c1.3.3 1.7 0 2.2-1.3z" fill="none"/></clipPath><clipPath id="b" transform="translate(-181.2 -42.5)"><path d="M199.2 78.8s-.8-3 .3-4.3 5.4-1 6.5.8a3.8 3.8 0 0 1-.8 5c-1.2.9-4.4-.1-4.7-.3-.5-.2-1.2-.4-1.3-1.2z" fill="none"/></clipPath></defs><path d="M38.3 50.5c-1.7 2.8-2.4 3.8-3.5 4.1s-3.1-1.4-3.1-3.3-1.6-5.7 1-8 8.4-2 8.4-2c.3 2.9-1.1 6.5-2.8 9.2z" fill="#aa2800"/><path d="M43.5 23c-.2 4.4-1.2 11.8-1.2 11.8s-7 7.5-10.5 8.8-3 1.4-3 1.4l-2-.2c-5.4-.6-20-2.1-21.3-3-1.6-1.2-2-3.4-2.4-5.2a31 31 0 0 0-2.3-7.5c-1.6-4.3.3-11.6.3-11.6a54.6 54.6 0 0 0-.8-7.7c-.6-3.6-.3-6.7 1-6.7a11.5 11.5 0 0 1 2.7.5A6.6 6.6 0 0 1 6 .4c1.4-1 1.8 0 7.9 2.2 5 1.7 11.9 2.9 16.9 4.5a24.1 24.1 0 0 1 3.1 1.1 10.4 10.4 0 0 1 5.5 6.3 5.6 5.6 0 0 1 .1.8s3.5 2.2 4 5.3a14.8 14.8 0 0 1 0 2.3z" fill="#aa2800"/><path d="M43.5 23c-.2 4.4-1.2 11.8-1.2 11.8s-7 7.5-10.5 8.8-3 1.4-3 1.4l-2-.2A344 344 0 0 1 28 26.9c1.8-1.6 2 .5 5.1 2.1s8.5-2 9.7-5.2c.2-.5.5-.8.8-.9z" fill="#3d000d" opacity=".4"/><path d="M41 41.3c.4 2.9-1 6.5-2.7 9.3s-2.4 3.7-3.5 4-3.1-1.4-3.1-3.3-1.6-5.7 1-8 8.4-2 8.4-2zM39.4 14.5c0 3-2.3 4.2-4.9 5.5-2.8 1.4-8 5-10.5 3.5s-21.6 7-21.8 3.9a65.8 65.8 0 0 1 .6-9.8l.1-1.7c.4-4-2-11.1-.7-10.7s6.4 1.9 6.4.1.6-2.3 2.6-.2 7.3 7.8 13.8 8c5.8 0 9.6-1 5.8-6a24.1 24.1 0 0 1 3 1.1 10.4 10.4 0 0 1 5.6 6.3z" fill="#3d000d" opacity=".4"/><path d="M33 59.7c-.9 1.2-7 4-11.5 5.5-2.1.7-3.9 1-4.5.7-2.1-1-1.8-2-1.8-2l.2-3 .1-1.3.1-2s7.8-7.2 9.8-7.8 8.2.1 8.7 1.7a3.3 3.3 0 0 1 .2.7c.3 2 0 5.9-1.2 7.5z" fill="#ff7a54"/><path d="M33 59.7c-.9 1.2-7 4-11.5 5.5.5-.5 3.7-4 2.5-4.5s-6.2 1.2-8.6.3l-.2-.2-.3-1 .6-.2c2.9-1.3 15.6-7 17-7.8a1.2 1.2 0 0 1 1.8.4c.3 2 0 5.9-1.2 7.5z" fill="#ff5947" opacity=".4"/><path d="M45.4 35.7c0 1.7-1.4 5-4.3 8.2s-4.1.4-4.1.4a11.8 11.8 0 0 1-.3 3.6c-.4 1-3 7-5.3 8.5a3.5 3.5 0 0 1-.5.2c-2.5.9-10 4.2-12.8 4.2s-6.9-1.4-7.6-2.5a4.3 4.3 0 0 1-.3-.7c-.4-1.3-.6-3.4-1-5.6-.6-2.6-3.4-6.4-4.3-8.4a12.7 12.7 0 0 1-1-4.4 35.5 35.5 0 0 1 0-3.7c.2-2.6-.8-4-1-6a13 13 0 0 1 0-2.5l.2-3 .8-6.2a11.8 11.8 0 0 0 7.2 3.1c4.7.5 8-1.1 9.8-1.4s1.4.8 3.1 2a20.9 20.9 0 0 0 5.2 1.8 26 26 0 0 0 .1 2.7 64.3 64.3 0 0 0 1.6 7.6 4.3 4.3 0 0 0 2.8 3l3-1.3a28.3 28.3 0 0 1 2.4-4.4c1-1.3 2.2-1.1 3.3-.5s3 3.5 3 5.3z" fill="#ffc49d"/><path d="M42 36.4s-1-3.1-2.8-1-2.3 9-2.3 9a11.8 11.8 0 0 1-.3 3.5c-.4 1-3 7-5.3 8.4a3.5 3.5 0 0 1-.5.3c-2.5.9-10 4.2-12.8 4.2s-6.9-1.4-7.5-2.5a3.7 3.7 0 0 1-.4-.7 23.3 23.3 0 0 0 3.4 1.4c2.8.8 10 .5 13.1-3.6S31 43 28.7 38.8 26.9 29 26.9 29s-5-5-7-5-4.2 1.7-8 .5-7-2.6-7-2.6-1.3 8-.6 11c.5 2.5.6 4.7-.4 6.3a33 33 0 0 1 0-3.7c.2-2.7-.8-4-1.1-6a13 13 0 0 1 0-2.5l.3-3 .8-6.2a11.8 11.8 0 0 0 7.2 3.1c4.7.4 8-1.2 9.8-1.4s1.4.8 3.1 2a20.9 20.9 0 0 0 5.2 1.8 26 26 0 0 0 .1 2.7 64.3 64.3 0 0 0 1.6 7.6c-.3 2.8 2.9 4.2 4 3.8a4 4 0 0 0 2.7-2.7c.7-1.8 2.4-4 3.8-2.2a4.6 4.6 0 0 1 .6 3.9z" fill="#ff5947" opacity=".4"/><path d="M12 36s1-4.7-3.2-5.2c-4.5-.6-2.7 3.7-2.6 5s2.9 1.3 3.6 1.4c1.2.3 1.7 0 2.2-1.3zM18 36.4s-.8-3.1.3-4.3 5.4-1 6.5.8a3.8 3.8 0 0 1-.8 5c-1.2.8-4.4-.2-4.7-.4-.5-.2-1.2-.4-1.4-1.1z" fill="#fff"/><path d="M24.5 45.6v.2c-.2 1.1-1.1 5.6-3.3 7-1.8 1-5.3.8-7.5.4a8.8 8.8 0 0 1-2.2-.5.8.8 0 0 1-.2-.2c-.3-.5 0-1.4-.2-2.6a12.2 12.2 0 0 0-1.1-2.6L9.3 46a24.6 24.6 0 0 0 6.5 1.7 6.6 6.6 0 0 0 .9 0 30.2 30.2 0 0 0 7.3-2z" fill="#a73333"/><path d="M24.4 45.8c-.2 1.1-1 5.6-3.3 7-1.7 1-5.2.8-7.5.4a7.6 7.6 0 0 1 2.6-3.7 26.2 26.2 0 0 1 2.8-2 19.7 19.7 0 0 0 5.4-1.7z" fill="#ff5959"/><path d="M24 45.8a3.2 3.2 0 0 1-.7 1.6 12.9 12.9 0 0 1-7.8 1.5 13.2 13.2 0 0 1-5.5-1.6L9.3 46a24.6 24.6 0 0 0 6.5 1.7c2.5.2 6.8-1.4 8.2-2z" fill="#fff"/><path d="M11 41.6h1.7c.7 0 3.1 2.2 3 3.2-.2.5-5 0-5.9-.4s.6-2.8 1.2-2.8z" fill="#ff997d"/><path d="M10.8 29a36.6 36.6 0 0 0-4.5-.9A18.7 18.7 0 0 0 3 28l.3-3c1.9-.4 5.6-.2 6.4.6s1.7 2.6 1 3.5zM17.2 26.3c-.7 1.6-1.3 3-.5 3.2s2.6-1.5 5.7-1.3 3.5 1.5 4 1.3.7-2.3.3-3-1.9-1.6-4.4-1.7-4.8.8-5.1 1.5z" fill="#aa2800"/><g clip-path="url(#a)"><path d="M12.5 34.4a2.5 2.5 0 1 1-2.2-2.9 2.6 2.6 0 0 1 2.2 2.9z" fill="#aa2800"/><ellipse cx="10" cy="34.1" rx="1.3" ry="1.4" fill="#480b00"/><path d="M9.7 33.3a.8.8 0 1 1-.7-.8.8.8 0 0 1 .7.8z" fill="#fff"/></g><g clip-path="url(#b)"><path d="M25.7 35.2a2.6 2.6 0 1 1-2.4-3 2.6 2.6 0 0 1 2.4 3z" fill="#aa2800"/><ellipse cx="23.1" cy="35" rx="1.3" ry="1.4" fill="#480b00"/><path d="M22.8 34.1a.8.8 0 1 1-.8-.8.8.8 0 0 1 .8.8z" fill="#fff"/></g><path d="M12 36s.1-2.4-.6-3.5a3.9 3.9 0 0 0-3.5-1.7c-1.3.2-1.8.8-1.8 2 0 .7.4 2.3.1 2.4s-.5-.7-.7-2a2.3 2.3 0 0 1 1.8-2.8 5.9 5.9 0 0 1 3.9.9 5.5 5.5 0 0 1 1.1 3.2c0 .8-.2 1.8-.4 1.6zM18 36s-.3-2.4.6-3.5 2.1-1.2 3.6-1c1.8.4 2.8 1 2.7 2.3 0 .7 0 1.8.3 2s.4-.5.4-2a2.8 2.8 0 0 0-2.5-2.6c-1.5-.4-3.4-.6-4.3.1a5 5 0 0 0-1.3 3.2c0 .8.3 1.8.4 1.6z" fill="#480b00"/></svg>
            <svg className="svg-helmets-18-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 137.7 137.7"><defs><clipPath id="a" transform="translate(-110 -130.8)"><path d="M143.6 217a2.1 2.1 0 0 0-2 2.8c3 7.2 12.8 25.2 37.2 25.2s34.3-18.2 37.4-25.4a2.1 2.1 0 0 0-2-3z" fill="none"/></clipPath></defs><circle cx="178.9" cy="199.7" r="68.8" transform="rotate(-77.4 42.2 203)" fill="#ffd21f"/><g fill="#403408"><path d="M37.5 69.8a5 5 0 0 1-5-5v-12a5 5 0 0 1 5-5 5 5 0 0 1 5 5v12a5 5 0 0 1-5 5zM100.2 69.8a5 5 0 0 1-5-5v-12a5 5 0 0 1 5-5 5 5 0 0 1 5 5v12a5 5 0 0 1-5 5z"/></g><path d="M33.5 86a2.1 2.1 0 0 0-2 3c3 7.2 12.8 25.2 37.2 25.2S103 96 106 88.7a2.1 2.1 0 0 0-2-2.9z" fill="#403408"/><g clip-path="url(#a)"><ellipse cx="68.3" cy="111.9" rx="26.5" ry="14.4" fill="#ff5a58"/></g></svg>
            <svg className="svg-helmets-19-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37.6 52.8"><path fill="#a58067" d="M33.7 37.8l-18 1.7 5.9 4.8L35 42.6l-1.3-4.8z"/><path d="M27.3 19c.8-2 2-4.6 4.3-3.7s6.6 8-.3 9.7c-5.7 1.4-4-6-4-6z" fill="#f29c61"/><path d="M28.3 19.4c.6-1.4 1.5-3.2 3.1-2.6s4.7 5.4-.3 6.6c-4.1 1-2.8-4-2.8-4z" fill="#d1834e"/><path d="M30.5 20.5c.3-.6.8-1.3 1.5-1.1s2 2.1-.3 2.7c-1.8.4-1.2-1.6-1.2-1.6z" fill="#f29c61"/><path d="M5.1 24.9C3.8 23.4 2 21.6.7 23.7s-1.3 9.8 4 7.7c4.3-1.8.4-6.5.4-6.5z" fill="#ffbc80"/><path d="M5.3 25.2c-1-1-2.6-2.4-3.6-.8S.5 31.8 4.8 30c3.6-1.4.5-4.8.5-4.8z" fill="#f29c61"/><path d="M5.1 26.2c-.7-.6-1.7-1.2-2.5-.3s-1.1 4 2 2.9c2.5-1 .5-2.6.5-2.6z" fill="#ffbc80"/><path d="M37.5 39.8S29.4 49 24.4 50.5c-11.8 3.8-17.8-2.3-17.8-2.3s-5.3-32.5.8-38.8c3-3 11.7-7.2 14-5.6s17.7 32.6 16 35.9z" fill="#ffbc80"/><path d="M21.4 3.9a3.6 3.6 0 0 0-2.4-.2c4.2 2.6 9.2 11.6 10.2 18.7 1.5 10.4-4.3 16.5-11 17.5-5.6.8-11.3-4.8-13.7-13a189.3 189.3 0 0 0 2 21.4s6 6.2 17.8 2.4c5-1.6 13.1-11 13.1-11 1.7-3.2-13.5-34.2-16-35.8z" fill="#f29c61"/><path d="M31.1 21.5l1.2 6.6-6.7 5.8c-3.8-2.6-10.9-3.4-15.3 5l-3.9-3.5-3.7-16.5c.5 10 3.9 29.5 3.9 29.5s6.1 6.9 17.9 3c5-1.7 13-11.6 13-11.6.8-1.6-2.6-10-6.4-18.3z" fill="#b58a66"/><path d="M14 34.4c.2 1.3 2.9 3.8 4.9 2.4s2.9-4.5 2.9-4.5-3.8-2-7.9 1.8" fill="#a07453"/><path d="M30.4 20l.6 2.3a22.8 22.8 0 0 1 1.2 5.6v.2l.1 2.3c0 11.5-8.2 20.8-18.4 20.8a16.4 16.4 0 0 1-4.5-.6c3 1.7 8 3.4 15.1 1 5-1.6 13-11.8 13-11.8.8-1.7-3-11-7-19.7z" fill="#a07453"/><path d="M31.8 22.9l-.7.1S21.2 5.2 19.6 4.5c0 0 4.7-.6 8.6 6.4a31.1 31.1 0 0 1 3.6 12zM3.8 30.6l1.6.6C4 17.2 6.4 6.2 9 5.4c0 0-5.8 5.6-6.6 11.7-.3 2.4 1.4 13.5 1.4 13.5z" fill="#e56b2e"/><path d="M28.6 10.4L2.2 14.7s2.1-8.8 6-12c3.7-3 4-3.1 9.4-2 4.2.7 11 9.7 11 9.7z" fill="#9e6b5e"/><path d="M15.6 24.4c1.5 4.4 5.9 8.5 5 9.2s-1.2 2-2.6 2.4c-1 .4-1-.7-3-.8-1.2-.1 1.2-7.3.6-10.8z" fill="#ffbc80"/><path d="M17.9 22c-1.3-.3-1 4.5 3 4.5s5.6-2.1 5.9-3.4-6.4-.3-9-1zM14.6 22.2c1-.9 3 3.5-.5 5.3s-5.8.8-6.7-.2 5.4-3.2 7.2-5z" fill="#f29c61"/><g fill="#d35a24"><path d="M7.4 22.7l7.6-1.9.3 2.1c-2.7 1.3-6.2 3.3-7 3s-1-3.2-1-3.2zM16.7 20.4l8.7-2.1a3.4 3.4 0 0 1 .2 3.9c-1.2 1.9-5.6 0-8.5.2z"/></g><path d="M11.3 43.1h-.2c.3-1.5 5.4-5.8 14.6-6.4v.9c-8.6.6-14.1 4.4-14.4 5.5z" fill="#7a553c"/><path d="M10 42.2c.3-.2 1.7.4 1.7.4l-.4.5s-1.6-.6-1.2-.9z" fill="#7a553c"/><path d="M17.5 43c-1.4-.1-.6-1.8.6-2.1s4.4-1 3.5.3-1.4.8-2.2 1-.8 1-2 .8z" fill="#a07453"/><path d="M10.2 26.7l2.7-.5s-1.7 3.7-2.7.5zM22.7 23.8l-2.4.6s3.2 2.6 2.4-.6z" fill="#7a553c"/><path fill="#f29c61" d="M5 20.3l22-4.4-1.7-3.2-20 3.9-.3 3.7z"/><path d="M18.9 10.5a12.3 12.3 0 0 1-1.2 1.7l10.9-1.8S24.3 4.8 20.4 2a12 12 0 0 1-1.5 8.5z" fill="#845b4e"/><path d="M29.9 10.7A2.9 2.9 0 0 0 26.5 8L3 12.4A2.5 2.5 0 0 0 1.2 16l1 2L30 12.9z" fill="#9e6b5e"/><path d="M29.9 10.7A2.9 2.9 0 0 0 26.5 8l-1.7.4c1 .4 1.6 1 1.8 1.6.6 2.5-9 3.2-16.1 4.9a66.5 66.5 0 0 1-9 1.7l.7 1.5L30 12.9z" fill="#845b4e"/><path fill="#845b4e" d="M9 11.9l1 2 .2-2.5-1.2.5zM6.5 12.2l1 2.1.2-2.6-1.2.5zM3.7 12.6l1 2 .2-2.5-1.2.5zM1.8 13l1 2.1.2-2.5-1.2.5zM11.9 11.3l.9 2 .2-2.5-1.1.5zM15 10.7l.7 2.1.5-2.5-1.3.4zM17.9 10l.7 2 .5-2.4-1.2.3zM20.6 9.2l.7 2.1.5-2.5-1.2.4zM23.6 8.5l.8 2.1.5-2.5-1.3.4z"/></svg>
            
            <svg className="svg-torsos-1-svg" version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M473 452c0 12-1 23-4 34h-30l4-34c0-17-1-34-4-51-9-51-51-111-51-111v-51c0-8-1-17-3-25l-9-39c-1-13 1-26 5-39 8-26 21-49 29-75 5-17 9-35 12-52h30c-2 17-6 35-11 52-8 26-22 49-30 75-4 13-6 26-5 39 2 13 5 26 10 39l2 25v51s43 60 51 111c3 17 4 34 4 51z" fill="#00838f"/><path d="M443 452l-4 34H295a53 53 0 0 1-54 15c-10-2-18-7-25-15H43a265 265 0 0 1 0-85c8-51 51-111 51-111v-51c0-8 0-17 2-25 5-13 8-26 10-39 0-13-1-26-5-39-8-26-22-49-30-75-5-17-9-35-11-52h362c-3 17-7 35-12 52-8 26-21 49-29 75-4 13-6 26-5 39l9 39c2 8 3 17 3 25v51s42 60 51 111c3 17 4 34 4 51z" fill="#00bcd4"/><path fill="#02a9f4" d="M94 239h137v51H94z"/><path fill="#0377bc" d="M281 239h137v51H281z"/><g fill="#02a9f4"><path d="M281 239h111v51H281zM216 486H43c-3-11-4-22-4-34h166v5c0 11 4 21 11 29z"/></g><path fill="#00bcd4" d="M230 239h51v51h-51z"/><path d="M473 452c0 12-1 23-4 34H295a44 44 0 0 0 12-34h166z" fill="#0377bc"/><path d="M444 452c0 12-2 23-4 34H295a44 44 0 0 0 12-34h137z" fill="#02a9f4"/><path d="M411 136c-4 13-6 26-5 39 2 13 5 26 10 39l2 25H94c0-8 0-17 2-25 5-13 8-26 10-39 0-13-1-26-5-39-8-26-22-49-30-75-5-17-9-35-11-52h392c-2 17-6 35-11 52-8 26-22 49-30 75z" fill="#ffe0b2"/><path d="M386 136c-4 13-6 26-6 39 2 13 6 26 10 39 2 8 3 17 2 25H94c0-8 0-17 2-25 5-13 8-26 10-39 0-13-1-26-5-39-8-26-22-49-30-75-5-17-9-35-11-52h367c-3 17-7 35-12 52-8 26-22 49-29 75z" fill="#ffecb3"/><path d="M34 488c1 4 5 7 9 7h170c24 23 62 23 86 0h170c4 0 8-3 9-7a180 180 0 0 0 3-37c1-17 0-34-3-51-8-48-44-101-51-113v-48a116 116 0 0 0-7-40l-6-24c0-13 2-25 5-36 4-13 9-25 15-37a345 345 0 0 0 27-92V9l-1-2V6l-1-2V3l-2-1-1-1-2-1h-1H60a9 9 0 0 0-9 10 374 374 0 0 0 27 92c6 12 10 24 14 37 4 11 6 23 5 36l-5 24-4 13-3 27v48c-8 12-43 65-51 113a272 272 0 0 0 0 88zm14-27h149c0 6 2 11 4 17H50l-2-17zm263 17c2-6 4-11 4-17h149l-2 17H311zm-72-196v-35h34v35h-34zm-137 0v-35h120v35H102zm188-35h119v35H290v-35zM94 95a328 328 0 0 1-24-78h372a348 348 0 0 1-24 78c-6 12-11 25-15 39-4 13-6 27-6 42 1 10 4 19 7 28l3 12 2 14H103l1-14 4-12c3-9 5-18 6-28 1-14-1-29-5-42-4-14-10-27-15-39zM51 402c7-41 38-90 47-103h149v85a9 9 0 0 0 17 0v-85h150c8 13 40 62 47 103l3 42H307h-2l-2 1-1 1-2 2-1 1v2l-1 1v1l1 4c0 8-4 17-10 24a46 46 0 0 1-66 0 36 36 0 0 1-10-28v-1-1-2l-1-1-2-2-1-1-2-1h-1H47c0-14 2-28 4-42z"/><path d="M256 205c5 0 8-4 8-9v-8a9 9 0 0 0-17 0v8c0 5 4 9 9 9zM145 154a9 9 0 0 0 0 17c21 0 39 15 43 35a9 9 0 0 0 17-3c-6-29-31-49-60-49zM367 154c-29 0-54 20-60 49a9 9 0 0 0 17 3c4-20 22-35 43-35a9 9 0 1 0 0-17zM221 120c-54 7-78-14-79-15a9 9 0 0 0-12 12c1 1 22 21 68 21 9 0 17 0 25-2a9 9 0 1 0-2-16zM369 105c-1 1-24 22-78 15a9 9 0 0 0-2 16c8 2 16 2 25 2 45 0 66-20 67-21a9 9 0 0 0-12-12zM153 85c9 0 17-3 22-9 6-5 13-8 21-8a33 33 0 0 0 34-34 9 9 0 1 0-17 0 16 16 0 0 1-17 17c-11 0-23 4-31 12-5 4-7 5-12 5-7-1-14-5-17-12a9 9 0 1 0-16 8c7 12 19 20 33 21zM316 68c7 0 15 3 20 8 6 6 14 9 22 9 14-1 27-9 34-21a9 9 0 0 0-16-8c-3 7-10 11-18 12-4 0-6-1-11-5-8-8-20-12-31-12a16 16 0 0 1-17-17 9 9 0 1 0-18 0 33 33 0 0 0 35 34z"/></svg>
            <svg className="svg-torsos-2-svg" height="384pt" viewBox="-1 0 384 384.008" width="384pt" xmlns="http://www.w3.org/2000/svg"><path d="m309.363281 193.289062 1.441407.71875c6.480468 14.640626 20.480468 47.28125 18.160156 79.839844-.960938 13.839844-3.839844 84.558594-6.960938 94.160156h-253.917968c-3.121094-9.601562-6-80.320312-6.960938-94.160156-2.320312-32.558594 12.71875-66.71875 19.199219-81.28125l-32.320313-65.4375-32-32.082031v-79.039063h350.640625v79.441407l-24.558593 31.679687zm0 0" fill="#4dd0e1"/><path d="m379.292969 105.246094c2.167969-2.804688 3.351562-6.253906 3.351562-9.804688v-79.441406c0-8.832031-7.167969-16-16-16h-350.640625c-8.832031 0-15.99999975 7.167969-15.99999975 16v79.039062c0 4.234376 1.67968775 8.296876 4.67187475 11.296876l30.152344 30.230468 27.871094 56.355469c-7.457031 17.390625-19.816407 50.0625-17.535157 82.03125.214844 3.167969.535157 9.382813.945313 17.160156 2.847656 54.765625 4.429687 73.648438 6.757813 80.832031 2.144531 6.589844 8.289062 11.0625 15.21875 11.0625h253.917968c6.929688 0 13.082032-4.472656 15.214844-11.0625 2.328125-7.175781 3.90625-26.066406 6.761719-80.832031.40625-7.777343.726562-13.984375.945312-17.136719 2.382813-33.542968-10.3125-66.234374-17.320312-82.488281l28.101562-56.824219zm-66.289063 167.496094c-.222656 3.273437-.558594 9.691406-.976562 17.714843-.773438 14.839844-2.335938 44.808594-3.839844 61.550781h-95.839844c1.695313-2.542968 2.695313-5.59375 2.695313-8.871093 0-8.832031-7.167969-16-16-16h-15.839844c-8.832031 0-16 7.167969-16 16 0 3.289062 1 6.335937 2.695313 8.871093h-87.964844c-1.539063-16.894531-3.097656-46.742187-3.867188-61.550781-.414062-8.023437-.75-14.441406-.972656-17.746093-.953125-13.382813 1.644531-27.519532 5.246094-40.078126l17.488281 35.359376c2.792969 5.632812 8.457031 8.902343 14.351563 8.894531 2.382812 0 4.808593-.527344 7.089843-1.664063 7.917969-3.917968 11.160157-13.511718 7.230469-21.4375l-45.671875-92.28125 5.160156 2.464844c2.726563 1.296875 5.742188 1.800781 8.769531 1.457031l66.167969-7.769531c8.773438-1.03125 15.054688-8.976562 14.023438-17.761719-1.023438-8.773437-9.035157-15.117187-17.761719-14.023437l-61.566406 7.226562-40.226563-19.226562-25.375-25.445313v-56.417969h318.640625v57.960938l-18.886718 24.367188-39.28125 18.769531-61.558594-7.226563c-8.714844-1.078125-16.730469 5.25-17.761719 14.023438-1.03125 8.785156 5.25 16.730468 14.023437 17.761718l66.160157 7.769532c3.015625.335937 6.03125-.160156 8.769531-1.457032l5.136719-2.457031-45.65625 92.28125c-3.914063 7.917969-.671875 17.511719 7.246093 21.4375 2.28125 1.128907 4.695313 1.65625 7.082032 1.65625 5.894531 0 11.558594-3.261719 14.359375-8.902343l17.6875-35.761719c3.472656 12.402343 6.015625 26.617187 5.023437 40.511719zm0 0" fill="#012e52"/></svg>
            <svg className="svg-torsos-3-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384.3 336.4"><path d="M46.6 336.4H0c.5-162 46.1-264.1 46.1-264.1A92.7 92.7 0 0 1 70 37.2a72 72 0 0 1 10.8-9.3A143 143 0 0 1 97 18.3a157.8 157.8 0 0 1 31.3-12.2C140.6 2.6 145.8 0 160.9 0c0 0 8.7 31.2 31.5 31.2v285.2H72.5l10.3-182.6s-32.4 59.8-36.2 202.6z" fill="#303030"/><path d="M337.7 336.4h46.6c-.5-162-46.2-264.1-46.2-264.1a93 93 0 0 0-23.8-35.1 72.5 72.5 0 0 0-10.8-9.3 143 143 0 0 0-16.2-9.6A158.3 158.3 0 0 0 256 6.1C243.7 2.6 238.5 0 223.4 0c0 0-8.7 31.2-31.5 31.2v285.2h119.9l-10.3-182.6s32.4 59.8 36.2 202.6z" fill="#4e4a4a"/></svg>
            <svg className="svg-torsos-4-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 99 92.6"><path fill="#21201d" d="M40.4 1.4l.2 3.1V1.4h-.2zM43.3 32.2l.2 12.8V25.4l-.2 6.8z"/><path d="M43.5 45c0-10.6-14.8-28.2-14.8-28.2 1.5-3.7 5.7-6.2 5.7-6.2-1.4-2-5-.8-5-.8a17.5 17.5 0 0 1 4.8-7.2 45.3 45.3 0 0 0-9 3.2 29 29 0 0 0-9.4 6.4S2.7 22.2 0 92.5h12.8s.8-32.5 7.5-53.8l-.5 50h23.6z" fill="#21201d"/><path d="M99 92.6v-.4c-1.7-42.6-7.2-63-11.2-72.4-1.3-3.8-5.2-11.2-17-15.6a33.4 33.4 0 0 0-5-1.9 17.1 17.1 0 0 1 5.1 7.5s-3.6-1.2-5 .8c0 0 4.2 2.5 5.8 6.2 0 0-14.8 17.6-14.8 28.2l.1-12.8v-6.8l2.8-20.9v.1l-2.9 20.8v63.4h-6.7l30.4.2v-1l-.7-48a274 274 0 0 1 6.3 52.6H99zM59.9 1.4v2.1l.1-2.1H60z" fill="#623e20"/><path fill="#dedbdb" d="M50.2 23.4v-22h-9.6v3.1l2.9 21v63.2H50V23.4z"/><path d="M50.2 1.4v87.3h6.7V25.4l3-20.8V1.4h-9.7z" fill="#ececee"/><path d="M29.5 9.8s3.5-1.2 5 .8c0 0-4.2 2.5-5.8 6.2 0 0 14.8 17.6 14.8 28.3l-.2-12.8.2-6.9-3-20.8-.1-3.2h3V.3a10.4 10.4 0 0 0-9.1 2.3 17.5 17.5 0 0 0-4.8 7.2z" fill="#4c311c"/><path d="M59.2 1.4h.8L60 3.5l-.1 1-2.9 21 .2 6.7-.2 12.8c0-10.7 14.8-28.2 14.8-28.2-1.6-3.7-5.8-6.2-5.8-6.2 1.4-2 5-.8 5-.8a17.1 17.1 0 0 0-5.2-7.5 10.4 10.4 0 0 0-8.8-2v1h2.3z" fill="#865635"/></svg>
            <svg className="svg-torsos-5-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91.4 87.6"><path d="M41 22l4.6 12.3V30a1.4 1.4 0 0 1 0-2.8v-5.8a1.4 1.4 0 0 1 0-2.7V13a1.4 1.4 0 0 1-1.3-1.4 1.4 1.4 0 0 1 1.3-1.3V4.8a1.4 1.4 0 0 1 0-2.7V0H45l-5.2 7.6-3-4.7 4.1 19z" fill="#ececee"/><path d="M25.5 5.4A48.6 48.6 0 0 1 30.7 4a48.6 48.6 0 0 0-5.2 1.5z"/><path d="M46.5 0h-.8v2a1.4 1.4 0 0 1 0 2.7v5.6a1.4 1.4 0 0 1 0 2.7v5.7a1.4 1.4 0 0 1 0 2.7v5.8a1.4 1.4 0 0 1 0 2.8v4.2L50.4 22l4-18.8-2.7 4.3z" fill="#f7f7f7"/><path d="M47 11.7a1.4 1.4 0 0 0-1.3-1.4v2.8a1.4 1.4 0 0 0 1.4-1.4z" fill="#202025"/><path d="M45.7 10.3a1.4 1.4 0 0 0-1.3 1.4 1.4 1.4 0 0 0 1.3 1.3z"/><path d="M47 3.4A1.4 1.4 0 0 0 45.7 2v2.7A1.4 1.4 0 0 0 47 3.4z" fill="#202025"/><path d="M44.3 3.4a1.4 1.4 0 0 0 1.4 1.3V2a1.4 1.4 0 0 0-1.4 1.4z"/><path d="M47 20a1.4 1.4 0 0 0-1.3-1.3v2.7a1.4 1.4 0 0 0 1.3-1.3z" fill="#202025"/><path d="M44.3 20a1.4 1.4 0 0 0 1.4 1.4v-2.7a1.4 1.4 0 0 0-1.4 1.4z"/><path d="M47 28.6a1.4 1.4 0 0 0-1.3-1.3V30a1.4 1.4 0 0 0 1.3-1.4z" fill="#202025"/><path d="M45.7 27.3a1.4 1.4 0 0 0 0 2.7z"/><path d="M45.7 84V34.4L40.9 22 37 2.9h-2.2l-.5.1h-.1l-.6.2H32.5l-.8.2h-.1l-.9.2a48.6 48.6 0 0 0-5.2 1.5 37.3 37.3 0 0 0-4.8 2l-1 .6h-.1l-1 .7a.3.3 0 0 0-.1 0l-1 .7h-.1l-1 .8-1 .8a18.5 18.5 0 0 0-5.4 7.7l-.2.7-.2.6-.2.6a378 378 0 0 0-9.3 67h11.8c2.4-39.4 6.8-49.5 6.8-49.5L18.2 84h27.5z" fill="#024c28"/><path d="M90.8 87.6h.6s-2-40.8-9.4-66.9a16.5 16.5 0 0 0-.5-1.9C76.6 5.1 56.7 3 54.7 2.8l-.3.4-4 18.8-4.7 12v50h27.5l-.5-46s4.5 10.3 7 49.5h11z" fill="#006738"/><path d="M45 0H37v3l3 4.6z" fill="#d0d0d7"/><path d="M51.7 7.6l2.7-4.2.3-.5V0h-8.2z" fill="#ececee"/></svg>
            <svg className="svg-torsos-6-svg" data-name="Warstwa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108.6 105"><path d="M54.3 6.1v96.3h33.1S91.7-8 54.3 6zM54.3 6.1v96.3H21.2S16.9-8 54.3 6z" fill="#343132"/><path d="M31.2 7l2.9 5.2s7-2.8 20.2-3v-9S43.1-1.4 31.3 7z" fill="#635d51"/><path d="M46.2 15.8s-11.4 6.1-17.8-4.5l-.3 1.4-14 9.2v.1C13 23.7 0 43.2 1.3 104.5h15s-.8-33.2 6-55L19 102.4h31.5l.4-72z" fill="#5b4a42"/><path fill="#80807a" d="M0 97h16.3v8H0z"/><path d="M3.6 101.1a1.2 1.2 0 1 1-1.2-1.2 1.2 1.2 0 0 1 1.2 1.2zM47.7 38.5a2.1 2.1 0 1 0 2.2 2.1 2.1 2.1 0 0 0-2.2-2.1zM47.7 52.6a2.1 2.1 0 1 0 2.2 2.2 2.1 2.1 0 0 0-2.2-2.2zM47.7 66.8a2.1 2.1 0 1 0 2.2 2.1 2.1 2.1 0 0 0-2.2-2.1zM47.7 81a2.1 2.1 0 1 0 2.2 2 2.1 2.1 0 0 0-2.2-2z" fill="#a9a9ad"/><path d="M39.7 11C34.7 4.8 44 1 44 1 37.1.5 31.2 5 31.2 5l-5 7.1 8.5 12.4 11.4-8.8c-.2.2-1.8 1-6.4-4.7z" fill="#80807a"/><path d="M44.2 23.5a2.1 2.1 0 1 0 2.1 2.1 2.1 2.1 0 0 0-2-2.1z" fill="#a9a9ad"/><g><path d="M77.4 7l-2.9 5.2s-7-2.8-20.2-3v-9s11.2-1.5 23 6.8z" fill="#807970"/><path d="M62.4 15.8s11.4 6.1 17.8-4.5l.3 1.4 14 9.2v.1c1.2 1.7 14.1 21.2 12.8 82.5h-15s.8-33.2-6-55l3.2 52.9H58.1l-.4-72z" fill="#5b4a42"/><path fill="#918c80" d="M92.3 97h16.3v8H92.3z"/><path d="M105 101.1a1.2 1.2 0 1 0 1.2-1.2 1.2 1.2 0 0 0-1.2 1.2zM60.9 38.5a2.1 2.1 0 1 1-2.2 2.1 2.1 2.1 0 0 1 2.2-2.1zM60.9 52.6a2.1 2.1 0 1 1-2.2 2.2 2.1 2.1 0 0 1 2.2-2.2zM60.9 66.8a2.1 2.1 0 1 1-2.2 2.1 2.1 2.1 0 0 1 2.2-2.1zM60.9 81a2.1 2.1 0 1 1-2.2 2 2.1 2.1 0 0 1 2.2-2z" fill="#a9a9ad"/><path d="M68.8 11c5-6.2-4.3-10-4.3-10 7-.5 12.9 4 12.9 4l5 7.1-8.6 12.4-11.4-8.8c.3.2 1.8 1 6.4-4.7z" fill="#918c80"/><path d="M64.4 23.5a2.1 2.1 0 1 1-2.1 2.1 2.1 2.1 0 0 1 2-2.1z" fill="#a9a9ad"/></g></svg>
            <svg className="svg-torsos-7-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88.4 78.2"><path d="M22.9 62.5l-10.5 8.9 21.4 6.8s3.3-2.8 10.3-2.8v-10z" fill="#acc0cc"/><path d="M65.2 62.5l10.5 8.9-21.5 6.8s-3-2.8-10.1-2.8v-10z" fill="#a1bac6"/><path d="M56.7 0a39.5 39.5 0 0 1-12.5 2.3v64a45.9 45.9 0 0 0 21-3.8l8.2-34.7s-5.9-6.2-4.8-21.4z" fill="#a1bac6"/><path d="M31.6 0a39.5 39.5 0 0 0 12.6 2.3v64A45.9 45.9 0 0 1 23 62.6l-8.2-34.7s5.9-6.2 4.8-21.4z" fill="#acc0cc"/><path d="M66.5 32.2A17.3 17.3 0 0 1 54 30.6c-5.7-3-8.8-3-10.2-2.7-1.3-.3-4.4-.2-10 2.7a17.3 17.3 0 0 1-12.6 1.6l-.7 2a15.4 15.4 0 0 0 4.7.6 20.6 20.6 0 0 0 9.5-2.3c6.5-3.4 9-2.5 9-2.5l.1-.3.1.3s2.6-1 9 2.5a20.6 20.6 0 0 0 9.5 2.3 15.3 15.3 0 0 0 4.7-.6z" fill="#93afba"/><g><path d="M21 4.3S2.9 2.8 1.3 25.7c0 0 7.9 7.8 17.8-4S21 4.3 21 4.3z" fill="#95b1bc"/><path d="M.4 26.8c12 11.4 34-14.3 21.4-23.5-1.4-1-3.1 1-1.7 2 9.7 7-8.5 28.4-17.9 19.4-1.3-1.2-3 .8-1.8 2z" fill="#90a1ad"/></g><g><path d="M67.5 4.3s18-1.5 19.6 21.4c0 0-7.9 7.8-17.8-4S67.5 4.3 67.5 4.3z" fill="#95b1bc"/><path d="M88 26.8C76 38.2 54 12.5 66.6 3.3c1.4-1 3.1 1 1.7 2-9.7 7 8.5 28.4 18 19.4 1.2-1.2 3 .8 1.7 2z" fill="#90a1ad"/></g></svg>

            <svg className="svg-legs-1-svg" version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 205 205"><path d="M87 82c3-5 7-13 8-28l1-40c0-2-1-4-3-4L49 0a4 4 0 0 0-5 4 915 915 0 0 0 9 93l-2 6c-3 9-6 18-5 29 1 12 7 31 9 38 1 3-1 7-2 8-3 4-9 12-9 17v3a7 7 0 0 0 7 7h27a7 7 0 0 0 7-8l-5-18c-3-6 1-37 5-47 5-8 3-20 1-30l-1-12 2-8zm-17 26c-8 0-11-6-12-9a3 3 0 0 1 6-1c0 1 1 4 6 4 4 0 4-3 4-3a3 3 0 0 1 6 0c0 3-2 9-10 9zm91 87c0-5-6-13-9-17 0-1-3-5-2-8 2-7 8-26 9-38 1-11-2-20-5-29l-1-6c-2-6 0-16 2-27l2-15a915 915 0 0 0 3-54l-4-1-44 10c-2 0-3 2-3 4l1 40c1 15 5 23 8 28l2 8c1 3 0 7-1 12-1 10-3 22 1 30 5 10 8 41 5 47l-5 18a7 7 0 0 0 7 8h27a7 7 0 0 0 7-7v-3zm-14-96c-1 3-3 9-12 9-8 0-10-6-10-9a3 3 0 0 1 6 0c0 1 0 3 4 3 5 0 6-3 6-3a3 3 0 0 1 6 0z"/></svg>
            <svg className="svg-legs-2-svg" height="683" viewBox="-92 0 512 512" width="683" xmlns="http://www.w3.org/2000/svg"><path d="M297 44H31V13c0-3 3-5 5-5h256c3 0 5 2 5 5zm0 0" fill="#e8dacd"/><path d="M297 44h-30V8h25c3 0 5 2 5 5zm0 0" fill="#e5ccb7"/><path d="M104 504H30c-7 0-13-5-13-12v-22h99v22c0 7-5 12-12 12zm0 0M300 504h-74c-7 0-12-5-12-12v-22h99v22c0 7-6 12-13 12zm0 0" fill="#e8dacd"/><path d="M313 470v22c0 7-6 12-13 12h-21c7 0 12-5 12-12v-22zm0 0M116 470v22c0 7-5 12-12 12H83c6 0 12-5 12-12v-22zm0 0" fill="#e5ccb7"/><path d="M317 93l-20-49H31L11 93c-2 6-3 12-3 19v347c0 6 4 11 10 11h97c6 0 10-5 10-11l16-106 22-176c0-2 2-2 2 0l23 176 15 106c0 6 5 11 11 11h96c6 0 11-5 11-11V112c0-7-1-13-4-19zm0 0" fill="#f79341"/><path d="M321 112v347c0 6-5 11-11 11h-19V114c0-7-1-13-3-19l-21-51h30l20 49c3 6 4 12 4 19zm0 0" fill="#ef7e29"/><path d="M208 129h-12c-4 0-8-4-8-8V33l2-2h24l2 2v88c0 4-3 8-8 8zm0 0M132 129h-12c-4 0-8-4-8-8V33l2-2h24c2 0 2 1 2 2v88c1 4-3 8-8 8zm0 0" fill="#28c6db"/><path d="M132 129h-6V31h12c2 0 2 1 2 2v88c1 4-3 8-8 8zm0 0M208 129h-6V31h12l2 2v88c0 4-3 8-8 8zm0 0" fill="#17b5c1"/><path d="M324 90l-19-48V13c0-7-6-13-13-13H124a8 8 0 1 0 0 15h166v21h-66v-3c0-5-5-10-10-10h-24c-5 0-9 5-9 10v3h-33v-3c0-5-4-10-10-10h-24c-5 0-9 5-9 10v3H39V15h39a7 7 0 1 0 0-15H36c-6 0-12 6-12 13v29L4 90c-3 7-4 14-4 22v347c0 7 4 13 10 16v17c0 11 9 20 20 20h74c11 0 20-9 20-20v-17c5-3 9-9 9-16l15-105 16-127 14 107a7 7 0 1 0 15-2l-20-156c-1-5-4-8-9-8-4 0-8 3-8 8l-23 176-15 106v1c0 2-1 3-3 3H18c-2 0-3-1-3-3V112c0-6 1-11 3-16l18-45h69v70c0 9 7 16 15 16h12c9 0 16-7 16-16V51h33v70c0 9 7 16 15 16h12c9 0 16-7 16-16V51h68l18 45c3 5 4 10 4 16v347c0 2-2 3-4 3h-96c-2 0-3-1-3-3v-1l-12-81a8 8 0 0 0-15 2l12 80c0 8 4 14 10 16v17c0 11 9 20 20 20h74c11 0 20-9 20-20v-18c5-3 9-9 9-15V112c0-8-2-15-5-22zM109 477v15c0 3-2 5-5 5H30c-3 0-5-2-5-5v-15zm24-356l-1 1h-12V38h13zm76 0l-1 1h-12V38h13v83zm96 371c0 3-2 5-5 5h-74c-3 0-5-2-5-5v-15h84zm0 0"/></svg>
            <svg className="svg-legs-3-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 95"><path fill="#c8d3d7" d="M55 1v60H32V21h-8v40H1V1h54z"/><path fill="#259bc9" d="M21 89H5L1 61h23l-3 28z"/><path d="M5 88h15a3 3 0 0 1 3 3v4H2v-4a3 3 0 0 1 3-3z" fill="#32b7e0"/><path fill="#259bc9" d="M52 89H36l-4-28h23l-3 28z"/><path d="M37 88h14a3 3 0 0 1 3 3v4H33v-4a3 3 0 0 1 4-3z" fill="#32b7e0"/><path fill="#259bc9" d="M1 40h23v9H1zM32 40h23v9H32z"/><g fill="#fff"><path d="M1 44zM24 45H1a1 1 0 1 1 0-2h23a1 1 0 1 1 0 2z"/></g><g fill="#fff"><path d="M32 44zM55 45H32a1 1 0 1 1 0-2h23a1 1 0 0 1 0 2z"/></g><g fill="#fff"><path d="M55 1zM55 2H1a1 1 0 0 1-1-1 1 1 0 0 1 1-1h54a1 1 0 0 1 0 2z"/></g></svg>
            <svg className="svg-legs-4-svg" xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 590 590"><path d="M36 326L15 458h240l31-132zm0 0" fill="#fab349"/><path d="M71 0h448v92H71zm0 0M0 559l224 31 31-132H15zm0 0" fill="#61bdc7"/><path d="M519 92H71L56 193h478zm0 0" fill="#995c32"/><path d="M534 193H56L36 326h250l9-41 9 41h250zm0 0" fill="#ed5a2d"/><path d="M335 458l31 132 224-31-15-101zm0 0" fill="#61bdc7"/><path d="M554 326H304l31 132h240zm0 0" fill="#fab349"/><path d="M6 520l228 28 4-20L9 500zm0 0M581 500l-229 28 4 20 228-28zm0 0" fill="#69ccd7"/><path d="M335 458l31 132 224-31-15-101zm0 0" fill="#4eacb5"/><path d="M554 326H304l31 132h240zm0 0" fill="#f2a32c"/><path d="M581 500l-229 28 4 20 228-28zm0 0" fill="#69ccd7"/><path d="M534 193L519 92H394L292 193zm0 0" fill="#8a532d"/><path d="M292 193L160 326h126l9-41 9 41h250l-20-133zm0 0" fill="#e04e2d"/><path d="M448 0h71v92h-71zm0 0" fill="#4eacb5"/><path d="M254 31h21v203h-21zm0 0M305 31h21v203h-21zm0 0" fill="#f0ece9"/></svg>
            <svg className="svg-legs-5-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 139 193.7"><g fill="#22272e"><path d="M137.8 187.2l-40-2.8c2-2 3-6 3.4-10.1a82.1 82.1 0 0 0 .4-11.5s26.4-4 26.4 0c0 2.7 1.5 7.2 3.3 11.5a126.8 126.8 0 0 0 6.5 12.8z"/><path d="M138.5 188.9a5.4 5.4 0 0 1 0 .5 7.7 7.7 0 0 1-1.6 4h-42a7.6 7.6 0 0 1-1.5-4 3.7 3.7 0 0 1 0-.4c0-6.2 10-11.3 22.5-11.3s22.6 5 22.6 11.2z"/></g><path d="M101.2 174.8a91 91 0 0 0 .4-12s26.4-4 26.4 0c0 2.7 1.5 7.4 3.3 12z" fill="#617085"/><path d="M138.5 189.2a7.7 7.7 0 0 1-1.6 4h-42a7.6 7.6 0 0 1-1.5-4z" fill="#515d6e" stroke="#515d6e" stroke-miterlimit="10"/><path d="M123.5 179.6c-3.1-2.7-10.5-1.8-14 0-.5.3 0 .8.6.7 2.2-.2 4-1 6.2-1 2.5 0 4.3.8 6.6 1 .5 0 .9-.5.6-.7zM122.2 182.3c-3.5-1.4-10.3-2-13.3.2-.5.3 0 .8.6.7a38 38 0 0 1 6.5-.5c2.1 0 3.9 1 6 .7.8-.2.8-.8.2-1z" fill="#515d6e"/><g><path d="M70.2 188.6a10.4 10.4 0 0 1-1.2 3.6s-63.6 1.7-68 .4c-.8-.2-.6-.6.3-1.1A10 10 0 0 1 2 190c2.2-3.4 8.4-8.6 25.5-8l7-2.2a9 9 0 0 0 4.9-4.8c2.5-5 3-11.8 2.5-13.2l27 .2s1 6.1 1.4 13a62.7 62.7 0 0 1-.2 13.6z" fill="#22272e"/><path d="M39.5 175.5c2.5-5.4 3-12 2.5-13.5l27 .3s1 5.9 1.4 13.2z" fill="#617085"/><path d="M70.2 188.6a10.4 10.4 0 0 1-1.2 3.6s-63.6 1.7-68 .4c-.8-.2-.6-.6.3-1.1A10 10 0 0 1 2 190c11 0 51 0 68-1.4z" fill="#515d6e" stroke="#515d6e" stroke-miterlimit="10"/><path d="M34.3 183c-1-2-6-2.7-8.7-1.6-.3.2-.4.4 0 .5 1.1.4 2.5.2 3.8.3s2 .9 3 1.3c.8.4 2.2 0 1.9-.6zM43.6 180.5c-.8-1.2-3.3-2.2-5.7-2.4-1.7 0-5.4.3-5 1.7l.5.1c1.1 0 2-.4 3.2-.3a7.6 7.6 0 0 1 3.5 1c.9.4 1.1 1 2.4 1 1 .1 1.3-.7 1-1z" fill="#515d6e"/></g><g><path d="M133.3 171.5H98.4L86 39.8c-1.2 0-2.4-.2-3.5-.3l-10 132.7h-35C37.2 120.8 42 1.3 41.3 0l74.5.4 9.9.1a63.3 63.3 0 0 1 1.8 7.6c7.2 38.5 6 148 5.9 163.4z" fill="#22272e"/><path d="M127.5 8h-10.6a76.7 76.7 0 0 0-.9-7.6l9.7.1a62.6 62.6 0 0 1 1.8 7.5zM107.2.3l-43-.2.4 8.5 43.4-.5c-.9-2.3-.8-5-.8-7.8zM53.8.1H41.4v8.8L55 8.7A18.7 18.7 0 0 1 53.8.1z" fill="#8c4c09"/><path fill="#c28c4b" d="M73.8.1h21.5v8.7H73.8z"/></g></svg>
          </div>

          
          <div className="completed">
            <p>preview:</p>
            <div className="helmets">

            </div>
            <div className="torsos">

            </div>
            <div className="legs">

            </div>

          </div>


          <div className="input-field-submit">
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
