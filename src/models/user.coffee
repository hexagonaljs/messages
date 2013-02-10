class @User
  constructor: (@email, @password) ->

  login: (options) =>
    if @email == "admin@example.com" && @password == "admin"
      options.success(@) if options.success
    else
      options.fail(@) if options.fail
