import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let todo = await inquirer.prompt([
        {
            name: "firstQuestion",
            type: "input",
            message: "what you want to add in your todos?"
        },
        {
            name: "secondQuestion",
            type: "confirm",
            message: "do you want to add more?",
            default: "false"
        }
    ]);
    todos.push(todo.firstQuestion);
    condition = (todo.secondQuestion);
    console.log(todos);
}
