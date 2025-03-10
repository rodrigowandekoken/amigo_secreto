// Array para armazenar os nomes dos participantes
let listaDeNomes = [];

// Função para adicionar um nome à lista
function adicionarAmigo() {
    // Obter o valor do campo de texto
    let nomeInput = document.getElementById('amigo').value.trim();

    // Verificar se o campo não está vazio
    if (nomeInput === '') {
        alert('Por favor, insira um nome válido.');
        return;
    }

    // Adicionar o nome à lista
    listaDeNomes.push(nomeInput);

    // Limpar o campo de texto
    document.getElementById('amigo').value = '';

    // Atualizar a exibição da lista
    exibirLista();
}

// Função para exibir a lista de nomes na página
function exibirLista() {
    let listaElement = document.getElementById('listaAmigos');
    listaElement.innerHTML = '';

    // Adicionar cada nome como um item da lista
    listaDeNomes.forEach(function(nome) {
        let li = document.createElement('li');
        li.textContent = nome;
        listaElement.appendChild(li);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    // Verificar se há pelo menos um nome na lista
    if (listaDeNomes.length === 0) {
        alert('Adicione pelo menos um nome antes de sortear.');
        return;
    }

    // Gerar um índice aleatório
    let indiceSorteado = Math.floor(Math.random() * listaDeNomes.length);

    // Obter o nome sorteado
    let nomeSorteado = listaDeNomes[indiceSorteado];

    // Exibir o resultado na página
    document.getElementById('resultado').textContent = 'Sorteado: ' + nomeSorteado;
}