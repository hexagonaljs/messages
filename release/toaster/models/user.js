var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

this.User = (function() {

  function User(email, password) {
    this.email = email;
    this.password = password;
    this.login = __bind(this.login, this);

  }

  User.prototype.login = function(options) {
    if (true) {
      if (options.success) {
        return options.success(this);
      }
    } else {
      if (options.fail) {
        return options.fail(this);
      }
    }
  };

  return User;

})();
