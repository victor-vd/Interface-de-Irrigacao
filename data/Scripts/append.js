import aspJson from '../Models/Aspersores.json' with  { type: 'json' };

// mostrarAspersores();

document.querySelector("#aspList").innerHTML = appendAsp();

// console.log(document.querySelector("#aspList").innerHTML);

// Insere os elementos no popup de aspersores, com base no arquivo de configuração do usuário
function appendAsp() {
    let appendCode = "";

    for (let i = 0; i < aspJson.Apersores.length; i++) {
        appendCode += `
        <button id="asp${aspJson.Apersores[i].codigo}" class="botao botaoSelectApersor">
            <span>
                ${nomeAspersor(i)} (${aspJson.Apersores[i].codigo.toUpperCase()})
            </span>
        </button>`;
    }

    return appendCode;
}

// Retorna o nome do aspersor, se existir
function nomeAspersor(index) {
    if (aspJson.Apersores[index].nome != "") {
        return textCaptilizer(aspJson.Apersores[index].nome);
    } else {
        return "Aspersor";
    }
}

// Capitalizador de texto básico
function textCaptilizer(textInput) {
    textInput = textInput.trim().toLowerCase();
    let wordNumber = 1;
    let strings = textInput.split(' ');

    for (let i = 0; i <= textInput.length; i++) {
        if (textInput.charAt(i) == ' ') {
            wordNumber++;
        }
    }

    textInput = '';

    for (let i = 0; i < wordNumber; i++) {
        strings[i] = strings[i].charAt(0).toUpperCase() + strings[i].slice(1);
        textInput += i == wordNumber - 1 ? strings[i] : strings[i] + ' ';
    }
    return textInput;
}

// Função para visualizar os aspersores do console
function mostrarAspersores() {
    console.log(`Quantidade de Apersores: ${aspJson.Apersores.length}`);
    console.log(`Aspersores.json:`);

    let consoleAspersor = "";

    for (let i = 0; i < aspJson.Apersores.length; i++) {
        consoleAspersor += `
            Aspersor ${i + 1}: 
                códido: ${aspJson.Apersores[i].codigo}
                nome: ${aspJson.Apersores[i].nome}`;
    }
    console.log(consoleAspersor);
}