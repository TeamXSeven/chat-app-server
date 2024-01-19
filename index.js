const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000;

// Use middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
