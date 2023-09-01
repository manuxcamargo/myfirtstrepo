console.log("JS está OK!")

//Vamos verificar se os inputs estão trazendo os valores
//para isso precisamos de variaveis que coletam e armazenem os inputs


function verificarInputs() {
    let titulo = document.getElementById("input-titulo").value;
    let preco = document.getElementById("input-preco").value;
    let descricao = document.getElementById("input-descricao").value;
    let plataforma = document.getElementById("input-plataforma").value;
    let imgLink = document.getElementById("input-imglink").value;

    //vamos dar um console ou verbo 
    console.log(titulo);
    console.log(preco);
    console.log(descricao);
    console.log(plataforma);
    console.log(imgLink);

    if (titulo == "" || preco == "" || descricao == "" || plataforma == "" || imgLink == "") {
        console.log("Os inputs estão vazios.");
        envieMsg('Preencha todos os campos', 'erro');
        return true;
    } else if (!isURLValida(imgLink)) {
        envieMsg('URL da imagem não é válida','erro')
    }
    
    else {
        console.log("Os inputs estão preenchidos");
        envieMsg('Cadastrado com sucesso', 'sucesso');
        return false;
    }
}



function envieMsg(msg, tipoMsg) {
    let msgDiv = document.getElementById("msg");
    msgDiv.innerHTML = '';

    let msgParaTela = `
    <p class='${tipoMsg}'>${msg}</p>
    `

    msgDiv.innerHTML = msgParaTela;

    setTimeout(function () {
        msgDiv.innerHTML = '';
    }, 3000)
}


class Jogo {
    constructor(titulo, preco, descricao, plataforma, imgLink) {
        this.titulo = titulo;
        this.preco = preco;
        this.descricao = descricao;
        this.plataforma = plataforma;
        this.imgLink = imgLink;
    }
}

const jogoTeste = new Jogo("Teste", "123", "DescTeste", "Steam", "url");

console.log(jogoTeste);

function comporJogo() {
    let titulo = document.getElementById("input-titulo").value;
    let preco = document.getElementById("input-preco").value;
    let descricao = document.getElementById("input-descricao").value;
    let plataforma = document.getElementById("input-plataforma").value;
    let imgLink = document.getElementById("input-imglink").value;

    const jogo = new Jogo(titulo, preco, descricao, plataforma, imgLink);
    console.log(jogo);

    bibliotecaJogos.adicionar(jogo);
    console.log(bibliotecaJogos);

    renderizarConteudo();
}

class ListaJogos {
    constructor() {
        this.ListaJogosArray = [];
    }
        adicionar(parametro) {  
        if(verificarInputs() == false) {
            this.ListaJogosArray.push(parametro);
            LimparInputs();

        }
    }
}

const listaTeste = new ListaJogos();
//console.log(listaTeste);

const bibliotecaJogos = new ListaJogos();
console.log(bibliotecaJogos);

 function LimparInputs() {
    document.getElementById("input-titulo").value = "";
    document.getElementById("input-preco").value = "";
    document.getElementById("input-descricao").value = "";
    document.getElementById("input-plataforma").value = "";
    document.getElementById("input-imglink").value = "";
}

// console.clear();

function renderizarConteudo () {
    const listaHTML = document.getElementById("container-lista");
    listaHTML.innerHTML = "";

    let array = bibliotecaJogos.ListaJogosArray;

    array.forEach(jogo => {
        const jogoDiv = `
        <div class='jogoDetalhe'>
        <p>Título: ${jogo.titulo}</p>
        <p>Preço: ${jogo.preco}</p>
        <p>Descrição: ${jogo.descricao}</p>
        <p>Plataforma: ${jogo.plataforma}</p>
        <img src="${jogo.imgLink}" alt="${jogo.titulo}"/>
        </div>
        `;

        listaHTML.innerHTML += jogoDiv;
    });
}

function isURLValida(url) {
    if(url.match(/\.(jpeg|jpg|gif|png)$/) != null){
        return true;
    } else {
        return false;
    }
}
