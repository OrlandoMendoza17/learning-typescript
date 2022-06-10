(() => {
  let variable: string | number | any[] | {} = "soy un string";

  variable = 13;
  variable = [1, "", null, {}];
  variable = { name: "", age: 14 };
  // variable = null;

  function print(param: string | number) {
 
    if (typeof param === "string") {
      
      if (param.includes("Hello")) {
        console.log("Hello World!");
      } else {
        console.log(param);
      }
      
    } else {
      console.log(`I'm the number ${param}`);
    }
  }

  print(4)
})();
