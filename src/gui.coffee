class Gui
  constructor: ->

  createElementFor: (templateId, data) =>
    source = $(templateId).html()
    template = Handlebars.compile(source)
    html = template(data)
    element = $(html)

  showMessage: (message) ->
    element = @createElementFor("#message-modal", message.toJSON())
    $('body').append(element)
    element.modal('show')

  showMessages: (messages) ->
    container = @createElementFor("#messages-container")
    list      = container.find('.messages-list')

    messages.each (message) =>
      element = @createElementFor("#message-template", message.toJSON())
      element.find('.message-title').click =>
        @messageClicked(message)
      list.prepend(element)

    container.find('button').click =>
      @showMessageFrom()

    $('.main').empty()
    $('.main').append(container)

  showMessageFrom: ->
    form    = @messageForm()
    element = @createElementFor("#new-message-modal")
    element.find('.modal-body').append(form.el)

    element.find('#send-message-button').click =>
      @sendMessageButtonClicked(form)
      element.modal('hide')

    $('body').append(element)
    element.modal('show')

  sendMessageButtonClicked: (data) =>

  messageClicked: (message) =>

  showLoginPanel: =>
    element = @createElementFor("#login-from")
    $('.main').append(element)
    element.find("#login-button").click =>
      email     = element.find("#email-address").val()
      password  = element.find("#password").val()
      @userClickedSubmit(email, password)
      false

  messageForm: ->
    form = new Backbone.Form
      schema:
        from:    'Text',
        title: 'Text',
        body:  'TextArea'
    form.render()

  removeLoginForm: (user) =>
    $(".form-signin").remove()

  userClickedSubmit: (email, password) =>
