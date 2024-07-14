//variaveis var let const
//metado slice() mostra do numero escolhido para frente continuando a lista. "cria nova sub-arraws"
//unshift = adiciona um item no começo do array
//shift()= vai remover um item no começo do array
//push() = adiciona no final do array
//pop() = remove um item do final do array
//includes = verifica a existencia de algo dentro do array
//sort = organiza em ordem alfabeticas


let= nome ='mar'

const frutas =['uva','morango', 'manga','banana'];
console.log(frutas[1])


console.log(frutas.slice(1,3))

frutas.unshift('melao')
console.log(frutas)
frutas.push('limao')
console.log(frutas)

const resultado = frutas.includes('banana')
console.log(resultado)
frutas.sort()
console.log(frutas)
const  pessoa = {
    nome:'marcelo',
    altura: 1.71,
    peso: 97,
    idade: 43

}
console.log(pessoa);
const obj2 = {
    ...pessoa, idade:44
}
console.log(obj2)

//condicionais

const idade ="15";
if(idade >= 18) {
    console.log("O usuario é maior de idade")
}else {
    console.log("O usuario [é menor de idade")
}

// operador ternario
//se essa condição  for verdade utiliza ? se não utiliza : 
//condição ?promeiro : segundo

idade >=18 ?  console.log("O usuario é maior de idade:)") :  console.log("O usuario é menor de idade;(")

//função
function soma(primeiro,segundo) {
const resultado = 5+7+ primeiro + segundo
return resultado
}
soma()
console.log(soma(8,4))
soma()
console.log(soma(8,4))