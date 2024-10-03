function criaCartao(categoria, pergunta, resposta){
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';

    cartao.inneerHTML = 
    <div class="conteudo-cartao">
    <h3>${categoria}</h3>
    <div class="cartao-pergunta">
        <p>${pergunta}</p>
    </div>
    <div class="cartao-pergunta">
        <p>${resposta}</p>
    </div>
    </div>
    container.appendChild (cartao) 
}