// dog.ts
import Animal from "./animal";

class Dog extends Animal {
  private _favoriteFood: string;

  constructor(name: string, sound: any, favFood: string) {
    super(name, sound);
    this._favoriteFood = favFood;
  }
  // Override function makeSound() with super() to call the parent class method
  makeSound(): void {
    super.makeSound();
    console.log(this.sound);
  }
  getFavoriteFood(): string;
  getFavoriteFood(): string {
    return `The ${this._favoriteFood} is favorite food of ${this.name}`;
  }
}
export default Dog;
