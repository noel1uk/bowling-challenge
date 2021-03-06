
$(document).ready(function() {
  var game = new Game();
  var id = 0;
  var scoreList = [];

  for (var i = 1; i < 11; i++) {
    var frame = new Frame(i);
    game.addFrame(frame);
  };

  function createCallback( numberOfPins ){
    return function(){
      var currentFrame = game.getFrame(id);
      var previousFrame = game.getFrame(id - 1);
      var doubleStrikeFrame = game.getFrame(id - 2);
      console.log(game.getFrame(id));
      scoreList.push(numberOfPins);

      if (previousFrame || doubleStrikeFrame) {
        frame.bonusCheck(previousFrame, doubleStrikeFrame, numberOfPins);
      }

      if (currentFrame.ball1 === null) {
        currentFrame.setBall1(numberOfPins);
        console.log();
        $('#ball-result-' + currentFrame.frameId ).text(numberOfPins);
        console.log('frame: ' + currentFrame.frameId);
        console.log('first ball:');
        console.log(currentFrame);
        $('#frame-score-' + currentFrame.frameId).text(currentFrame.getScore());
      } else if (frame.ball2 === null) {
        currentFrame.setBall2(numberOfPins);
        $('#second-ball-result-' + currentFrame.frameId ).text(numberOfPins);
        console.log('second ball:');
        console.log(currentFrame);
      };
      // if (previousFrame != null && previousFrame.strike) {
      //   previousFrame.score = previousFrame.score + currentFrame.score;
      // };
      if (currentFrame.isComplete()) {
        id += 1;
        console.log('Game after ' + id + ' frames');
        console.log(game);

      };
    };
  };

// Here we run the game
    for (var i = 0; i < 11; i++) {
      $('.btn#' + i).click( createCallback( i ));
    };
//

// here we create ten frames and put them in the game _.frames array
// numbered from 0-9
//////////////////////////////////





    // Now we access frame 0 when button is clicked
  //   $('.btn#' + i).click(function() {
  //     console.log($('.btn#' + i));
  //     console.log(i);
  //     game.addFrame(frame);
  //     game.getFrame(i);
  //     console.log(game);
  //     console.log(game.getFrame(i));
  //   });
  // };

  // $('.btn').click(function() {
  //   numberOfPins = parseInt($(this).attr('id'))
  //   if (frame.ball1 === null) {
  //     frame.setBall1(numberOfPins);
  //     $('.first-ball-result').text(numberOfPins);
  //     var deleteBtns = 11 - numberOfPins;
  //     game.btns = $('#btns').find('.btn').slice(deleteBtns, 11).remove();
  //     $('.frame-score-1').text(frame.getScore())
  //   } else if (frame.ball2 === null) {
  //     frame.setBall2(numberOfPins);
  //     $('.second-ball-result').text(numberOfPins);
  //     $("section#btns").append(game.btns);
  //     $('.frame-score-1').text(frame.getScore())
  //   };
  //   if (frame.getStrike() === true) {
  //     console.log('muuuuu');
  //   }
  // });
});
// for (var i = 0; i < array.length; i++) {
//   array[i]
// }

  // $('.btn').click(function())
/////////////////////////////////////////////////
  // function createCallback( i ){
  //   return function(){
  //     var firstClick = true;
  //     numberOfPins = i;
  //     var frame = new Frame();
  //     game.addFrame(frame);
  //     frame.setBall1(numberOfPins);
  //     $('.btn#' + i).click( createCallback2( i, frame ));
  //     // $('.btn#' + i).click(function() {
  //     // frame.setBall2(numberOfPins);
  //     // });
  //
  //     console.log(game);
  //   };
  // };
  // function createCallback2( i, frame ){
  //   frame.setBall2(numberOfPins);
  //
  // };
  // console.log($('#btns.btn'));
  //   for (var i = 0; i < 11; i++) {
  //     $('.btn#' + i).click( createCallback( i ));
  //
  //   };

///////////////////////////////////////
  // function createCallback( i ){
  //   // $('.btn#' + i).click( createCallback( i ));
  //   var firstClick = true;
  //   if(firstClick){
  //     // do first click stuff
  //     var frame = new Frame();
  //     firstClick = false;
  //     console.log($(i));
  //   } else {
  //     // do second (and beyond?) click stuff
  //     firstClick = true;
  //     console.log(firstClick);
  //     game.addFrame;
  //   };
  // };
  //
  // for (var i = 0; i < 11; i++) {
  //   $('.btn#' + i).click( createCallback( i ));
  // }
////////////////////////////////////////
// function createCallback( i ){
//   return function(){
//     var firstClick = true;
//     numberOfPins = i;
//     var frame = new Frame();
//     game.addFrame(frame);
//     frame.setBall1(numberOfPins);
//     $('.btn#' + i).click( createCallback2( i, frame ));
//     // $('.btn#' + i).click(function() {
//     // frame.setBall2(numberOfPins);
//     // });
//
//     console.log(game);
//   };
// };
// function createCallback2( i, frame ){
//   frame.setBall2(numberOfPins);
//
// };
//
//
//   for (var i = 0; i < 11; i++) {
//     $('.btn#' + i).click( createCallback( i ));
//
//   };
