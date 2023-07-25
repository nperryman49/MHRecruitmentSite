window.onload = function () {
    var submitButton = document.querySelector("#submitBtn");
    const information = [];

    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var country = document.getElementById("country_code").value;
    var resume = document.getElementById("files").value;
    var status = document.getElementById("status").value;
    var firstApptDay = document.getElementById("dateOne").value;
    var firstApptTime = document.getElementById("timeOne").value;
    var secondApptDay = document.getElementById("dateTwo").value;
    var secondApptTime = document.getElementById("timeTwo").value;
    var about = document.getElementById("about").value;

    //file creation
    let fso = CreateObject("Scripting.FileSystemObject");
    let txtFile = CreateTextFile("contactus.txt", true);

 information.push(firstName);
 information.push(lastName);
 information.push(email);
 information.push(phone);
 information.push(country);
 information.push(resume);
 information.push(status);
 information.push(firstApptDay);
 information.push(firstApptTime);
 information.push(secondApptDay);
 information.push(secondApptTime);
 information.push(about);



submitButton.onclick = myFunc;

// will save information into a text file
function myFunc(){
   
    if(!txtFile)
    {
         txtFile = CreateTextFile("contactus.txt", true);
    }
      
    // Data which will write in a file.
    for(let i=0; i < information.length; i++)
    {
      txtFile.writeline(information[i] + ", ");
    }
      
    txtFile.writeline("-------------------------------------------");
    txtFile.Close();
    // Write data in 'Output.txt' .
  }
}

