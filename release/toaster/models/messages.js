var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Messages = (function(_super) {

  __extends(Messages, _super);

  function Messages() {
    return Messages.__super__.constructor.apply(this, arguments);
  }

  Messages.prototype.localStorage = new Backbone.LocalStorage("messages");

  return Messages;

})(Backbone.Collection);
