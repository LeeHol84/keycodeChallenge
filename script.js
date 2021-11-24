function myFunction(event) {
    let x = event.code;
    let y = event.key;
    let z = event.which;

  document.getElementById("keycode").innerHTML = "keycode is: " + x;
  document.getElementById("key").innerHTML = "key is: " + y;
  document.getElementById("keyWhich").innerHTML = "key which is: " + z;

}