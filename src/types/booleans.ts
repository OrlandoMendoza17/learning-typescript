const truth: boolean = true;

let biggerThan = 1 > 2;

type person = {
  name: string;
  lastName: string;
  age: number,
  isStuding: boolean,
  isWorking: boolean,
};

const son: person = {
  name: "Orlando",
  lastName: "Mendoza",
  age: 21,
  isStuding: true,
  isWorking: true,
};

son.age = 43;

if(son.isStuding){
  console.log("edad: ", son.age)
}

export const string = "Orlando";
console.log(string);