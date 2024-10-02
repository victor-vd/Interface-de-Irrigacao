import asp from '../Models/Aspersores.json' with  { type: 'json' };
console.log(`coisas: ${asp.Apersores.length}`);

document.querySelector("#aspList").innerHTML = appendAsp();

console.log(document.querySelector("#aspList").innerHTML);

function appendAsp() {
    let appendCode = "";

    for (let i = 0; i < asp.Apersores.length; i++) {
        appendCode += `<button id="asp${asp.Apersores[i].codigo}" class="botao"><span>${textCaptilizer(asp.Apersores[i].nome)}</span></button>\n`;
    }
    console.log(appendCode);
    return appendCode;
}

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