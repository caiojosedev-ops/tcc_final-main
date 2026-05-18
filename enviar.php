<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nome = $_POST['nome'];
    $telefone = $_POST['telefone'];
    $email = $_POST['email'];
    $cidade = $_POST['cidade'];

    // E-mail que vai receber as mensagens
    $to = "alcides.admseguros@gmail.com";

    // Assunto do e-mail
    $subject = "Nova mensagem do site";

    // Corpo do e-mail
    $body = "Nome: $nome\n";
    $body .= "Telefone: $telefone\n";
    $body .= "E-mail: $email\n";
    $body .= "Cidade: $cidade\n";

    // Cabeçalhos
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Enviar e-mail
    if (mail($to, $subject, $body, $headers)) {
        echo "E-mail enviado com sucesso!";
    } else {
        echo "Erro ao enviar e-mail.";
    }
}
?>