let h1 = document.querySelector('.titulo');
let inputA = document.querySelector('#numberA');
let inputB = document.querySelector('#numberB');
let btn = document.querySelector('#btn');
let body = document.querySelector('body');
let form = document.querySelector('#form');
let result = document.querySelector('#result');

/* btn.addEventListener('click', btnOnClick);

function btnOnClick() {
    //code
    let resultado = (parseInt( inputA.value) + parseInt( inputB.value)); 
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    h2.innerHTML = 'Resultado';
    p.innerText = resultado;
    //h2.setAttribute('id', 'resultado');
    body.appendChild(h2);
    body.appendChild(p);
}
 */
/* Para evitar que 'form' recargue la página deberiamos pausar el evento que provoca su recarga */
/* ---------------------------------------------------------- */
/* form.addEventListener('submit', sendInputValues);

function sendInputValues(event) {
    //code
    //event.preventDefault();
    let sumaInputs = parseInt(inputA.value) + parseInt(inputB.value);
    result.innerText = 'Resultado: ' + sumaInputs;

} */
/* ---------------------------------------------------------- */
/* Para no utilizar event.preventDefault y no hacer un código más complejo o largo de leer, establecemos que el último botón del formulario sea de tipo 'button', y nos quedaría el siguiente código para hacer uso correcto de DOM */
btn.addEventListener('resize', sendInputValues);

function sendInputValues(event) {
    //code
    //event.preventDefault();
    let sumaInputs = parseInt(inputA.value) + parseInt(inputB.value);
    result.innerText = 'Resultado: ' + sumaInputs;

}
