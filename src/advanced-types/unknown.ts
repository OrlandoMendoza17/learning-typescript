let variable: unknown;

variable = null;
variable = undefined;
variable = 1;
variable = "string";
variable = {};
variable = [1, 2, 3];

//TypesScript te fuerza a que verifiques el tipo de dato a diferencia de any que no lo hace
if(Array.isArray(variable)){
  variable.map(number => console.log(`Numero: ${number}`));
}