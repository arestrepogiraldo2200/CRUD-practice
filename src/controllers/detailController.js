const path = require('path');
let arrayanimals = require(path.join(__dirname,'../database/data.json'));
const fs = require('fs');

detail = {

    detail : (req, res) => {res.render(path.join(__dirname, '../views/detail.ejs'), {doc:"Detail", file: "detail", animal: arrayanimals[parseInt(req.params.id)-1]})},
    delete: (req,res) => {

        arrayanimals = arrayanimals.filter(animal => animal.id != req.params.id);

        for (let i = 0; i<arrayanimals.length; i++){
            arrayanimals[i].id = i+1;
        }

        fs.writeFileSync(__dirname+"/../database/data.json", JSON.stringify(arrayanimals));
        
        res.redirect('/list');

    },
}

module.exports = detail;