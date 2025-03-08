
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora de Rescisão Trabalhista</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 600px; margin: 50px auto; padding: 20px; }
        h2 { text-align: center; }
        input, select, button { width: 100%; padding: 10px; margin-top: 10px; }
        .resultado { margin-top: 20px; padding: 15px; background-color: #f0f8ff; border-radius: 5px; }
    </style>
</head>
<body>

<h2>Calculadora de Rescisão Trabalhista</h2>

<label>Salário mensal (R$):</label>
<input type="number" id="salario" placeholder="Ex: 2500">

<label>Meses trabalhados:</label>
<input type="number" id="meses" placeholder="Ex: 12">

<label>Tipo de demissão:</label>
<select id="tipoDemissao">
    <option value="semJustaCausa">Sem justa causa (pelo empregador)</option>
    <option value="pedidoDemissao">Pedido de demissão (pelo empregado)</option>
</select>

<button onclick="calcularRescisao()">Calcular Rescisão</button>

<div class="resultado" id="resultado" style="display:none;"></div>

<script>
function calcularRescisao() {
    let salario = parseFloat(document.getElementById('salario').value);
    let meses = parseInt(document.getElementById('meses').value);
    let tipoDemissao = document.getElementById('tipoDemissao').value;

    if (isNaN(salario) || isNaN(meses) || salario <= 0 || meses <= 0) {
        alert("Preencha os campos corretamente!");
        return;
    }

    let feriasProporcionais = salario / 12 * meses;
    let decimoTerceiro = salario / 12 * meses;
    let multaFgts = (tipoDemissao === "semJustaCausa") ? salario * 0.40 : 0;

    let totalRescisao = feriasProporcionais + decimoTerceiro + multaFgts;

    document.getElementById('resultado').innerHTML = `
        <strong>Férias proporcionais:</strong> R$ ${feriasProporcionais.toFixed(2)}<br>
        <strong>13º Salário proporcional:</strong> R$ ${decimoTerceiro.toFixed(2)}<br>
        <strong>Multa FGTS (40%):</strong> R$ ${multaFgts.toFixed(2)}<br>
        <hr>
        <strong>Total aproximado:</strong> R$ ${totalRescisao.toFixed(2)}
    `;

    document.getElementById('resultado').style.display = 'block';
}
</script>

</body>
</html>
