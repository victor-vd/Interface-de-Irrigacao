const ENDEREÇO = {
    "URLPagina": `../`,
    "URLComando": `../comando-aspersor?`,
    "URLInfoSistema": `../retornar-status`,
    "URLRotinaTeste": `../rotina-teste?`,
    "URLDesligarTudo": `../desligar-tudo`,
    "URLCicloDiario": `../ciclo-diario`
}

const selectedAsp = [];

const botoesAsp = document.getElementsByClassName(`botaoSelectApersor`);

const selectCiclosAsp = document.getElementsByClassName(`selectCiclo selectCicloAsp`);

const selectCiclosTest = document.getElementsByClassName(`selectCiclo selectCicloTest`);

const maxCiclosAsp = 4;

// Quantidade de ciclos da ativação de aspersor individual
let selectedCiclosAsp = 0;

// Quantidade de ciclos da rotina de teste
let selectedCiclosTest = 0;

console.log(botoesAsp.length);

// Adiciona o id do aspersor ao array após o usuário ciclar nele pela primeira vez
// Remove o aspersor do array se o usuário clicar nele novamente
for (let i = 0; i < botoesAsp.length; i++) {
    botoesAsp[i].addEventListener("click", e => {

        if (!selectedAsp.includes(`${getId(botoesAsp[i])}`)) {
            selectedAsp.push(`${getId(botoesAsp[i])}`);
            botoesAsp[i].classList.add("checked");
            console.log(selectedAsp);
        } else {
            selectedAsp.splice(selectedAsp.indexOf(`${getId(botoesAsp[i])}`), 1);
            botoesAsp[i].classList.remove("checked");
            console.log(selectedAsp);
        }
    });
}

// Recolhe o número de ciclos dos elementos selecionados
for (let i = 0; i < maxCiclosAsp; i++) {
    selectCiclosAsp[i].addEventListener("click", e => {
        selectedCiclosAsp = getId(selectCiclosAsp[i]);
        console.log("selectedCiclosAsp: " + selectedCiclosAsp);
    });
    selectCiclosTest[i].addEventListener("click", e => {
        selectedCiclosTest = getId(selectCiclosTest[i]);
        console.log("selectedCiclosTest: " + selectedCiclosTest);
    });
}

// Exemplo: pega "asp5" ou "aspf" e retorna "5" ou "f", que é o id do aspersor
// Exemplo: pega "ciclo1" ou "ciclo4" e retorna "1" ou "4", que é o número de ciclos
function getId(arr) { return arr.id.substring(arr.id.length - 1); }

// Limpa o array de aspersores ao fechar o submenu
// Talvez essa função esteja defasada e possa ser removida
document.querySelector("#voltarSelectAspersorIndiv").addEventListener("click", e => {
    selectedAsp.splice(0, selectedAsp.length);
    console.log(selectedAsp);
});

// Limpa os campos de input ao fechar a janela (evento da janela faz a mesma coisa)
// Talvez essa função esteja defasada e possa ser removida
document.querySelector("#fecharAspersorIndiv").addEventListener("click", e => {
    limparCampos();
});

// Ordena o array de aspersores após o usuário confirmar
document.querySelector("#confirmarAspersorIndiv").addEventListener("click", e => {
    selectedAsp.sort();
    console.log(selectedAsp);
});

// Limpa os campos de input ao fechar a janela
window.addEventListener("click", function (event) {
    try {
        event.target.classList.remove("show");
    } catch (TypeError) {
        console.log("Erro de interação");
    }

    let fecharPopups = false;

    for (let i = 0; i < document.getElementsByClassName("popup").length; i++) {
        if (document.getElementsByClassName("popup")[i].classList.contains("show")) {
            fecharPopups = true;
            break;
        }
    }
    for (let i = 0; i < document.getElementsByClassName("sub popup").length; i++) {
        if (document.getElementsByClassName("sub popup")[i].classList.contains("show")) {
            fecharPopups = true;
            break;
        }
    }

    if (!fecharPopups) {
        limparCampos();
    }
});

// Limpa todos os campos de input da interface
function limparCampos() {
    selectedAsp.splice(0, selectedAsp.length);
    selectedCiclosAsp = 0;
    selectedCiclosTest = 0;
    console.log(selectedAsp, selectedCiclosAsp);
    //console.clear();
}

// Forma o comando de ativação dos aspersores individuais
document.querySelector("#iniciarAspersorIndiv").addEventListener("click", e => {

    console.log(selectedCiclosAsp);

    let comandoApersores = "";
    let mensagemPopup = "";

    for (let i = 0; i < selectedAsp.length; i++) {
        comandoApersores += selectedAsp[i] + selectedCiclosAsp;
    }

    if (selectedCiclosAsp != 0 && selectedCiclosAsp != null && comandoApersores != "") {

        // Construção da mensagem do popup da interface após o comando ser executado
        for (let i = 0; i < selectedAsp.length; i++) {
            if (selectedAsp.length == 1) {
                mensagemPopup += `O Aspersor ${selectedAsp[i].toUpperCase()} foi ativado com sucesso com duração de ${selectedCiclosAsp} ciclos.`;
            } else if (i == selectedAsp.length - 1) {
                mensagemPopup += `e Aspersor ${selectedAsp[i].toUpperCase()} foram ativados com sucesso com duração de ${selectedCiclosAsp} ciclos.`;
            } else {
                mensagemPopup += `Aspersor ${selectedAsp[i].toUpperCase()}, `;
            }
        }

        console.log(mensagemPopup);
        console.log(comandoApersores);

        fetch(`${ENDEREÇO.URLComando}${comandoApersores}`)
            .then(
                alert(`${mensagemPopup}`)
            );
    } else {
        alert(`Campos inválidos. Valor de ciclos = "${selectedCiclosAsp}". Comando = "${comandoApersores}"`);
    }
    limparCampos();
});

// Desativa o funcionamento do sistema
document.querySelector("#desativa").addEventListener("click", e => {
    fetch(`${ENDEREÇO.URLDesligarTudo}`)
        .then(
            alert("Sistema desligado.")
        );
});

// Inicia o ciclo de irrigação diário quando o usuário confirma
document.querySelector("#iniciarCicloDiario").addEventListener("click", e => {
    fetch(`${ENDEREÇO.URLCicloDiario}`)
        .then(
            alert("Todos os sensores foram lidos. O ciclo diário foi inciado.")
        );
});

// Retorna o status atual da controladora
document.querySelector("#iniciarInfoSistema").addEventListener("click", e => {
    fetch(`${ENDEREÇO.URLInfoSistema}`)
        .then(
            alert("As informações do sistema já estão disponíveis para consulta.")
        );
});

// Forma o comando que será enviado para a controladora
document.querySelector("#iniciarRotinaTeste").addEventListener("click", e => {
    if (selectedCiclosTest != null && selectedCiclosTest != 0) {
        fetch(`${ENDEREÇO.URLRotinaTeste}T${selectedCiclosTest}`)
            .then(
                alert(`T${selectedCiclosTest}`)
            );
        console.log(`T${selectedCiclosTest}"`);
    } else {
        alert(`Campos inválidos. Valor de ciclos = "${selectedCiclosTest}"`)
    }
    limparCampos();
});

// Para fazer:
// Testar com 2 inputs
// Exemplo: `${ENDEREÇO.URLPagina}?I?02`