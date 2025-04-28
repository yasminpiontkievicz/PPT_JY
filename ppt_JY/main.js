const readlineSync = require('readline-sync');
const opcoes = require('./jogo/opcoes');
const computador = require('./jogo/computador');
const resultado = require('./jogo/resultado');


// Função principal que executa o jogo
function iniciarJogo() {
    console.log("Bem-vindo ao Jogo de Pedra, Papel e Tesoura!");


    // Exibe o menu de opções
    opcoes.exibirMenu();


    // Solicita a escolha do jogador
    let escolhaJogador = readlineSync.questionInt('Escolha uma opcao (1-3): ');


    // Gera a escolha do computador
    let escolhaComputador = computador.gerarEscolhaAleatoria();


    // Exibe as escolhas feitas
    console.log(`Você escolheu: ${opcoes.nomeDaEscolha(escolhaJogador)}`);
    console.log(`O computador escolheu: ${opcoes.nomeDaEscolha(escolhaComputador)}`);


    // Determina o resultado do jogo
    resultado.determinarResultado(escolhaJogador, escolhaComputador);


    // Pergunta se o jogador quer jogar novamente
    let jogarNovamente = readlineSync.question('Deseja jogar novamente? (s/n): ');
    if (jogarNovamente.toLowerCase() === 's') {
        iniciarJogo();  // Chama a função novamente para jogar outra rodada
    } else {
        console.log('Obrigado por jogar!');
    }
}


iniciarJogo();  // Inicia o jogo
