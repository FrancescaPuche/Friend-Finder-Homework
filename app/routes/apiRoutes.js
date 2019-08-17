const friends = require("../data/friends");

module.exports = (app) => { 

    app.get("/api/friends", (req, res) => {
        res.json(friendData);
    });

    app.post("/api/friends", (req, res) => {
        let friendscore = req.body.scores;
        const scoresArr = [];
        let bestMatch = 0; 
        
    });
};