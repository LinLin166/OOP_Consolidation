// main.ts
import Manager from "./src/manager";
import Developer from "./src/developer";

const manager = new Manager("Tien Tran", 35, 90000, "Manager");
const developer = new Developer("Linh", 23, 80000, "Typescript");

console.log(manager.getInfo()); // "Tien Tran, Age: 35 (no salary)
console.log(developer.getInfo(true)); // "Linh, Age: 23, Salary: $80000" (with salary)

manager.work(); // "Tien Tran is managing the Manager department."
developer.work(); // "Linh is coding in Typescript."

console.log(`Manager's department: ${manager.getDepartment()}`); // "Manager's department: Manager"
console.log(manager.getDepartment(true)); // "Tien Tran is managing the IT department with a salary of $90000."
console.log(
  `Developer's programming language: ${developer.getProgrammingLanguage()}`
); // "Developer's programming language: Typescript"
