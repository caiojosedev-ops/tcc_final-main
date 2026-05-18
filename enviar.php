<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Captura os dados do formulário
    $nome = htmlspecialchars($_POST['nome']);
    $telefone = htmlspecialchars($_POST['telefone']);
    $email = htmlspecialchars($_POST['email']);
    $cidade = htmlspecialchars($_POST['cidade']);

    // E-mail que receberá as mensagens
    $to = "alcides.admseguros@gmail.com";

    // Assunto
    $subject = "Nova mensagem do site";

    // Corpo da mensagem
    $body = "
    Você recebeu uma nova solicitação de cotação.

    Nome: $nome
    Telefone: $telefone
    E-mail: $email
    Cidade: $cidade
    ";

    // Cabeçalhos
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/plain;charset=UTF-8" . "\r\n";
    $headers .= "From: contato@planosdesaudealcides.com" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";

    // Envio
    if (mail($to, $subject, $body, $headers)) {

        echo "
        <script>
            alert('Mensagem enviada com sucesso!');
            window.location.href='index.html';
        </script>
        ";

    } else {

        echo "
        <script>
            alert('Erro ao enviar mensagem.');
            window.location.href='index.html';
        </script>
        ";

    }
}
?>