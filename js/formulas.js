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