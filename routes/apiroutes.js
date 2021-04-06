const userNotes = require('../db/db');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(userNotes));

    app.get('/api/notes/:id', function (req, res) {
        const delNote = req.params.id;
        
        for (let i = 0; i < userNotes.length; i++) {
            if (delNote == userNotes[i].id) {
            return res.json(userNotes[i]);
            }
        }

        return res.json(false);
      });

    app.post('/api/notes', (req, res) => {
        req.body.id = (userNotes.length+1);
        res.redirect('back');
        userNotes.push(req.body);
      });

    app.delete('/api/notes', function (req, res) {
        res.send('Got a DELETE request at /user');
      });
}