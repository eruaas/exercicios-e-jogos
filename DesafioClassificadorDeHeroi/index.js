var nome = prompt("Digite seu nome:");
var xp = prompt("Digite sua Exp:")

function classificador() {
while (true) {    
if (xp < 1000) {
  xp = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
  xp = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
  xp = "Prata";
} else if (xp >= 5001 && xp <= 7000) {
  xp = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
  xp = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
  xp = "Imortal";
} else if (xp >= 10001) {
  xp = "Radiante";
}


alert(`O Herói de nome ${nome} está no nívem de ${nível}`);

const continuar = confirm("Deseja continuar?");
    if (!continuar) {
    alert("fim");
    break;
    }
  }

}