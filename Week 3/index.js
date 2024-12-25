//Creating a function for employee information
function Employeeinfo(name,salary){
    console.log("Welcome "+ name+ " your monthly salary is £"+ salary)
}

//First message to display in the output
console.log("This is my first JavaScript Program using node JS")


//Creating variable to pass through the parameters
var  Ename="Smith"
var Esal= 6000

//Calling the function
Employeeinfo(Ename,Esal)

//Arrow function
const Eskills= (Skills)=>{
    console.log("You're expert in "+Skills)
}

Eskills("Java")

console.log("Hello")

const Student=require('./StudentInfo.js')
const Person=require('./Person.js')


console.log("Student name: "+ Student.getName())
console.log("Campus: "+ Student.Location())
console.log("DOB: "+ Student.dob)

console.log(Student.StudentGrade())
console.log("Grade: "+ Student.StudentGrade(60))

//New person
Person1= new Person("John","USA","John25@ABC.com")
console.log("New person is: "+Person1.GetPersonInfo)



os=require("os")
const util=require('util')
console.log("temporary directory"+ os.tmpdir() )
console.log("hostname: "+ os.hostname())
console.log("OS : " + os.platform() +"release:"+ os.release())
console.log("Uptime"+ (os.uptime())/3600 +" hours")
console.log("userInfo" + util.inspect(os.userInfo()))
console.log("Memory "+ os.totalmem()/1000000000 + "Giga byte")
console.log(" free: "+os.freemem()/1000000000 + "Giga byte")
console.log("CPU "+ util.inspect(os.cpus()))
console.log("Network"+ util.inspect(os.networkInterfaces()))
console.log("programe end")