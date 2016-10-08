# kohn-catalyst
hello :)

# UPDATE - **VERY IMPORTANT**
```
The file structure of our project as of 10/7/16, sans node_modules, is below. Please see after the hyphen for notes.
 	├── README.md - readme, shows on github
 	│
 	│
 	├── app.js - main app that hands requirements and errors
 	│
 	│
 	├── bin
 	│   └── www - entry point when starting the server (using 'npm start' on EC2)
 	│
 	│
 	├── models - models hold the 'schema' for documents
 	│   ├── application.js - application template according to Marco's Visio design
 	│   ├── index.js - used to convert the 'schema' to a 'model' so we can use it elsewhere
 	│   └── residence.js - residence form according to Marco's Visio design
 	│
 	│
 	├── mongo_shell_insert_template.json
 	│
 	│
 	├── mongoose
 	│   └── index.js
 	│
 	│
 	├── npm-debug.log
 	│
 	│
 	├── package.json - holds all the modules needed to run our app
 	│                - want to run the app locally? cd ..../kohn-catalyst && npm install
 	│
 	├── primer-dataset.json - ignore this, it needs to be removed from the repo
 	│
 	│
 	├── public
 	│   ├── images
 	│   │   └── temp.file - temp file, needs to be deleted
 	│   ├── javascripts
 	│   │   └── temp.file - temp file, needs to be deleted
 	│   └── stylesheets
 	│       └── style.css - main css entry point, front end dev owns this all day
 	│
 	│
 	├── routes - folder to determine routes, played around with a lot, needs cleaned
 	│   │      - see line 29, 30 for difference between index and test
 	│   │      - basically lets use use www.url.com/stuff and www.url.com/test/stuff at the current moment
 	│   ├── index.js - empty, controls everything after url.com/<routes>
 	│   └── test.js - more stuff, mainly testing DB calls, accessed at url.com/test/<routes>
 	│
 	│
 	└── views - used to control handlebar templating, front end gets this stuff
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
  * Log into EC2 to see the console output when you rest this page
* http://54.69.62.47:8000/test/showall
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
* body-parser --- Node.js body parsing middleware - https://www.npmjs.com/package/body-parser
* cookie-parser --- cookie parsing with signatures - https://www.npmjs.com/package/cookie-parser
* debug --- tiny node.js debugging utility modelled after node core's debugging technique - https://www.npmjs.com/package/debug
* express --- Fast, unopinionated, minimalist web framework - https://www.npmjs.com/package/express
* forever --- let's node script runs continuously - https://www.npmjs.com/package/forever
* hbs --- Express.js template engine plugin for Handlebars - https://www.npmjs.com/package/hbs
* mongodb --- official MongoDB driver for Node.js -- https://www.npmjs.com/package/mongodb
* mongoose --- Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment - https://www.npmjs.com/package/mongoose
* morgan --- HTTP request logger middleware for node.js - https://www.npmjs.com/package/morgan
* serve-favicon --- favicon serving middleware with caching - https://www.npmjs.com/package/serve-favicon
