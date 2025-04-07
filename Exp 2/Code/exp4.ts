// Employee interface
interface Employee {
    name: string;
    id: number;
    role: string;
    getDetails(): string;
}

// Manager class implementing Employee
class Manager implements Employee {
    constructor(
        public name: string,
        public id: number,
        public role: string,
        public department: string
    ) {}

    getDetails(): string {
        return `Manager: ${this.name}, ID: ${this.id}, Role: ${this.role}, Department: ${this.department}`;
    }
}

// Developer class implementing Employee
class Developer implements Employee {
    constructor(
        public name: string,
        public id: number,
        public role: string,
        public programmingLanguages: string[]
    ) {}

    getDetails(): string {
        return `Developer: ${this.name}, ID: ${this.id}, Role: ${this.role}, Programming Languages: ${this.programmingLanguages.join(", ")}`;
    }
}

// Demonstrating the solution
const manager1 = new Manager("Alice", 101, "Manager", "Sales");
console.log(manager1.getDetails());

const developer1 = new Developer("Shreyash Dhekane", 16, "Developer", ["TypeScript", "JavaScript", "Python"]);
console.log(developer1.getDetails());
