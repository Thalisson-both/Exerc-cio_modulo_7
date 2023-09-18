
const form = document.getElementById('form-compara'); // Pega o formulário e o armazena em uma constante
const mensgErro = document.getElementById('mensagem-erro');
const mensgSuc = document.getElementById('mensagem-sucesso');

function veriNum(valorA, valorB) {
    const valor1 = parseFloat(valorA);
    const valor2 = parseFloat(valorB);
    return valor2 >= valor1;
}

form.addEventListener('submit', function(e) { // Cria uma função para lidar com o evento de submit do formulário
    e.preventDefault(); // Impede o envio padrão do formulário

    const valorA = document.getElementById('prim-numero').value;
    const valorB = document.getElementById('seg-numero').value;

    if (!veriNum(valorA, valorB)) {
        mensgErro.style.display = 'block'; // Exibe a mensagem de erro
        mensgSuc.style.display = 'none'; // Esconde a mensagem de sucesso, se estiver visível
    } else {
        mensgSuc.style.display = 'block'; // Exibe a mensagem de sucesso
        mensgErro.style.display = 'none'; // Esconde a mensagem de erro, se estiver visível
    }
});




