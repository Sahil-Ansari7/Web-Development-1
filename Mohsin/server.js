const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, JS, Images)
app.use(express.static('public'));

// Sample Menu Data
const menuItems = [
  { id: 1, name: "Cappuccino", description: "Perfect balance of espresso.", image: "https://via.placeholder.com/200" },
  { id: 2, name: "Pepperoni", description: "Loaded with Pepperoni slices.", image: "https://via.placeholder.com/200" },
  { id: 3, name: "Veggie Delight", description: "Fresh veggies on a cheese base.", image: "https://via.placeholder.com/200" },
];

// Routes
// Home route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// API to fetch menu items
app.get('/api/menu', (req, res) => {
  res.json(menuItems);
});

// Handle Contact Form Submission
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  if (name && email && message) {
    console.log(Contact Form Submission - Name: ${name}, Email: ${email}, Message: ${message});
    res.status(200).json({ success: true, message: 'Thank you for contacting us!' });
  } else {
    res.status(400).json({ success: false, message: 'All fields are required.' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(Server is running on http://localhost:${PORT});
});