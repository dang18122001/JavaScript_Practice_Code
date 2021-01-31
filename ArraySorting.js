"use strict"

var inputArray = [40, 100, 1, 5, 25, 10];
console.log(inputArray);

inputArray.sort(function(a, b){return a - b});
console.log(inputArray);

inputArray.sort(function(a, b){return b - a});
console.log(inputArray);

class Student {

    constructor (name, age, nationality, gpa) {
        this.name = name;
        this.age = age;
        this.nationality = nationality;
        this.gpa = gpa;
    }

    setName(name) {
        this.name = name;
    } 
    
    setAge(age) {
        this.age = age;
    }

    setNationality(nationality) {
        this.nationality = nationality;
    }

    setGPA(gpa) {
        this.gpa = gpa;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }
    
    getNationality() {
        return this.nationality;
    }

    getGPA() {
        return this.gpa;
    }
}

var student1 = new Student("A", 18, "Vietnamese", 3.6);
var student2 = new Student("B", 19, "American", 3.3);
var student3 = new Student("C", 20, "Japanese", 3.5);
var student4 = new Student("D", 17, "Germany", 3.0);
var student5 = new Student("E", 25, "Indian", 3.7);
var student6 = new Student("F", 24, "Korean", 3.2);
var student7 = new Student("G", 22, "Chinese", 3.3);
var student8 = new Student("H", 23, "Canadian", 3.0);
var student9 = new Student("I", 21, "Mexican", 3.4);
var student10 = new Student("J", 24, "French", 3.5);
var student11 = student1;
student11['name'] = "K";
console.log(student1);
student1['name'] = "L";
console.log(student11);

function updateName(student) {
    student['name'] = "Z";
}

updateName(student1);
console.log(student1);
// updateName(1);

var student12 = JSON.parse(JSON.stringify(student1));
student12['name'] = 'Y';
console.log(student1);
console.log(student12);


// var student = [student1, student2, student3, student4, student5, student6, student7,
//     student8, student9, student10];
// student.sort(function(a,b){return a.age - b.age});
// console.log(student);

// var json = JSON.stringify(student);
// console.log(json);

// const FileSystem = require("fs");
// FileSystem.writeFile("C:/Users/DangHuynh/Desktop/JavaScriptPractice/HTML/Json/student.json", json, (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
// });

// var studentJsonArray = [
//     {
//         "name": "A",
//         "age": 18,
//         "nationality": "Vietnamese",
//         "gpa": 3.6
//     },
//     {
//         "name": "B",
//         "age": 19,
//         "nationality": "American",
//         "gpa": 3.3
//     },
//     {
//         "name": "C",
//         "age": 20,
//         "nationality": "Japanese",
//         "gpa": 3.5
//     },
//     {
//         "name": "D",
//         "age": 17,
//         "nationality": "Germany",
//         "gpa": 3.0
//     },
//     {
//         "name": "E",
//         "age": 25,
//         "nationality": "Indian",
//         "gpa": 3.7
//     },
//     {
//         "name": "F",
//         "age": 24,
//         "nationality": "Korean",
//         "gpa": 3.2
//     },
//     {
//         "name": "G",
//         "age": 22,
//         "nationality": "Chinese",
//         "gpa": 3.3
//     },
//     {
//         "name": "H",
//         "age": 23,
//         "nationality": "Canadian",
//         "gpa": 3.0
//     },
//     {
//         "name": "I",
//         "age": 21,
//         "nationality": "Mexican",
//         "gpa": 3.4
//     },
//     {
//         "name": "J",
//         "age": 24,
//         "nationality": "French",
//         "gpa": 3.5
//     }
// ];

// // console.log("[");
// // for (var student of studentJsonArray) {
// //     console.log("{");
// //     for (var studentProp in student) {
// //         console.log(studentProp + ": " + student[studentProp]);
// //     }
// //     console.log("},");
// // }
// // console.log("]");

// for (var student of studentJsonArray) {
//     for (const [key, value] of Object.entries(student)) {
//         console.log(key + ": " + value);
//     }
// }