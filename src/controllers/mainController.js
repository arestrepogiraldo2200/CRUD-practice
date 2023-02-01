
const path = require('path');

main = {

    welcome: (req,res) => {res.render(path.join(__dirname,'../views/main.ejs'), {doc:"Home", file: "main"});}
}

module.exports = main;