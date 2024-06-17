//Se tiene como base el siguiente ejercicio que cambia el color de fondo de un elemento de
//HTML al hacerle click

//function pintar(){
//   ele.style.backgroundColor = 'yellow'
//  }
//  const ele = document.getElementById("ele1")
//  ele.addEventListener("click", pintar);


const ele = document.getElementById("ele1")

function pintar(elemento, color = "green"){
    elemento.style.backgroundColor = color
    }
    
    ele.addEventListener("click", ()=>{
         pintar(ele, 'yellow')
        });