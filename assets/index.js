var socket = io();  //use our helpful socket.io library to create an event emitter

// emit a new chatMessage event from the client......

function submitfunction() {
  var comment = $('#comment').val();
  if (comment != '') {
    socket.emit('chatMessage', comment);// can handle more than 1 item ...
  }
  // what language and selector is used below?
  // set the value to an empty string and
  // focus on the message box again
  $('#comment').val('').focus();
  return false;
}

socket.on('chatMessage', function (msg) {
  $('#display').replaceWith('<h2 id="display">' + msg + '</h2>');
});