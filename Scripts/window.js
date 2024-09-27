/*
let meuBotao = document.getElementById("meuBotao");
let fecharPopup = document.getElementById("fecharPopup");
let janelaPopup = document.getElementById("janelaPopup");
*/

botaoCicloDiario.addEventListener(
    "click",
    function () {
        janelaCicloDiario.classList.add("show");
    }
);
fecharCicloDiario.addEventListener(
    "click",
    function () {
        janelaCicloDiario.classList.remove(
            "show"
        );
    }
);

botaoAspersorIndiv.addEventListener(
    "click",
    function () {
        janelaAspersorIndiv.classList.add("show");
    }
);
fecharAspersorIndiv.addEventListener(
    "click",
    function () {
        janelaAspersorIndiv.classList.remove(
            "show"
        );
    }
);

botaoInfoSistema.addEventListener(
    "click",
    function () {
        janelaInfoSistema.classList.add("show");
    }
);
fecharInfoSistema.addEventListener(
    "click",
    function () {
        janelaInfoSistema.classList.remove(
            "show"
        );
    }
);

botaoRotinaTeste.addEventListener(
    "click",
    function () {
        janelaRotinaTeste.classList.add("show");
    }
);
fecharRotinaTeste.addEventListener(
    "click",
    function () {
        janelaRotinaTeste.classList.remove(
            "show"
        );
    }
);

botaoLigaTorneira.addEventListener(
    "click",
    function () {
        janelaLigaTorneira.classList.add("show");
    }
);
fecharLigaTorneira.addEventListener(
    "click",
    function () {
        janelaLigaTorneira.classList.remove(
            "show"
        );
    }
);

botaoLigaTorneira.addEventListener(
    "click",
    function () {
        janelaLigaTorneira.classList.add("show");
    }
);
fecharLigaTorneira.addEventListener(
    "click",
    function () {
        janelaLigaTorneira.classList.remove(
            "show"
        );
    }
);

botaoConfiguracoes.addEventListener(
    "click",
    function () {
        janelaConfiguracoes.classList.add("show");
    }
);
fecharConfiguracoes.addEventListener(
    "click",
    function () {
        janelaConfiguracoes.classList.remove(
            "show"
        );
    }
);

Desativa.addEventListener(
    "click",
    function () {
    }
);





window.addEventListener(
    "click",
    function (event) {
        switch(event.target){
            case janelaCicloDiario:
                janelaCicloDiario.classList.remove(
                    "show"
                );
                break;
            case janelaAspersorIndiv:
                janelaAspersorIndiv.classList.remove(
                    "show"
                );
                break;
            case janelaInfoSistema:
                janelaInfoSistema.classList.remove(
                    "show"
                );
                break;
            case janelaRotinaTeste:
                janelaRotinaTeste.classList.remove(
                    "show"
                );
                break;
            case janelaLigaTorneira:
                janelaLigaTorneira.classList.remove(
                    "show"
                );
                break;
            case janelaConfiguracoes:
                janelaConfiguracoes.classList.remove(
                    "show"
                );
                break;
        }
    }
);