const express = require('express');
const path = require('path');
const app = express();

app.set('views', path.join(__dirname, 'views/pages'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('admin/dashboardAdmin');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
  console.log('http://localhost:3000/');
});
