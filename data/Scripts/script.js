const ENDEREÇO = {
    "URLPagina": `../`,
    "URLComando": `../comando?`,
    "URLDesligarTudo": `../desligar-tudo`,
    "URLCicloDiario": `../ciclo-diario`
}

const selectedAsp = [];

const botoesAsp = document.getElementsByClassName(`botaoSelectApersor`);

const selectCiclos = document.getElementsByClassName(`selectCiclo`);

const maxCiclosAsp = 4;

let selectedCiclos = null;

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
    selectCiclos[i].addEventListener("click", e => {
        selectedCiclos = getId(selectCiclos[i]);
        console.log(selectedCiclos);
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

// Forma o comando que será enviado para a controladora
document.querySelector("#iniciarAspersorIndiv").addEventListener("click", e => {
    let comandoApersores = "";

    for (let i = 0; i < selectedAsp.length; i++) {
        comandoApersores += selectedAsp[i] + selectedCiclos;
    }

    ativarAspersor(comandoApersores, selectedCiclos);
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
    selectedCiclos = 0;
    console.log(selectedAsp, selectedCiclos);
    //console.clear();
}



/* Seção de comandos da controladora */

// Ativa os aspersores selecionados pelo número de ciclos escolhido quando o usuário confirma
function ativarAspersor(comandoApersores, selectedCiclos) {
    let mensagemPopup = "";

    // Construção da mensagem do popup da interface após o comando ser executado
    for (let i = 0; i < selectedAsp.length; i++) {
        if (selectedAsp.length == 1) {
            mensagemPopup += `O Aspersor ${selectedAsp[i].toUpperCase()} foi ativado com sucesso com duração de ${selectedCiclos} ciclos.`;
        } else if (i == selectedAsp.length - 1) {
            mensagemPopup += `e Aspersor ${selectedAsp[i].toUpperCase()} foram ativados com sucesso com duração de ${selectedCiclos} ciclos.`;
        } else {
            mensagemPopup += `Aspersor ${selectedAsp[i].toUpperCase()}, `;
        }
    }

    //console.log(mensagemPopup);
    //console.log(comandoApersores);

    fetch(`${ENDEREÇO.URLComando}${comandoApersores}`)
        .then(
            alert(`${mensagemPopup}`)
        );
    limparCampos();
}

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
// Para fazer:
// Testar com 2 inputs
// Exemplo: `${ENDEREÇO.URLPagina}?I?02`



// Imprime o comando atual no console
// console.log(window.location.href.split("?")[1]);

// Inicia o ciclo de irrigação diário quando o usuário confirma
// document.querySelector("#iniciarCicloDiario").addEventListener("click", e => {
//     comandoCliente = "I";
//     window.location.href = `${ENDEREÇO.URLPagina}?${comandoCliente}`;
//     ativarAspersor(comandoServidor);
// });

// Se o nome do aspersor for válido e o número de ciclos for entre
// 1 e 4, aciona o apersor desejado, tendo como base os nomes
// Definidos pelo usuário
// document.querySelector("#acionarAspersorIndiv").addEventListener("click", e => {
//     const cicloAspersor = document.querySelector("#cicloAspersor")
//     if(cicloAspersor.value <= 4 && cicloAspersor.value >= 1){
//         comandoCliente = Aspersores.get(document.querySelector("#nomeAspersor").value) + `${cicloAspersor.value}`;
//         console.log(Aspersores.get(document.querySelector("#nomeAspersor").value));
//     } else {
//         comandoCliente = "erro";
//     };
//     ativarAspersor(comandoCliente);
//     window.location.href = `${ENDEREÇO.URLPagina}?${comandoCliente}`;
// });

// Se o input do usuário for inválido, envia uma mensagem de erro
// E logo em seguida, recarrega a página