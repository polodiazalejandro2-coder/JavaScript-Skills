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
    } else if (nuevocolor === "headerNormal") {
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
    } else if (nuevocolor === "footerNormal") {
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
// Exercise 6 Gestión de los pedidos de una cafetería -->
function coffee() {
    const bebidaSel = document.querySelector('input[name="order"]:checked');
    const snackSel = document.querySelector('input[name="snacks"]:checked');
    const extraSel = document.querySelector('input[name="extras"]:checked');
    const discountSel = document.querySelector('input[name="discount"]:checked');
    const totalDisplay = document.getElementById("total");

    let precioBebida = 0;
    let precioSnack = 0;
    let precioExtras = 0;
    let porcentajeDescuento = 0;
    if (bebidaSel) {
        if (bebidaSel.value === "coffee") precioBebida = 1.65;
        else if (bebidaSel.value === "tea") precioBebida = 2.25;
        else if (bebidaSel.value === "juice") precioBebida = 3.50;
    }
    if (snackSel) {
        if (snackSel.value === "cookie") precioSnack = 1.25;
        else if (snackSel.value === "muffin") precioSnack = 2.00;
    }
    if (extraSel) {
        if (extraSel.value === "milk") precioExtras = 0.50;
        else if (extraSel.value === "sugar") precioExtras = 0.25;
    }
    if (discountSel) {
        if (discountSel.value === "student") porcentajeDescuento = 0.15;
        else if (discountSel.value === "senior") porcentajeDescuento = 0.20;
        else if (discountSel.value === "none") porcentajeDescuento = 0;
    }

    let subtotal = precioBebida + precioSnack + precioExtras;
    let totalPagar = subtotal * (1 - porcentajeDescuento);
    totalDisplay.textContent = `${totalPagar.toFixed(2)}€`;
}

function pedidosimg() {
    let imgBebida = document.getElementById("imgbebida");
    let imgComplemento = document.getElementById("imgcomplemento");
    let imgAperitivo = document.getElementById("imgaperitivo");

    let bebidaSel = document.querySelector('input[name="order"]:checked');
    let extraSel = document.querySelector('input[name="extras"]:checked');
    let snackSel = document.querySelector('input[name="snacks"]:checked');

    if (bebidaSel){
        imgBebida.src = "Images/" + bebidaSel.value + ".png";
        imgBebida.classList.add("mostrar-img");
    }
    if (extraSel){
        imgComplemento.src = "Images/" + extraSel.value + ".png";
        imgComplemento.classList.add("mostrar-img");
    }
    if (snackSel){
        imgAperitivo.src = "Images/" + snackSel.value + ".png";
        imgAperitivo.classList.add("mostrar-img");
    }
    coffee();
}
