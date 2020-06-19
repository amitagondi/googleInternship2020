/*var countryElements = document.getElementById('countries').childNodes;
    var countryCount = countryElements.length;
    for (var i = 0; i < countryCount; i++) {
      countryElements[i].onclick = function() {
        alert('You clicked on ' + this.getAttribute('data-name'));
      }
    }
    */
document.getElementById("IN").onclick = function()  {
  document.getElementById("IN").innerHTML = "YOU CLICKED ME!";
}