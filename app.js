const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World from tony!'));
app.get('/sample', (req, res) => res.send('Hello form sample route'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
