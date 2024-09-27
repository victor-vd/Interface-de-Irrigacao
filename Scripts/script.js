const ENDEREÇO = {
    "URLPagina": `../Paginas/PainelPrincipal.html`,
    "URLComando":`../comando?`
}

const Aspersores = new Map();

Aspersores.set("orquidia", "0");
Aspersores.set("rosa", "1");
Aspersores.set("jasmin", "2");
Aspersores.set("margarida", "3");
Aspersores.set("copo de leite", "4");
Aspersores.set("girassol", "5");
Aspersores.set("tulipa", "6");
Aspersores.set("lirio", "7");
Aspersores.set("tomate cereja", "8");
Aspersores.set("coentro", "9");
Aspersores.set("alface", "a");
Aspersores.set("babosa", "b");
Aspersores.set("melancia", "c");
Aspersores.set("erva sidreira", "d");
Aspersores.set("tomate", "e");
Aspersores.set("pimenta", "f");

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
        alert("Comando enviado")
    );

}

// Para fazer:
// Testar com 2 inputs
// Exemplo: `${ENDEREÇO.URLPagina}?I?02`