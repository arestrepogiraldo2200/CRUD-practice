const path = require('path');
let arrayanimals = require(path.join(__dirname,'../database/data.js'));

detail = {

    detail : (req, res) => {res.render(path.join(__dirname, '../views/detail.ejs'), {doc:"Detail", file: "detail", animal: arrayanimals[parseInt(req.params.id)-1]})}

}

module.exports = detail;