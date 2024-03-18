



const a = 2
const b = 2

console.log(a=== b && a <= b)
//v e v = v 
console.log(a=== b && a <b)
//v e F = F
console.log(a > b && a === b )
//F e V = F 

/*OR* ou 
É uma coisa ou outra*/

console.log(a ===b || a <= b)
//V ou V = V
console.log(a===b || a < b )
//V ou F = V 
console.log(a>b || a ===b )
//F ou V = V
console.log(a>b || a <b )
//F ou F = F

/*NOT (não negação)*/
console.log(a===b)//true
console.log(!(a===b))//false neste caso foi feito a inversao. pois esta com esclamação na frete dos parentenses 
//que ira primeiro fazer a verificação e depois que tem o resultado, ira fazer a negação do resultado 
//se o resultado for verdadeiro ficara false  

console.log(a <b) // false
console.log(!(a<b))//true
