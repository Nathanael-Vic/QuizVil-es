const villainInfo = {
    "Coringa": {
        description: "Você é puro caos e imprevisibilidade. Seu senso de humor é tão afiado quanto seu desejo de derrubar qualquer sistema.",
        imagePath: "assets/Coringa.png"
    },
    "Cruella": {
        description: "Você é estilo e ambição no extremo. Seu poder vem da sua aparência impecável e do seu ego inabalável.",
        imagePath: "assets/Cruella.png"
    },
    "Darth Vader": {
        description: "Seu medo e respeito vêm do poder do Lado Sombrio. Determinado e implacável, você sabe o preço da obediência e da autoridade.",
        imagePath: "assets/Darth Vader.png"
    },
    "Homelander": {
        description: "Você representa o herói que virou algo muito pior. Inquestionavelmente poderoso, mas pronto para mostrar quem manda.",
        imagePath: "assets/Homelander.png"
    },
    "Lex Luthor": {
        description: "Sua maior arma é a mente. Estrategista genial, sempre um passo à frente, você joga no tabuleiro global.",
        imagePath: "assets/Lex Luthor.png"
    },
    "Loki": {
        description: "Mestre da trapaça e do engano, seu charme e astúcia fazem de você um adversário difícil de prever.",
        imagePath: "assets/Loki.png"
    },
    "Malévola": {
        description: "Vingança e poder formam seu coração. Você nunca esquece uma traição e encontra beleza no seu próprio domínio.",
        imagePath: "assets/Malévola.png"
    },
    "Scar": {
        description: "Ambição e traição caminham lado a lado em você. Forte, frio e calculista, você sabe que o trono é conquistado a qualquer custo.",
        imagePath: "assets/Scar.png"
    },
    "Thanos": {
        description: "Seu objetivo é o equilíbrio pelo poder. Frio e calculista, você está disposto a qualquer sacrifício para realizar sua visão.",
        imagePath: "assets/Thanos.png"
    },
    "Úrsula": {
        description: "Manipulação é sua arte. Você canta promessas e cobra preços altos — mas nunca perde o controle da situação.",
        imagePath: "assets/Úrsula.png"
    }
};

window.onload = function() {

    const vencedorString = localStorage.getItem('vilaoVencedor');

    if (!vencedorString) {
        window.location.href = 'index.html';
        return;
    }

    const vencedorObjeto = JSON.parse(vencedorString);

    const nomeDoVencedor = vencedorObjeto.nome;

    const infos = villainInfo[nomeDoVencedor];

    const tituloElemento = document.getElementById('nomeVilao');
    tituloElemento.innerText = nomeDoVencedor;

    const descricaoElemento = document.getElementById('descricaoVilao');
    descricaoElemento.innerText = infos.description;

    const imagemElemento = document.querySelector('#imagemResultado img');
    imagemElemento.src = infos.imagePath;
    imagemElemento.alt = `Foto do vilão ${nomeDoVencedor}`;
};
