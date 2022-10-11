function jogar() {
    let num = parseInt(document.getElementById("num").value);
    console.log( "Número digitado: " + num);
    let ran = parseInt(Math.trunc(Math.random() * 10));
    console.log("Número gerado pela máquina: " + ran);
    let esc = document.getElementById("escolha");
    let r = document.getElementById("res");
    // console.log(ran);
    let soma = num + ran;
    console.log(soma);
    let i = num % 2;
    let f = soma % 2;
    console.log(i);
    console.log(f);
    if(num % 2 == 0){
        esc.innerText = 'Você escolheu um número "Par"';
    }else{
        esc.innerText = 'Você escolheu um número "Impar"';
    }
    if(i == f){
        r.innerText = "Win";
    }else{
        r.innerText = "Lose";
    }
}







// if(soma % 2 == 0){
//     // console.log("Par");
//     r.innerText = "Vc venceu"
// }else if(soma % 2 !== 0){
//     // console.log("Impar");
//     r.innerText = "Vc  n venceu"
// }else{
//     r.innerText="d"
// }









































// let ran = Math.trunc(Math.random() * 10);
// console.log("Número gerado pela máquina: " + ran);
// let par = parseInt(document.getElementById("ipar").value);
// // console.log("Par: " + par);
// let impar = parseInt(document.getElementById("iimpar").value);
// // console.log("Impar: " + impar);
// let p = 0;
// console.log(p)
// // -----------------------------------------------------------
// if (p == par){
//     console.log("teste")
// }else{
//     console.log("deu certo")
// }

// // -----------------------------------------------------------
// let s = ran + par;
// console.log (s);
// let d = ran + impar
// console.log (d);