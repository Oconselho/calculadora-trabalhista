
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora de Rescisão Trabalhista – Simule Agora</title>
    <meta name="description" content="Calcule sua rescisão trabalhista rapidamente. Descubra quanto você tem direito a receber ao sair do emprego.">
    <style>
        body { font-family: Arial, sans-serif; max-width: 800px; margin: 50px auto; padding: 20px; }
        h1, h2, h3 { text-align: center; }
        p { line-height: 1.6; }
        input, select, button { width: 100%; padding: 10px; margin-top: 10px; }
        .resultado { margin-top: 20px; padding: 15px; background-color: #f0f8ff; border-radius: 5px; }
        .info-box { background: #f8f8f8; padding: 15px; border-left: 5px solid #007BFF; margin: 20px 0; }
    </style>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7748164045099852"
     crossorigin="anonymous"></script>
</head>
<body>

<h1>Calculadora de Rescisão Trabalhista</h1>

<div class="info-box">
    <h2>O que é a rescisão trabalhista?</h2>
    <p>A <strong>rescisão trabalhista</strong> é o valor que um funcionário tem direito a receber ao sair do emprego, seja por <strong>demissão sem justa causa</strong> ou <strong>pedido de demissão</strong>.</p>
    <p>Esta calculadora ajuda você a saber quanto receberá, considerando férias, 13º salário e a multa do FGTS.</p>
</div>

<h2>Calcule sua Rescisão</h2>

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

<div class="info-box">
    <h2>Como é feito o cálculo da rescisão?</h2>
    <p>O cálculo da rescisão inclui:</p>
    <ul>
        <li><strong>Férias proporcionais</strong>: Valor referente às férias que você acumulou e não tirou.</li>
        <li><strong>13º salário proporcional</strong>: Parte do 13º que você ganhou no ano.</li>
        <li><strong>Multa do FGTS</strong>: Se for demissão sem justa causa, o empregador paga 40% sobre o saldo do FGTS.</li>
    </ul>
</div>

<div class="info-box">
    <h2>Dúvidas Frequentes</h2>

    <h3>Quem tem direito à multa de 40% do FGTS?</h3>
    <p>Funcionários demitidos sem justa causa recebem 40% sobre o saldo do FGTS. Se pediu demissão, não recebe essa multa.</p>

    <h3>Tenho direito ao aviso prévio?</h3>
    <p>O aviso prévio é pago quando a demissão ocorre sem aviso com antecedência. O empregador deve pagar mais um salário ao trabalhador.</p>

    <h3>Como calcular férias na rescisão?</h3>
    <p>Férias proporcionais = (salário ÷ 12) × meses trabalhados.</p>
</div>

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


