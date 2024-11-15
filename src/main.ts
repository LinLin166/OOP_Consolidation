// main.ts
import Manager from "./employee/manager";
import Developer from "./employee/developer";
import Dog from "./animal/dog";
import Cat from "./animal/cat";

//-----------Employee--------------//;
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

//------------Animal---------------//
const beigie = new Dog("Beigie", "gau gau", "born");
const cat = new Cat("cat", "meow", "catch mouse");

beigie.makeSound(); // Beigie makes sound like: gau gau
cat.makeSound(); //meow

console.log(beigie.getLegs(4)); //The Beigie has sound like gau gau and 4 legs
console.log(beigie.getLegs("four")); //The Beigie has sound like gau gau and four legs
console.log(cat.getLegs()); //The cat has sound like meow (without parameter)

console.log(beigie.getFavoriteFood()); //The born is favorite food of Beigie
console.log(cat.getActivation()); //cat likes catch mouse
