var dice = {
  sides: function() {
    var si = document.getElementById('side').value;
    if (si == ""){
      si = 6;
    }
    return si;
  },
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides()) + 1;
    return randomNumber;
  }
}

function printNumber(number) {
  var placeholder = document.getElementById('placeholder');
  placeholder.innerHTML = number;
}

var button = document.getElementById('button');

button.onclick = function click_b() {
  var result = dice.roll();
  var placeholder = document.getElementById('placeholder');
  if ( result != placeholder.innerHTML) {
    printNumber(result);
  }
  else {
    button.onclick();
  }
  
};

