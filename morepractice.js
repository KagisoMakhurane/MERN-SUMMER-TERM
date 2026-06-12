//array of objects

const students = [ 
{name: "King",
 course: "BCA",
 Marks : [17,23,24,21,22]
},
{name: "Kg",
 course: "BCA",
 Marks : [17,19,22,20,26]
},
{name: "Bajaj",
 course: "BCA",
 Marks : [19,24,28,20,21]
},
{name: "Ritunje",
 course: "BCA",
 Marks : [10,14,11,12,20]
}
]

const updatedstudents = students.map(student =>
{    
     const totalMarks = student.Marks.reduce
     ((accumulator , mark) => {return accumulator + mark},0);

     const percent = ((totalMarks/150)*100).toFixed(2);

     const averageMarks = totalMarks / student.Marks.length;
     
     const ResultStatus = percent >= 50 ? "Pass":"fail";

     return{
     ...student,
     totalMarks,
     percent,
     averageMarks,
     ResultStatus};
     

});
console.log("Updated students are as follows:");
console.log(updatedstudents);

console.log("Passed students are as follows:");

const passedstudents = updatedstudents.filter(student => student.ResultStatus === "Pass");

console.log(passedstudents);

const failedstudents = updatedstudents.filter(student => student.ResultStatus === "fail");
console.log("Failed students are as follows:");
console.log(failedstudents);

