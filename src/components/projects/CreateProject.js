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
import legs1 from '../svg/legs/legs1.svg'
import legs2 from '../svg/legs/legs2.svg'


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
    const completed = document.getElementsByClassName("completed")[0]; //merged all svgs

    //change to string "svg-helmets or svg-torsos" also remove any number
    const myNewItem = currentIcon.split('s-').join('').replace(/[0-9]/g, ''); 
    


    // Check if we click on helmet or torso or legs
    if(myNewItem == 'svg-helmet'){  //HELMET

        //delete previous helmet if there is
      if(parentHelmet.hasChildNodes()){
        parentHelmet.removeChild(parentHelmet.firstChild);
      }
      
        //add helmet-item to helmets complete svg
      parentHelmet.appendChild(currentTargetCloned); 
        //displaying - removing display: none; css
        
    } else 
    if (myNewItem == 'svg-torso'){  //TORSO
      if(parentTorsos.hasChildNodes()){
        parentTorsos.removeChild(parentTorsos.firstChild);
      }
      parentTorsos.appendChild(currentTargetCloned); 
    } else
    if (myNewItem == 'svg-leg'){  //LEGS
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

    const { auth, projError } = this.props;
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
              <label className="input-title-text" htmlFor="title">Hero name (at least 2 chars)</label>
              <input className="input-title-textfield" type="text" id="title" onChange={this.handleChange} />
            </div>

            <div className="input-field">
              <label maxLength="15" className="input-title-text" htmlFor="content">Hero description (at least 5 chars)</label>
              <textarea maxLength="75" className="input-title-textfield textfield" id="content" onChange={this.handleChange}></textarea>
            </div>
          </div>


          
          <div className="hero-accessories">

            <p>choose helmet</p>
            <div className="input-field">
                <label className="svg-helmets-1" onClick={this.clickIcon}>
                  <img className="svg-icons" src={head1} />
                  <input id="svg1" type="radio" src={head1} name="head-radio" />
                </label>
              
                <label className="svg-helmets-2" onClick={this.clickIcon}>
                  <img className="svg-icons" src={head2} />
                  <input id="svg1" type="radio" src={head2} name="head-radio" />
                </label>
            </div>


            <p>choose chest</p>
            <div className="input-field">
              <label className="svg-torsos-1" onClick={this.clickIcon}>
                <img className="svg-icons" src={chest1} />
                <input id="svg2" type="radio" src={chest1} name="chest-radio"/>
              </label>
   
              <label className="svg-torsos-2" onClick={this.clickIcon}>
                <img className="svg-icons" src={chest2} />
                <input id="svg2" type="radio" src={chest2} name="chest-radio"/>
              </label>
            </div>


          <p>choose legs</p>
          <div className="input-field">
              <label className="svg-legs-1" onClick={this.clickIcon}>
                <img className="svg-icons" src={legs1} />
                <input id="svg3" type="radio" src={legs1} name="legs-radio"/>
              </label>

              <label className="svg-legs-2" onClick={this.clickIcon}>
                <img className="svg-icons" src={legs2} />
                <input id="svg3" type="radio" src={legs2} name="legs-radio"/>
              </label>
            </div>
          </div>

          <div className="all-svg-container">
            <svg className="svg-helmets-1-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55.996 55.996"><path d="M29.205 41h-2c-9.389 0-17-7.611-17-17h36c0 9.389-7.611 17-17 17z" fill="#d2b467"/><path d="M48.514 23.779c-.814.3-1.516.221-1.516.221h-.793c.264 4.298-2.331 8.393-5.628 11.807-6.744 6.983-18 6.983-24.743 0-3.298-3.414-5.893-7.509-5.629-11.807H8.998s-.485.06-1.116-.093l-.467 4.207a17.121 17.121 0 0 0 0 3.773l.379 3.408a17.075 17.075 0 0 0 4.899 10.192L21.205 54s1.327 1.529 2.817 1.954c.091.026.183-.048.183-.143v-2.337c0-.814.66-1.474 1.474-1.474h4.052c.814 0 1.474.66 1.474 1.474v2.373c0 .083.069.154.152.149C33.137 55.89 35.205 54 35.205 54l8.513-8.513a17.075 17.075 0 0 0 4.899-10.192l.379-3.408a17.121 17.121 0 0 0 0-3.773l-.482-4.335zM46.573 10.206a4.385 4.385 0 0 0-1.247-2.403c-.865-.854-1.689-1.749-2.315-2.792l-.835-1.392a4.39 4.39 0 0 0-2.813-2.027L36.11.868a36.428 36.428 0 0 0-15.81 0l-3.253.723a4.39 4.39 0 0 0-2.813 2.027l-.835 1.392c-.626 1.043-1.449 1.938-2.315 2.792a4.392 4.392 0 0 0-1.247 2.403L9.205 14h38l-.632-3.794z" fill="#464f5d"/><path d="M46.998 14l2.782 3.478c1.152 1.439 1.386 3.5.354 5.028C48.958 24.245 46.998 24 46.998 24h-38s-1.96.245-3.136-1.494c-1.032-1.527-.798-3.588.354-5.028L8.998 14h38z" fill="#4e5765"/><path d="M47.591 34.21l-9.156 7.122-4.098 7.172a1 1 0 0 0 1.736.992l3.902-6.828 8.517-6.624c.039-.25.096-.497.124-.749l.125-1.126a.991.991 0 0 0-1.15.041zM17.926 41.279L8.76 35.168a.983.983 0 0 0-.986-.053l.02.18c.069.619.173 1.233.308 1.838l8.383 5.589 3.889 5.833a.995.995 0 0 0 1.386.277 1 1 0 0 0 .277-1.387l-4.111-6.166z" fill="#5c697c"/><path d="M35.653 53.552l1.473-1.473-6.194-11.27c-.719.114-1.442.184-2.168.208l6.889 12.535zM18.319 51.114l1.46 1.46 6.855-11.606a17.404 17.404 0 0 1-2.124-.335l-6.191 10.481z" fill="#5c697c"/><g fill="#5c697c"><path d="M41.209 8.877c-.991-1-2.276-1.597-3.822-1.797l1.925-5.501-1.967-.437L32.845 14h2.12l1.737-4.963c1.285.087 2.328.489 3.076 1.238 1.45 1.452 1.464 3.712 1.464 3.735l2 .014c.001-.126.004-3.092-2.033-5.147zM17.275 1.54l1.76 5.574c-1.534.203-2.811.799-3.797 1.794-2.037 2.055-2.034 5.021-2.033 5.146l2-.014c0-.023.014-2.283 1.464-3.735.73-.731 1.742-1.131 2.985-1.231L21.209 14h2.096L19.234 1.105l-1.959.435z"/></g><path d="M16.52 24c2.57 8.555 6.405 14 10.685 14h2c4.28 0 8.115-5.445 10.685-14H16.52z" fill="#dfc57d"/></svg>
            <svg className="svg-helmets-2-svg" height="504pt" viewBox="-16 0 504 504" width="504pt" xmlns="http://www.w3.org/2000/svg"><path d="m456 144v232c0 4.40625-3.609375 8-8 8h-16v-167.992188l-8-8.007812h-376l-8 8.007812v167.992188h-16c-4.40625 0-8-3.59375-8-8v-232c0-79.59375 64.390625-144 144-144h152c79.59375 0 144 64.40625 144 144zm0 0" fill="#656d78"/><path d="m432 384v64c0 24-24 56-196 56s-196-32-196-56v-231.992188l8-8.007812h376l8 8.007812zm0 0" fill="#5d9cec"/><path d="m472 200v80c0 4.40625-3.609375 8-8 8h-8v-96h8c4.390625 0 8 3.59375 8 8zm0 0" fill="#545c66"/><path d="m16 192v96h-8c-4.40625 0-8-3.59375-8-8v-80c0-4.40625 3.59375-8 8-8zm0 0" fill="#545c66"/><path d="m155.71875 501.015625c18.722656 1.59375 40.394531 2.609375 65.488281 2.886719l79.28125-295.902344h-66.25zm0 0" fill="#87bcf4"/><path d="m308.769531 208-79.296875 295.953125c2.183594.015625 4.296875.046875 6.527344.046875.59375 0 1.144531-.015625 1.734375-.015625l79.3125-295.984375zm0 0" fill="#87bcf4"/><g fill="#434a54"><path d="m138 147.351562c-2.207031 0-4-1.792968-4-4v-56c0-2.207031 1.792969-4 4-4s4 1.792969 4 4v56c0 2.207032-1.792969 4-4 4zm0 0"/><path d="m146 123.351562c-2.207031 0-4-1.792968-4-4 0-2.207031 1.792969-4 4-4 6.617188 0 12-5.382812 12-12 0-6.617187-5.382812-12-12-12-2.207031 0-4-1.792968-4-4 0-2.207031 1.792969-4 4-4 11.03125 0 20 8.96875 20 20s-8.96875 20-20 20zm0 0"/><path d="m146 123.351562h-8c-2.207031 0-4-1.792968-4-4 0-2.207031 1.792969-4 4-4h8c2.207031 0 4 1.792969 4 4 0 2.207032-1.792969 4-4 4zm0 0"/><path d="m146 91.351562h-8c-2.207031 0-4-1.792968-4-4 0-2.207031 1.792969-4 4-4h8c2.207031 0 4 1.792969 4 4 0 2.207032-1.792969 4-4 4zm0 0"/><path d="m202 135.351562c-2.207031 0-4-1.792968-4-4v-32.007812c0-2.207031 1.792969-4 4-4s4 1.792969 4 4v32.007812c0 2.207032-1.792969 4-4 4zm0 0"/><path d="m178 135.351562c-2.207031 0-4-1.792968-4-4v-32.007812c0-2.207031 1.792969-4 4-4s4 1.792969 4 4v32.007812c0 2.207032-1.792969 4-4 4zm0 0"/><path d="m222 147.34375c-2.207031 0-4-1.792969-4-4v-55.992188c0-2.207031 1.792969-4 4-4s4 1.792969 4 4v55.992188c0 2.207031-1.792969 4-4 4zm0 0"/><path d="m238 147.351562h-16c-2.207031 0-4-1.792968-4-4 0-2.207031 1.792969-4 4-4h16c2.207031 0 4 1.792969 4 4 0 2.207032-1.792969 4-4 4zm0 0"/><path d="m258 147.351562c-2.207031 0-4-1.792968-4-4v-56c0-2.207031 1.792969-4 4-4s4 1.792969 4 4v56c0 2.207032-1.792969 4-4 4zm0 0"/><path d="m317.984375 147.351562c-2.207031 0-4-1.792968-4-4v-56c0-2.207031 1.792969-4 4-4s4 1.792969 4 4v56c0 2.207032-1.792969 4-4 4zm0 0"/><path d="m301.984375 103.34375c-2.207031 0-4-1.792969-4-4 0-4.40625-3.585937-7.992188-8-7.992188-4.410156 0-7.984375 3.585938-7.984375 7.992188 0 2.207031-1.792969 4-4 4s-4-1.792969-4-4c0-8.824219 7.167969-15.992188 15.984375-15.992188 8.824219 0 16 7.167969 16 15.992188 0 2.207031-1.792969 4-4 4zm0 0"/><path d="m201.984375 103.34375c-2.207031 0-4-1.792969-4-4 0-4.40625-3.578125-7.992188-7.984375-7.992188-4.414062 0-8 3.585938-8 7.992188 0 2.207031-1.792969 4-4 4s-4-1.792969-4-4c0-8.824219 7.175781-15.992188 16-15.992188 8.816406 0 15.984375 7.167969 15.984375 15.992188 0 2.207031-1.792969 4-4 4zm0 0"/><path d="m190 147.335938c-8.824219 0-16-7.167969-16-15.984376 0-2.207031 1.792969-4 4-4s4 1.792969 4 4c0 4.410157 3.585938 7.984376 8 7.984376 4.40625 0 7.984375-3.574219 7.984375-7.984376 0-2.207031 1.792969-4 4-4s4 1.792969 4 4c0 8.816407-7.167969 15.984376-15.984375 15.984376zm0 0"/><path d="m289.984375 147.34375c-8.824219 0-16-7.175781-16-16 0-2.207031 1.792969-4 4-4s4 1.792969 4 4c0 4.417969 3.582031 8 8 8 4.414063 0 8-3.582031 8-8 0-2.207031 1.792969-4 4-4s4 1.792969 4 4c0 8.824219-7.175781 16-16 16zm0 0"/><path d="m277.984375 135.34375c-2.207031 0-4-1.792969-4-4l.015625-32c0-2.207031 1.792969-4 4-4s4 1.792969 4 4l-.015625 32c0 2.207031-1.792969 4-4 4zm0 0"/><path d="m334 91.351562h-16.015625c-2.207031 0-4-1.792968-4-4 0-2.207031 1.792969-4 4-4h16.015625c2.207031 0 4 1.792969 4 4 0 2.207032-1.792969 4-4 4zm0 0"/><path d="m334 147.351562h-16.015625c-2.207031 0-4-1.792968-4-4 0-2.207031 1.792969-4 4-4h16.015625c2.207031 0 4 1.792969 4 4 0 2.207032-1.792969 4-4 4zm0 0"/><path d="m329.984375 119.34375h-12c-2.207031 0-4-1.792969-4-4s1.792969-4 4-4h12c2.207031 0 4 1.792969 4 4s-1.792969 4-4 4zm0 0"/></g><path d="m56 216c0 4.417969-3.582031 8-8 8s-8-3.582031-8-8 3.582031-8 8-8 8 3.582031 8 8zm0 0" fill="#5d9cec"/><path d="m432 216c0 4.417969-3.582031 8-8 8s-8-3.582031-8-8 3.582031-8 8-8 8 3.582031 8 8zm0 0" fill="#5d9cec"/></svg>
            <svg className="svg-torsos-1-svg" version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M473 452c0 12-1 23-4 34h-30l4-34c0-17-1-34-4-51-9-51-51-111-51-111v-51c0-8-1-17-3-25l-9-39c-1-13 1-26 5-39 8-26 21-49 29-75 5-17 9-35 12-52h30c-2 17-6 35-11 52-8 26-22 49-30 75-4 13-6 26-5 39 2 13 5 26 10 39l2 25v51s43 60 51 111c3 17 4 34 4 51z" fill="#00838f"/><path d="M443 452l-4 34H295a53 53 0 0 1-54 15c-10-2-18-7-25-15H43a265 265 0 0 1 0-85c8-51 51-111 51-111v-51c0-8 0-17 2-25 5-13 8-26 10-39 0-13-1-26-5-39-8-26-22-49-30-75-5-17-9-35-11-52h362c-3 17-7 35-12 52-8 26-21 49-29 75-4 13-6 26-5 39l9 39c2 8 3 17 3 25v51s42 60 51 111c3 17 4 34 4 51z" fill="#00bcd4"/><path fill="#02a9f4" d="M94 239h137v51H94z"/><path fill="#0377bc" d="M281 239h137v51H281z"/><g fill="#02a9f4"><path d="M281 239h111v51H281zM216 486H43c-3-11-4-22-4-34h166v5c0 11 4 21 11 29z"/></g><path fill="#00bcd4" d="M230 239h51v51h-51z"/><path d="M473 452c0 12-1 23-4 34H295a44 44 0 0 0 12-34h166z" fill="#0377bc"/><path d="M444 452c0 12-2 23-4 34H295a44 44 0 0 0 12-34h137z" fill="#02a9f4"/><path d="M411 136c-4 13-6 26-5 39 2 13 5 26 10 39l2 25H94c0-8 0-17 2-25 5-13 8-26 10-39 0-13-1-26-5-39-8-26-22-49-30-75-5-17-9-35-11-52h392c-2 17-6 35-11 52-8 26-22 49-30 75z" fill="#ffe0b2"/><path d="M386 136c-4 13-6 26-6 39 2 13 6 26 10 39 2 8 3 17 2 25H94c0-8 0-17 2-25 5-13 8-26 10-39 0-13-1-26-5-39-8-26-22-49-30-75-5-17-9-35-11-52h367c-3 17-7 35-12 52-8 26-22 49-29 75z" fill="#ffecb3"/><path d="M34 488c1 4 5 7 9 7h170c24 23 62 23 86 0h170c4 0 8-3 9-7a180 180 0 0 0 3-37c1-17 0-34-3-51-8-48-44-101-51-113v-48a116 116 0 0 0-7-40l-6-24c0-13 2-25 5-36 4-13 9-25 15-37a345 345 0 0 0 27-92V9l-1-2V6l-1-2V3l-2-1-1-1-2-1h-1H60a9 9 0 0 0-9 10 374 374 0 0 0 27 92c6 12 10 24 14 37 4 11 6 23 5 36l-5 24-4 13-3 27v48c-8 12-43 65-51 113a272 272 0 0 0 0 88zm14-27h149c0 6 2 11 4 17H50l-2-17zm263 17c2-6 4-11 4-17h149l-2 17H311zm-72-196v-35h34v35h-34zm-137 0v-35h120v35H102zm188-35h119v35H290v-35zM94 95a328 328 0 0 1-24-78h372a348 348 0 0 1-24 78c-6 12-11 25-15 39-4 13-6 27-6 42 1 10 4 19 7 28l3 12 2 14H103l1-14 4-12c3-9 5-18 6-28 1-14-1-29-5-42-4-14-10-27-15-39zM51 402c7-41 38-90 47-103h149v85a9 9 0 0 0 17 0v-85h150c8 13 40 62 47 103l3 42H307h-2l-2 1-1 1-2 2-1 1v2l-1 1v1l1 4c0 8-4 17-10 24a46 46 0 0 1-66 0 36 36 0 0 1-10-28v-1-1-2l-1-1-2-2-1-1-2-1h-1H47c0-14 2-28 4-42z"/><path d="M256 205c5 0 8-4 8-9v-8a9 9 0 0 0-17 0v8c0 5 4 9 9 9zM145 154a9 9 0 0 0 0 17c21 0 39 15 43 35a9 9 0 0 0 17-3c-6-29-31-49-60-49zM367 154c-29 0-54 20-60 49a9 9 0 0 0 17 3c4-20 22-35 43-35a9 9 0 1 0 0-17zM221 120c-54 7-78-14-79-15a9 9 0 0 0-12 12c1 1 22 21 68 21 9 0 17 0 25-2a9 9 0 1 0-2-16zM369 105c-1 1-24 22-78 15a9 9 0 0 0-2 16c8 2 16 2 25 2 45 0 66-20 67-21a9 9 0 0 0-12-12zM153 85c9 0 17-3 22-9 6-5 13-8 21-8a33 33 0 0 0 34-34 9 9 0 1 0-17 0 16 16 0 0 1-17 17c-11 0-23 4-31 12-5 4-7 5-12 5-7-1-14-5-17-12a9 9 0 1 0-16 8c7 12 19 20 33 21zM316 68c7 0 15 3 20 8 6 6 14 9 22 9 14-1 27-9 34-21a9 9 0 0 0-16-8c-3 7-10 11-18 12-4 0-6-1-11-5-8-8-20-12-31-12a16 16 0 0 1-17-17 9 9 0 1 0-18 0 33 33 0 0 0 35 34z"/></svg>
            <svg className="svg-torsos-2-svg" height="384pt" viewBox="-1 0 384 384.008" width="384pt" xmlns="http://www.w3.org/2000/svg"><path d="m309.363281 193.289062 1.441407.71875c6.480468 14.640626 20.480468 47.28125 18.160156 79.839844-.960938 13.839844-3.839844 84.558594-6.960938 94.160156h-253.917968c-3.121094-9.601562-6-80.320312-6.960938-94.160156-2.320312-32.558594 12.71875-66.71875 19.199219-81.28125l-32.320313-65.4375-32-32.082031v-79.039063h350.640625v79.441407l-24.558593 31.679687zm0 0" fill="#4dd0e1"/><path d="m379.292969 105.246094c2.167969-2.804688 3.351562-6.253906 3.351562-9.804688v-79.441406c0-8.832031-7.167969-16-16-16h-350.640625c-8.832031 0-15.99999975 7.167969-15.99999975 16v79.039062c0 4.234376 1.67968775 8.296876 4.67187475 11.296876l30.152344 30.230468 27.871094 56.355469c-7.457031 17.390625-19.816407 50.0625-17.535157 82.03125.214844 3.167969.535157 9.382813.945313 17.160156 2.847656 54.765625 4.429687 73.648438 6.757813 80.832031 2.144531 6.589844 8.289062 11.0625 15.21875 11.0625h253.917968c6.929688 0 13.082032-4.472656 15.214844-11.0625 2.328125-7.175781 3.90625-26.066406 6.761719-80.832031.40625-7.777343.726562-13.984375.945312-17.136719 2.382813-33.542968-10.3125-66.234374-17.320312-82.488281l28.101562-56.824219zm-66.289063 167.496094c-.222656 3.273437-.558594 9.691406-.976562 17.714843-.773438 14.839844-2.335938 44.808594-3.839844 61.550781h-95.839844c1.695313-2.542968 2.695313-5.59375 2.695313-8.871093 0-8.832031-7.167969-16-16-16h-15.839844c-8.832031 0-16 7.167969-16 16 0 3.289062 1 6.335937 2.695313 8.871093h-87.964844c-1.539063-16.894531-3.097656-46.742187-3.867188-61.550781-.414062-8.023437-.75-14.441406-.972656-17.746093-.953125-13.382813 1.644531-27.519532 5.246094-40.078126l17.488281 35.359376c2.792969 5.632812 8.457031 8.902343 14.351563 8.894531 2.382812 0 4.808593-.527344 7.089843-1.664063 7.917969-3.917968 11.160157-13.511718 7.230469-21.4375l-45.671875-92.28125 5.160156 2.464844c2.726563 1.296875 5.742188 1.800781 8.769531 1.457031l66.167969-7.769531c8.773438-1.03125 15.054688-8.976562 14.023438-17.761719-1.023438-8.773437-9.035157-15.117187-17.761719-14.023437l-61.566406 7.226562-40.226563-19.226562-25.375-25.445313v-56.417969h318.640625v57.960938l-18.886718 24.367188-39.28125 18.769531-61.558594-7.226563c-8.714844-1.078125-16.730469 5.25-17.761719 14.023438-1.03125 8.785156 5.25 16.730468 14.023437 17.761718l66.160157 7.769532c3.015625.335937 6.03125-.160156 8.769531-1.457032l5.136719-2.457031-45.65625 92.28125c-3.914063 7.917969-.671875 17.511719 7.246093 21.4375 2.28125 1.128907 4.695313 1.65625 7.082032 1.65625 5.894531 0 11.558594-3.261719 14.359375-8.902343l17.6875-35.761719c3.472656 12.402343 6.015625 26.617187 5.023437 40.511719zm0 0" fill="#012e52"/></svg>
            <svg className="svg-legs-1-svg" version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 205 205"><path d="M87 82c3-5 7-13 8-28l1-40c0-2-1-4-3-4L49 0a4 4 0 0 0-5 4 915 915 0 0 0 9 93l-2 6c-3 9-6 18-5 29 1 12 7 31 9 38 1 3-1 7-2 8-3 4-9 12-9 17v3a7 7 0 0 0 7 7h27a7 7 0 0 0 7-8l-5-18c-3-6 1-37 5-47 5-8 3-20 1-30l-1-12 2-8zm-17 26c-8 0-11-6-12-9a3 3 0 0 1 6-1c0 1 1 4 6 4 4 0 4-3 4-3a3 3 0 0 1 6 0c0 3-2 9-10 9zm91 87c0-5-6-13-9-17 0-1-3-5-2-8 2-7 8-26 9-38 1-11-2-20-5-29l-1-6c-2-6 0-16 2-27l2-15a915 915 0 0 0 3-54l-4-1-44 10c-2 0-3 2-3 4l1 40c1 15 5 23 8 28l2 8c1 3 0 7-1 12-1 10-3 22 1 30 5 10 8 41 5 47l-5 18a7 7 0 0 0 7 8h27a7 7 0 0 0 7-7v-3zm-14-96c-1 3-3 9-12 9-8 0-10-6-10-9a3 3 0 0 1 6 0c0 1 0 3 4 3 5 0 6-3 6-3a3 3 0 0 1 6 0z"/></svg>
            <svg className="svg-legs-2-svg" height="683" viewBox="-92 0 512 512" width="683" xmlns="http://www.w3.org/2000/svg"><path d="M297 44H31V13c0-3 3-5 5-5h256c3 0 5 2 5 5zm0 0" fill="#e8dacd"/><path d="M297 44h-30V8h25c3 0 5 2 5 5zm0 0" fill="#e5ccb7"/><path d="M104 504H30c-7 0-13-5-13-12v-22h99v22c0 7-5 12-12 12zm0 0M300 504h-74c-7 0-12-5-12-12v-22h99v22c0 7-6 12-13 12zm0 0" fill="#e8dacd"/><path d="M313 470v22c0 7-6 12-13 12h-21c7 0 12-5 12-12v-22zm0 0M116 470v22c0 7-5 12-12 12H83c6 0 12-5 12-12v-22zm0 0" fill="#e5ccb7"/><path d="M317 93l-20-49H31L11 93c-2 6-3 12-3 19v347c0 6 4 11 10 11h97c6 0 10-5 10-11l16-106 22-176c0-2 2-2 2 0l23 176 15 106c0 6 5 11 11 11h96c6 0 11-5 11-11V112c0-7-1-13-4-19zm0 0" fill="#f79341"/><path d="M321 112v347c0 6-5 11-11 11h-19V114c0-7-1-13-3-19l-21-51h30l20 49c3 6 4 12 4 19zm0 0" fill="#ef7e29"/><path d="M208 129h-12c-4 0-8-4-8-8V33l2-2h24l2 2v88c0 4-3 8-8 8zm0 0M132 129h-12c-4 0-8-4-8-8V33l2-2h24c2 0 2 1 2 2v88c1 4-3 8-8 8zm0 0" fill="#28c6db"/><path d="M132 129h-6V31h12c2 0 2 1 2 2v88c1 4-3 8-8 8zm0 0M208 129h-6V31h12l2 2v88c0 4-3 8-8 8zm0 0" fill="#17b5c1"/><path d="M324 90l-19-48V13c0-7-6-13-13-13H124a8 8 0 1 0 0 15h166v21h-66v-3c0-5-5-10-10-10h-24c-5 0-9 5-9 10v3h-33v-3c0-5-4-10-10-10h-24c-5 0-9 5-9 10v3H39V15h39a7 7 0 1 0 0-15H36c-6 0-12 6-12 13v29L4 90c-3 7-4 14-4 22v347c0 7 4 13 10 16v17c0 11 9 20 20 20h74c11 0 20-9 20-20v-17c5-3 9-9 9-16l15-105 16-127 14 107a7 7 0 1 0 15-2l-20-156c-1-5-4-8-9-8-4 0-8 3-8 8l-23 176-15 106v1c0 2-1 3-3 3H18c-2 0-3-1-3-3V112c0-6 1-11 3-16l18-45h69v70c0 9 7 16 15 16h12c9 0 16-7 16-16V51h33v70c0 9 7 16 15 16h12c9 0 16-7 16-16V51h68l18 45c3 5 4 10 4 16v347c0 2-2 3-4 3h-96c-2 0-3-1-3-3v-1l-12-81a8 8 0 0 0-15 2l12 80c0 8 4 14 10 16v17c0 11 9 20 20 20h74c11 0 20-9 20-20v-18c5-3 9-9 9-15V112c0-8-2-15-5-22zM109 477v15c0 3-2 5-5 5H30c-3 0-5-2-5-5v-15zm24-356l-1 1h-12V38h13zm76 0l-1 1h-12V38h13v83zm96 371c0 3-2 5-5 5h-74c-3 0-5-2-5-5v-15h84zm0 0"/></svg>
          </div>

          <p>preview:</p>
          <div className="completed">
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
