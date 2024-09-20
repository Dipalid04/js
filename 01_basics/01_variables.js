const accountId = 144535
let accountEmail = "dipali@google.com"
var accountPassword = "12345"
accountCity = "Pune"
let accountState;


// accountId = 2    // Not allowed

accountEmail = "dip123@gmail.com"
accountPassword = "15364"
accountCity = "Bengaluru"

console.log(accountId);

/* Prefer not to use "var"
because of issue in block scope and functional scope */

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])