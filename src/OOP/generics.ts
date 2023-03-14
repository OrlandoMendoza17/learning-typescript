//Generics son types que se le mandan como parametros a las funciones y a las promesas.

function myFunction<myType1>(numero: myType1){
  return numero
}

let numero: number;

numero = myFunction<number>(10000)