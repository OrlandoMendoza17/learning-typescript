let number = 50;
let randomNumber = Math.random() * 100;

console.log("number:", number);
console.log("randomNumber:", randomNumber);

const isGreaterThanRandom = async () => {
  const promesa = new Promise<boolean>((resolve, reject) => {
    if (number > randomNumber) {
      resolve(true);
    } else {
      reject("Es menor");
    }
  });

  return promesa;
};

(async () => {
  try {
    
    const response = await isGreaterThanRandom();
    console.log(response);
    
  } catch (error) {
    console.log(error);
  }
})();
