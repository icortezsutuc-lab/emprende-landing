import { RecursoService } from "../services/RecursoService";

export class RecursoController {

    private servicio = new RecursoService();

    async mostrarRecursos() {

        const recursos = await this.servicio.obtenerRecursos();

        const contenedor = document.getElementById("contenedorRecursos");

        if (!contenedor) return;

        contenedor.innerHTML = "";

        recursos.forEach((recurso: any) => {

            const tarjeta = document.createElement("article");

            tarjeta.className = "card";

            tarjeta.innerHTML = `
                <h3>${recurso.titulo}</h3>
                <p>${recurso.descripcion}</p>
            `;

            contenedor.appendChild(tarjeta);

        });

    }

}
