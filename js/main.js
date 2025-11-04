const botaoPedido = document.querySelector(".btn-small");
const mensagemPedido = document.querySelector(".mensagem");

    botaoPedido.onclick = function () {
        mensagemPedido.textContent = "Pedido a caminho! 🍔🔥";
        mensagemPedido.style.color = "#ffb800";
    };

const fotoDestaque = document.querySelector(".card");

if (fotoDestaque) {
    
    fotoDestaque.addEventListener("mouseover", function () {
        fotoDestaque.style.transform = "scale(1.07)";
        fotoDestaque.style.transition = "0.2s";
    });
    
    fotoDestaque.addEventListener("mouseout", function () {
        fotoDestaque.style.transform = "scale(1)";
    });
};
