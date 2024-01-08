// server.js
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Twitter API credentials
const BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN; // Set this in your environment variables

app.get('/elonmusk', async (req, res) => {
  try {
    const response = await axios.get('https://api.twitter.com/2/users/:id/tweets', {
      headers: {
        'Authorization': `Bearer AAAAAAAAAAAAAAAAAAAAADm%2F8gAAAAAA5DIwM4kqyJz0sCNZg2CQSCzK1Us%3DbswdhClvw2x09sZsmkyrlNSwCqI004PL1lwG55fadI4lSwroDl`
      },
      params: {
        'id': '44196397', // Elon Musk's T
        'max_results': 5
      }
    });

    res.json(response.data.data); // Send the tweets back to the client
  } catch (error) {
    console.error('Error fetching tweets from Twitter API', error);
    res.status(500).send('Error fetching tweets');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
