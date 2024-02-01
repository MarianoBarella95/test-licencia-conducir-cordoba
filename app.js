const preguntas = [
    {
        pregunta: "¿Quién tiene prioridad de paso en una rotonda?",
        opciones: [
            {respuesta : "El que intenta ingresar a la misma.", correct: false},
            {respuesta: "El que está circulando por la misma.", correct: true},
        ]
    },
    {
        pregunta: "¿En curvas o pendientes qué indica la demarcación horizontal doble línea amarilla o blanca continua?",
        opciones: [
            {respuesta: "Que puede adelantarse.", correct: false},
            {respuesta : "Que no se puede adelantar.", correct: true},
            {respuesta: "Que hay un obstáculo en el camino.", correct: false}
        ]
    },
    {
        pregunta: "Está atravesando un cruce de avenidas sin semáforos a 30 Km/h, Ud. está:",
        opciones: [
            {respuesta: "Conduciendo demasiado despacio.", correct: false},
            {respuesta: "Conduciendo de acuerdo con el reglamento.", correct: true},
            {respuesta: "Sobrepasando el límite de velocidad.", correct: false}
        ]
    },
    {
        pregunta: "¿Qué debe hacer Ud., si llegando a un cruce (esquina) en el que el semáforo se encuentra en luz roja, un inspector de tránsito le indica que continúe la marcha?:",
        opciones: [
            {respuesta: "Indicarle al inspector que la luz está roja.", correct: false},
            {respuesta: "Obedecer la indicación del inspector.", correct: true},
            {respuesta: "Esperar que el semáforo indique la luz verde y entonces continuar.", correct: false}
        ]
    },
    {
        pregunta: "Todo vehículo que se aproxima a un cruce NO semaforizado, debe ceder el paso a los peatones que inician el cruce de calzada. ¿Esto es obligatorio?:",
        opciones: [
            {respuesta: "Siempre.", correct: true},
            {respuesta: "Nunca.", correct: false},
            {respuesta: "Según las circunstancias.", correct: false}
        ]
    },
    {
        pregunta: "¿Al circular por la vía pública conduciendo un automotor, debo portar la licencia de conducir en vigencia?",
        opciones: [
            {respuesta: "No.", correct: false},
            {respuesta: "Sí.", correct: true}
        ]
    },
    {
        pregunta: "Al llegar a una intersección (esquina) sin señalizar, como conductor debo:",
        opciones: [
            {respuesta: "Ceder el paso a los vehículos que se presenten por la derecha.", correct: true},
            {respuesta: "Ceder el paso sólo a los vehículos que circulen por la vía más importante y principal.", correct: false},
            {respuesta: "Ceder el paso sólo a los vehículos que circulen a mayor velocidad que el mío.", correct: false},
        ]
    },
    {
        pregunta: "¿Está permitido el adelantamiento por la derecha?",
        opciones: [
            {respuesta: "Sí, siempre que al adelantamiento lo efectúe por la banquina.", correct: false},
            {respuesta: "Sí, en calzadas de dos o más carriles con el mismo sentido, siempre que los que transiten por el carril izquierdo se encuentren momentáneamente detenidos.", correct: true},
            {respuesta: "Nunca.", correct: false}
        ]
    },
    {
        pregunta: "Ud. circula por un carril que se encuentra pintado sobre el pavimento con una flecha que indica sólo posibilidad de girar a la derecha. Ud.:",
        opciones: [
            {respuesta: "Debe girar obligatoriamente a la derecha.", correct: true},
            {respuesta: "Puede continuar la marcha sin girar.", correct: false}
        ]
    },
    {
        pregunta: "Si Ud. comete una infracción al realizar una maniobra de adelantamiento. ¿Puede ser requerido por el agente de tránsito para comprobar su grado de alcoholemia?",
        opciones: [
            {respuesta: "Sí, y tengo la obligación de someterme a tal comprobación.", correct: true},
            {respuesta: "Sí, pero sólo si produjera un accidente debería someterme a tal comprobación.", correct: false},
            {respuesta: "No, no es obligatorio someterme a tal comprobación.", correct: false}
        ]
    },
    {
        pregunta: "¿Deberá Ud. ceder el paso a los vehículos de policía, bomberos o ambulancias?",
        opciones: [
            {respuesta: "Sí, porque siempre tienen prioridad de paso.", correct: false},
            {respuesta: "Sí, pero solamente en vías urbanas.", correct: false},
            {respuesta: "Sí, pero solamente cuando se circule en servicio de urgencia, y así lo señalicen con sus señales lumínicas (balizas) y acústicas (sirenas) en funcionamiento.", correct: true}
        ]
    },
    {
        pregunta: "En una calzada (pavimento) sin señalización, puede estacionar en:",
        opciones: [
            {respuesta: "El costado derecho, atento al sentido de circulación, y a no menos de 5 m de la senda peatonal demarcada o imaginaria.", correct: true},
            {respuesta: "En el costado izquierdo, atento al sentido de circulación, y a no menos de 5 m de la senda peatonal demarcada o imaginaria.", correct: false},
            {respuesta: "Es indistinto, puedo hacerlo donde exista espacio.", correct: false}
        ]
    },
    {
        pregunta: "¿Hay que encender las luces de giro siempre que se produzca un cambio de carril?",
        opciones: [
            {respuesta: "No, solamente si es de noche.", correct: false},
            {respuesta: "Si, tanto de día como de noche para efectuar todo cambio de carril.", correct: true}
        ]
    },
    {
        pregunta: "En la Ciudad de Córdoba es obligatorio que los menores de 10 años viajen:",
        opciones: [
            {respuesta: "En el asiento delantero, sujetados con cinturón de seguridad.", correct: false},
            {respuesta: "En el asiento trasero, sujetados con cinturón de seguridad.", correct: true},
            {respuesta: "Es indistinto, siempre que estén sujetados con cinturón de seguridad.", correct: false}
        ]
    },
    {
        pregunta: "Ud. conductor de automóvil particular, radicado en la Ciudad de Córdoba, tiene la obligación de realizar la Inspección Técnica Vehicular (I.T.V.):",
        opciones: [
            {respuesta: "Si el vehículo tiene una antigüedad mayor a dos años y renovarla anualmente. ", correct: true},
            {respuesta: "Si el vehículo tiene una antigüedad mayor a 3 años y renovarla semestralmente.", correct: false},
            {respuesta: "Si el vehículo tiene una antigüedad mayor a 2 años y renovarla semestralmente", correct: false}
        ]
    },
    {
        pregunta: "En una intersección semaforizada con luz intermitente roja, que advierte la presencia de cruce peligroso, debo efectuar el cruce:",
        opciones: [
            {respuesta: "A la misma velocidad con que circulaba.", correct: false},
            {respuesta: "A mínima velocidad y máxima precaución.", correct: false},
            {respuesta: "Detener la marcha y sólo reiniciarla cuando observe que no existe riesgo alguno.", correct: true}
        ]
    },
    {
        pregunta: "El límite máximo de velocidad establecido en CALLES es:",
        opciones: [
            {respuesta: "50 Km/h.", correct: false},
            {respuesta: "40 Km/h.", correct: true},
            {respuesta: "60 Km/h.", correct: false}
        ]
    },
    {
        pregunta: "En una intersección NO SEMAFORIZADA, la velocidad máxima es:",
        opciones: [
            {respuesta: "30 Km/h.", correct: true},
            {respuesta: "40 Km/h.", correct: false},
            {respuesta: "60 Km/h.", correct: false}
        ]
    },
    {
        pregunta: "El límite máximo de velocidad establecido en vías con semáforos coordinados es:",
        opciones: [
            {respuesta: "60 Km/h.", correct: false},
            {respuesta: "Velocidad de la onda verde.", correct: true},
            {respuesta: "40 Km/h.", correct: false}
        ]
    },
    {
        pregunta: "¿Si un vehículo nos quiere adelantar, qué indicación debo realizar para anunciarle que no puede hacerlo, pues se aproxima un vehículo de frente?",
        opciones: [
            {respuesta: "Luz de giro derecha.", correct: false},
            {respuesta: "Luz de baliza.", correct: false},
            {respuesta: "Luz de giro izquierda.", correct: true}
        ]
    }
]

