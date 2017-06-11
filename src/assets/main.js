let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');

    if(answer.value =='' || attempt.value == '') {
      setHiddenFields();
    }

    if(validateInput(input.value)) {
      attempt.value =+ 1;
    }
    else {
      return false;
    }
}

//implement new functions here
function setHiddenFields () {
  answer.value = Math.floor(Math.random() * 10000).toString();
  while(answer.value.length < 4) {
    answer.value = '0' + answer.value;
  }
  attempt.value = '0';
}

function setMessage(message) {
document.createElement('label');
  document.getElementById('message').innerHTML = message;
}

function validateInput(inputValue) {
  if( inputValue.length === 4 ) {
    return true;
  }
  else {
    setMessage("Guesses must be exactly 4 characters long.")
    return false;
  }

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

  if(correctCount === 4) {
    setMessage('You Win! :)');
    return true;
  }
  if(attempt.value === '10') {
    setMessage('You Lose! :(')
  }
  return false;

}
