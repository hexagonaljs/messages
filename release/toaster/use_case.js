var UseCase,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

UseCase = (function() {

  function UseCase() {
    this.loginFail = __bind(this.loginFail, this);

    this.loginSuccess = __bind(this.loginSuccess, this);

    this.loginUser = __bind(this.loginUser, this);

    this.currentUser = __bind(this.currentUser, this);

    this.loginRequired = __bind(this.loginRequired, this);

    this.checkLogin = __bind(this.checkLogin, this);

    this.setMessages = __bind(this.setMessages, this);

    this.start = __bind(this.start, this);

  }

  UseCase.prototype.start = function() {
    return this.checkLogin();
  };

  UseCase.prototype.setMessages = function(messages) {};

  UseCase.prototype.checkLogin = function() {
    if (!this.currentUser()) {
      return this.loginRequired();
    }
  };

  UseCase.prototype.loginRequired = function() {};

  UseCase.prototype.currentUser = function() {
    return this.user;
  };

  UseCase.prototype.loginUser = function(email, password) {
    var user,
      _this = this;
    user = new User(email, password);
    return user.login({
      success: function(user) {
        return _this.loginSuccess(user);
      },
      fail: function(user) {
        return _this.loginFail(user);
      }
    });
  };

  UseCase.prototype.loginSuccess = function(user) {
    return this.user = user;
  };

  UseCase.prototype.loginFail = function(user) {
    return this.user = false;
  };

  return UseCase;

})();
