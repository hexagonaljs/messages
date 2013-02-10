class Gui
  constructor: ->

  createElementFor: (templateId, data) =>
    source = $(templateId).html()
    template = Handlebars.compile(source)
    html = template(data)
    element = $(html)

  showMessage: (message) ->
    element = @createElementFor("#message-modal", message.toJSON())
    element.modal()
    $('.main').append(element)
    element.show()

  showMessages: (messages) ->
    container = @createElementFor("#messages-container")

    messages.each (message) =>
      element = @createElementFor("#message-template", message.toJSON())
      element.find('.message-title').click =>
        @messageClicked(message)
      container.append(element)

    $('.main').append(container)

  messageClicked: (message) =>

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
