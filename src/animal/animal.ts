// animal.ts
class Animal {
  public name: string;
  protected sound: string;

  constructor(name: string, sound: string) {
    this.name = name;
    this.sound = sound;
  }

  makeSound(): void {
    console.log(`${this.name} makes sound like:`);
  }
  //Overload funtion getLegs() with parameters
  getLegs(): string;
  getLegs(legs: string): string;
  getLegs(legs: number): string;
  getLegs(legs?: unknown): string {
    if (legs === undefined) {
      return `The ${this.name} has sound like ${this.sound} `;
    } else {
      return `The ${this.name} has sound like ${this.sound} and ${legs} legs`;
    }
  }
}

export default Animal;
