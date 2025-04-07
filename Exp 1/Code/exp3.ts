// Base class Student
class Student {
    constructor(
        public name: string,
        public studentId: number,
        public grade: string
    ) {}

    getDetails(): string {
        return `Student: ${this.name}, ID: ${this.studentId}, Grade: ${this.grade}`;
    }
}

// Subclass GraduateStudent extending Student
class GraduateStudent extends Student {
    constructor(
        name: string,
        studentId: number,
        grade: string,
        public thesisTopic: string
    ) {
        super(name, studentId, grade);
    }

    // Overriding getDetails method
    getDetails(): string {
        return `${super.getDetails()}, Thesis Topic: ${this.thesisTopic}`;
    }

    getThesisTopic(): string {
        return `Thesis Topic: ${this.thesisTopic}`;
    }
}

// Independent class LibraryAccount (not inheriting from Student)
class LibraryAccount {
    constructor(
        public accountId: number,
        public booksIssued: number
    ) {}

    getLibraryInfo(): string {
        return `Library Account ID: ${this.accountId}, Books Issued: ${this.booksIssued}`;
    }
}

// Composition: Associating LibraryAccount with Student
class StudentWithLibrary {
    constructor(public student: Student, public libraryAccount: LibraryAccount) {}

    getFullInfo(): string {
        return `${this.student.getDetails()}\n${this.libraryAccount.getLibraryInfo()}`;
    }
}

// Creating instances
const student1 = new Student("Alice", 101, "A");
console.log(student1.getDetails());

const gradStudent1 = new GraduateStudent("Shreyash Dhekane", 16, "A+", "Machine Learning");
console.log(gradStudent1.getDetails());
console.log(gradStudent1.getThesisTopic());

const libraryAcc1 = new LibraryAccount(5001, 3);
console.log(libraryAcc1.getLibraryInfo());

// Demonstrating composition over inheritance
const studentWithLibrary = new StudentWithLibrary(student1, libraryAcc1);
console.log(studentWithLibrary.getFullInfo());
