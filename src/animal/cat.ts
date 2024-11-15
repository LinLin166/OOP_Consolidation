//Cat.ts

import Animal from "./animal";

class Cat extends Animal {
  private _activation: string;
  constructor(name: string, sound: string, activation: string) {
    super(name, sound);
    this._activation = activation;
  }
  // Override function makeSound() without super()
  makeSound(): void {
    console.log(`${this.sound}`);
  }

  getActivation(): string;

  getActivation(): string {
    return `${this.name} likes ${this._activation}`;
  }
}

export default Cat;
