(() => {
  
  let variable: any = "Orlando"

  let stringNumber: string;
  
  stringNumber = (variable as number).toString()
  stringNumber = (<number>variable).toFixed()
  
})();
