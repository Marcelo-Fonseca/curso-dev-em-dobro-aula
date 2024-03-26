//derar codigo no JS

function calcularFatorial(numero) {
  let resultado = 1;
  for (let i = 1; i <= numero; i++) {
    resultado *= i;
    //resultado = resultado * i;
  }
  return resultado;
}

function imprimirFatorial(numero) {
  const fatorial = calcularFatorial(numero);

  // console.log(´${numero} ${fatorial}´);
}
const numero = 5;
imprimirFatorial(numero);
imprimirFatorial(numero);
