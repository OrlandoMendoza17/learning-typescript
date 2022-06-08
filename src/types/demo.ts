const edades: number[] = [11, 22, 47];
const nombre: string = "Orlando Mendoza"

const printArray = (nombre: string, edades: number[]) => {
  edades.forEach((edad: number) => {
    console.log(`${nombre} tiene ${edad} años`);
  });
};

printArray(nombre, edades);