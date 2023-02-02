
const path = require('path')
let animalsarray = require(path.join(__dirname,'../database/data.json'));
const fs = require('fs');

add = {

    addform: (req,res) => {res.render(path.join(__dirname,'../views/add.ejs'), {doc:"Add", file: "add"})},
    addanimal: (req,res) => {

        let newanimal = {
            id: animalsarray.length + 1,
            name : req.body.animalcommonname, 
            scientific_name : req.body.animalscientificname,
            data : req.body.animaldata,
            image: req.body.animalimagelink,
        }    
        
        animalsarray.push(newanimal);

        fs.writeFileSync(__dirname+"/../database/data.json", JSON.stringify(animalsarray));
        
        res.redirect('/list');
    },

};

module.exports = add;