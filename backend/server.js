const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const db = new sqlite3.Database('./database.db');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Create users table if it doesn't exist
db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE,
    username TEXT UNIQUE,
    password TEXT
)`);

// Registration Route
app.post('/auth/add', (req, res) => {
    const { email, username, password } = req.body;

    if (!email || !username || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    db.run(
        'INSERT INTO users (email, username, password) VALUES (?, ?, ?)',
        [email, username, password],
        (err) => {
            if (err) {
                return res.status(400).json({ error: 'Email or Username already exists' });
            }
            res.json({ message: 'User registered successfully' });
        }
    );
});

// Start server on port 3000
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});