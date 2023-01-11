const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const clase_parrafo = document.querySelector('.clase_parrafo');
const id_parrafo = document.querySelector('.id_parrafo');
const input = document.querySelector('input');

console.log({
    h1,
    p,
    clase_parrafo,
    id_parrafo,
    input,
});
/* 'innerHTML' suplanta texto de la etiqueta original, teniendo en cuenta todas las etiquetas propias de HTML */
h1.innerHTML = 'DOM Manipulation <br> Ahora con innerHTML'
/* 'innerText' suplanta texto de la etiqueta original, sin tener en cuenta todas las etiquetas propias de HTML */
h1.innerText = 'DOM Manipulation <br> Ahora con innertext'
/* 'getAttribute'Muestra el valor que contiene el atributo seleccionado
 */
console.log(p.getAttribute('class'));
/* 'setAttribute' Permite modificar el valor que contiene el atributo de la etiqueta 'p' */
p.setAttribute('id','identidad');
/* 'etiqueta.classList.add('something')'--> Se utiliza para agregar una clase a una etiqueta. */
h1.classList.add('something');
h1.classList.add('anio_2023');

//h1.classList.remove('anio_2023');

let existe_clase = h1.classList.contains('anio_2023');
if (existe_clase){
    console.log('2023 Exist');
}
else{
    console.log('2023 Doesn\'t exist');
}

const img = document.createElement('img');
img.setAttribute('src','https://benditospoiler.com/wp-content/uploads/2022/09/blade-runner-2049-1200-1200-675-675-crop-000000.jpg');

identidad.append(img)