import React, { Component } from 'react';

class MergeSvgs extends Component {

  // merge svg project function
saveSvg(svgElement, name) {
  //svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  var svgData = svgElement.outerHTML;
  var preface = '<?xml version="1.0" standalone="no"?>\r\n';
  var svgBlob = new Blob([preface, svgData], {type:"image/svg+xml;charset=utf-8"});
  var svgUrl = URL.createObjectURL(svgBlob);
  var downloadLink = document.createElement("a");
  downloadLink.href = svgUrl;
  downloadLink.download = name;
  //document.body.appendChild(downloadLink);
  //downloadLink.click();
  //document.body.removeChild(downloadLink);
}

  

clickCompile = (e) => {
  //change 3 svgs into 1
  // = document.querySelectorAll("#svg-items");
  const svgPack = document.getElementsByClassName("svg-item");
  
  const svgPants = svgPack[0];
  const svgChest = svgPack[1];
  const svgHead = svgPack[2];

  //creating a parent SVG element
  const downloadLink = document.createElement("svg");
  downloadLink.setAttribute("id", "svgDownload");
  downloadLink.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  downloadLink.setAttribute("viewBox", "0 0 500 500");
   
  //reading the svg file and grabbing svg tag
  const storedSVGHelmet = svgHead.contentDocument.getElementsByTagName("svg")[0];
  const storedSVGChest = svgChest.contentDocument.getElementsByTagName("svg")[0];
  const storedSVGPants = svgPants.contentDocument.getElementsByTagName("svg")[0];
   
  //cloning the svg tag and storing in new variable
  const cloneHelmet = storedSVGHelmet.cloneNode(true);
  const cloneChest = storedSVGChest.cloneNode(true);
  const clonePants = storedSVGPants.cloneNode(true); // <svg xmlns="..."> </svg>
  

//store all 3 svgs in new created elements
downloadLink.appendChild(cloneHelmet); 
downloadLink.appendChild(cloneChest); 
downloadLink.appendChild(clonePants);
console.log(downloadLink);
console.log(downloadLink.id);
  

//save file
function saveSvg(svgEl, name) {
  
  const svgData = svgEl.outerHTML;
  const preface = '<?xml version="1.0" standalone="no"?>\r\n';
  const svgBlob = new Blob([preface, svgData], {type:"image/svg+xml;charset=utf-8"});
  const svgUrl = URL.createObjectURL(svgBlob);
  const downloadhref = document.createElement("a");
  downloadhref.href = svgUrl;
  downloadhref.download = name;
  document.body.appendChild(downloadhref);
  downloadhref.click();
  document.body.removeChild(downloadhref);
}
saveSvg(downloadLink, 'hero.svg');


  }
  
  

  render() {
    return(
      <button className="merge-svg-button" onClick={this.clickCompile}>merge set & download svg</button>
    )
  }

  }
  export default MergeSvgs