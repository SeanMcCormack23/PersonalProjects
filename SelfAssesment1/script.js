
//small function to change radio button automatically if user selects "OTHER" in preffered activity

var otherText = document.getElementById("otherTextbox");
var otherRadio = document.getElementById("other");

otherText.addEventListener("click", function() {
  otherRadio.checked = true;
});