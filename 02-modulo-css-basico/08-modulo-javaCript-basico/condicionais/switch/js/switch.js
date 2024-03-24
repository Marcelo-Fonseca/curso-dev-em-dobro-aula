//serve para controlar o fluxo da aplicação parecido com if mas é usado quando existe muitos casos
//switch(parametro) {
//case valor1:
//<bloco de declaração>
//case valor:
//<bloco de declação>
//}

let nomeFilme = "Vingadores";
switch (nomeFilme) {
  case "Vingadores":
    console.log("É o filme dos Vingadores");
    break;
  case "Batman vs Superman":
    console.log("É o filme do Batman vs Superman");
    break;
  case "Senhor dos Aneis":
    console.log("É o filme dos Senhor dos Aneis");
    break;

  default:
    console.log("É outro Filme"); // caso não encontre o que foi pedido na pesquisa
    break;// break tem que ser colocado para que ele saia do case se isso nao acontecer ele vai ficar executando ate encontrar um breack
}

//swicth vai continuar executanco ate que encontre um case que tenha breack


let avaliacao = 1;
switch (avaliacao) {
  case 1:
  case 2:
    console.log("Filme Ruim");
    break;

  case 3:
  case 4:
    console.log("Filme Mediano");
    break;

  case 5:
    console.log("Filme exelente");
    break;
    default: 
    console.log('Nota Invalida')
    break
}
