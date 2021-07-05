// CODE here for your Lambda Classes


class Person{
    constructor(attrs){
        this.name = attrs.name,
        this.age = attrs.age,
        this.location = attrs.location
    };
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    };
};

class Instructor extends Person{
    constructor(attrs){
        super(attrs);
        this.specialty = attrs.specialty,
        this.favLanguage = attrs.favLanguage,
        this.catchPhrase = attrs.catchPhrase
    };
    demo(subject){
        return `Today we are learning about ${subject}.`
    };
    grade(student, subject){
        return `${student} receives a perfect score on ${subject}`
    };
    gradeStudent(student){
        student.grade = Math.random()*100;
        return student.grade.toFixed();
    }
};

class Student extends Person{
    constructor(attrs){
        super(attrs);
        this.previousBackground = attrs.previousBackground,
        this.className = attrs.className,
        this.favSubjects = attrs.favSubjects,
        this.grade = attrs.grade
    };
    listSubjects(){
        return this.favSubjects.toString();
    };
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`
    };
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`
    }
    gradute(){
        if(this.grade<70){
            return `${this.name} needs to rethink the choices he's made`
        }else{
            return `${this.name} has graduated from Lambda School and is a baller!`
        }
    }
};

class ProjectManager extends Instructor{
    constructor(attrs){
        super(attrs);
        this.gradClassName = attrs.gradClassName,
        this.favInstructor = attrs.favInstructor
    };
    standUp(slackChannel){
        return `${this.name} announces to ${slackChannel}, @channel standy times!`
    };
    debugsCode(studentObj, subject){
        return `${this.name} debugs ${studentObj}'s code on ${subject}`
    };
};

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const anthony = new Student({
    name: 'Anthony',
    location: 'Mexico',
    age: 35,
    previousBackground: 'None',
    className: 'Web 25',
    favSubjects: [" HTML", " CSS", " JavaScript"],
    grade: 100
  });

  const austin = new ProjectManager({
    name: "Austin",
    location: "Bend, OR",
    age: "unknown",
    favLanguage: "C#",
    specialty: "classes",
    catchPhrase: "You're on deck",
    gradClassName: "Web PT 7",
    favInstructor: "Britt"
  });
  


//*************************************/INSTRUCTOR TEST****************************************//
console.log(fred.speak());
console.log(fred.demo("HTML"));
console.log(fred.grade("Anthony", "Classes"))

//*************************************/STUDENT TEST****************************************//

console.log(anthony.PRAssignment('Prototypes'));
console.log(anthony.listSubjects());
console.log(anthony.sprintChallenge("JavaScript Fundamentals"))

//*************************************/PROJECT MANAGER TEST****************************************//
console.log(austin.catchPhrase);
console.log(austin.debugsCode("anthony", "java"));
console.log(austin.standUp('web25_austin'));
//*****************************STRETCH************************************/

console.log(anthony.grade)
console.log(fred.gradeStudent(anthony));
console.log(anthony.gradute());

console.log(austin.gradeStudent(anthony))
console.log(anthony.gradute())





