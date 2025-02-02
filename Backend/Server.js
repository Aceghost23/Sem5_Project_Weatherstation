const express = require('express');
const path = require('path');
const fs = require('fs');
const Papa = require('papaparse');

const app = express();

app.use(express.static(path.join(__dirname, 'Frontend')));

// Startroute -> index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Frontend', 'index.html'));
});

// Route: CSV-Datei einlesen und als JSON liefern
app.get('/stations', (req, res) => {
  fs.readFile(
    path.join(__dirname, 'Frontend', 'stations.csv'),
    'utf8',
    (err, data) => {
      if (err) {
        console.error('Fehler beim Lesen der CSV:', err);
        return res.status(500).send('Fehler beim Lesen der CSV-Datei');
      }
      const parsedData = Papa.parse(data, { header: true, skipEmptyLines: true });
      res.json(parsedData.data);
    }
  );
});

// Server starten
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
