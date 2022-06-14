enum ANIMAL_COLOR {
  RED = "red",
  GREEN = "green",
  BLUE = "blue",
}

export interface IAnimal {
  name: string;
  color: ANIMAL_COLOR;
  
  move(): void;
}

interface IDog extends IAnimal{
  bark(): void
}

abstract class Animal implements IAnimal {
  constructor(
    public name: string,
    public color: ANIMAL_COLOR,
    protected height: number
  ) {}
  
  move(){
    console.log("An animal is moving...")
  }
  
  static talk(){
    console.log("Animals don't talk!")
  }
}

class Dog extends Animal implements IDog {
  constructor(name: string, color: ANIMAL_COLOR, height: number) {
    super(name, color, height)
  }
  
  bark() {
    console.log(`WOOOF!!! \n`.repeat(10))
  }
  
  move(){ 
    super.move()
    
    console.log(`it's a dog named ${this.name}`)
  }
}

Animal.talk()

const dog = new Dog("Perseo", ANIMAL_COLOR.BLUE, 24);

dog.move()
dog.bark()

Dog.talk()