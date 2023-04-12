// Imported modules
const express = require('express');

// Variables
const app = express();

// Routes
app.get('/', (req, res) => {
  res.send(`
    <html>
    <head>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body>
    errir
     <h1>Hello World.  This is a Nodejs app.</h1>
    </body>
  </html>
  `);
});

app.listen(8000, () => {
  console.log('Server is running on PORT - 8000');
});
