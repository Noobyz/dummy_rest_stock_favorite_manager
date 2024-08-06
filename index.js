const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

// In-memory storage for users and their favorite stocks
const users = {};

// Mock stock metadata
const stockMetadata = {
  AAPL: { name: "Apple", price: 150, change: -0.5 },
  TSLA: { name: "Tesla", price: 700, change: 2.3 },
  AMZN: { name: "Amazon", price: 3400, change: 1.1 },
  GOOG: { name: "Google", price: 2800, change: -0.3 },
  MSFT: { name: "Microsoft", price: 2800, change: -0.3 },
};

app.post("/favorites", (req, res) => {
  const { username, ticker } = req.body;
  if (!username || !ticker) {
    return res.status(400).json({ error: "Username and ticker are required." });
  }

  if (!Object.keys(stockMetadata).includes(ticker)) {
    return res.status(400).json({ error: "Invalid stock ticker." });
  }

  if (!users[username]) {
    users[username] = [];
  }

  if (!users[username].includes(ticker)) {
    users[username].push(ticker);
  }

  res.status(201).send();
});

app.delete("/favorites", (req, res) => {
  const { username, ticker } = req.body;
  if (username && users[username]) {
    users[username] = users[username].filter((stock) => stock !== ticker);
  }
  res.status(204).send();
});

app.get("/favorites", (req, res) => {
  const { username } = req.body;
  if (!username || !users[username]) {
    return res.status(200).json([]);
  }

  const favoriteStocks = users[username].map((stock) => ({
    ticker: stock,
    metadata: stockMetadata[stock] || {},
  }));

  res.status(200).json(favoriteStocks);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
