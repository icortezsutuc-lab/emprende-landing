import "../scss/main.scss";
import "../js/main.js";
import "../js/testimonios.js";

import { RecursoController } from "./controllers/RecursoController";

const controlador = new RecursoController();

controlador.mostrarRecursos();