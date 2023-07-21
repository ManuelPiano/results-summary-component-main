const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname)));

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor local ejecutándose en http://localhost:${port}`);
});
