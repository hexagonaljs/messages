hexagonal.js messages app
====================

Login example and render messages in hexagonal.js

Login
=====

Login: admin@example.com
Password: admin

Message create
==============

In console

```javascript
messages = new Messages()
messages.fetch()
message = messages.create({from: "DRUG", title: "Title", body: "Body"})
message.save()
```
