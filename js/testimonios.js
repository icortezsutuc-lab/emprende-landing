class Testimonio {

    constructor(nombre, empresa, mensaje) {
        this.nombre = nombre;
        this.empresa = empresa;
        this.mensaje = mensaje;
    }

    crear() {
        return `
            <article class="card">
                <h3>${this.nombre}</h3>
                <small>${this.empresa}</small>
                <p>${this.mensaje}</p>
            </article>
        `;
    }

}

const testimonios = [

    new Testimonio(
        "Ana López",
        "EcoMarket",
        "Excelente plataforma para comenzar un negocio."
    ),

    new Testimonio(
        "Luis Pérez",
        "Tech Start",
        "Los recursos me ayudaron a mejorar mi emprendimiento."
    ),

    new Testimonio(
        "María García",
        "Emprende GT",
        "Muy recomendable para cualquier emprendedor."
    )

];

const contenedor = document.getElementById("testimonios");

if (contenedor) {

    contenedor.innerHTML = testimonios
        .map(t => t.crear())
        .join("");

}