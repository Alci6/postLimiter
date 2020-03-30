
// Copy Text Function
function copyF() {
  /* Get the text field */
  var copyText = document.getElementById("inputText");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 9999999999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* feedback */
  M.toast({html: "text copied to clipboard! ✌"})
}

 // Change MaxT (Set Button)
function maxT(){
  var newLimit = document.getElementById('characterLimit').value;
  inputText.maxLength = newLimit;
  M.toast({html: "👉 the new character limit is " + inputText.maxLength});
  inputText.setAttribute("data-length", newLimit);

}

// switch on/off effect
function maxSwitch(){
  var newLimit = document.getElementById('characterLimit').value;

  var sLimiterBtn = document.getElementById("limiterBtn").checked;

  if (sLimiterBtn == true) {
    inputText.maxLength = newLimit;
    inputText.setAttribute("data-length", newLimit);


  }else if (sLimiterBtn == false){
    inputText.maxLength = 9999999999;
    inputText.setAttribute("data-length", newLimit);

  }
}

// change radio button

function radioLimit(socialNetName){
  document.getElementById("characterLimit").value = socialNetName;
  var newLimit = document.getElementById('characterLimit').value;
  inputText.maxLength = newLimit;
  M.toast({html: "👉 the new character limit is " + inputText.maxLength});
  inputText.setAttribute("data-length", newLimit);
}


// End Load
document.addEventListener('DOMContentLoaded', function () {

  // charactes counter

    var textNeedCount = document.querySelectorAll('#inputText');
    M.CharacterCounter.init(textNeedCount);


  // sidenav

    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
      });
