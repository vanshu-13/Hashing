import * as crypto from "crypto";
import inquirer from "inquirer";
import { endianness } from "os";
let name = "Vanshu";
const hash = crypto.createHash('sha256').update(name).digest('hex');
console.log(hash);
inquirer
  .prompt([
    {name:'name',
    message:'name:'}
  ])

  .then((answers) => {
    console.log(answers.name);
    const name2 = crypto.createHash('sha256').update(answers.name).digest('hex');
    console.log(name2);
    if (hash === name2){
        console.log("Match is Found!");
    }else{
        console.log("Match is not Found!");
    }
  })

   .catch((error) => {
    if (error.isTtyError) {
  
      // Prompt couldn't be rendered in the current environment[p;-------------------------
    
    } else {
      // Something else went wrong
    }
  });