
const express = require('express');
const path = require('path'); 
const main = require('./src/routers/main');
const list = require('./src/routers/list');
const detail = require('./src/routers/detail');

const app = express();
const port = process.env.PORT || 3001;

app.set('view engine', 'ejs')

app.use(express.static(path.resolve(__dirname, './public')));
app.use(main);
app.use(list);
app.use(detail);

app.listen(port, () => {console.log(`Server running in port ${port}`)});