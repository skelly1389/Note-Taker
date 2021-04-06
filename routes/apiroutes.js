// links up to the fake database
const userNotes = require('../db/db');

// instead of writing the functions separate sends them out in the module export
module.exports = (app) => {
    // sends the db info to the api page
    app.get('/api/notes', (req, res) => res.json(userNotes));

    // makes unique pages for each note and returns false if id for note doesn't exist
    app.get('/api/notes/:id', function (req, res) {
        const delNote = req.params.id;
        
        for (let i = 0; i < userNotes.length; i++) {
            if (delNote == userNotes[i].id) {
            return res.json(userNotes[i]);
            }
        }

        return res.json(false);
      });

    // sends newly saved note to the db, adds an id number that should be one more than previous note
    app.post('/api/notes', (req, res) => {
        req.body.id = (userNotes.length+1);
        res.redirect('back');
        userNotes.push(req.body);
      });

    // removes selected note from the db
    app.delete('/api/notes', function (req, res) {
        console.log('test');
      });
}