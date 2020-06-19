// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// values to keep track of the number of letters typed, which quote to use. etc. Don't change these values.

document.addEventListener('DOMContentLoaded',function(event){
  function toggleButton() {
    document.getElementById("leftarrow").className = 'show'; 
    document.getElementById("rightarrow").className = 'show'; 
    document.getElementById("but1").className = 'btn btn-dark btn-lg show'; 
    document.getElementById("but2").className = 'btn btn-dark btn-lg show'; 
    document.getElementById("navbar").className = 'show'; 
}
  // array with texts to type in typewriter
  var dataText = [ "Hello! My name is Amita Gondi.", "The whole covid-19 situation sucks. A lot.", "But that gave me an opportunity to blow the dust off of the old travel albums. Metaphorically.", "Thus, presenting", "Amita's Travel Album Circa 2001"];
  
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        toggleButton()
     }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});

