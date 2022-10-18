 function display() {
  dispWin = window.open('','NewWin',
  'menubar=no,toolbar=no,status=no,width=400,height=100');
  message = "<ul><li>Username:" +
  document.form1.name.value;
  message += "<li>Address:" +
  document.form1.address.value;
  message += "<li>Email:" +
  document.form1.email.value;
  message += "<li>Phone:" +
  document.form1.mobile.value;
  message += "</ul>";
  dispWin.document.write(message);
}
      
document.getElementById("display").addEventListener("click", display);