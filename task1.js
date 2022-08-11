// task 1
class course {
    constructor(title, mentorName, numOfStudents, price){
        this.title = title;
        this.mentorName = mentorName;
        this.numOfStudents = numOfStudents;
        this.price = price;
    }
    printName(){
        console.log(this.title, Date())
    }
    startCourse(){
        console.log('Course has started...')
    }
}

const course1 = new course('React', 'vaniko', 15, 650);
course1.printName();
course1.startCourse();


// task 2

let myConsole = {
    log(...rest){
        console.log("received:", rest)
    }
}

myConsole.log(1,2,3,4,5,6,7,8)

// task 3

let user = {
    name: "Vaniko",
    skills: ["React", "Node"],
};

let {name: firstName, skills: stack} = user;
console.log(firstName,stack)

// task 4

const person1 = {
    name: "Giorgi",
    age: 40,
};

let person2 = person1;

person2.name = "Gvantsa";

console.log(person1); 
console.log(person2); 

//დაწვრილებით ახსენით თუ რატომ შეიცვალა ორივე ობიექტში არსებული name ცვლადი. ანუ რატომ არ არის person1.name "Giorgi"-ის ტოლი(რაც თავიდან მივანიჭეთ)? 

// პასუხი
// person1.name გიორგის ტოლი არარის რადგან person1 გავუტოლეთ person2-ს ანუ person2 იგივეა რაც person1 და რადგან person2 - ის name გავუტოლეთ "Gvantsa"-ს შესაბამისად person1-ის .name გაუტოლდა "Gvantsa"-ს.

//task 5

// map

Array.prototype.mapFunction = function(callback){
    let Array = [];
    for(let i=0; i < this.length; i++){
        Array.push(callback(this[i]))
    }
    return Array
};

//filter

Array.prototype.filterFunction = function(callback){
    let Array = [];
    for(let i=0; i < this.length; i++){
        if(callback(this[i]) == true){
            Array.push(this[i])
        }
    }
    return Array
};

// reduce

Array.prototype.reduceFunction = function(callback,accumulator){
    for(let i=0;i<this.length;i++){
    accumulator =+callback(accumulator, this[i])
} 
    return accumulator
}

//task 6

const arrOfNumbers = [1,2,3,4,5,6,7,8,9,10];

let newArr = arrOfNumbers.filterFunction(item => item%2)

newArr = newArr.mapFunction(item => item*2)

newArr = newArr.reduceFunction((n,m) => n * m, 1)

console.log(newArr)

//task 7

const User = {
    name: 'Vaniko',
    age: 20
}

function copy(arg){
    let copiedUser = Object.assign({}, arg);
    return copiedUser
}

const copiedUser = copy(User)
console.log(copiedUser)

