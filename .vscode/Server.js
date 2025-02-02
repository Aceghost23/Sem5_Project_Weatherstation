// server.js
const express = require('express');
const path = require('path');
const Papa = require('papaparse');
const fs = require('fs');
const app = express();

app.use(express.static(path.join(__dirname, '.vscode')));

// Route für die Startseite
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Pfad zur index.html
});

// Route für die Wetterstationen
app.get('/stations', (req, res) => {
    fs.readFile(path.join(__dirname, 'stations.csv'), 'utf8', (err, data) => {
        if (err) {
            console.log('Error:', err);
            return res.status(500).send('Error reading CSV file');
        }
        const parsedData = Papa.parse(data, { header: true, skipEmptyLines: true });
        res.json(parsedData.data);
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

