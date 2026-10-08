// Arrays e Métodos

const nomes = ["Rafael", "André", "Frank"];

nomes.forEach(function (nome) {
    console.log(`Olá, ${nome}!`);
});

const nomesMaiusculos = nomes.map(function (nome) {
    return nome.toUpperCase();
});

console.log("Nomes em maiúsculas:", nomesMaiusculos);


const precos = [10, 25, 40, 5, 60];

const precosAcimaDe20 = precos.filter(function (preco) {
    return preco > 20;
});

console.log("Preços acima de 20:", precosAcimaDe20);

const somaPrecos = precos.reduce(function (total, preco) {
    return total + preco;
}, 0);

console.log("Soma dos preços:", somaPrecos);


const produtos = [
    { nome: "Ingresso de cinema", preco: 30 },
    { nome: "Pipoca grande", preco: 25 },
    { nome: "Camiseta do CineBlog", preco: 65 },
    { nome: "Pôster de filme", preco: 40 }
];

const nomesProdutos = produtos.map(function (produto) {
    return produto.nome;
});

console.log("Nomes dos produtos:", nomesProdutos);


const produtosAbaixoDe50 = produtos.filter(function (produto) {
    return produto.preco < 50;
});

console.log("Produtos abaixo de R$ 50:", produtosAbaixoDe50);


const totalProdutos = produtos.reduce(function (total, produto) {
    return total + produto.preco;
}, 0);

console.log("Valor total dos produtos:", totalProdutos);


produtos.forEach(function (produto) {
    console.log(`${produto.nome}: R$ ${produto.preco}`);
});



// Manipulação do DOM

const titulo = document.querySelector("#titulo");

titulo.textContent = "Blog do Rafael";


const paragrafos = document.querySelectorAll(".texto");

paragrafos.forEach(function (paragrafo) {
    console.log(paragrafo.textContent);
});


const lista = document.querySelector("#lista");

lista.innerHTML = `
    <li>Assistir Duna: Parte Dois</li>
    <li>Rever O Poderoso Chefão</li>
`;


const terceiroItem = document.createElement("li");

terceiroItem.textContent = "Escrever uma crítica de Interestelar";

lista.append(terceiroItem);


terceiroItem.classList.add("destaque");

console.log(
    "Possui a classe destaque:",
    terceiroItem.classList.contains("destaque")
);


const tarefas = [
    "Assistir Blade Runner 2049",
    "Pesquisar clássicos dos anos 1970",
    "Escolher o próximo filme para crítica"
];

tarefas.forEach(function (tarefa) {
    const item = document.createElement("li");

    item.textContent = tarefa;

    lista.append(item);
});


const primeiroItem = lista.querySelector("li");

primeiroItem.classList.add("feito");


const quantidadeItens = document.querySelectorAll("li").length;

console.log("Quantidade total de itens da lista:", quantidadeItens);



// Eventos e Event Delegation

const botao = document.querySelector("#botao");

botao.addEventListener("click", function () {
    console.log("Clicou!");
});


botao.addEventListener("mouseover", function () {
    botao.textContent = "Pode clicar!";
});


const campoNome = document.querySelector("#nome");

campoNome.addEventListener("keyup", function () {
    console.log(campoNome.value);
});


// Event Delegation

lista.addEventListener("click", function (e) {

    if (e.target.tagName === "LI") {

        e.target.classList.toggle("feito");

        console.log("Item clicado:", e.target.textContent);
    }

});


const itemDinamico = document.createElement("li");

itemDinamico.textContent = "Rever Clube da Luta";

lista.append(itemDinamico);


// Formulário

const formulario = document.querySelector("#formulario");

const campoTarefa = document.querySelector("#tarefa");

formulario.addEventListener("submit", function (e) {

    e.preventDefault();

    const textoTarefa = campoTarefa.value.trim();

    if (textoTarefa === "") {
        return;
    }

    const novoItem = document.createElement("li");

    novoItem.textContent = textoTarefa;

    lista.append(novoItem);

    campoTarefa.value = "";
});