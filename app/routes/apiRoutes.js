const friends = require("../data/friends");

module.exports = (app) => { 

    app.get("/api/friends", (req, res) => {
        res.json(friendData);
    });

    app.post("/api/friends", (req, res) => {
        let friendScore = req.body.scores;
        const scoresArr = [];
        let bestMatch = 0; 

        for (var i = 0; i < friends.length; i++) {
            var scoreDiff = 0;
            for (var j = 0; j < friendScore.length; j++) {
                scoreDiff += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(friendScore[j])))
            }
            scoresArr.push(scoreDiff);
        }

        for (var i = 0; i < scoresArr.length; i++) {
            if (scoresArr[i] <= scoresArr[bestMatch]) {
                bestMatch = i;
            }
        }

        let bestFriend = friendScore[bestMatch];
        res.json(bestFriend);
        friendScore.push(req.body)

    });
};