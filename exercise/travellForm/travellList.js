var inputFirstName, inputLastName, inputAge, inputGender, inputLocation, inputDate;

function submit() {
    inputFirstName = document.getElementById("firstname").value;
    inputLastName = document.getElementById("lastname").value;
    inputAge = document.getElementById("age").value;
    inputGender = document.getElementById("gender").value;
    inputLocation = document.getElementById("location").value;
    inputDate = document.getElementById("date").value;
    
    

    
    
    
alert(`First Name: ${inputFirstName}\nLast Name: ${inputLastName}\nAge: ${inputAge}\nGender: ${inputGender}\nLocation: ${inputLocation}\nDate: ${inputDate}`)
}
