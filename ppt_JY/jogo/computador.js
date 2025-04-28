// Função para gerar a escolha aleatória do computador
function gerarEscolhaAleatoria() {
    return Math.floor(Math.random() * 3) + 1;  // Gera um número entre 1 e 3
}


module.exports = { gerarEscolhaAleatoria };