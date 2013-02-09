var App;

App = (function() {

  function App() {
    var glue, gui, messages, storage, useCase;
    useCase = new UseCase();
    gui = new Gui();
    messages = new Messages();
    storage = new LocalStorage();
    glue = new Glue(useCase, gui, storage);
    useCase.start();
    window.useCase = useCase;
  }

  return App;

})();

window.app = new App();
