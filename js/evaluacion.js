const preguntas = {};
const evaluacionAppURL = 'http://localhost:8080'

const examJSON = {
    "examen": {
        "acumulador": 0,
        "no_pregs": 6,
        "preguntas": [
            {
                "apartado": 1,
                "id": 1,
                "descripcion": "Instrucciones: Seleccione la opción correcta.",
                "pregunta": "¿Cuándo fue promulgada la LPI (La Ley de la Propiedad Industrial)?",
                "imageUrl": "",
                "tipo": "MULTI",
                "opciones": ["1988","1999","1995","1991"],
                "respuestaUsuario": "",
                "respuestaCorrecta": "1991"
            },
            {
                "apartado": 1,
                "id": 2,
                "descripcion": "Instrucciones: Seleccione la opción correcta.",
                "pregunta": "¿Qué es lo que protege la (LPI)?",
                "imageUrl": "",
                "tipo": "MULTI",
                "opciones": [
                    "La LPI protege las invenciones, que incluyen patentes y modelos de utilidad.",
                    "Protege las marcas, diseños industriales, denominaciones de origen.",
                    "Protege secretos industriales y conocimientos técnicos.",
                    "Todas las anteriores."
                ],
                "respuestaUsuario": "",
                "respuestaCorrecta": "Todas las anteriores."
            },
            {
                "apartado": 1,
                "id": 3,
                "descripcion": "Instrucciones: Seleccione la opción correcta.",
                "pregunta": "¿Cúal es la duración de la patente?",
                "imageUrl": "",
                "tipo": "MULTI",
                "opciones": [
                    "5 años.",
                    "10 años.",
                    "20 años.",
                    "16 años."
                ],
                "respuestaUsuario": "",
                "respuestaCorrecta": "20 años."
            },
            {
                "apartado": 1,
                "id": 4,
                "descripcion": "Instrucciones: Seleccione la opción correcta.",
                "pregunta": "¿Cuándo fue promulgada la LPI (La Ley de la Propiedad Industrial)?",
                "imageUrl": "",
                "tipo": "MULTI",
                "opciones": ["1988","1999","1995","1991"],
                "respuestaUsuario": "",
                "respuestaCorrecta": "1991"
            },
            {
                "apartado": 1,
                "id": 5,
                "descripcion": "Instrucciones: Seleccione la opción correcta.",
                "pregunta": "¿Qué es lo que protege la (LPI)?",
                "imageUrl": "",
                "tipo": "MULTI",
                "opciones": [
                    "La LPI protege las invenciones, que incluyen patentes y modelos de utilidad.",
                    "Protege las marcas, diseños industriales, denominaciones de origen.",
                    "Protege secretos industriales y conocimientos técnicos.",
                    "Todas las anteriores."
                ],
                "respuestaUsuario": "",
                "respuestaCorrecta": "Todas las anteriores."
            },
            {
                "apartado": 1,
                "id": 6,
                "descripcion": "Instrucciones: Seleccione la opción correcta.",
                "pregunta": "¿Cúal es la duración de la patente?",
                "imageUrl": "",
                "tipo": "MULTI",
                "opciones": [
                    "5 años.",
                    "10 años.",
                    "20 años.",
                    "16 años."
                ],
                "respuestaUsuario": "",
                "respuestaCorrecta": "20 años."
            }
            ]
    }
};

document.querySelector('#evaluacion-button').
    addEventListener('click',ev => {


        ev.preventDefault();

        const preguntasJson = encodeURIComponent(JSON.stringify(examJSON));

        localStorage.setItem('datos',preguntasJson);
        
        window.location.href = evaluacionAppURL + '?metadata=' + preguntasJson;

    },);