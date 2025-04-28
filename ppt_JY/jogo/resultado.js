// Função para determinar o resultado do jogo
function determinarResultado(jogador, computador) {
    if (jogador === computador) {
        console.log('Empate!');
    } else if (
        (jogador === 1 && computador === 3) ||  // Pedra ganha de Tesoura
        (jogador === 2 && computador === 1) ||  // Papel ganha de Pedra
        (jogador === 3 && computador === 2)      // Tesoura ganha de Papel
    ) {
        console.log('Você venceu!');
    } else {
        console.log('O computador venceu!');
    }
}


module.exports = { determinarResultado };

