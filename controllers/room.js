/**
 * GET /+:room
 * Room
 */

exports.room = function(req, res) {
  res.render('room', {
    title: 'Room',
    room: req.params.room
  });
};

/**
 * GET /+:room/game
 * Room
 */

exports.game = function(req, res) {
  res.render('game', {
    title: 'Game on',
    room: req.params.room
  });
};
