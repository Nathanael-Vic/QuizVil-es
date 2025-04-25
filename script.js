class Vilao {
    constructor(nome, pontuacao, posicao) {
        this.nome = nome;
        this.pontuacao = pontuacao;
        this.posicao = posicao;
    }
}

const viloes = [
    new Vilao("Coringa", 0, 0),
    new Vilao("Cruella", 0, 1),
    new Vilao("Darth Vader", 0, 2),
    new Vilao("Homelander", 0, 3),
    new Vilao("Lex Luthor", 0, 4),
    new Vilao("Loki", 0, 5),
    new Vilao("Malévola", 0, 6),
    new Vilao("Scar", 0, 7),
    new Vilao("Thanos", 0, 8),
    new Vilao("Úrsula", 0, 9),
];

// Perguntas do quiz
const perguntas = [
    {
        texto: "1. Como você lida com autoridade?",
        opcoes: [
            { texto: "Rio na cara dela", vilao: 0 },  
            { texto: "Obedeço... até ultrapassá-la", vilao: 2 },  
            { texto: "Finjo respeito, mas só até conseguir o que quero", vilao: 3 }, 
            { texto: "Faço alianças estratégicas, até virar o jogo", vilao: 5, vilao2: 9 }, 
            { texto: "Espero meu momento e retribuo com vingança", vilao: 6, vilao2: 7 }, 
            { texto: "Tento mostrar que sou mais inteligente do que todos", vilao: 4, vilao2: 8 } 
    },
    {
        texto: "2. Qual dessas palavras mais te representa?",
        opcoes: [
            { texto: "Caos", vilao: 0 },  
            { texto: "Dominação", vilao: 8, vilao2: 2 },  
            { texto: "Manipulação", vilao: 5, vilao2: 9 }, 
            { texto: "Vingança", vilao: 6, vilao2: 7 },  
            { texto: "Ego", vilao: 3, vilao2: 1 },  
            { texto: "Controle", vilao: 4 }  
        ]
    },
    {
        texto: "3. O que mais te irrita?",
        opcoes: [
            { texto: "Ser ignorado", vilao: 0, vilao2: 1 }, 
            { texto: "Deslealdade", vilao: 2, vilao2: 7 },  
            { texto: "Falta de controle", vilao: 8, vilao2: 3 }, 
            { texto: "Ser subestimado", vilao: 4, vilao2: 6 }, 
            { texto: "Pessoas burras demais", vilao: 9, vilao2: 8 },  
            { texto: "Não ser o centro das atenções", vilao: 1, vilao2: 5 } 
        ]
    },
    {
        texto: "4. O que te move de verdade?",
        opcoes: [
            { texto: "Mostrar que eu sou superior", vilao: 4, vilao2: 8 }, 
            { texto: "Provocar caos só pela diversão", vilao: 0 }, 
            { texto: "Ser respeitado e temido", vilao: 2, vilao2: 3 }, 
            { texto: "Me vingar de quem me fez mal", vilao: 6, vilao2: 7 }, 
            { texto: "Ser o mais belo, famoso ou estiloso", vilao: 1, vilao2: 3 },  
            { texto: "Enganar e vencer no blefe", vilao: 5, vilao2: 9 }  
        ]
    },
    {
        texto: "5. Qual dessas frases parece algo que você diria?",
        opcoes: [
            { texto: "“Tudo que precisa é de um empurrãozinho...”", vilao: 0 }, 
            { texto: "“O poder é inevitável.”", vilao: 8, vilao2: 2 }, 
            { texto: "“Confie em mim... até eu te trair.”", vilao: 5, vilao2: 9 },  
            { texto: "“Eles riram de mim... mas não riem mais.”", vilao: 4, vilao2: 6 },  
            { texto: "“A glória é só minha.”", vilao: 3, vilao2: 1 },  
            { texto: "“Um dia, o trono será meu.”", vilao: 7 } 
        ]
    },
    {
        texto: "6. Como você lida com fracasso?",
        opcoes: [
            { texto: "Faço piada e volto pior", vilao: 0 },  
            { texto: "Uso a derrota como combustível para dominar", vilao: 8, vilao2: 2 },  
            { texto: "Invento outra mentira", vilao: 5, vilao2: 9 }, 
            { texto: "Me reinvento até vencer", vilao: 4 },  
            { texto: "Culpando todos à minha volta", vilao: 3, vilao2: 1 },  
            { texto: "Juro vingança eterna", vilao: 7, vilao2: 6 } 
        ]
    },
    {
        texto: "7. Como você se destaca em um grupo?",
        opcoes: [
            { texto: "Sendo o mais imprevisível e insano", vilao: 0 },  
            { texto: "Assumindo o controle sem pedir", vilao: 2, vilao2: 8 }, 
            { texto: "Manipulando cada um a meu favor", vilao: 5, vilao2: 9 }, 
            { texto: "Deixando todos me subestimarem… até tarde demais", vilao: 4, vilao2: 6 },  
            { texto: "Mostrando que sou o mais bonito e popular", vilao: 1, vilao2: 3 },  
            { texto: "Fazendo alianças falsas e puxando tapetes", vilao: 7 } 
        ]
    },
    {
        texto: "8. Qual dessas cenas você mais se imagina?",
        opcoes: [
            { texto: "Rindo em meio ao caos que causou", vilao: 0 },  
            { texto: "Dominando galáxias ou civilizações", vilao: 2, vilao2: 8 }, 
            { texto: "Seduzindo e enganando para conseguir o que quer", vilao: 5, vilao2: 9 }, 
            { texto: "Se vingando com estilo de quem te traiu", vilao: 6, vilao2: 7 },  
            { texto: "Criando um plano genial e vencendo com inteligência", vilao: 4 },  
            { texto: "Em frente às câmeras, sendo adorado", vilao: 3, vilao2: 1 }  
        ]
    },
    {
        texto: "9. Qual dessas seria sua motivação principal?",
        opcoes: [
            { texto: "Só quero ver o circo pegar fogo", vilao: 0 }, 
            { texto: "Mudar o mundo à força", vilao: 8, vilao2: 2 },  
            { texto: "Obter o que me foi negado", vilao: 6, vilao2: 7 },  
            { texto: "Ser reconhecido como gênio", vilao: 4 },  
            { texto: "Manipular o mundo e sair por cima", vilao: 5, vilao2: 9 }, 
            { texto: "Ser famoso, rico e influente", vilao: 3, vilao2: 1 }  
        ]
    },
    {
        texto: "10. Como você gostaria de ser lembrado?",
        opcoes: [
            { texto: "Como o caos encarnado", vilao: 0 },
            { texto: "Como o conquistador do impossível", vilao: 8, vilao2: 2 },  
            { texto: "Como o mestre da mentira", vilao: 5, vilao2: 9 },  
            { texto: "Como a mente brilhante que venceu", vilao: 4 },  
            { texto: "Como um ícone de estilo e poder", vilao: 1, vilao2: 3 }, 
            { texto: "Como o rei legítimo que foi traído", vilao: 7, vilao2: 6 } 
        ]
    }
];

let perguntaAtual = 0;

function exibirPergunta() {
    const pergunta = perguntas[perguntaAtual];
    const perguntaElemento = document.getElementById("pergunta");

    perguntaElemento.textContent = pergunta.texto;

    for (let i = 0; i < 6; i++) {
        const opcaoElemento = document.getElementById(`opcao${i + 1}`);
        
        if (i < pergunta.opcoes.length) {
            opcaoElemento.textContent = pergunta.opcoes[i].texto;
            opcaoElemento.dataset.vilao = pergunta.opcoes[i].vilao;
            
            opcaoElemento.removeEventListener("click", opcaoElemento.onclick); // Remove o listener anterior
            opcaoElemento.onclick = function() {
                adicionarPonto(parseInt(opcaoElemento.dataset.vilao));
                proximaPergunta();
            };

            opcaoElemento.style.display = "block";  
        } else {
            opcaoElemento.style.display = "none";
        }
    }
}

function adicionarPonto(posicaoVilao) {
    viloes[posicaoVilao].pontuacao++;
}

function proximaPergunta() {
    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
        exibirPergunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    let vencedor = viloes.reduce((maior, atual) => {
        return atual.pontuacao > maior.pontuacao ? atual : maior;
    });

    localStorage.setItem('vilaoVencedor', JSON.stringify(vencedor));

    window.location.href = 'resultado.html';
}

exibirPergunta();
