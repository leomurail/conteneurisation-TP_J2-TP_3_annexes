const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 8080;

const BACKEND_URL = process.env.BACKEND_URL || 'http://backend-service:3000';

app.get('/', async (req, res) => {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/message`);
    const data = response.data;
    res.send(`
      <!DOCTYPE html>
      <html lang="fr">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Frontend App</title>
          <style>
              body { font-family: sans-serif; text-align: center; margin-top: 50px; }
              .message { font-size: 24px; color: #333; padding: 20px; border: 1px solid #ccc; display: inline-block; border-radius: 8px; background-color: #f9f9f9; }
          </style>
      </head>
      <body>
          <h1>Frontend Kubernetes</h1>
          <div class="message">
              Message du backend : ${data.message}
          </div>
      </body>
      </html>
    `);
  } catch (error) {
    res.status(500).send(`
      <!DOCTYPE html>
      <html>
      <head><title>Erreur</title></head>
      <body>
        <h1>Erreur de connexion au backend</h1>
        <p>${error.message}</p>
        <p>URL appelée : ${BACKEND_URL}/api/message</p>
      </body>
      </html>
    `);
  }
});

app.listen(port, () => {
  console.log(`Frontend server listening at http://localhost:${port}`);
});
