var socket = io();  //use our helpful socket.io library to create an event emitter

// emit a new chatMessage event from the client......

function submitTextFunction() {
  var comment = $('#comment').val();
  if (comment != '') {
    socket.emit('updateText', comment);// can handle more than 1 item ...
  }
  // what language and selector is used below?
  // set the value to an empty string and
  // focus on the message box again
  $('#comment').val('').focus();
  return false;
}

function submitPictureFunction() {
  var picture = $('#picture').val();
  if (picture != '') {
    socket.emit('updatePicture', picture);// can handle more than 1 item ...
  }
  // what language and selector is used below?
  // set the value to an empty string and
  // focus on the message box again
  $('#picture').val('').focus();
  return false;
}

socket.on('updateText', function (msg) {
  $('#display').replaceWith('<h2 id="display">' + msg + '</h2>');
});

socket.on('updatePicture', function (msg) {
  $('#display').replaceWith('<img id="display" src="' + msg + '">');
});