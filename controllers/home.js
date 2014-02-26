/**
 * GET /
 * Home page.
 */

exports.index = function(req, res) {
  res.render('home', {
    title: 'Home'
  });
};

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