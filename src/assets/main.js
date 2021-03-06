let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');

    if(answer.value == '' || attempt.value == '') {
      setHiddenFields();
    }

    if(!validateInput(input.value)) {
      return;
    }

    attempt.value++;

    if(getResults(input.value)) {
      setMessage("You Win! :)");
    }
    else if (attempt.value >= 10) {
      setMessage("You Lose! :(")
    }
    else if(!getResults(input.value))  {
      setMessage("Incorrect, try again.")
    }
}

//implement new functions here
function setHiddenFields () {
  answer.value = Math.floor(Math.random() * 10000).toString();
  while(answer.value.length < 4) {
    answer.value = '0' + answer.value;
  }
  attempt.value = "0";


}

function setMessage(message) {
  document.getElementById('message').innerHTML = message;
}

function validateInput(input) {
  if( input.length != 4 ) {
    setMessage("Guesses must be exactly 4 characters long.");
    return false;
  }
  return true;
}

function getResults(input) {
  let html = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">'
  let correctCount = 0;

  for( let i = 0; i < input.length; i++) {
    if(input.charAt(i) === answer.value.charAt(i)) {
      html += '<span class="glyphicon glyphicon-ok"></span>' ;
      correctCount++;
    } else if (answer.value.indexOf(input.charAt(i)) > -1) {
      html += '<span class="glyphicon glyphicon-transfer"></span>';
    }
    else  {
      html += '<span class="glyphicon glyphicon-remove"></span>'
    }
  }
  html += '</div></div>';
  document.getElementById('results').innerHTML = html;

  if(input === answer.value) {
    return true;
  }
  return false;
}

function showAnswer(success) {
  let codeElem = document.getElementById('code');
  if(success) {
    codeElem.className += ' success';
  }
  else {
    codeElem.className += ' failure';
  }
  codeElem.innerHTML = answer.value;
}

function showReplay() {
  let guessingDiv = document.getElementById('guessing-div')
  let replayDiv = document.getElementById('replay-div');

  guessingDiv.style.display = 'none';
  replayDiv.style.display = 'block';
}
