/*Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os
minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é
de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte. */

var inicio = parseInt(prompt("Informe o horário do início do jogo:"));
var fim = parseInt(prompt("Informe o horário do termino do jogo:"));

if(inicio>fim){
    var tempoDeJogo= (24-inicio)+fim;
    alert("A duração do jogo foi de "+tempoDeJogo+" horas!");
}else{
    var tempoDeJogo= fim-inicio;
    alert("A duração do jogo foi de "+tempoDeJogo+" horas!");
}
