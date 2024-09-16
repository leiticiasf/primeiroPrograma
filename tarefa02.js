const inquirer = require('inquirer'); 
const chalk = require('chalk'); 


inquirer
.prompt([
    {name: 'nome', message:'Qual teu nome?'},
    {name: 'idade', message: 'Qual a tua idade?'},
])

.then((answers) => {
   const response = `Olá, ${answers.nome}!. Você tem ${answers.idade} anos.` 
    console.log(chalk.bgYellow.black(response));
   
  });