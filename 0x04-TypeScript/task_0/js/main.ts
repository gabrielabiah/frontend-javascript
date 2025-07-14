// 1. Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. Create student objects
const student1: Student = {
  firstName: "Gabriel",
  lastName: "Abiah",
  age: 25,
  location: "Accra",
};

const student2: Student = {
  firstName: "Ama",
  lastName: "Mensah",
  age: 23,
  location: "Kumasi",
};

// 3. Create an array of studentsconst studentsList: Student[] = [student1, student2];
const studentsList: Student[] = [student1, student2];
// 4. Create a function to display students
function displayStudents(students: Student[]): void {
  const table = document.createElement("table");
  const headerRow = document.createElement("tr");

  // Create table headers
  const headers = ["First Name", "Last Name", "Age", "Location"];
  headers.forEach((headerText) => {
    const th = document.createElement("th");
    th.textContent = headerText;
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

  // Create rows for each student
  students.forEach((student) => {
    const row = document.createElement("tr");
    Object.values(student).forEach((value) => {
      const td = document.createElement("td");
      td.textContent = value.toString();
      row.appendChild(td);
    });
    table.appendChild(row);
  });

  // Append the table to the body
  document.body.appendChild(table);
}
// 5. Call the function to display students
displayStudents(studentsList);
