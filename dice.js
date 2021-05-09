var cd = 1;
var sides = 6;
var button1 = document.getElementById('button1');
var div_dados = document.getElementById("dados");

function roll(sides) {
    var randomNumber = Math.floor(Math.random() * sides) + 1;
    return randomNumber;
  }

function printNumber(number, po) {
  var placeholder = document.getElementById('placeholder'+i);
  placeholder.innerHTML = number;
}

var button = document.getElementById('button');

button.onclick = function click_b() {
  for (i=1;i<=cd;i++){
    sides = document.getElementById('side'+i).value;
    if (sides == ""){
      sides = 6;
    }
    var result = roll(sides);
    var placeholder = document.getElementById('placeholder'+i);
    if ( result != placeholder.innerHTML) {
      printNumber(result, i);
    }
    else {
      i -= 1;
    }
  }
};
  
button1.onclick = function click_b() {
  cd += 1;
  var new_dado = document.createElement("div");
  new_dado.setAttribute("class", "dado");
  new_dado.innerHTML = '<p id="placeholder'+cd+'"></p><form><label for="side'+cd+'"><b>N° Caras</b></label><input type="text" id="side'+cd+'"></input></form>';
  div_dados.appendChild(new_dado);
}

var button2 = document.getElementById('button2');

button2.onclick = function click_b() {
  var old_dado = document.querySelectorAll("div");
  div_dados.removeChild(old_dado[cd]);
  cd -= 1;
}