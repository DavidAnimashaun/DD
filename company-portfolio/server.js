// In your server.js or app.js file
const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors

const app = express();
const PORT = 3001;

app.use(cors()); // Enable CORS
app.use(bodyParser.json());

// Connect to SQLite (create a database file named contactFormDB.db)
const db = new sqlite3.Database('contactFormDB.db');

// Create a table for the form data
db.run(`
  CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    message TEXT
  )
`);

// Handle form submissions
app.post('/api/contact', (req, res) => {
  try {
    const formData = req.body;

    // Insert the form data into the contacts table
    const stmt = db.prepare('INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)');
    stmt.run(formData.name, formData.email, formData.message);
    stmt.finalize();

    console.log('Form data saved to the database:', formData);
    res.status(200).send('Form submitted successfully!');
  } catch (error) {
    console.error('Error saving form data to the database:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
