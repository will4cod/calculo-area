
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