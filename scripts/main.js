
function calcQuadrado(){

    // pega os valores
    const comprimento = document.getElementById('comprimento-quadrado').value;
    const largura = document.getElementById('largura-quadrado').value;

    if(!comprimento || !largura){
        alert("Preencha todos os campos");
    }

    if(comprimento > 0 && largura > 0){
        if(comprimento === largura){
            mostrarResultado(comprimento, largura, 'quadrado');
        }else{
            alert("Comprimento e largura precisam ser iguais");
        }
    }
}

function calcRetangulo(){

    // pega os valores
    const comprimento = document.getElementById('comprimento-retangulo').value;
    const largura = document.getElementById('largura-retangulo').value;

    if(!comprimento || !largura){
        alert("Preencha todos os campos");
    }

    if(comprimento > 0 && largura > 0){
        mostrarResultado(comprimento, largura, 'retangulo');
    }
}

function calcCirculo(){

        // pega os valores
        const raio = document.getElementById('raio-circulo').value;

        if(!raio){
            alert("Preencha todos os campos");
        }
    
        if(raio > 0 ){
           mostrarCirculo(raio, 'circulo');
        }
}

function calcTriangulo(){

    // pega os valores
    const base = document.getElementById('base-triangulo').value;
    const altura = document.getElementById('altura-triangulo').value;

    if(!base || !altura){
        alert("Preencha todos os campos");
    }

    if(base > 0 && altura > 0){
        mostrarTriangulo(base, altura, 'triangulo');
    }
    
}

function mostrarResultado(comprimento, largura, figura){
    
    // mostrar a div resultado na tela
    let divResultado = document.querySelector(`.formas_${figura}`);
    divResultado.style.display = 'flex';

    // mostrando os valores de entrada do usuario
    let divComprimento = document.querySelector(`.formas_${figura}_comprimento p`);
    divComprimento.innerHTML = comprimento + 'm';

    let divLargura = document.querySelector(`.formas_${figura}_largura p`);
    divLargura.innerHTML = largura + 'm';

    // mostrando o resultado  
    let resultado = document.querySelector(`.formas_${figura} h3`);
    resultado.innerHTML = (comprimento * largura) + "m&sup2";
}

function mostrarCirculo(raio, figura){

    const diametro = 2 * raio;
    const pi = 3.14;

    // mostrar a div resultado na tela
    let divResultado = document.querySelector(`.formas_${figura}`);
    divResultado.style.display = 'flex';

    // mostrando os valores de entrada do usuario
    let divRaio = document.querySelector(`.formas_${figura}_raio p`);
    divRaio.innerHTML = raio + 'm';

    let divDiametro = document.querySelector(`.formas_${figura}_diametro p`);
    divDiametro.innerHTML = diametro + 'm';

    // mostrando o resultado  
    let resultado = document.querySelector(`.formas_${figura} h3`);
    resultado.innerHTML = pi * (Math.pow(raio, 2)) + "m&sup2";
}

function mostrarTriangulo(base, altura, figura){

    console.log(base, altura, figura)
}