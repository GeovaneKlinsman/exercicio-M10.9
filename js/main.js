// Aplicando máscaras corretas utilizando o plugin jquery.mask
$('#telefone').mask('(00) 00000-0000', {
    placeholder: '(DDD) 12345-6789'
});

$('#cpf').mask('000.000.000-00', {
    placeholder: '123.456.789-00'
});

$('#cep').mask('00000-000', {
    placeholder: '012345-678'
});

// Adiciona uma regra personalizada para validar nome completo
$.validator.addMethod("nomeCompleto", function(value, element) {
    return this.optional(element) || value.split(" ").length >= 2; // Verifica se há pelo menos 2 palavras
}, "Por favor, insira seu nome e sobrenome."); // Mensagem de erro personalizada

// Validação do formulário utilizando jQuery Validate
$('form').validate({
    rules: {
        nome: {
            required: true, // Verifica se o nome é obrigatório
            nomeCompleto: true // Verifica se contém nome e sobrenome
        },
        email: {
            required: true,
            email: true // Valida se é um e-mail no formato correto
        },
        telefone: {
            required: true // Verifica se o telefone é obrigatório
        },
        endereco: {
            required: true // Verifica se o endereço é obrigatório
        },
        cep: {
            required: true // Verifica se o CEP é obrigatório
        },
        cpf: {
            required: true // Verifica se o CPF é obrigatório
        }
    },
    submitHandler: function (form) {
        alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
        form.reset(); // Reseta o formulário após envio bem-sucedido
    },
    invalidHandler: function (form, validator) {
        alert("Por favor, preencha os campos para prosseguir com a compra!");
    }
});
