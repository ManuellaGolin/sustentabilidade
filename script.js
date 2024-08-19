const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual a princiupal causa di aquecimento global?",
        alternativas: [
            {
                texto: "Desmatamento!",
                afirmacao: "afirmação a1",
            },
            {
                texto: "Poluição dos oceanos!",
                afirmacao: "afirmação a2",
            }
        ]
    },
    {
        enunciado: "Qual prática é mais eficaz para reduzir a quantidade de resíduos sólidos?",
        alternativas: [
            {
                texto: "Reciclagem.",
                afirmacao: "afirmação b1",
            },
            {
                texto: "Compostagem.",
                afirmacao: "afirmação b2",
            }
        ]
    },
    {
        enunciado: "O que é mais importante para a conservação da água?",
        alternativas: [
            {
                texto: "Reduzir o consumo de água.",
                afirmacao: "afirmação c1",
            },
            {
                texto: "Aumentar a capacidade do armazenamento de água .",
                afirmacao: "afirmação c2",
            }
        ]
    },
    {
        enunciado: "Qual energia renovável é mais comumente usada para gerar eletricidade?",
        alternativas: [
            {
                texto: "Energia solar.",
                afirmacao: "afirmação d1",
            },
            {
                texto: "Enegia geotérmica.",
                afirmacao: "afirmação d2",
            }
        ]
    },
    {
        enunciado: "Qua o principal impacto da agricultura industrial no meio ambiente? ",
        alternativas: [
            {
                texto: "Poluição do solo.",
                afirmacao: "afirmação e1",
            },
            {
                texto: "Esgotemento dos recursos hídricos.",
                afirmacao: "afirmação e2",
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";
function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();