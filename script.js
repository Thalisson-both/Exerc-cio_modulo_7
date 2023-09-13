
const form = document.getElementById('form-compara'); //Pego o formulário e coloco em uma constante
const mensgErro = document.getElementById('mensagem-erro');
const mensgSuc = document.getElementById('mensagem-sucesso')

form.addEventListener('submit', function(e){ //criação de uma 'Função' com o submit para o botão ondem quando clicar irá e executara a função evento(e)
    const valorA = parseFloat(document.getElementById('prim-numero').value);
    const valorB = parseFloat(document.getElementById('seg-numero').value);
    
    if (valorB <= valorA) {
        e.preventDefault();
        mensgErro.style.display = 'block';
    } else {
        e.preventDefault();
        mensgSuc.style.display = 'block';
    }
})



