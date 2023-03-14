// El tipo "unknown" te obliga a que hagas la comprobación de tipo cuando quieres hacer uso de él

// Es la evolución del tipo "any", ya que ese tipo no te obliga a verificar el tipo de dato y actualmente se 
// considera como una mala practica hacer uso de él. 

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