// allows the use of path methods
const path = require('path');

module.exports = (app) => {
    // routes /notes at end of url to render the notes.html page dynamically using path.join
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
      });
    
    // renders base page as index.html
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
      });    
}