function jogar(){
    
    // let par = document.getElementById("ipar");
    // let impar = document.getElementById("iimpar");
    let op = document.getElementsByName("op")
    // let ran = Math.round(Math.trunc(Math.random()*10));
    let ran = Math.trunc(Math.random()*10);
    console.log(op.value);
    console.log(ran);
    if(ran % op == 0){
        console.log("par");
    }else{
        console.log("impar");
    }
}



// =============================================================================
function jogar() {
    let ran = Math.trunc(Math.random() * 10);
    console.log("Número gerado pela máquina: " + ran);
    let par = parseInt(document.getElementById("ipar").value);
    console.log("Par: "+par);
    let impar = parseInt(document.getElementById("iimpar").value);
    console.log("Impar: "+impar);
    let op = document.getElementsByTagName("op").value;
    let opi =document.getElementsByName("op").value;
    let opu = document.getElementsByClassName("op").value;
        console.log(op)
        console.log(opi)
        console.log(opu)
    switch(op){
        case par:
            ran + par;
        break;
        case impar:
            ran + impar;
        break;
        default:
            return "Error";
    }
}