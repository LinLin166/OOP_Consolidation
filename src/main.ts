// main.ts
import Manager from './manager';
import Developer from './developer';

const manager = new Manager("Tien Tran", 35, 90000, "Manager");
const developer = new Developer("Linh", 23, 80000, "Typescript");

console.log(manager.getInfo()); // "Tien Tran, Age: 35, Salary: $90000"
console.log(developer.getInfo()); // "Linh, Age: 23, Salary: $80000"

manager.work(); // "Tien Tran is managing the Manager department."
developer.work(); // "Linh is coding in Typescript."

console.log(`Manager's department: ${manager.getDepartment()}`); // "Manager's department: Manager"
console.log(`Developer's programming language: ${developer.getProgrammingLanguage()}`); // "Developer's programming language: Typescript"
