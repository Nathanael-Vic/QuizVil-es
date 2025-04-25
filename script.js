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

const perguntas = [
    {
        texto: "1. Como você lida com autoridade?",
        opcoes: [
            { texto: "Rio na cara dela", vilao: 0 },  // Coringa
            { texto: "Obedeço... até ultrapassá-la", vilao: 2 },  // Darth Vader
            { texto: "Finjo respeito, mas só até conseguir o que quero", vilao: 3 },  // Capitão Pátria
            { texto: "Faço alianças estratégicas, até virar o jogo", vilao: 5, vilao2: 9 },  // Loki, Úrsula
            { texto: "Espero meu momento e retribuo com vingança", vilao: 6, vilao2: 7 },  // Malévola, Scar
            { texto: "Tento mostrar que sou mais inteligente do que todos", vilao: 4, vilao2: 8 }  // Lex Luthor, Thanos
        ]
    },
    {
        texto: "2. Qual dessas palavras mais te representa?",
        opcoes: [
            { texto: "Caos", vilao: 0 },  // Coringa
            { texto: "Dominação", vilao: 8, vilao2: 2 },  // Thanos, Darth Vader
            { texto: "Manipulação", vilao: 5, vilao2: 9 },  // Loki, Úrsula
            { texto: "Vingança", vilao: 6, vilao2: 7 },  // Malévola, Scar
            { texto: "Ego", vilao: 3, vilao2: 1 },  // Capitão Pátria, Cruella
            { texto: "Controle", vilao: 4 }  // Lex Luthor
        ]
    },
    {
        texto: "3. O que mais te irrita?",
        opcoes: [
            { texto: "Ser ignorado", vilao: 0, vilao2: 1 },  // Coringa, Cruella
            { texto: "Deslealdade", vilao: 2, vilao2: 7 },  // Darth Vader, Scar
            { texto: "Falta de controle", vilao: 8, vilao2: 3 },  // Thanos, Capitão Pátria
            { texto: "Ser subestimado", vilao: 4, vilao2: 6 },  // Lex Luthor, Malévola
            { texto: "Pessoas burras demais", vilao: 9, vilao2: 8 },  // Úrsula, Thanos
            { texto: "Não ser o centro das atenções", vilao: 1, vilao2: 5 }  // Cruella, Loki
        ]
    },
    {
        texto: "4. O que te move de verdade?",
        opcoes: [
            { texto: "Mostrar que eu sou superior", vilao: 4, vilao2: 8 },  // Lex Luthor, Thanos
            { texto: "Provocar caos só pela diversão", vilao: 0 },  // Coringa
            { texto: "Ser respeitado e temido", vilao: 2, vilao2: 3 },  // Darth Vader, Capitão Pátria
            { texto: "Me vingar de quem me fez mal", vilao: 6, vilao2: 7 },  // Malévola, Scar
            { texto: "Ser o mais belo, famoso ou estiloso", vilao: 1, vilao2: 3 },  // Cruella, Capitão Pátria
            { texto: "Enganar e vencer no blefe", vilao: 5, vilao2: 9, }  // Loki, Úrsula
        ]
    },
    {
        texto: "5. Qual dessas frases parece algo que você diria?",
        opcoes: [
            { texto: "“Tudo que precisa é de um empurrãozinho...”", vilao: 0 },  // Coringa
            { texto: "“O poder é inevitável.”", vilao: 8, vilao2: 2 },  // Thanos, Darth Vader
            { texto: "“Confie em mim... até eu te trair.”", vilao: 5, vilao2: 9 },  // Loki, Úrsula
            { texto: "“Eles riram de mim... mas não riem mais.”", vilao: 4, vilao2: 6 },  // Lex Luthor, Malévola
            { texto: "“A glória é só minha.”", vilao: 3, vilao2: 1 },  // Capitão Pátria, Cruella
            { texto: "“Um dia, o trono será meu.”", vilao: 7 }  // Scar
        ]
    },
    {
        texto: "6. Como você lida com fracasso?",
        opcoes: [
            { texto: "Faço piada e volto pior", vilao: 0 },  // Coringa
            { texto: "Uso a derrota como combustível para dominar", vilao: 8, vilao2: 2 },  // Thanos, Darth Vader
            { texto: "Invento outra mentira", vilao: 5, vilao2: 9 },  // Loki, Úrsula
            { texto: "Me reinvento até vencer", vilao: 4 },  // Lex Luthor
            { texto: "Culpando todos à minha volta", vilao: 3, vilao2: 1 },  // Capitão Pátria, Cruella
            { texto: "Juro vingança eterna", vilao: 7, vilao2: 6 }  // Scar, Malévola
        ]
    },
    {
        texto: "7. Como você se destaca em um grupo?",
        opcoes: [
            { texto: "Sendo o mais imprevisível e insano", vilao: 0 },  // Coringa
            { texto: "Assumindo o controle sem pedir", vilao: 2, vilao2: 8 },  // Darth Vader, Thanos
            { texto: "Manipulando cada um a meu favor", vilao: 5, vilao2: 9 },  // Loki, Úrsula
            { texto: "Deixando todos me subestimarem… até tarde demais", vilao: 4, vilao2: 6 },  // Lex Luthor, Malévola
            { texto: "Mostrando que sou o mais bonito e popular", vilao: 1, vilao2: 3 },  // Cruella, Capitão Pátria
            { texto: "Fazendo alianças falsas e puxando tapetes", vilao: 7 }  // Scar
        ]
    },
    {
        texto: "8. Qual dessas cenas você mais se imagina?",
        opcoes: [
            { texto: "Rindo em meio ao caos que causou", vilao: 0 },  // Coringa
            { texto: "Dominando galáxias ou civilizações", vilao: 2, vilao2: 8 },  // Darth Vader, Thanos
            { texto: "Seduzindo e enganando para conseguir o que quer", vilao: 5, vilao2: 9 },  // Loki, Úrsula
            { texto: "Se vingando com estilo de quem te traiu", vilao: 6, vilao2: 7 },  // Malévola, Scar
            { texto: "Criando um plano genial e vencendo com inteligência", vilao: 4 },  // Lex Luthor
            { texto: "Em frente às câmeras, sendo adorado", vilao: 3, vilao2: 1 }  // Capitão Pátria, Cruella
        ]
    },
    {
        texto: "9. Qual dessas seria sua motivação principal?",
        opcoes: [
            { texto: "Só quero ver o circo pegar fogo", vilao: 0 },  // Coringa
            { texto: "Mudar o mundo à força", vilao: 8, vilao2: 2 },  // Thanos, Darth Vader
            { texto: "Obter o que me foi negado", vilao: 6, vilao2: 7 },  // Malévola, Scar
            { texto: "Ser reconhecido como gênio", vilao: 4 },  // Lex Luthor
            { texto: "Manipular o mundo e sair por cima", vilao: 5, vilao2: 9 },  // Loki, Úrsula
            { texto: "Ser famoso, rico e influente", vilao: 3, vilao2: 1 }  // Capitão Pátria, Cruella
        ]
    },
    {
        texto: "10. Como você gostaria de ser lembrado?",
        opcoes: [
            { texto: "Como o caos encarnado", vilao: 0 },  // Coringa
            { texto: "Como o conquistador do impossível", vilao: 8, vilao2: 2 },  // Thanos, Darth Vader
            { texto: "Como o mestre da mentira", vilao: 5, vilao2: 9 },  // Loki, Úrsula
            { texto: "Como a mente brilhante que venceu", vilao: 4 },  // Lex Luthor
            { texto: "Como um ícone de estilo e poder", vilao: 1, vilao2: 3 },  // Cruella, Capitão Pátria
            { texto: "Como o rei legítimo que foi traído", vilao: 7, vilao2: 6 }  // Scar, Malévola
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

            opcaoElemento.textContent = pergunta.opcoes[i].texto;
            opcaoElemento.dataset.vilao = pergunta.opcoes[i].vilao;
             
            opcaoElemento.onclick = function() {
            adicionarPonto(parseInt(opcaoElemento.dataset.vilao));
            proximaPergunta();
            };
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
