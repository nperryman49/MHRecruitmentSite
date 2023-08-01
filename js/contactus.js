const information = [];

window.onload = function () {
var submitButton = document.querySelector("#submitBtn");

submitButton.onclick = myFunc;

// will save information into a text file
function myFunc(){

  var firstName = document.getElementById("fname").value;
  var lastName = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var country = document.getElementById("country_code").value;
  var resume = document.getElementById("files").value;
 // var status = document.getElementById("status").value;
 // var firstApptDay = document.getElementById("dateOne").value;
 // var firstApptTime = document.getElementById("timeOne").value;
 // var secondApptDay = document.getElementById("dateTwo").value;
 // var secondApptTime = document.getElementById("timeTwo").value;
  //var about = document.getElementById("about").value;


information.push(firstName);
information.push(lastName);
information.push(email);
information.push(phone);
information.push(country);
information.push(resume);
//information.push(status);
//information.push(firstApptDay);
//information.push(firstApptTime);
//information.push(secondApptDay);
//information.push(secondApptTime);
//information.push(about);
 console.log("Button CLicked");
 // Requiring fs module in which
// writeFile function is defined.
//const fs = require('fs')
 
// Data which will write in a file.
//for(let i=0; i <= information.length; i++)
//{
 //   fs.writeFile('contactus.txt', information[i], (err) => {
        // In case of a error throw err.
    //    if (err) {
     //     throw new Error(err);
     //   }
     //     console.log("Wrote to file successfully");

   // })
//}
 //more comments to test hershy pull button
// Write data in 'Output.txt' .
}
}