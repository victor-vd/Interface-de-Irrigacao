Desativa.addEventListener("click", function () {
    console.log('desativa');
});

function botaoPainel(id){
    document.querySelector(`#${id}`).nextElementSibling.classList.add("show");
}

function fecharPainel(id){
    document.querySelector(`#${id}`).parentElement.parentElement.classList.remove("show");
}

window.addEventListener("click", function (event) {
        event.target.classList.remove("show");
});