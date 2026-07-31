export class RecursoService {

    async obtenerRecursos() {

        const respuesta = await fetch("/recursos.json");

        return await respuesta.json();

    }

}