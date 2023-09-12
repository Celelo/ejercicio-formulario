
const $ = (Selector) => document.querySelector(Selector) //nos trae el priemro que encuentre
const $$ = (Selector) => document.querySelectorAll(Selector) //nos trae todos los que tengan la misma clase o etiqueta

let inputs = $$('.input')
// console.log(inputs)

// for (let input of inputs) {
//     input.classList.add('is-focused')
// }

let cursos = ['frontend', 'backend', 'QA testing', 'UX/UI']

let armarSelect = (listaDeCursos) => {
    $('#classSelect').innerHTML = '' // elimina el curso 
    for (let curso of listaDeCursos) {
        let option = document.createElement("option")
        option.setAttribute('value', curso)
        option.innerHTML = `${curso}`
        $("#classSelect").appendChild(option)
    }
}
armarSelect(cursos)
let agregarCurso = () => { };



// elimina los cursos elejidos con un boton
$('#deleteBtn').addEventListener('click', () => {
    console.log($("#classSelect").value)
    let indice = cursos.indexOf($("#classSelect").value)
    cursos.splice(indice, 1)
    armarSelect(cursos)
})


const birthdayInput = $('#birthInput')
console.log(birthdayInput.value)

$('#birthInput').addEventListener('change', () => {
    console.log($('#birthInput').value)
})


// agregar curso
$('#addBtn').addEventListener('click', () => {
    $('.modal').classList.add('is-active')
})

$('#addCurse').addEventListener('click', () => {
    nuevoCurso = $('#curseName').value
    cursos.push(nuevoCurso)
    console.log(armarSelect(cursos))
    $('.modal').classList.remove('is-active')
})

// activa el icono X
$('.modal-close').addEventListener('click', () => {
    $('.modal').classList.remove('is-active')
})

// cursos.push(nuevoCurso) // agrega el nuevo curso escrito
//     armarSelect(cursos) // y lo actualiza la lista de  selecion de cursos agregando el recien escrito
//     cerrarModal() // cierra el modal
//     console.log(nuevoCurso)
