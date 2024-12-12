// Import express
const express = require('express');
const fsp = require("fs/promises");
const cors = require("cors");

const app = express();

app.use(cors());
//app.use(bodyParser.urlencoded({extended: false}));
//app.use(bodyParser.json());
app.use(express.json());

app.post("/create-character", async (req, res) => {
    let character = req.body;
    let characterFileHandle = await fsp.open("./json/character.json", "w");
    characterFileHandle.write(JSON.stringify(character)).then(() => {
        res.json({
            state: "OK"
        })
    }).catch((e) => {
        res.status(403).json({
            state: "NOT OK"
        });
    });
    characterFileHandle.close();

});

app.post("/save-character", async (req, res) => {
    let character = req.body;
    let characterFileHandle = await fsp.open("./json/character.json", "w");
    characterFileHandle.write(JSON.stringify(character)).then(() => {
        res.json({
            state: "OK"
        })
    }).catch((e) => {
        res.status(403).json({
            state: "NOT OK"
        });
    });
    characterFileHandle.close();

});

// Listens on port 5000
app.listen(5000, () => {
    console.log('server listening on port 5000');
});