const containerSelect = document.getElementById('container_select')
const selectbox = document.getElementById('selectbox')
const cuadro = document.getElementById('cuadro')
const circulo = document.getElementById('circulo')
const triangulo = document.getElementById('triangulo')
const trianguloIsoseles = document.getElementById('trianguloIsoseles')
var runCalculator = 0

containerSelect.addEventListener('click', e=>{
    containerSelect.classList.toggle('active')
    selectbox.classList.toggle('selectbox_1')
})

cuadro.addEventListener('click', e=>{
    runCalculator += 1
    if(runCalculator === 1){
        const main = document.getElementById('main')
        main.classList.add('calculatorRun')
    } else{
        const figuresContainer = document.querySelector('.figures_div_all')
        figuresContainer.style.left = "0"
    }
})

circulo.addEventListener('click', e=>{
    runCalculator += 1;
    if(runCalculator === 1){
        const main = document.getElementById('main')
        main.classList.add('calculatorRun')
        const figuresContainer = document.querySelector('.figures_div_all')
        figuresContainer.style.left = "-100%"
    } else{
        const figuresContainer = document.querySelector('.figures_div_all')
        figuresContainer.style.left = "-100%"
    }
})

triangulo.addEventListener('click', e=>{
    runCalculator += 1;
    if(runCalculator === 1){
        const main = document.getElementById('main')
        main.classList.add('calculatorRun')
        const figuresContainer = document.querySelector('.figures_div_all')
        figuresContainer.style.left = "-200%"
    } else{
        const figuresContainer = document.querySelector('.figures_div_all')
        figuresContainer.style.left = "-200%"
    }
})

trianguloIsoseles.addEventListener('click', e=>{
    runCalculator += 1;
    if(runCalculator === 1){
        const main = document.getElementById('main')
        main.classList.add('calculatorRun')
        const figuresContainer = document.querySelector('.figures_div_all')
        figuresContainer.style.left = "-300%"
    } else{
        const figuresContainer = document.querySelector('.figures_div_all')
        figuresContainer.style.left = "-300%"
    }
})

// Función para calcular el cuadrado

perimetroCuadrado = (lado) => lado * 4
areaCuadrada = (lado) => lado * lado
function calcularAyPCuadrado(){
    const input = document.getElementById('inputCuadrado').value
    const perimetro = perimetroCuadrado(input);
    const perimetroSpan = document.getElementById('perimetro_cuadro')
    perimetroSpan.innerText = perimetro + " cm"

    const area = areaCuadrada(input);
    const areaSpan = document.getElementById('area_cuadrado')
    areaSpan.innerText = area + " cm"
}

// Función para calcular el círculo

diametroCirculo = (radio) => Number(radio) + Number(radio)
const PI = Math.PI;

circunferencia = (radio) => {
    const diametro = diametroCirculo(radio);
    return diametro * PI
}
areaCirculo = (radio) => (radio * radio) * PI

function calcularCyACirculo(){
    const radio = document.getElementById('inputRadio').value
    const areaDeCirculo = areaCirculo(radio)
    let areaSpan = document.getElementById('area_circulo')
    areaSpan.innerText = areaDeCirculo + " cm"

    const circunferenciaCirculo = circunferencia(radio)
    let circunferenciaSpan = document.getElementById('circunferencia_circulo')
    circunferenciaSpan.innerText = circunferenciaCirculo + " cm"
}

// Función para calcular el triángulo

perimetroTriangulo = (lado1, lado2, base) => Number(lado1) + Number(lado2) + Number(base)
areaTriangulo = (base, altura) => (Number(base) * Number(altura)) / 2
function calcularAyPTriangulo(){
    const base = document.getElementById('inputBaseTriangulo').value
    const lado1 = document.getElementById('inputLadoATriangulo').value
    const lado2 = document.getElementById('inputLadoBTriangulo').value
    const perimetroDeTriangulo = perimetroTriangulo(lado1, lado2, base)
    const altura = document.getElementById('inputAlturaTriangulo').value
    let perimetroSpan = document.getElementById('perimetro_triangulo')
    perimetroSpan.innerText = perimetroDeTriangulo + " cm"

    let areaDelTriangulo = areaTriangulo(base, altura)
    let areaTrianguloSpan = document.getElementById('area_triangulo')
    areaTrianguloSpan.innerText = areaDelTriangulo + " cm"
}
function calcularAreaTriangulo(){
    const altura = document.getElementById('inputAlturaTriangulo').value
    const base = document.getElementById('inputBaseTriangulo').value
    const area = areaTriangulo(base, altura)
    alert(area)
}