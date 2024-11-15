class Gambino {
    #nombre
    #clase
    constructor(nombre, clase){
        this._nombre = nombre;
        this._clase = clase
        
    }
    getnombre() {
        return this._nombre;
    }
    setnombre(in_nombre) {
        this._nombre = in_nombre;
    }
    
    getclase() {
        return this._clase;
    }
    setclase(in_clase) {
        this._clase = in_clase;
    }
      saludar(){
      console.log("Hola soy Javier " + this.nombre + " y soy de clase " + this.clase);
    }
  }
