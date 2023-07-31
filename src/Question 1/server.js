const express = require('express');
const axios = require('axios');
const app = express(); //here i am using express Framework
const PORT = 8008;


app.get('/numbers', async (req, res) => {
  const urls = req.query.url;
  if (!urls || !Array.isArray(urls)) {
    return res.status(400).json({ error: 'Invalid URL parameter. It should be an array of URLs.' });
  }
  
  async function fetchDataFromAPI(url) {
    try {
      const response = await axios.get(url);
      return response.data.numbers;
    } catch (error) {
      console.error(`Failed to fetch data from ${url}.`, error.message);
      return [];
    }
  }


  const results = [];
  const allNumbers = new Set();
  try {
    for (const url of urls) {
      try {
        const response = await fetchDataFromAPI(url);
        response.forEach((number)=>allNumbers.add(number));
      } catch (error) {
        results.push({ error: `Failed to retrieve data from ${url}.` });
      }
    }
    const numbersArray = Array.from(allNumbers).sort((a, b) => a - b);
    res.json({ numbersArray });
  } catch (error) {
    res.status(500).json({ error: '500-Internal server error.' });
  }
});
app.listen(PORT, () => {
  console.log(`service is running on port ${PORT}`);
});


//RESPONSE

// {
//   "numbersArray": [
//       2,
//       3,
//       5,
//       7,
//       11,
//       13,
//       1,
//       8,
//       21
//   ]
// }