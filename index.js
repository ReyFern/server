// Import express
const express = require('express');
const app = express();

app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]});
});

// Listens on port 5000
app.listen(5000, () => {
      console.log('server listening on port 5000');
});