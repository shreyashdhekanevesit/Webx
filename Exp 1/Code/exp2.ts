// Define the type for a Student
type student = {
    id: number;
    name: string;
    surname: string;
    age: number;
    marks: number;
};

// Array of student data with surnames
const students: student[] = [
    { id: 1, name: "Shreyash", surname: "Dhekane", age: 20, marks: 85 },
    { id: 2, name: "Bob", surname: "Smith", age: 21, marks: 72 },
    { id: 3, name: "Charlie", surname: "Brown", age: 19, marks: 55 },
    { id: 4, name: "Diana", surname: "Williams", age: 22, marks: 38 },
    { id: 5, name: "Eve", surname: "Davis", age: 20, marks: 60 },
];

// Function to determine the result category of a student
const determineResult = (marks: number): string => {
    if (marks < 40) return "Fail";
    if (marks < 60) return "Pass";
    if (marks < 75) return "First Class";
    return "Distinction";
};

// Iterate through the students and display their result
students.forEach((student) => {
    const result = determineResult(student.marks);
    console.log(
        `Student ID: ${student.id}, Name: ${student.name} ${student.surname}, Age: ${student.age}, Marks: ${student.marks}, Result: ${result}`
    );
});
