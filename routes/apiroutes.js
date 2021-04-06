const userNotes = require('../db/db');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(userNotes));

    // app.post('/api/notes', (req, res) => {
    //         console.log("test");
    //         userNotes.push(req.body);
    //   });
}