const express = require('express')
const bodyParser = require('body-parser')
const port = 8000;


const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./routes/issues.tracker.routes')
app.use(bodyParser.json())
app.use('/',routes)

app.get('/', (req, res) => {
    res.json("Welcome To Issue Tracker Application")
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    require('./dbConfig/dbConfig')
  });
