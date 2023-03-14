// Una tupla define un array con número específico de elementos y cada uno de esos elementos
// tiene un tipo específico que no puede cambiar
type NumberCodes = [number, number, number, string]

// Si yo le trato de añadir un data adicional me va a dar error, y de igual manera si le intento
// cambio el tipo a un elemento
const codes: NumberCodes = [1223, 1231, 555, "dadsa"]

codes.forEach(item => console.log(item))