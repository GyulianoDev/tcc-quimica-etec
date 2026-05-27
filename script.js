const botoesDeAba = document.querySelectorAll("[data-tab-target]");
const paineis = document.querySelectorAll("[data-tab-panel]");
const etapasCadastro = document.querySelectorAll("[data-signup-step]");
const marcadoresEtapa = document.querySelectorAll("[data-step-dot]");
const campoCpf = document.querySelector("#cpf");

function abrirAba(idDaAba) {
    paineis.forEach((painel) => {
        painel.classList.toggle("active", painel.id === idDaAba);
    });

    document.querySelectorAll(".tab-button").forEach((botao) => {
        const abaAtual = botao.dataset.tabTarget === idDaAba;

        botao.classList.toggle("active", abaAtual);
        botao.setAttribute("aria-selected", String(abaAtual));
    });
}

function mostrarEtapaCadastro(etapa) {
    etapasCadastro.forEach((item) => {
        item.classList.toggle("active", item.dataset.signupStep === etapa);
    });

    marcadoresEtapa.forEach((marcador) => {
        marcador.classList.toggle("active", marcador.dataset.stepDot === etapa);
    });
}

function formatarCpf(valor) {
    return valor
        .replace(/\D/g, "")
        .slice(0, 11)
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

botoesDeAba.forEach((botao) => {
    botao.addEventListener("click", () => {
        abrirAba(botao.dataset.tabTarget);
    });
});

document.querySelectorAll("[data-next-step]").forEach((botao) => {
    botao.addEventListener("click", () => {
        mostrarEtapaCadastro(botao.dataset.nextStep);
    });
});

document.querySelectorAll("[data-prev-step]").forEach((botao) => {
    botao.addEventListener("click", () => {
        mostrarEtapaCadastro(botao.dataset.prevStep);
    });
});

campoCpf.addEventListener("input", () => {
    campoCpf.value = formatarCpf(campoCpf.value);
});
