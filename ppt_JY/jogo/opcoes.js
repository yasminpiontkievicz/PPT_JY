const opcoes = ['Pedra', 'Papel', 'Tesoura'];


// Função para exibir o menu de opções
function exibirMenu() {
    console.log('Escolha uma das opções:');
    console.log('1 - Pedra');
    console.log('2 - Papel');
    console.log('3 - Tesoura');
}


// Função para retornar o nome da escolha baseado no índice
function nomeDaEscolha(indice) {
    return opcoes[indice - 1];  // Indice começa em 1, por isso subtraímos 1
}


module.exports = { exibirMenu, nomeDaEscolha };