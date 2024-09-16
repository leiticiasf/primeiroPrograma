const chalk = requires('chalk');

const nota = 7; 

if (nota >= 7 ){
    console.log(chalk.green("Aprovado!"));

  }  else{
        console.log(chalk.red("Reprovado."))
  }
