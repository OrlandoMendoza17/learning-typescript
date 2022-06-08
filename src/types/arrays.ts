(()=>{

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
  
  const numeros: (string | number | person | object)[] = [1, 2, 3, 4, "", son];
  
  numeros.push(23)
  numeros.push(son)
  numeros.push({})
  numeros.push([])
  
})()