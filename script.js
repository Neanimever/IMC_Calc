const nome = document.querySelector('#nome');
const altura = document.querySelector('#altura');
const peso = document.querySelector('#peso');
const button = document.querySelector('button');

function resultado (value) {
    if(value > 40) return 'Obesidade grau III';
    if(value > 35) return 'Obesidade grau II';
    if(value > 30) return 'Obesidade grau I';
    if(value > 25) return 'Levemente acima do peso';
    if(value > 18) return 'Peso ideal';
    return 'Abaixo do peso';
}

function imcCalc () {
    if (!(peso.value) || !(altura.value) || !(nome.value)) {
        const erro = document.querySelector('.erro');
        erro.textContent = 'Preencha todos os campos';
    }else {
        const main = document.querySelector('main');
        main.innerHTML = '';
    
        const intro = document.createElement("span");
        intro.innerText = `Olá, ${nome.value}`;
        intro.style.marginBottom = "3rem";
    
        const introRes = document.createElement("span");
        introRes.innerText = 'Seu resultado da calculadora IMC indica que está:';
        introRes.style.marginBottom = "5rem";
    
        const valorIMC = (+peso.value / (+altura.value * +altura.value)).toFixed(1);
    
        const result = document.createElement("span");
        result.innerText = resultado(valorIMC);
    
        main.style.paddingTop = "15rem";
    
        main.appendChild(intro);
        main.appendChild(introRes);
        main.appendChild(result);
    }
}