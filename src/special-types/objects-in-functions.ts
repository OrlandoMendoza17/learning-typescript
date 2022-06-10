(() => {
  type Tshirt = {
    model: string;
    size: string;
    gender?: string;
  };

  let response = 0x00ffff
  
  const shirt: Tshirt = {
    model: "Ovejita",
    size: "XL",
    gender: "Male",
  };
  
  const array: Tshirt[] = [shirt]

  const getShirt = ({ model }: Tshirt) => {
    console.log(model);
  };
})();
