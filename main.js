// ATM
// This somewhat complex TypeScript/Node.js project is a console-based application. When the system starts the user is prompted with a user id and user pin. After entering the details successfully, the ATM functionalities are unlocked. All the user data is generated randomly.
// array ka bracket ham tab use karthay hain jab multiple values ho but ham single value k lia bhi use karsaktay hain no worries AGAR HAMARAY PAAS AIK OR OBJECT HOTHA THO YE HELPFUL HOTHA HAMARAY LIA
// inquirer mainly hamsay 3 cheeezen  demand kartha hay 
//1- name
//2-messege
//3-type
// iskay ilawa bhi bht c cheezein day saktay hain but ye zaroori hay
import inquirer from "inquirer";
let myAccountBalance = 35000; // POUNDS
let myPincode = 7713;
let passcode = await inquirer.prompt([
    {
        name: "PIN",
        message: "Please enter your PIN: ",
        type: "number"
    }
]);
if (passcode.PIN === myPincode) {
    console.log("PIN verified. Access granted.");
    let chosenAction = await inquirer.prompt([
        {
            name: "Action",
            message: "Please select an option",
            type: "list",
            choices: ["Withdraw", "Check Balance", "Deposit", "Transfer", "Fast Cash"]
        }
    ]);
    if (chosenAction.Action === "Withdraw") {
        let amountResponse = await inquirer.prompt([
            {
                name: "withdrawAmount",
                message: "Enter the amount to withdraw: ",
                type: "number"
            }
        ]);
        if (amountResponse.withdrawAmount <= myAccountBalance) {
            myAccountBalance -= amountResponse.withdrawAmount;
            console.log(`Your current balance is now: ${myAccountBalance}`);
        }
        else {
            console.log("Insufficient balance.");
        }
    }
    else if (chosenAction.Action === "Fast Cash") {
        let fastCashAmount = await inquirer.prompt([
            {
                name: "fastCashOption",
                message: "Select fast cash option",
                type: "list",
                choices: [3000, 15000]
            }
        ]);
        if (fastCashAmount.fastCashOption <= myAccountBalance) {
            myAccountBalance -= fastCashAmount.fastCashOption;
            console.log(`Your current balance is now: ${myAccountBalance}`);
        }
        else {
            console.log("Insufficient balance.");
        }
    }
    // Add 'Check Balance', 'Deposit', and 'Transfer' options here
    else if (chosenAction.Action === "Check Balance") {
        console.log(`Your current balance is: ${myAccountBalance}`);
    }
    else if (chosenAction.Action === "Deposit") {
        let depositAmount = await inquirer.prompt([
            {
                name: "depositAmount",
                message: "Enter the amount to deposit: ",
                type: "number"
            }
        ]);
        myAccountBalance += depositAmount.depositAmount;
        console.log(`Your current balance is now: ${myAccountBalance}`);
    }
    else if (chosenAction.Action === "Transfer") {
        let transferAmount = await inquirer.prompt([
            {
                name: "transferAmount",
                message: "Enter the amount to transfer: ",
                type: "number"
            }
        ]);
        if (transferAmount.transferAmount <= myAccountBalance) {
            myAccountBalance -= transferAmount.transferAmount;
            console.log(`Your current balance is now: ${myAccountBalance}`);
        }
        else {
            console.log("Insufficient balance.");
        }
    }
}
else {
    console.log("Invalid PIN. Please try again.");
}
