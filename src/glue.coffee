class Glue
  constructor: (@useCase, @gui, @storage)->
    After(@useCase, 'loginRequired', => @gui.showLoginPanel())
    After(@gui,     'userClickedSubmit', (email, password) => @useCase.loginUser(email, password))
    After(@useCase, 'loginSuccess', (user) => @storage.loadMessages())
    After(@useCase, 'loginSuccess', (user) => @gui.removeLoginForm(user))
    After(@storage, 'messagesLoaded', (messages) => @gui.showMessages(messages))
    After(@gui,     'messageClicked', (message) => @useCase.markMessageAsRead(message))
    After(@useCase, 'markMessageAsRead', (message) => @gui.showMessage(message))
    After(@gui,     'sendMessageButtonClicked', (data) => @useCase.sendMessageButton(data))
    After(@useCase, 'sendMessageButton', (data) => @storage.saveMessage(data))
    After(@storage, 'saveMessage', (message) => @storage.loadMessages())

    LogAll(@useCase)
    LogAll(@gui)
