class Glue
  constructor: (@useCase, @gui, @storage)->
    After(@useCase, 'loginRequired', => @gui.showLoginPanel())
    After(@gui,     'userClickedSubmit', (email, password) => @useCase.loginUser(email, password))
    After(@useCase, 'loginSuccess', (user) => @storage.loadMessages())
    After(@useCase, 'loginSuccess', (user) => @gui.removeLoginForm(user))
    After(@storage, 'messagesLoaded', (messages) => @gui.showMessages(messages))

    LogAll(@useCase)
    LogAll(@gui)
