interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allow additional properties
}

// 1. Define the Teacher interface
const teacher3: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contract: false,
};

console.log(teacher3);

/* =================================================================================== */
// Define the interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Test the function
console.log(printTeacher("John", "Doe")); // Output: J. Doe

/* ===================================================================================
=================================================================================== */

// Interface for constructor
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// Interface describing the class
interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Implementing the class
class StudentClass implements StudentInterface {
  private firstName: string;
  private lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Optional test usage
const student = new StudentClass({ firstName: "Alice", lastName: "Johnson" });
console.log(student.displayName()); // Output: Alice
console.log(student.workOnHomework()); // Output: Currently working
