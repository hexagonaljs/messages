var App;

App = (function() {

  function App() {
    var glue, gui, storage, useCase;
    useCase = new UseCase();
    gui = new Gui();
    storage = new LocalStorage();
    glue = new Glue(useCase, gui, storage);
    useCase.start();
    window.useCase = useCase;
  }

  return App;

})();

window.app = new App();
