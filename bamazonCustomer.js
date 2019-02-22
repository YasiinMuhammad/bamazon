var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazon_DB"
});
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    displayProducts();
    setTimeout(shop, 2000);
});  

function displayProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log("id | products | price")
            console.log("_______________________")
            console.log(res[i].id + " | " + res[i].product_name + " | " + res[i].price)
            console.log("_______________________")
            }
    })

};


function shop() {
    connection.query("SELECT * FROM products", function (err, res) {
        inquirer
            .prompt([
                {

                    type: "list",
                    name: "choice",
                    choices: function () {
                        var choiceArray = [];
                        for (var i = 0; i < results.length; i++) {
                            choiceArray.push(res[i].product_name.toString());
                        }
                        return choiceArray;
                    },
                    message: "Which product would you like to buy?",
                    
                },
                {
                    type: "input",
                    name: "quantity",
                    choices: ["1", "2", "3","4","5",],
                    message: "How many would you like to buy?"
                }])
      
    
        .than(function (answer){
        var chosenItems;
        for (var i = 0; i < res.length; i++) {
            if (res[i].item_id === answer.choice) {
                chosenItems = results[i];
            }
        }
        var price = chosenItems.price * answer.quantity

        if(chosenItems.quanitity >= parseInt(answer.quantity)){
            connection.query(
                "UPDATE product SET ? WHERE ?",
                [
                  {
                    quanitity: chosenItems.quanitity - answer.quantity
                  },
                  {
                    id: chosenItem.id
                  }
                ],
                function(error) {
                  if (error) throw err;
                  console.log("purchase successfully!");
                  start();
                }
              )
            }
            else{
                console.log("Currently out of Stock")
            }
        
    });
    }
)};
