// Exercise 1 Comparador de Textos -->
const boton = document.getElementById('compareBtn');
boton.addEventListener('click', compareStrings);
function compareStrings() {
    const text1 = document.getElementById('text1').value;
    const text2 = document.getElementById('text2').value;
    const result = document.getElementById('result');

    if (text1 === text2) {
        result.textContent = "Los textos son iguales.";
    } else {
        result.textContent = "Los textos son diferentes.";
    // Exercise 1 Comparador de Textos -->
const boton = document.getElementById('compareBtn');
boton.addEventListener('click', compareStrings);
function compareStrings() {
    const text1 = document.getElementById('text1').value;
    const text2 = document.getElementById('text2').value;
    const result = document.getElementById('result');

    if (text1 === text2) {
        result.textContent = "Los textos son iguales.";
    } else {
        result.textContent = "Los textos son diferentes.";
    }
}
// Exercise 2 Contador de letras -->
const countBtn = document.getElementById('countBtn');
countBtn.addEventListener('click', countLetters);
function countLetters() {
    const text = document.getElementById('textToCount').value;
    const countResult = document.getElementById('countResult');
    countResult.textContent = `El texto tiene ${text.length} letras.`;
}
// Exercise 3 Raiz Cuadrada -->
const sqrtBtn = document.getElementById('sqrtBtn');
sqrtBtn.addEventListener('click', calculateSqrt);
function calculateSqrt() {
    const number = parseFloat(document.getElementById('numberInput').value);
    const sqrtResult = document.getElementById('sqrtResult');

    if (number < 0) {
        sqrtResult.textContent = "No se puede calcular la raíz cuadrada de un número negativo.";
    } else if (isNaN(number)) {
        sqrtResult.textContent = "Por favor, ingrese un número válido.";
    }
    else {
        sqrtResult.textContent = `La raíz cuadrada de ${number} es ${Math.sqrt(number)}.`;
    }
}
// Exercise 4 Cambio de color -->
function cambiacolorH() {
    const header = document.getElementById("header");
    const nuevocolor = document.querySelector('input[name="headerColor"]:checked').value;
    if (nuevocolor === "headerRed") {
        header.style.backgroundColor = "red";
    } else if (nuevocolor === "headerGreen") {
        header.style.backgroundColor = "green";
    } else if (nuevocolor === "headerBlue") {
        header.style.backgroundColor = "blue";
    }else if (nuevocolor === "headerNormal") {
        header.style.backgroundColor = "#2d2d2d";
    }
}

function cambiacolorF() {
    const footer = document.getElementById("footer");
    const nuevocolor = document.querySelector('input[name="footerColor"]:checked').value;
    if (nuevocolor === "footerRed") {
        footer.style.backgroundColor = "red";
    } else if (nuevocolor === "footerGreen") {
        footer.style.backgroundColor = "green";
    } else if (nuevocolor === "footerBlue") {
        footer.style.backgroundColor = "blue";
    }else if (nuevocolor === "footerNormal") {
        footer.style.backgroundColor = "#2d2d2d";
    }
}
// Exercise 5 Altura y ancho de una imagen -->
function cambiatamaño() {
    let ancho = document.getElementById("width").value;
    let alto = document.getElementById("height").value;
    let fihimg = document.getElementById("image");
    if (alto > 400) {
        alto = 400
    }
    if (ancho > 800) {
        ancho = 800
    }
    fihimg.style.height = alto + "px";
    fihimg.style.width = ancho + "px";

}
// Exercise 6 Gestion de los pedidos de una cafeteria -->

}
// Exercise 2 Contador de letras -->
const countBtn = document.getElementById('countBtn');
countBtn.addEventListener('click', countLetters);
function countLetters() {
    const text = document.getElementById('textToCount').value;
    const countResult = document.getElementById('countResult');
    countResult.textContent = `El texto tiene ${text.length} letras.`;
}
// Exercise 3 Raiz Cuadrada -->
const sqrtBtn = document.getElementById('sqrtBtn');
sqrtBtn.addEventListener('click', calculateSqrt);
function calculateSqrt() {
    const number = parseFloat(document.getElementById('numberInput').value);
    const sqrtResult = document.getElementById('sqrtResult');

    if (number < 0) {
        sqrtResult.textContent = "No se puede calcular la raíz cuadrada de un número negativo.";
    }else if (isNaN(number)) {
        sqrtResult.textContent = "Por favor, ingrese un número válido.";
    } 
    else {
        sqrtResult.textContent = `La raíz cuadrada de ${number} es ${Math.sqrt(number)}.`;
    }
}
// Exercise 4 Cambio de color -->
// Exercise 5 Altura y ancho de una imagen -->
function cambiatamaño(){
    let ancho = document.getElementById("width").value;
    let alto = document.getElementById("height").value;
    let fihimg = document.getElementById("image");
    if (alto > 400){
        alto = 400
    }
    if (ancho > 800){
        ancho = 800
    }
    fihimg.style.height = alto + "px";
    fihimg.style.width = ancho + "px";

}
// Exercise 6 Gestion de los pedidos de una cafeteria -->
