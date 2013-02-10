var Glue;

Glue = (function() {

  function Glue(useCase, gui, storage) {
    var _this = this;
    this.useCase = useCase;
    this.gui = gui;
    this.storage = storage;
    After(this.useCase, 'loginRequired', function() {
      return _this.gui.showLoginPanel();
    });
    After(this.gui, 'userClickedSubmit', function(email, password) {
      return _this.useCase.loginUser(email, password);
    });
    After(this.useCase, 'loginSuccess', function(user) {
      return _this.storage.loadMessages();
    });
    After(this.useCase, 'loginSuccess', function(user) {
      return _this.gui.removeLoginForm(user);
    });
    After(this.storage, 'messagesLoaded', function(messages) {
      return _this.gui.showMessages(messages);
    });
    After(this.gui, 'messageClicked', function(message) {
      return _this.useCase.markMessageAsRead(message);
    });
    After(this.useCase, 'markMessageAsRead', function(message) {
      return _this.gui.showMessage(message);
    });
    LogAll(this.useCase);
    LogAll(this.gui);
  }

  return Glue;

})();
