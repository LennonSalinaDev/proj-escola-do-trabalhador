'use strict'

const trocaTema = document.querySelector('.btn');

trocaTema.addEventListener('click', function(){
    document.body.classList.toggle('temaEscuro')
    document.body.classList.toggle('temaClaro')

    let className = document.body.className;
    if(className == 'temaClaro'){
        this.textContent = 'Escuro'
    }else {
        this.textContent = 'Claro'
    }
})
