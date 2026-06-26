
function saldoVitorias(vitorias, derrotas) {
    let vitorias = prompt("Qual o número de vitórias atuais?");
    let derrotas = prompt("Qual o número de derrotas atuais?");
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    if (vitorias < 10) {
        let nivel = "Ferro";
    } if (vitorias >=11 && vitorias < 20) {
        let nivel = "Bronze";
    } if (vitorias >= 21 && vitorias < 50) {
        let nivel = "Prata"
    } if (vitorias >= 51 && vitorias < 80) {
        let nivel = "Ouro"
    } if (vitorias >= 81 && vitorias < 90) {
        let nivel = "Diamante"
    } if (vitorias >= 91 && vitorias < 100) {
        let nivel = "Lendário"
    } if (vitorias >= 101) {
        let nivel = "Imortal"
    }
   
    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`
}