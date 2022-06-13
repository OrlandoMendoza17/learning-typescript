class Persona {
  //Tienes que tipar afuera del constructor aquellos atributos que no se asignan automaticamente
  //Los que no le indicas el tipo de acceso TypeScript los toma como "public"
  
  example: string = "";
  skills: string[] = ["JavaScript", "TypeScript", "React.js", "Next.js", "CSS", "SASS", "Webpack"];
  nickname: string;
  private _fullname: string;
  
  constructor(
    // Estos parametros se asignan automaticamente a "this"
    private name: string, 
    private lastname: string, 
    public age: number, 
    public career: string
  ) {
    this.nickname = `${name} el programador`;
    this._fullname = `${this.name} ${this.lastname}`
  }
  
  //Los getters y setters son una forma de acceder a variables privadas
  
  //Los getters por definición deben devolver un valor, es decir, no pueden ser tipo "void"
  //No puede tener parametros
  get fullname(): string{
    return this._fullname
  }
  
  //Los setters por definición son de tipo void
  //Debe tener un solo parametro
  set fullname(name: string){
    this._fullname = name
  }
}

const person = new Persona("Orlando", "Mendoza", 22, "Frontend Developer")

console.log("")

console.log("Nombre Completo:", person.fullname)
person.fullname = "Orlandito"
console.log("Nuevo fullname =>", person.fullname)

console.log("\nHabilidades: \n")

person.skills.forEach(skill => console.log(`  ${skill}`))
console.log("")
