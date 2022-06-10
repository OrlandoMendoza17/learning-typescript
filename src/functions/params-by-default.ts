let createProduct = (
  id: string | number,
  name: string,
  age: number = 12,
  career: string = "Software Engineer"
) => {
  return { id, name, age, career };
};

// {id, name, age = 12, career = "Software Engineer"}
console.log("createProduct:");
console.log(createProduct(1, "Orlando"));

export type User = {
  id: string | number;
  name: string;
  age?: number;
  career?: string;
};

let createUser = (user: User) => {
  const { id, name, age = 24, career = "Frontend Developer" } = user;

  return {
    id,
    name,
    age,
    career,
  };
};

console.log("createUser:");
console.log(createUser({id: 1, name: "Manuel"}));
