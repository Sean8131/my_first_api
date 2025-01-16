console.log("I'm running 🤗");
import express from 'express';
import data from './data.json' with {type: "json"};

console.log(data);

const app = express();

const PORT = 3040;

app.get("/", (req, res) => {
    res.send("<html><body><h1>HELLO!</h1></body></html>");
})

app.get("/posts", (req, res) => {
    res.json(data.posts);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});