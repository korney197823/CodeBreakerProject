let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
}

//implement new functions here
function setHiddenFields () {
  let randomNumber = ''+Math.floor(Math.random() * 10000);
  while(randomNumber.length !== 4) {
    randomNumber = '0' + randomNumber;
  }
  answer.value = randomNumber;
}

function setMessage(message) {
  let labelElement = document.createElement('label');
  labelElement.innerHTML = message;
}
