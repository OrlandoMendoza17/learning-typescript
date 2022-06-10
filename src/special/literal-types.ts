(() => {
  type ShirtSize = "S" | "M" | "L" | "XL" | "XLL";
  type ShirtModel = "Ovejita" | "Adidas" | "Nike" | "Tommy Hilfiger" | "Hugo Boss";
  type ShirtGender = "Male" | "Female";
  
  type Tshirt = {
    model: ShirtModel,
    size: ShirtSize,
    gender?: ShirtGender,
  }
  
  const shirt: Tshirt = {
    model: "Ovejita",
    size: "XL",
    // gender: "Male"
  }
  
})();
