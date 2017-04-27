var socket = io(); 

function submitTextFunction() {
  var comment = $('#comment').val();
  if (comment != '') {
    socket.emit('updateText', comment);
  }

  $('#comment').val('').focus();
  return false;
}

function submitTextFunction1() {
  var comment = $('#comment1').val();
  if (comment != '') {
    socket.emit('updateText', comment);
  }

  $('#comment1').val('').focus();
  return false;
}

function submitTextFunction2() {
  var comment = $('#comment2').val();
  if (comment != '') {
    socket.emit('updateText', comment);
  }

  $('#comment2').val('').focus();
  return false;
}

function submitTextFunction3() {
  var comment = $('#comment3').val();
  if (comment != '') {
    socket.emit('updateText', comment);
  }

  $('#comment3').val('').focus();
  return false;
}

function submitPictureFunction() {
  var picture = $('#picture').val();
  if (picture != '') {
    socket.emit('updatePicture', picture);
  }

  $('#picture').val('').focus();
  return false;
}

socket.on('updateText', function (msg) {
  $('#display').replaceWith('<h2 id="display">' + msg + '</h2>');
});

socket.on('updatePicture', function (msg) {
  $('#display').replaceWith('<img id="display" src="' + msg + '">');
});