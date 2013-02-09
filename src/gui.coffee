class Gui
  constructor: ->

  createElementFor: (templateId, data) =>
    source = $(templateId).html()
    template = Handlebars.compile(source)
    html = template(data)
    element = $(html)
 
  showMessages: (messages) =>
    element = @createElementFor("#messages-template", {messages : messages.toJSON()})
    $('.main').append(element)

  showLoginPanel: =>
    element = @createElementFor("#login-from")
    $('.main').append(element)
    element.find("#login-button").click =>
      email     = element.find("#email-address").val()
      password  = element.find("#password").val()
      @userClickedSubmit(email, password)
      false

  removeLoginForm: (user) =>
    $(".form-signin").remove()

  userClickedSubmit: (email, password) =>

  loginUser: (user) =>
    $(".main").empty()

  loginError: (user) =>
    alert('wrong password')


