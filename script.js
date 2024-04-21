let numeroAzar = Math.floor(Math.random()*100)
let boton = document.getElementById("boton")
let numeroEntrada = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')
let intento = document.getElementById('intentos')
let mensaje_reiniciar = document.getElementById('mensaje_reiniciar')
let intentos=0
function checkearResultado(){
  intentos++
  if(intentos<=10){
  intento.textContent=intentos
  let numeroIngresado = parseFloat(numeroEntrada.value)

  if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
    mensaje.textContent = '¡Ingresa un numero entre 1 y 100 CTM >:v !'
    return
  }

  if(numeroIngresado==numeroAzar){
    mensaje.textContent = 'Adivinaste!!!!!!!!'
    mensaje.style.color = 'green'
    numeroEntrada.disabled = true
  }else if (numeroIngresado > numeroAzar){
    mensaje.textContent = 'Te pasaste'
    mensaje.style.color = 'red'
  }else{
    mensaje.textContent = 'Te falta'
    mensaje.style.color = 'red'
  }
}else{
  mensaje.textContent = "Alcanzaste el numero máximo de intentos"
  numeroEntrada.disabled = true
  boton.disabled = true
  mensaje_reiniciar.textContent="Para volver a jugar, reinicia la página :V"
}
}