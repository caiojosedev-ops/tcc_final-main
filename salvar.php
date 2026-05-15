<?php

// conexão banco
$host = "localhost";
$usuario = "root";
$senha = "";
$banco = "corretora";

// conecta
$conexao = new mysqli($host, $usuario, $senha, $banco);

// verifica conexão
if ($conexao->connect_error) {
    die("Erro de conexão");
}

// recebe dados
$nome = $_POST['nome'];
$telefone = $_POST['telefone'];
$email = $_POST['email'];
$cidade = $_POST['cidade'];

// salva no banco
$sql = "INSERT INTO cotacoes
(nome, telefone, email, cidade)

VALUES
('$nome', '$telefone', '$email', '$cidade')";

// executa
if ($conexao->query($sql) === TRUE) {

    // EMAIL
    $destino = "seuemail@gmail.com";

    $assunto = "Nova Cotação";

    $mensagem = "
    Nome: $nome

    Telefone: $telefone

    Email: $email

    Cidade: $cidade
    ";

    $headers = "From: site@corretora.com";

    mail($destino, $assunto, $mensagem, $headers);

    echo "sucesso";

} else {

    echo "erro";
}

$conexao->close();

?>