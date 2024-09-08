const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

const allowCors = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials, X-Access-Token, X-Key'
  );
  res.header(
    'Access-Control-Allow-Methods',
    'GET, PUT, POST, DELETE, OPTIONS, PATCH'
  );
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
};

app.use(allowCors);
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/dist'));

// SERVE ANGULAR index.html
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
});
app.listen(port, async () => {
  console.log(`API Gateway running in port ${port}!`);
});
