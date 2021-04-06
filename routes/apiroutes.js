const userNotes = require('../db/db');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(userNotes));

    app.post('/api/notes', (req, res) => {
            req.body.id = (userNotes.length+1);
            console.log(req.body.id);
            userNotes.push(req.body);
      });
}