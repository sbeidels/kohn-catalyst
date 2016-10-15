# kohn-catalyst
hello :)

# UPDATE - **VERY IMPORTANT**
```
The file structure of our project as of 10/15/16, sans node_modules, is below. Please see after the hyphen for notes.
├── README.md
├── app.js
├── bin
│   └── www
├── config.js
├── models
│   ├── application.js
│   ├── connection.js
│   └── residence.js
├── mongo_shell_insert_template.json
├── mongoose
│   ├── index.js
│   └── read-helpers.js
├── npm-debug.log
├── package.json
├── public
│   ├── images
│   │   └── favicon.ico
│   ├── javascripts
│   │   └── temp.file
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── test.js
└── views
    ├── application-list.hbs
    ├── error.hbs
    ├── index.hbs
    ├── layout.hbs
    ├── partials
    │   ├── footer.html
    │   ├── header.html
    │   └── rests.html
    ├── rest-list.hbs
    └── rest-new.hbs
```

**Website live pages:**
* http://54.69.62.47:8000/
* http://54.69.62.47:8000/test/show
  * Log into EC2 to see the console output when you test this page
* http://54.69.62.47:8000/test/show-all
  * This returns a JSON formatted text wall
* http://54.69.62.47:8000/test/new
  * Sample form using rest-new.hbs, and partials footer.html, header.html
  * Submitting should call route '/insert_user', but we don't do restaurants so it returns 404

## Structure
* **format** 
* **me** 
* **pretty** 
  * **please** 

## Good reads
* Anatomy of an HTTP Transaction - https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/
* Using express, handlebars, and mongoDB - https://sites.google.com/site/redmahbub/development/hbs-mongo-with-express4

## Documentation
* mongoDB - https://docs.mongodb.com/manual/introduction/
* mongoDB Node.js driver quick reference - http://mongodb.github.io/node-mongodb-native/2.2/
* mongoDB Node.js driver API - http://mongodb.github.io/node-mongodb-native/2.2/api/

## Packages
*Package* | *Description* | *Documentation*
--- | --- | ---
Bluebird | Full feature promise library with ES6 support | www.http://bluebirdjs.com/docs/
body-parser | Parse incoming request bodies in a middleware before your handlers, availabe under the `req.body` property | www.ewiggin.gitbooks.io/expressjs-middleware/content/body-parser.html
cookie-parser | Parse Cookie header and populate `req.cookies` with an object keyed by the cookie names. Optionally you may enable signed cookie support by passing a `secret` string, which assigns `req.secret` so it may be used by other middleware | www.github.com/expressjs/cookie-parser
debug | tiny node.js debugging utility modelled after node core's debugging technique | www.npmjs.com/package/debug
express | Web framework for Node.js | www.expressjs.com
forever | Tool used to ensure a node script runs uninterrupted | www.npmjs.com/package/forever
hbs | HTML semantic template builder | www.handlebarsjs.com
mongodb | official MongoDB driver for Node.js, needed for mongoose | www.docs.mongodb.com/getting-started/node/client/
mongoose | An object modeling tool used with mongoDB designed to work in an asynchronous environment | www.mongoosejs.com/docs/guide.html
morgan | HTTP request logger middleware for node.js | www.npmjs.com/package/morgan
request | Wrapper to use basica HTTP request functions | www.npmjs.com/package/request#http-authentication
serve-favicon | favicon serving middleware with caching | www.npmjs.com/package/serve-favicon