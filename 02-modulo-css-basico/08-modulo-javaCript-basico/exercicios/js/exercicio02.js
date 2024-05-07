
//exercicio 02

// const boletoPago = false
// if(boletoPago) {
//     alert('Boleto Pago')
// }else {
//     alert('Boleto não está pago!!')
// }


//EXEMPLO 2--------------------------------------
//desse jeito é mais correto
const  boletoPago = true
if(boletoPago) {
    alert('Boleto Pago')
}else if(boletoPago === false) {
    alert('Boleto não está pago.')
}
   
