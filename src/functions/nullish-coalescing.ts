let createObject = (
  id: string | number,
  name: string,
  age: number,
  career: string
) => {
  return {
    id,
    name,
    age,
    career,
  };
};

console.log(createObject("1", "Orlando", 45, "Accountant"))

// ===============================================================


let createPerson = (
  id: string | number,
  name: string,
  age?: number,
  career?: string
) => {
  return {
    id,
    name,
    //0         => age || 12, => 12
    //""        => age || 12, => 12
    //undefined => age || 12, => 12
    //null      => age || 12, => 12
    age: age ?? 12,
    //0         => age ?? 12, => 0
    //""        => age ?? 12, => ""
    //undefined => age ?? 12, => 12
    //null      => age ?? 12, => 12
    career: career ?? "Software Engineer",
  };
};

//Conclusión: Es mejor utilizar "??" que "||"
console.log(createPerson(1, "Orlando", 0, ""))