function saudacao(x){
        tio = x;
        console.log("bom dia " + tio);
}
    const x = "matheus";
    saudacao(x);

function soma(x,y){
        console.log("Manubutao")
        a = x;
        b = y;
        return a + b;
}
    let n1 = 6;
    let n2 = 7;
console.log("Sua soma deu " + soma(n1,n2));

console.log("--------------------------")

const raiz = function (n){
    return n ** 0.5;
}
console.log(raiz(9));
console.log(raiz(16));

//Arrow functions n muda nada praticamente so como coloca elas
const raiz2 = n => n ** 0.5;
console.log(raiz2(25));
console.log(raiz2(36));
//Arrow functions n muda nada praticamente so como coloca elas