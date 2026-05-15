/* =========================
   PEGANDO ELEMENTOS HTML
========================= */

// formulário
const formulario = document.getElementById("formCotacao");

// telefone
const telefone = document.getElementById("telefone");

// links menu
const linksMenu = document.querySelectorAll("nav a");

// sections
const secoes = document.querySelectorAll("section");


/* =========================
   MÁSCARA TELEFONE
========================= */

telefone.addEventListener("input", function () {

    // remove tudo que não for número
    let valor = telefone.value.replace(/\D/g, "");

    // limita a 11 números
    valor = valor.substring(0, 11);

    // aplica máscara
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");

    valor = valor.replace(/(\d{5})(\d)/, "$1-$2");

    // atualiza input
    telefone.value = valor;
});


/* =========================
   ENVIO FORMULÁRIO
========================= */

formulario.addEventListener("submit", async function (event) {

    // impede reload
    event.preventDefault();

    // botão submit
    const botao = formulario.querySelector("button");

    // desabilita botão
    botao.disabled = true;

    botao.innerText = "Enviando...";

    // pega dados
    const dados = new FormData(formulario);

    try {

        // envia para PHP
        const resposta = await fetch("salvar.php", {

            method: "POST",

            body: dados
        });

        // recebe resposta
        const resultado = await resposta.text();

        // remove espaços
        const texto = resultado.trim();

        if (texto === "sucesso") {

            alert("Cotação enviada com sucesso!");

            formulario.reset();

        } else {

            alert("Erro ao enviar formulário.");
        }

    } catch (erro) {

        console.error(erro);

        alert("Erro no servidor.");

    } finally {

        // ativa botão novamente
        botao.disabled = false;

        botao.innerText = "Enviar";
    }
});


/* =========================
   SCROLL SUAVE MENU
========================= */

linksMenu.forEach(function (link) {

    link.addEventListener("click", function (event) {

        // impede comportamento padrão
        event.preventDefault();

        // pega id
        const id = link.getAttribute("href");

        // seleciona seção
        const secao = document.querySelector(id);

        // verifica se existe
        if (secao) {

            secao.scrollIntoView({

                behavior: "smooth"
            });
        }
    });
});


/* =========================
   ANIMAÇÃO AO ROLAR
========================= */

function mostrarSecoes() {

    secoes.forEach(function (secao) {

        // posição da seção
        const topo = secao.getBoundingClientRect().top;

        // altura tela
        const alturaTela = window.innerHeight;

        // ativa animação
        if (topo < alturaTela - 100) {

            secao.classList.add("ativo");
        }
    });
}

// executa ao carregar
mostrarSecoes();

// executa no scroll
window.addEventListener("scroll", mostrarSecoes);