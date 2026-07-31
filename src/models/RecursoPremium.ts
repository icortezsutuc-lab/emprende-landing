import { Recurso } from "./Recurso";

export class RecursoPremium extends Recurso {

    constructor(
        id: number,
        titulo: string,
        descripcion: string,
        imagen: string,
        private categoria: string
    ) {
        super(id, titulo, descripcion, imagen);
    }

    public obtenerCategoria(): string {
        return this.categoria;
    }

}