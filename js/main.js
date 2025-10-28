const botaoPedido = document.querySelector(".btn-pedir");
const mensagemPedido = document.querySelector("#mensagemPedido");

if (botaoPedido && mensagemPedido) {
    botaoPedido.addEventListener("click", function () {
        mensagemPedido.textContent = "Pedido a caminho! 🍔🔥";
        mensagemPedido.style.color = "#ffb800";
    });
}
const fotoDestaque = document.querySelector("#fotoDestaque");

if (fotoDestaque) {
    fotoDestaque.addEventListener("mouseover", function (){
        fotoDestaque.style.transform = "scale(1.07)";
        fotoDestaque.style.transition = "0.2s";
    })
  };
