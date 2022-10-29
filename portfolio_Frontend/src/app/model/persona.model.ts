export class persona{
    id?: number;
    nombre: String;
    apellido :String;
    img: String;

    constructor(nombre: String,apelldio:String,img:String){
        this.nombre = nombre;
        this.apellido = apelldio;
        this.img = img;
    }
}