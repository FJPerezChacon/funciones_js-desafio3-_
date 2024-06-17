
document.addEventListener('click', cambiarColor = (elementId) => {
    elemento = document.querySelector('#' + elementId);
    elemento.style.backgroundColor = "black";
});

document.addEventListener('keydown', cambio = (event) => {
    if (event.key === "a" || event.key === "A"){
        elemento = document.querySelector('#cont5');
        elemento.style.backgroundColor = "pink";
    } else if (event.key === "s" || event.key === "S"){
        elemento = document.querySelector('#cont5');
        elemento.style.backgroundColor = "orange";
    } else if (event.key === "d" || event.key === "D"){
        elemento = document.querySelector('#cont5');
        elemento.style.backgroundColor = "skyblue";
    } else if (event.key === "q" || event.key === "Q"){
        elemento = document.querySelector('#cont5');
        elemento.style.backgroundColor = "purple";
    } else if (event.key === "w" || event.key === "W"){
        elemento = document.querySelector('#cont5');
        elemento.style.backgroundColor = "grey";
    } else if (event.key === "e" || event.key === "E"){
        elemento = document.querySelector('#cont5');
        elemento.style.backgroundColor = "brown";
    }
});
    