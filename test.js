const axios = require("axios");

const baseUrl = "http://localhost:3000";

async function addFavoriteStock(username, ticker) {
  try {
    const response = await axios.post(`${baseUrl}/favorites`, {
      username,
      ticker,
    });
    console.log(`Added ${ticker} for ${username}:`, response.status);
  } catch (error) {
    console.error(
      `Error adding ${ticker} for ${username}:`,
      error.response.data
    );
  }
}

async function deleteFavoriteStock(username, ticker) {
  try {
    const response = await axios.delete(`${baseUrl}/favorites`, {
      data: { username, ticker },
    });
    console.log(`Deleted ${ticker} for ${username}:`, response.status);
  } catch (error) {
    console.error(
      `Error deleting ${ticker} for ${username}:`,
      error.response.data
    );
  }
}

async function viewFavoriteStocks(username) {
  try {
    const response = await axios.get(`${baseUrl}/favorites`, {
      data: { username },
    });
    console.log(`Favorite stocks for ${username}:`, response.data);
  } catch (error) {
    console.error(
      `Error viewing favorite stocks for ${username}:`,
      error.response.data
    );
  }
}

async function runDemo() {
  const username = "drew";

  // Add favorite stocks
  await addFavoriteStock(username, "AAPL");
  await addFavoriteStock(username, "TSLA");
  await addFavoriteStock(username, "AMZN");

  // View favorite stocks
  await viewFavoriteStocks(username);

  // Delete a favorite stock
  await deleteFavoriteStock(username, "TSLA");

  // View favorite stocks again
  await viewFavoriteStocks(username);

  // Attempt to add an invalid stock ticker
  await addFavoriteStock(username, "INVALID");
}

runDemo().catch((error) => console.error(error));
