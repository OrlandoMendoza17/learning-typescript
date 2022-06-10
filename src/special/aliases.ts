(()=>{
  
  type Param = string | number | any[]
  
  function print(param: Param) {
 
    if (typeof param === "string") {
      
      if (param.includes("Hello")) {
        console.log("Hello World!");
      } else {
        console.log(param);
      }
      
    }
    
    if (typeof param === "number") {
      console.log(`I'm the number ${param.toFixed()}`)
    }
    
    if (typeof param === "object") {
      param.forEach((item)=>{
        console.log(item)
      })
    }
    
  }
  
  print("Hello")
  print(23)
  print(["Orlando", "Manuel", "Mendoza", "Vargas"])
  
})()