class LocalStorage
  constructor: ->
    @set('messages', new Messages)

  set: (key, value) =>
    console.log(value)
    @[key] = value

  get: (key) =>
    @[key]

  remove: (key) =>
    @[key] = undefined

  flush: =>
    for key in $.jStorage.index()
      $.jStorage.deleteKey(key)

  loadMessages: =>
    @get('messages').fetch
      success: (collection) => @messagesLoaded(collection)

  messagesLoaded: (collection) =>
