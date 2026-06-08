// MENU RESPONSIVO

const menuBtn =
document.getElementById("menuBtn");

const menu =
document.getElementById("menu");

menuBtn.addEventListener("click", () => {

    menu.classList.toggle("active");

});

// MODO ESCURO

const theme =
document.getElementById("themeToggle");

theme.addEventListener("click", () => {

    document.body.classList.toggle("dark");

});

// ANIMAÇÕES

const reveals =
document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    reveals.forEach(sec => {

        const top =
        sec.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            sec.classList.add("active");

        }

    });

});

// CONTADOR

let contador = 0;

const numero =
document.getElementById("treeCounter");

const intervalo = setInterval(() => {

    contador += 5;

    numero.textContent = contador;

    if(contador >= 5000){

        clearInterval(intervalo);

    }

},10);

// QUIZ

function resposta(correta){

    const resultado =
    document.getElementById("quizResultado");

    if(correta){

        resultado.innerHTML =
        "✅ Resposta correta!";

    }else{

        resultado.innerHTML =
        "❌ Resposta incorreta.";

    }

}

// CALCULADORA

function calcular(){

    const litros =
    Number(
    document.getElementById("litros").value
    );

    const anual =
    litros * 365;

    document.getElementById(
    "resultado"
    ).innerHTML =

    `Economia anual: ${anual} litros`;

}