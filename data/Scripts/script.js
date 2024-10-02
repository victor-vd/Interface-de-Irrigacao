const ENDEREÇO = {
    "URLPagina": `../`,
    "URLComando": `../comando?`,
    "URLDesligarTudo": `../desligar-tudo`,
    "URLCicloDiario": `../ciclo-diario`
}

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