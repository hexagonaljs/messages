var Gui,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Gui = (function() {

  function Gui() {
    this.userClickedSubmit = __bind(this.userClickedSubmit, this);

    this.removeLoginForm = __bind(this.removeLoginForm, this);

    this.showLoginPanel = __bind(this.showLoginPanel, this);

    this.messageClicked = __bind(this.messageClicked, this);

    this.sendMessageButtonClicked = __bind(this.sendMessageButtonClicked, this);

    this.createElementFor = __bind(this.createElementFor, this);

  }

  Gui.prototype.createElementFor = function(templateId, data) {
    var element, html, source, template;
    source = $(templateId).html();
    template = Handlebars.compile(source);
    html = template(data);
    return element = $(html);
  };

  Gui.prototype.showMessage = function(message) {
    var element;
    element = this.createElementFor("#message-modal", message.toJSON());
    $('body').append(element);
    return element.modal('show');
  };

  Gui.prototype.showMessages = function(messages) {
    var container, list,
      _this = this;
    container = this.createElementFor("#messages-container");
    list = container.find('.messages-list');
    messages.each(function(message) {
      var element;
      element = _this.createElementFor("#message-template", message.toJSON());
      element.find('.message-title').click(function() {
        return _this.messageClicked(message);
      });
      return list.prepend(element);
    });
    container.find('button').click(function() {
      return _this.showMessageFrom();
    });
    $('.main').empty();
    return $('.main').append(container);
  };

  Gui.prototype.showMessageFrom = function() {
    var element, form,
      _this = this;
    form = this.messageForm();
    element = this.createElementFor("#new-message-modal");
    element.find('.modal-body').append(form.el);
    element.find('#send-message-button').click(function() {
      _this.sendMessageButtonClicked(form);
      return element.modal('hide');
    });
    $('body').append(element);
    return element.modal('show');
  };

  Gui.prototype.sendMessageButtonClicked = function(data) {};

  Gui.prototype.messageClicked = function(message) {};

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

  Gui.prototype.messageForm = function() {
    var form;
    form = new Backbone.Form({
      schema: {
        from: 'Text',
        title: 'Text',
        body: 'TextArea'
      }
    });
    return form.render();
  };

  Gui.prototype.removeLoginForm = function(user) {
    return $(".form-signin").remove();
  };

  Gui.prototype.userClickedSubmit = function(email, password) {};

  return Gui;

})();
