/**
 * var = variavel generico
 * const = variavel não mudar seu valor depois que ela foi declarada "nao muda seu conteudo"
 * let = ela tem um escopo ela pode atribuir outros valores diferente da const
 */

var nomePessoa = "Marcelo";
const emailPessoa = "marcelo.douglas863@gmail.com";

/*nao pode tentar mudar porque a variavel e uma constante nao muda o valor declarado*/
/*emailPessoa = "douglas@google.com";*/
console, console.log(emailPessoa);

/*escopo de bloco*/
{
  var nomePessoa = "Marcelo";
  const emailPessoa = "marcelo.douglas863@gmail.com"
  let telefonePessoa = "51988722222"

}
console.log(nomePessoa)
console.log(telefonePessoa)
console.log(emailPessoa)

let retornoDoUsuario = confirm("Deseja continuar? ")
console.log(retornoDoUsuario)


