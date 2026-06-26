const player1 = {
  name: 'Mario',
  velocidade: 4,
  manobrabilidade: 3,
  poder: 3,
  pontos: 0,
};

const player2 = {
  name: 'Luigi',
  velocidade: 3,
  manobrabilidade: 4,
  poder: 4,
  pontos: 0,
};

async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
  let random = Math.random();
  let result;

  switch (true) {
    case random < 0.33:
      result = 'RETA';
      break;
    case random < 0.66:
      result = 'CURVA';
      break;
    default:
      result = 'CONFRONTO';
      break;
  }

  return result;
}

async function logRollResult(characterName, block, diceResult, attribute) {
  console.log(
    `${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${
      diceResult + attribute
    }`
  );
}

async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`\nRodada ${round}:`);

    // Sortear bloco
    let block = await getRandomBlock();
    console.log(`Bloco: ${block}`);

    // Rolar os Dados
    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    // Inicializar variáveis de teste
    let skillTest1 = 0;
    let skillTest2 = 0;
    let powerResult1 = 0;
    let powerResult2 = 0;

    if (block === 'RETA') {
      skillTest1 = diceResult1 + character1.velocidade;
      skillTest2 = diceResult2 + character2.velocidade;

      await logRollResult(character1.name, "Velocidade", diceResult1, character1.velocidade);
      await logRollResult(character2.name, "Velocidade", diceResult2, character2.velocidade);
    }

    if (block === 'CURVA') {
      skillTest1 = diceResult1 + character1.manobrabilidade;
      skillTest2 = diceResult2 + character2.manobrabilidade;

      await logRollResult(character1.name, "Manobrabilidade", diceResult1, character1.manobrabilidade);
      await logRollResult(character2.name, "Manobrabilidade", diceResult2, character2.manobrabilidade);
    }

    if (block === 'CONFRONTO') {
      powerResult1 = diceResult1 + character1.poder;
      powerResult2 = diceResult2 + character2.poder;

      console.log(`${character1.name} confrontou com ${character2.name}`);
      await logRollResult(character1.name, "Poder", diceResult1, character1.poder);
      await logRollResult(character2.name, "Poder", diceResult2, character2.poder);

      if (powerResult1 > powerResult2 && character2.pontos > 0) {
        console.log(`${character1.name} venceu o confronto! ${character2.name} perdeu um ponto!`);
        character2.pontos--;
      } else if (powerResult2 > powerResult1 && character1.pontos > 0) {
        console.log(`${character2.name} venceu o confronto! ${character1.name} perdeu um ponto!`);
        character1.pontos--;
      } else if (powerResult1 === powerResult2) {
        console.log(`Empate! Nenhum ponto foi perdido.`);
      }
    }

    // Pontuação apenas para blocos RETA e CURVA
    if (block === 'RETA' || block === 'CURVA') {
      if (skillTest1 > skillTest2) {
        console.log(`${character1.name} marcou um ponto!`);
        character1.pontos++;
      } else if (skillTest2 > skillTest1) {
        console.log(`${character2.name} marcou um ponto!`);
        character2.pontos++;
      } else {
        console.log(`Empate! Nenhum ponto marcado.`);
      }
    }

    // Exibir placar parcial
    console.log(`Placar parcial: ${character1.name} ${character1.pontos} x ${character2.pontos} ${character2.name}`);
  }
}

async function declareWinner() {
  console.log(`\n🏁 Corrida finalizada!`);
  if (player1.pontos > player2.pontos) {
    console.log(`🏆 ${player1.name} é o grande vencedor com ${player1.pontos} pontos!`);
  } else if (player2.pontos > player1.pontos) {
    console.log(`🏆 ${player2.name} é o grande vencedor com ${player2.pontos} pontos!`);
  } else {
    console.log(`🤝 Empate! Ambos os jogadores terminaram com ${player1.pontos} pontos!`);
  }
}

(async function main() {
  console.log(`Corrida entre ${player1.name} e ${player2.name} iniciada! \n`);

  await playRaceEngine(player1, player2);
  await declareWinner();
})();
