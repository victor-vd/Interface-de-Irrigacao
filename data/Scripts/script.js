import aspJson from '../Models/Aspersores.json' with  { type: 'json' };

const ENDEREÇO = {
    "URLPagina": `../`,
    "URLComando": `../comando?`,
    "URLDesligarTudo": `../desligar-tudo`,
    "URLCicloDiario": `../ciclo-diario`
}

const selectedAsp = [];

const botoesAsp = document.getElementsByClassName(`botaoSelectApersor`);



console.log(botoesAsp.length);

for (let i = 0; i < botoesAsp.length; i++) {
    console.log(getAspersorId(botoesAsp[i]));
    botoesAsp[i].addEventListener("click", e => {

        if (!selectedAsp.includes(`${getAspersorId(botoesAsp[i])}`)) {
            selectedAsp.push(`${getAspersorId(botoesAsp[i])}`);
            botoesAsp[i].classList.add("checked");
            console.log(1);
            console.log(selectedAsp);
        } else {
            selectedAsp.splice(selectedAsp.indexOf(`${getAspersorId(botoesAsp[i])}`), 1);
            botoesAsp[i].classList.remove("checked");
            console.log(2);
            console.log(selectedAsp);
        }
    });
}

document.querySelector("#fecharSelectAspersorIndiv").addEventListener("click", e => {
    selectedAsp.splice(0, selectedAsp.length)
    console.log(selectedAsp);
});

function getAspersorId(arr) { return arr.id.substring(arr.id.length - 1); }

document.querySelector("#selectAspersorIndiv").addEventListener("click", e => {
    for (let i = 0; i < selectedAsp.length; i++) {
        selectedAsp
    }
});

function enviarComando() {
    let nomeAspesor = document.getElementById('nomeAspersor').value;
    let cicloAspersor = document.getElementById('cicloAspersor').value;

    fetch(`${ENDEREÇO.URLComando}nomeAspesor=${nomeAspesor}&cicloAspersor=${cicloAspersor}`)
        .then(
            alert("Comando enviado.")
        );
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