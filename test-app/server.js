const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/installation', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'installation.html'));
});

app.get('/usage', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'usage.html'));
});

app.get('/api', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'api.html'));
});

app.get('/media', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'media.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});