criaCartao
function criaCartao (categoria, pergunta, resposta){
let conteiner = documen.getElementBgId('contener')
let cartao = document.criateElement ('article')
cartao.classNome= 'cartao'
cartao.innerHtml= 
<div class ="cartao-conteudo">
<h3>${categoria}</h3>
<div class="cartao-pergunta">
<p>${pergunta}</p>
</div>
<div class="cartao-resposta">
    <p>${resposta}</p>
    </div>
</div>

conteiner.appendChild(cartao);
}