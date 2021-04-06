// makes sure express is hooked up
const express = require('express');
const app = express();

// sets the port so that it works dynamically when deployed or 8080 on local
const PORT = process.env.PORT || 8080;

// linking up express 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//linking up the static front end files
app.use(express.static('public'));

// links up the js files that contain server routes
require('./routes/apiroutes')(app);
require('./routes/htmlroutes')(app);

// turns it on
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });