#<< utils
#<< local_storage
#<< use_case
#<< gui
#<< glue
#<< models/*

class App
  constructor: ->
    useCase      = new UseCase()
    gui          = new Gui()
    storage      = new LocalStorage()
    glue         = new Glue(useCase, gui, storage)

    useCase.start()
    window.useCase = useCase

window.app = new App()

