
const path = require('path');
const arrayanimals = require('../database/data.json');
const fs = require('fs');

let update = {

    update: (req,res) => {res.render(path.join(__dirname,'../views/update.ejs', ),{doc:"Update", file: "update", animaltoupdate : arrayanimals[parseInt(req.params.id)-1]})},
    overwrite: (req,res) => {

        let changedanimal = {
            id : req.params.id,
            name : req.body.animalcommonname,
            scientific_name : req.body.animalscientificname,
            data : req.body.animaldata,
            image : req.body.animalimagelink
        }

        
        for (let i = 0; i<arrayanimals.length; i++){
            if(i+1 == parseInt(req.params.id)){
                arrayanimals[i] = changedanimal;
            }
        }

        fs.writeFileSync(__dirname + '/../database/data.json', JSON.stringify(arrayanimals));

        res.redirect('/detail/'+req.params.id);
    }
};

module.exports = update;