document.getElementById("calc-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let salario = parseFloat(document.getElementById("salario").value);
    let tempo = parseInt(document.getElementById("tempo").value);
    let tipo = document.getElementById("tipo-demissao").value;

    let rescisao = 0;

    if (tipo === "semJustaCausa") {
        rescisao = salario * 1.4 + (salario / 12 * tempo);
    } else if (tipo === "justaCausa") {
        rescisao = salario / 12 * tempo;
    } else if (tipo === "pedidoDemissao") {
        rescisao = salario / 12 * tempo;
    } else if (tipo === "acordo") {
        rescisao = salario * 1.2 + (salario / 12 * tempo);
    }

    document.getElementById("resultado").innerText = `Você tem direito a receber aproximadamente R$ ${rescisao.toFixed(2)}`;
});
