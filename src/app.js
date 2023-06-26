import express, { json } from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(json());

const users = [];
const tweets = [];

app.post("/sign-up", (req, res) => {
  const { username, avatar } = req.body;

  if (!username || !avatar || typeof username !== "string" || typeof avatar !== "string") {
    res.status(400).send("Todos os campos são obrigatórios!");
    return;
  } else {
    users.push({ username, avatar });
    res.status(201).send("OK");
    return;
  }
});

app.post("/tweets", (req, res) => {
  const { username, tweet } = req.body;

  if (users.find((user) => user.username === username)) {
    if (!username || !tweet || typeof username !== "string" || typeof tweet !== "string") {
      res.status(400).send("Todos os campos são obrigatórios!");
      return;
    } else {
      tweets.push({ username, tweet });
      res.status(201).send("OK");
      return;
    }
  } else {
    res.sendStatus(401);
    return;
  }
});

app.get("/tweets", (req, res) => {
  const lastTenTweets = tweets
    .slice(-10)
    .reverse()
    .map(({ username, tweet }) => ({
      username,
      avatar: users.find((user) => user.username === username).avatar,
      tweet,
    }));

  res.send(lastTenTweets);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Port: ${PORT}`));
