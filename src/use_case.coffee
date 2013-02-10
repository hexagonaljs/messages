class UseCase
  constructor: ->

  start: =>
    @checkLogin()

  setMessages: (messages) =>

  checkLogin: =>
    unless @currentUser()
      @loginRequired()

  loginRequired: =>

  currentUser: =>
    @user

  loginUser: (email, password) =>
    user = new User(email, password)
    user.login
      success:(user) => @loginSuccess(user)
      fail: (user) => @loginFail(user)

  loginSuccess: (user) =>
    @user = user

  loginFail: (user) =>
    @user = false



