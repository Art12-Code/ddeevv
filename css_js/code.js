
    function profile(){
      var a = document.getElementById("profiile_btn");
      var b = document.getElementById("home_btn");
      var c = document.getElementById("setting_btn");
    
      var x = document.getElementById("profiile");
      var y = document.getElementById("home");
      var z = document.getElementById("setting");
    
            if (x.style.display === "none") {
              x.style.display = "block";
              y.style.display = "none";
              z.style.display = "none";

      a.className = "active"
      b.className = ""
      c.className = ""
            } 
    }

    function home(){



var a = document.getElementById("profiile_btn");
var b = document.getElementById("home_btn");
var c = document.getElementById("setting_btn");

var x = document.getElementById("profiile");
var y = document.getElementById("home");
var z = document.getElementById("setting");

    if (y.style.display === "none") {
      x.style.display = "none";
      y.style.display = "block";
      z.style.display = "none";

      a.className = ""
      b.className = "active"
      c.className = ""
    } 
}

function setting(){


var x = document.getElementById("profiile");
var y = document.getElementById("home");
var z = document.getElementById("setting");

var a = document.getElementById("profiile_btn");
var b = document.getElementById("home_btn");
var c = document.getElementById("setting_btn");

    if (z.style.display === "none") {
      x.style.display = "none";
      y.style.display = "none";
      z.style.display = "block";
      
      a.className = ""
      b.className = ""
      c.className = "active"
    } 
}