document.querySelector(`#desativa`).addEventListener("click", function () {
    console.log('desativa');
});

function botaoPainel(id) {
    document.querySelector(`#${id}`).nextElementSibling.classList.add("show");
}

function fecharPainel(id) {
    document.querySelector(`#${id}`).parentElement.parentElement.parentElement.classList.remove("show");
}

function botaoSubPainel(id) {
    document.querySelector(`#${id}`).parentElement.parentElement.parentElement.parentElement.classList.remove("show");
    document.querySelector(`#${id}`).parentElement.parentElement.parentElement.parentElement.nextElementSibling.classList.add("show");
}

function fecharSubPainel(id) {
    document.querySelector(`#${id}`).parentElement.parentElement.parentElement.previousElementSibling.classList.add("show");
    document.querySelector(`#${id}`).parentElement.parentElement.parentElement.classList.remove("show");
}

function fecharDropdown(id) {
    document.querySelector(`#${id}`).parentElement.style.display = "none";
}

document.querySelector(`#cicloAsp`).addEventListener("click", e => {
    document.querySelector(`#cicloAsp`).nextElementSibling.style.display = "block";
});