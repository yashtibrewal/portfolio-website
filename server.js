const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 9000; // Set the port

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Handle requests to the root URL
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Serve the manifest.json file
app.get('/manifest.json', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'manifest.json'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});