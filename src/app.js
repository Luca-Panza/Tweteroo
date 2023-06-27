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
    return res.status(400).send("Todos os campos são obrigatórios!");
  } else {
    users.push({ username, avatar });
    return res.status(201).send("OK");
  }
});

app.post("/tweets", (req, res) => {
  const { tweet } = req.body;
  const { user } = req.headers;

  if (users.find((u) => u.username === user)) {
    if (!user || !tweet || typeof user !== "string" || typeof tweet !== "string") {
      return res.status(400).send("Todos os campos são obrigatórios!");
    } else {
      tweets.push({ username: user, tweet });
      return res.status(201).send("OK");
    }
  } else {
    return res.sendStatus(401);
  }
});

app.get("/tweets", (req, res) => {
  const page = Number(req.query.page);

  if (req.query.page && (isNaN(page) || page < 1)) {
    return res.status(400).send("Informe uma página válida!");
  }

  const lastTweets = tweets.map((tweet) => {
    const user = users.find((u) => u.username === tweet.username);
    return { ...tweet, avatar: user.avatar };
  });

  if (page) {
    const limit = 10;
    const start = (page - 1) * limit;
    const end = page * limit;

    res.send(lastTweets.slice(start, end).reverse());
  }
});

app.get("/tweets/:username", (req, res) => {
  const { username } = req.params;

  const filteredTweets = tweets
    .filter((tweet) => tweet.username === username)
    .map((tweet) => {
      const user = users.find((user) => user.username === tweet.username);
      return { ...tweet, avatar: user.avatar };
    });

  res.send(filteredTweets);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Port: ${PORT}`));
