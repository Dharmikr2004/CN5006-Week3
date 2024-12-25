const DateOfBirth="03/05/2004"

//getting the name of the  student
const GetStudentName= ()=>{
    return "Dharmik"
}

//getting the campus  name
const GetCampusName= ()=>{
    return ("Docklands Campus")
}

//exporting the functions and variable from the modules

exports.getName=GetStudentName
exports.Location=GetCampusName
exports.dob=DateOfBirth

//Exporting function with the help of parameters
exports.StudentGrade=(Marks)=>{
    if(Marks>50 && Marks<70)
        return("B Grade")
    else
        return("A Grade")
}