const pregunta = document.querySelector("#pregunta");
const btnPreguntas = document.querySelector("#btn-preguntas");
const btnSiguiente = document.querySelector("#btn-siguiente");
const mensajeFinal = document.querySelector(".mensaje-final");

let currentQuestionIndex = 0;
let puntaje = 0;

function startTest() {
    currentQuestionIndex = 0;
    puntaje = 0;
    btnSiguiente.innerHTML = "Siguiente <i class='fa-solid fa-arrow-right'></i>";
    mostrarPregunta();
}

function mostrarPregunta() {
    resetState();
    const currentQuestion = preguntas[currentQuestionIndex];
    let preguntaNo = currentQuestionIndex + 1;
    pregunta.innerHTML = `<h2>${preguntaNo}. ${currentQuestion.pregunta}</h2>`;
    
    currentQuestion.opciones.forEach(opcion => {
        const btn = document.createElement("button");
        btn.innerHTML = opcion.respuesta;
        btn.classList.add("btn");
        btnPreguntas.appendChild(btn);

        if(opcion.correct) {
            btn.dataset.correct = opcion.correct;
        }

        btn.addEventListener("click", selectAnswer);
    })
}

const resetState = () => {
    btnSiguiente.style.display = "none";
    while(btnPreguntas.firstChild) {
        btnPreguntas.removeChild(btnPreguntas.firstChild);
    }
}

