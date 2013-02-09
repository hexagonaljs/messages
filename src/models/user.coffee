class @User
  constructor: (@email, @password) ->

  login: (options) =>
    if @email == "lte@gmail.com" && @password == "12345a"
      options.success(@) if options.success
    else
      options.fail(@) if options.fail
