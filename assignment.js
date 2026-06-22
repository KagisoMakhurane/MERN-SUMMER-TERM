const students =[
{ id: 1, name: 'Aman', marks: 85, attendance: 92 },
{ id: 2, name: 'Riya', marks: 38, attendance: 76 },
{ id: 3, name: 'Karan', marks: 67, attendance: 81 },
{ id: 4, name: 'Simran', marks: 91, attendance: 88 },
{ id: 5, name: 'Raj', marks: 45, attendance: 60 },
{ id: 6, name: 'Neha', marks: 29, attendance: 95 }
];

const passedstudents = students.filter(student => student.marks >= 40 );
console.log("Passed students are as follows:");
console.log(passedstudents);

const updatedstudents = students.map(student => {
    const name = student.name;
    const marks = student.marks;
    const attendance = student.attendance;

    const grade = marks >= 80 ? "A" :
                  marks >= 60 ? "B" :
                  marks >= 40 ? "C" : "F";
    return { 
        name,
        marks,
        attendance,
        grade
     };
});
console.log("Updated students are as follows:");
console.log(updatedstudents);

console.log("Average marks of all students are as follows:");
const totalMarks = students.reduce((accumulator, student) => accumulator + student.marks, 0);
const averageMarks = totalMarks / students.length;
console.log(averageMarks.toFixed(2));

const Classtopper = students.reduce((topper, student) => {
    return (student.marks > topper.marks) ? student : topper;
}, students[0]);
console.log("Class topper is:");
console.log(Classtopper.name,
    Classtopper.marks,
);