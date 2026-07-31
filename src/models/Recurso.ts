import { IRecurso } from "../interfaces/IRecurso";

export class Recurso implements IRecurso{

    constructor(

        public id:number,

        public titulo:string,

        public descripcion:string,

        public imagen:string

    ){}

}