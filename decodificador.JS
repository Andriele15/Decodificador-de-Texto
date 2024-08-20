// Variáveis globais
let campoTextoCriptografar = document.getElementById('input-texto-usu');
let textoCriptografado = document.getElementById('texto-criptografado');
let mensagem = document.getElementById('mensagem');

//Função para verificar se o texto está em minúsculo e sem acento
function minusculoSemAcento(texto){
    const regex = /^[a-z\s]*$/;
    return regex.test(texto);
}

// Função para criptografar o texto
function criptografarTexto() {
    let inputValue = campoTextoCriptografar.value;
    if(minusculoSemAcento(inputValue)){
    let criptografado = inputValue.replace(/e/g, 'enter')
                                  .replace(/i/g, 'imes')
                                  .replace(/a/g, 'ai')
                                  .replace(/o/g, 'ober')
                                  .replace(/u/g, 'ufat');
    // Passando o texto criptografado para o Segundo campo
    textoCriptografado.value = criptografado;
     

    console.log(`Você digitou: ${inputValue}`);
    console.log(`Texto criptografado: ${criptografado}`);

    // Limpando o campo de texto após a criptografia
    campoTextoCriptografar.value = ''; 
    mensagem.textContent= ''; //Limpa mensagem de erro
    }else{
        mensagem.textContent ="Por favor, escreva o texto em minúsculo e sem acento";
    }
}

// Função para copiar o texto do Segundo campo
function copiarTexto() {
    textoCriptografado.select();
    document.execCommand('copy');
    console.log(`Texto copiado: ${textoCriptografado.value}`);
}

// Função para descriptografar
function descriptografarTexto() {
    let inputValue = campoTextoCriptografar.value || textoCriptografado.value;

    if (inputValue) {
        let descriptografado = inputValue.replace(/enter/g, 'e')
                                         .replace(/imes/g, 'i')
                                         .replace(/ai/g, 'a')
                                         .replace(/ober/g, 'o')
                                         .replace(/ufat/g, 'u');
        textoCriptografado.value = descriptografado;

        console.log(`Texto descriptografado: ${descriptografado}`); // Debug statement

        // Limpando o campo de texto após a descriptografia
        campoTextoCriptografar.value = ''; 
    } else {
        console.log('Campo de texto está vazio.'); // Debug statement
    }
}
