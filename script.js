document.getElementById('buttonConfirma').addEventListener('click', function () {
    const moedaEntrada = document.querySelector('input[name="moedaEntrada"]:checked')?.value;
    const moedaSaida = document.querySelector('input[name="moedaSaida"]:checked')?.value;
    const valorEntrada = parseFloat(document.getElementById('valor').value);

    document.getElementById('SAIDA').innerHTML = '';

    if (!moedaEntrada || !moedaSaida || isNaN(valorEntrada)) {
        document.getElementById('SAIDA').innerHTML = 'Por favor, selecione as moedas e insira um valor válido.';
        return;
    }

    if (moedaEntrada === moedaSaida) {
        document.getElementById('SAIDA').innerHTML = valorEntrada;
    } else {
        let conversao;
        if (moedaEntrada === "Real") {
            if (moedaSaida === "Dolar") conversao = valorEntrada / 5;
            else if (moedaSaida === "Libra") conversao = valorEntrada / 7;
            else if (moedaSaida === "Iene") conversao = valorEntrada * 26.36;
            else if (moedaSaida === "Euro") conversao = valorEntrada / 6.2;
        } else if (moedaEntrada === "Dolar") {
            if (moedaSaida === "Real") conversao = valorEntrada * 5;
            else if (moedaSaida === "Libra") conversao = valorEntrada * 1.4;
            else if (moedaSaida === "Iene") conversao = valorEntrada * 105.36;
            else if (moedaSaida === "Euro") conversao = valorEntrada * 0.8;
        } else if (moedaEntrada === "Libra") {
            if (moedaSaida === "Real") conversao = valorEntrada * 7;
            else if (moedaSaida === "Dolar") conversao = valorEntrada / 1.4;
            else if (moedaSaida === "Iene") conversao = valorEntrada * 150.36;
            else if (moedaSaida === "Euro") conversao = valorEntrada * 1.2;
        } else if (moedaEntrada === "Iene") {
            if (moedaSaida === "Real") conversao = valorEntrada / 26.36;
            else if (moedaSaida === "Dolar") conversao = valorEntrada / 105.36;
            else if (moedaSaida === "Libra") conversao = valorEntrada / 150.36;
            else if (moedaSaida === "Euro") conversao = valorEntrada * 0.0075;
        } else if(moedaEntrada === "Euro") {
            if (moedaSaida === "Real") conversao = valorEntrada * 6.2;
            else if (moedaSaida === "Dolar") conversao = valorEntrada / 0.8;
            else if (moedaSaida === "Libra") conversao = valorEntrada / 1.2;
            else if (moedaSaida === "Iene") conversao = valorEntrada / 0.0075;
        }

        document.getElementById('SAIDA').innerHTML = conversao.toFixed(2);
    }
});
