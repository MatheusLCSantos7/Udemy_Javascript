//UM OBJETO//////////////////////////

const pessoa = {
    nome:'matheus',
    sobrenome:'delicinha',
    idade: 22
};
console.log(pessoa.nome);
console.log(pessoa.sobrenome);
console.log(pessoa.idade);
//UM OBJETO/////////////////////////

//UMA FUNC Q CRIA OBJETO////////////////////////////////////////////////

function criarpessoa(nome,sobrenome,idade){
    return {nome,sobrenome,idade}

    //OU DARIA PRA FAZER ASSIM VVVVVV
    // return {
    //     nome: nome,
    //     sobrenome :sobrenome,
    //     idade: idade
    // }
    //OU DARIA PRA FAZER ASSIM VVVVVV
}

const pessoa1 = criarpessoa("theuzin", "O cria", 24);

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);
//UMA FUNC Q CRIA OBJETO////////////////////////////////////////////////


//METODO, FUNC DENTRO DE OBJE????????????????????????????????????????????????????????????????????????
const pessoa2 = {
    nome:'Matheus',
    sobrenome:'Delicinha',
    idade: 23,//virgula

    fala() {//METODO, FUNC DENTRO DE OBJE
        console.log('Opa bao?');
        console.log(`${this.nome} ${this.sobrenome} esta falando OLA PORR... e antes eu tinha ${this.idade}`);
    },
    maisIdade(){//METODO, FUNC DENTRO DE OBJE
        this.idade++;
    },
    fala2(){//METODO, FUNC DENTRO DE OBJE
        console.log(`Agora minha idade é ${this.idade}`);
    }
};

pessoa2.fala(); //chamando metod
pessoa2.maisIdade();//chamando metod
pessoa2.fala2();//chamando metod

//METODO, FUNC DENTRO DE OBJE????????????????????????????????????????????????????????????????????????
