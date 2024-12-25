class student{
    //When a class is created, contructor also get called alongside
    constructor(name,age,email){
        this.name;
        this.age;
        this.email;
    }
    
    GetPersonInfo(){
        return
            Name:this.name
            Age:this.age
            Email:this.email
    }
    
}

module.exports=student;