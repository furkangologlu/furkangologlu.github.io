const express = require('express');
const path = require('path');
let app = express();

app.use(express.static('.'))


const PORT = process.env.PORT || 3000;

app.listen(PORT)
