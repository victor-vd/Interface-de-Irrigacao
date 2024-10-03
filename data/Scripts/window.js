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

// Abre o menu dropdown ao clicar no botão "Selecionar"
function menuDropdown(id) {
    document.querySelector(`#${id}`).nextElementSibling.style.display = "block";
}

// Deixa o menu aberto ao mexer o mouse dentro do dropdown
function menuDropdownOpen(id) {
    document.querySelector(`#${id}`).style.display = "block";
}

function fecharDropdown(id) {
    document.querySelector(`#${id}`).children[1].style.display = "none";
}

// Fecha o dropdown ao selecionar uma opção
function selectFecharDropdown(id) {
    document.querySelector(`#${id}`).parentElement.style.display = "none";
}