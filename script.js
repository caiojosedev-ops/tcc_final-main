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
   ENVIO WHATSAPP
========================= */

formulario.addEventListener("submit", function(event) {

    // impede reload
    event.preventDefault();

    // pega dados
    const nome = document.getElementById("nome").value;

    const telefoneValor = document.getElementById("telefone").value;

    const email = document.getElementById("email").value;

    const cidade = document.getElementById("cidade").value;

    // mensagem
    const mensagem =
`Olá, gostaria de fazer uma cotação.

Nome: ${nome}
Telefone: ${telefoneValor}
Email: ${email}
Cidade: ${cidade}`;

    // número whatsapp
    const numero = "5581988326581";

    // cria url
    const url =
`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    // abre whatsapp
    window.open(url, "_blank");

});


/* =========================
   SCROLL SUAVE MENU
========================= */

linksMenu.forEach(function (link) {

    link.addEventListener("click", function (event) {

        // impede padrão
        event.preventDefault();

        // pega id
        const id = link.getAttribute("href");

        // pega seção
        const secao = document.querySelector(id);

        // verifica seção
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

        // posição topo
        const topo = secao.getBoundingClientRect().top;

        // altura tela
        const alturaTela = window.innerHeight;

        // adiciona animação
        if (topo < alturaTela - 100) {

            secao.classList.add("ativo");
        }
    });
}

// executa ao carregar
mostrarSecoes();

// executa scroll
window.addEventListener("scroll", mostrarSecoes);