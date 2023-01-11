let h1 = document.querySelector('.titulo');
let inputA = document.querySelector('#numberA');
let inputB = document.querySelector('#numberB');
let btn = document.querySelector('#btn');
let body = document.querySelector('body');

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

