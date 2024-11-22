const express = require('express');
const app = express();
const bfhlRoute = require('./routes/bfhlRoute');

app.use(express.json());
app.use('/bfhl', bfhlRoute);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
