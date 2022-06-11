// Nico => ["N","i","c","o"] => string => string[]
// ["N","i","c","o"] => Nico => string[] => string

function parseString (param: string | string[]): string | string[] {
  if (Array.isArray(param)) {
    return param.join("");
  } else {
    return param.split("");
  }
};

let string: string | string[];

string = parseString("Orlando")

if(Array.isArray(string)){
  console.log("string[]", string);
}

string = parseString(string)

if(typeof string === "string"){
  console.log("string", string);
}

// let string: string | string[];

// string = parseString("Orlando") as string[];
// console.log(string);

// string = parseString(string) as string;
// console.log(string);

// console.log(parseString())