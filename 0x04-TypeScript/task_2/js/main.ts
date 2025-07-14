// Interfaces
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director Class
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Teacher Class
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Function to create employee
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Test examples (optional)
console.log(createEmployee(200)); // Teacher instance
console.log(createEmployee(1000)); // Director instance
console.log(createEmployee("$500")); // Director instance

// Type predicate to check if employee is Director
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// Function to execute work based on type
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
}

// Example usage
console.log(executeWork(createEmployee(200))); // Getting to work
console.log(executeWork(createEmployee(1000))); // Getting to director tasks

// String literal type
type Subjects = "Math" | "History";

// Function to teach based on class
function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") return "Teaching Math";
  return "Teaching History";
}

// Example usage
console.log(teachClass("Math")); // Teaching Math
console.log(teachClass("History")); // Teaching History
