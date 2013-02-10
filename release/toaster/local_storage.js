var LocalStorage,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

LocalStorage = (function() {

  function LocalStorage() {
    this.messageSaved = __bind(this.messageSaved, this);

    this.saveMessage = __bind(this.saveMessage, this);

    this.messagesLoaded = __bind(this.messagesLoaded, this);

    this.loadMessages = __bind(this.loadMessages, this);

    this.flush = __bind(this.flush, this);

    this.remove = __bind(this.remove, this);

    this.get = __bind(this.get, this);

    this.set = __bind(this.set, this);
    this.set('messages', new Messages);
  }

  LocalStorage.prototype.set = function(key, value) {
    console.log(value);
    return this[key] = value;
  };

  LocalStorage.prototype.get = function(key) {
    return this[key];
  };

  LocalStorage.prototype.remove = function(key) {
    return this[key] = void 0;
  };

  LocalStorage.prototype.flush = function() {
    var key, _i, _len, _ref, _results;
    _ref = $.jStorage.index();
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      key = _ref[_i];
      _results.push($.jStorage.deleteKey(key));
    }
    return _results;
  };

  LocalStorage.prototype.loadMessages = function() {
    var _this = this;
    return this.get('messages').fetch({
      success: function(collection) {
        return _this.messagesLoaded(collection);
      }
    });
  };

  LocalStorage.prototype.messagesLoaded = function(collection) {};

  LocalStorage.prototype.saveMessage = function(data) {
    var message,
      _this = this;
    message = this.get('messages').create(data.getValue());
    return message.save({
      success: function(message) {
        return _this.messageSaved(message);
      }
    });
  };

  LocalStorage.prototype.messageSaved = function(message) {};

  return LocalStorage;

})();
