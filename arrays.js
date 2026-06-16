const students =
[
{
name: "Ritu Raj",
totalMarks: 85,
age: 22,
city: "Delhi",
isGraduated: true,
registrationNumber: 12345,
hobbies: ["Reading", "Traveling", "Cooking"],
},
{
name: "Mradul",
age: 19,
totalMarks: 90,
city: "Delhi",
isGraduated: true,
registrationNumber: 5678,
hobbies: ["Reading", "Traveling", "Cooking"],
},
{
name: "Harsh",
age: 20,
totalMarks: 88,
city: "Delhi",
isGraduated: true,
registrationNumber: 78910,
hobbies: ["Reading", "Traveling", "Cooking"],
},
{
name: "Anandi",
age: 19,
totalMarks: 92,
city: "Delhi",
isGraduated: true,
registrationNumber: 7789,
hobbies: ["Reading", "Traveling", "Cooking"],
},
{
name: "Mark",
age: 29,
totalMarks: 90,
city: "Delhi",
isGraduated: true,
registrationNumber: 5678,
hobbies: ["Reading", "Traveling", "Cooking"],
},
];

//console.log(students);

const arr=[2,3,4,5,6];

const doubledArr= arr.map((num)=>{
return num*2;
});

console.log("Original Array:", arr);
console.log("Doubled Array:", doubledArr);

const olderstudents = students.filter(student => student.age >=21);
console.log("Older Students:", olderstudents);