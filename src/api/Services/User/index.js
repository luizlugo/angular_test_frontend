// Including underscore library
var _ = require('underscore');

var userService = (function(){
  var users = [];

	function addUser(req, resp) {
    if (req.body.user) {
      var user = _.findWhere(users, {
        email : req.body.user.email
      });

      if (user) {
        user = req.body.user;
      } else {
        users.push(req.body.user);
        user = req.body.user;
      }

      // Returns uses
      resp.json({
        ok : true,
        user : user,
      });
    } else {
      // Returns uses
      resp.json({
        ok   : false,
        error : 'You need to pass a valid user',
      });
    }
	}

  function login(req, resp) {
    if (req.body.email && req.body.password) {
      var user = _.findWhere(users, {
        email : req.body.email
      });

      if (user && (user.password == req.body.password)) {
        resp.json({
          ok : true,
          user : user,
        });
      } else {
        resp.json({
          ok   : false,
          error : 'Invalid username or password',
        });
      }

    } else {
      // Returns error
      resp.json({
        ok   : false,
        error : 'Invalid username or password',
      });
    }
	}

	return {
		addUser : addUser,
    login : login,
	};
})();
module.exports = userService;
