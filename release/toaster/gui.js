var Gui,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Gui = (function() {

  function Gui() {
    this.userClickedSubmit = __bind(this.userClickedSubmit, this);

    this.removeLoginForm = __bind(this.removeLoginForm, this);

    this.showLoginPanel = __bind(this.showLoginPanel, this);

    this.showMessages = __bind(this.showMessages, this);

    this.createElementFor = __bind(this.createElementFor, this);

  }

  Gui.prototype.createElementFor = function(templateId, data) {
    var element, html, source, template;
    source = $(templateId).html();
    template = Handlebars.compile(source);
    html = template(data);
    return element = $(html);
  };

  Gui.prototype.showMessages = function(messages) {
    var element;
    element = this.createElementFor("#messages-template", {
      messages: messages.toJSON()
    });
    return $('.main').append(element);
  };

  Gui.prototype.showLoginPanel = function() {
    var element,
      _this = this;
    element = this.createElementFor("#login-from");
    $('.main').append(element);
    return element.find("#login-button").click(function() {
      var email, password;
      email = element.find("#email-address").val();
      password = element.find("#password").val();
      _this.userClickedSubmit(email, password);
      return false;
    });
  };

  Gui.prototype.removeLoginForm = function(user) {
    return $(".form-signin").remove();
  };

  Gui.prototype.userClickedSubmit = function(email, password) {};

  return Gui;

})();
