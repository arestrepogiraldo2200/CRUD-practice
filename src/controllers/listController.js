const path = require('path');
let arrayanimals = require(path.join(__dirname,'../database/data.js'))

list = {
    list : (req, res) => {res.render(path.join(__dirname, '../views/list.ejs'),{doc:"List", file: "list", array:arrayanimals})}
}

module.exports = list