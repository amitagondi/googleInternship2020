document.addEventListener('DOMContentLoaded',function(event){
  function toggleButton() {
    document.getElementById("upArrow").className = 'show'; 
    document.getElementById("downArrow").className = 'show'; 
    document.getElementById("but1").className = 'btn btn-dark btn-lg show'; 
    document.getElementById("but2").className = 'btn btn-dark btn-lg show'; 
}
  // array with texts to type in typewriter
  var dataText = [ "Hello! My name is Amita Gondi.", 
                  "The whole covid-19 situation sucks. A lot.", 
                  "But that gave me an opportunity to blow the dust off of the old travel albums. Metaphorically.", 
                  "Thus, presenting", 
                  "Amita's Travel Album Circa 2001"];
  
  // type one text in the typwriter
  // will keep calling itself until text from array is done
  function typeWriter(text, i, fnCallback) {
    // check if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function startTextAnimation(i) {
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
