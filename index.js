

// turn on stop function 
function turnOnStopLight() {
  // change background color of stop light to red
  // changes background color of green and yellow to black
  turnOffLights();
  var $background = $(this).css('background-color');
 $('#slowLight').css('background-color', $background);
 $('#goLight').css('background-color', $background);
  $('#stopLight').css('background-color', 'red');
  document.getElementById('text').innerHTML ="Please Stop Now !";
  document.getElementById('text').style.color ='red';
}

// turn on slow function

function turnOnSlowLight() {
  // change background color of slow light to yellow
  // changes background color of red and green to black
  // changes background color of green and yellow to black
    turnOffLights();
  var $background = $(this).css('background-color');
	    $('#stopLight').css('background-color', $background);
  $('#goLight').css('background-color', $background);
  $('#slowLight').css('background-color', 'yellow');
    document.getElementById('text').innerHTML ="Please be slowly :) ";
  document.getElementById('text').style.color ='yellow';

}

// turn on go function

function turnOnGoLight() {
  // change background color of go light to green
  // changes background color of red and yellow to black
  turnOffLights();
  var $background = $(this).css('background-color');
  $('#stopLight').css('background-color', $background);
  $('#slowLight').css('background-color', $background);
  $('#goLight').css('background-color', 'green');	 
    document.getElementById('text').innerHTML ="You can go.. Hope to see you again :)";
  document.getElementById('text').style.color ='green';
}

// set stop light click event
$('#stopLight').on('click', turnOnStopLight);

// set slow light click event
$('#slowLight').on('click', turnOnSlowLight);

// set go light click event
$('#goLight').on('click', turnOnGoLight);

function turnOffLights() {
    $('#stopLight').css('background-color', 'black');
  $('#slowLight').css('background-color', 'black');
  $('#goLight').css('background-color', 'black');
}


