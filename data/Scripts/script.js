import aspJson from '../Models/Aspersores.json' with  { type: 'json' };

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


for (let i = 0; i < maxCiclosAsp; i++) {
    selectCiclos[i].addEventListener("click", e => {
        selectedCiclos = getId(selectCiclos[i]);
        console.log(selectedCiclos);
    });
}


function getId(arr) { return arr.id.substring(arr.id.length - 1); }


document.querySelector("#voltarSelectAspersorIndiv").addEventListener("click", e => {
    selectedAsp.splice(0, selectedAsp.length);
    console.log(selectedAsp);
});


document.querySelector("#fecharAspersorIndiv").addEventListener("click", e => {
    limparCampos();
});


function limparCampos() {
    selectedAsp.splice(0, selectedAsp.length);
    selectedCiclos = 0;
    console.log(selectedAsp, selectedCiclos);
}


document.querySelector("#confirmarAspersorIndiv").addEventListener("click", e => {

});


document.querySelector("#iniciarAspersorIndiv").addEventListener("click", e => {
    let comandoApersores = "";

    for (let i = 0; i < selectedAsp.length; i++) {
        comandoApersores += selectedAsp[i] + selectedCiclos;
    }

    enviarComando(comandoApersores, selectedCiclos);
});


function enviarComando(comandoApersores, selectedCiclos) {
    let mensagemPopup = "";

    for (let i = 0; i < selectedAsp.length; i++) {
        if (selectedAsp.length == 1) {
            mensagemPopup += `Aspersor ${selectedAsp[i]}`;
        } else if (i == selectedAsp.length - 2) {
            mensagemPopup += `e Aspersor ${selectedAsp[i]} `;
        } else if (i == selectedAsp.length - 1) {
            mensagemPopup += `foram ativados com sucesso com duração de ${selectedCiclos} ciclos.`;
        } else {
            mensagemPopup += `Aspersor ${selectedAsp[i]}, `;
        }
    }

    fetch(`${ENDEREÇO.URLComando}${comandoApersores}`)
        .then(
            alert(`${mensagemPopup}`)
        );
    selectedAsp.splice(0, selectedAsp.length);
    selectedCiclos = 0;
}

// Inicia o ciclo de irrigação diário quando o usuário confirma
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

window.addEventListener("click", function (event) {
    event.target.classList.remove("show");

    let fecharPopups = false;

    for (let i = 0; i < document.getElementsByClassName("popup").length; i++) {
        if (document.getElementsByClassName("popup")[i].classList.contains("show")) {
            fecharPopups = true;
            console.log(1);
            break;
        }
    }
    for (let i = 0; i < document.getElementsByClassName("sub popup").length; i++) {
        if (document.getElementsByClassName("sub popup")[i].classList.contains("show")) {
            fecharPopups = true;
            console.log(1);
            break;
        }
    }

    if (!fecharPopups) {
        limparCampos();
    }
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
//     enviarComando(comandoServidor);
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
//     enviarComando(comandoCliente);
//     window.location.href = `${ENDEREÇO.URLPagina}?${comandoCliente}`;
// });

// Se o input do usuário for inválido, envia uma mensagem de erro
// E logo em seguida, recarrega a página