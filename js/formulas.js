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
        
    }
})

circulo.addEventListener('click', e=>{
    runCalculator += 1;
    if(runCalculator === 1){
        const main = document.getElementById('main')
        main.classList.add('calculatorRun')
        const figuresContainer = document.querySelector('.figures_container')
        figuresContainer.style.left = "-100%"
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
// function calcularAreaCuadrado(){
//     const input = document.getElementById('inputCuadrado').value    
//     const area = areaCuadrada(input);
//     const areaSpan = document.getElementById('area_cuadrado')
//     areaSpan.innerText = area
// }