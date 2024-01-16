const express = require("express");

const app = express();
const cors = require("cors");
const config = { port: process.env.PORT || 3000 };
const LoremIpsum = require("lorem-ipsum").LoremIpsum;

// middleware
app.use(cors());

// your API route(s) here
app.get("/lorem/", (req, res) => {
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 5,
      min: 4,
    },
    wordsPerSentence: {
      max: 15,
      min: 4,
    },
  });
  res.send({ lorem: lorem.generateParagraphs(5) });
});

app.get("*", function (req, res) {
  res.status(404).json({ error: "route not found" });
});

// start server
app.listen(config.port, () => {
  console.log(`App listening at http://localhost:${config.port}`);
});
