Desativa.addEventListener("click", function () {
    console.log('desativa');
});

function botaoPainel(id){
    document.querySelector(`#${id}`).nextElementSibling.classList.add("show");
    document.querySelector(`#${id}`).nextElementSibling.nextElementSibling.classList.remove("show");
}

function fecharPainel(id){
    document.querySelector(`#${id}`).parentElement.parentElement.parentElement.classList.remove("show");
}

function botaoSubPainel(id){
    document.querySelector(`#${id}`).parentElement.parentElement.parentElement.parentElement.classList.remove("show");
    document.querySelector(`#${id}`).parentElement.parentElement.parentElement.parentElement.nextElementSibling.classList.add("show");
}

function fecharSubPainel(id){
    document.querySelector(`#${id}`).parentElement.parentElement.parentElement.previousElementSibling.classList.add("show");
    document.querySelector(`#${id}`).parentElement.parentElement.parentElement.classList.remove("show");
}

window.addEventListener("click", function (event) {
        event.target.classList.remove("show");
});