const selectAnswer = (e) => {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    console.log("Is the answer correct?", isCorrect);
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        puntaje++;
    } else {
        selectedBtn.classList.add("incorrect");
        const correctBtn = btnPreguntas.querySelector("[data-correct=true]");
        correctBtn.classList.add("correct");
    }
    const allButtons = btnPreguntas.querySelectorAll('.btn');
allButtons.forEach(btn => {
    btn.disabled = true;
    });
    btnSiguiente.style.display = "block";
}

function mostrarResultados() {
    resetState();
    // pregunta.innerHTML = `<h2>Acertaste ${puntaje} de ${preguntas.length} preguntas.</h2>`;
    if(puntaje === preguntas.length && puntaje >= 18) {
        pregunta.innerHTML = `<h2>Acertaste ${puntaje} de ${preguntas.length} preguntas, vas a ser un gran conductor/a!</h2>`;
    } else if (puntaje < 18 && puntaje > 15) {
        pregunta.innerHTML = `<h2>Acertaste ${puntaje} de ${preguntas.length} preguntas, hace falta practicar un poquito más.</h2>`;
    } else if (puntaje < 15) {
        pregunta.innerHTML = `<h2>Acertaste ${puntaje} de ${preguntas.length} preguntas, leé con atención la <a href="https://documentos.cordoba.gob.ar/MUNCBA/AreasGob/Mov/Manual-del-buen-conductorV3.pdf" target="_blank">Guía del Buen Conductor</a>.</h2>`;
    }
    btnSiguiente.innerHTML = "Reiniciar <i class='fa fa-repeat'></i>";
    btnSiguiente.style.display = "block";
}

function manejarBtnSiguiente () {
    currentQuestionIndex++;
    if(currentQuestionIndex < preguntas.length) {
        mostrarPregunta();
    } else {
        mostrarResultados();
    }
}

btnSiguiente.addEventListener("click", () => {
    if(currentQuestionIndex < preguntas.length) {
        manejarBtnSiguiente();
    } else {
        startTest();
    }
});

startTest();