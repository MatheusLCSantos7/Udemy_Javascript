function meuEscopo(){


//forma de quebrar o form///////////////////////////////////////////////////////////////////
//let contador = 1
// form.addEventListener('submit', function(evento) {
//     evento.preventDefault();
//     console.log(`Form nao foi enviado ${contador}`);
//     contador++
// });
//forma de quebrar o form///////////////////////////////////////////////////////////////////

    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm(evento){
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        console.log(nome.value, sobrenome.value, peso.value, altura.value)
        console.log(pessoas)

        //VER AULA A PARTIR DO MNT 29
    }
    form.addEventListener('submit', recebeEventoForm)
}
meuEscopo();