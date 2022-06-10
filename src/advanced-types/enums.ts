enum USER { //Por convención se escriben en mayúsculas
  ADMIN = "admin",
  USER = "user",
}

type User = {
  name: string,
  lastname: string,
  type: USER,
  age?: number,
}

const usuario: User = {
  name: "Orlando",
  lastname: "Mendoza",
  type: USER.ADMIN,
}

usuario.age = 12;

console.log(`${usuario.name} ${usuario.lastname} is ${usuario.age} years old!`)