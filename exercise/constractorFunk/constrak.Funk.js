
////You are to create a collection of employee's information for your company. Each employee has the following attributes:
//Name
//Job title
//Salary
//Status
//First, you will create an array named employees
//Next, you will create an Employee constructor with the first three attributes defined at the time of instantiation and the fourth will be defaulted to "Full Time".
//This constructor will also have a method called printEmployeeForm that prints the employee's information to the console.
//(e.g. "Name: Bob, Job Title: V School Instructor, Salary: $3000/hour, Status: Part time")
//You will then:
//Instantiate three employees
//Override the status attribute of one of them to either "Part Time" or "Contract"
//Call the printEmployeeForm method for each employee
//Put the generated employees into the employees array using whichever method you prefer.





function Emp(fName, jtitle, sal, stat) {  
   
    this.fName = fName;
    this.jtitle = jtitle;
    this.sal = sal;
    this.stat = stat;
    this.printEmployeeForm = function(){
    console.log(this.fName + " " + this.sal+" "+this.jtitle+" "+this.stat);
  }
}

var emp1 = new Emp("John", "driver", 2000, "full time");
emp1.printEmployeeForm();

var emp2 = new Emp("Sally", "secretary", 1700, "part time");
emp2.printEmployeeForm();

var emp3= new Emp("Dan", "IT Seport", 3000, "contractor");
emp3.printEmployeeForm();