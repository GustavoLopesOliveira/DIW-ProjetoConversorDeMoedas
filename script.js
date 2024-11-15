
    document.getElementById('buttonConfirma').addEventListener('click', function(){
        const moedaEntrada = document.querySelector('input[name="moedaEntrada"]:checked');
        const moedaSaida = document.querySelector('input[name="moedaSaida"]:checked');
        const valorEntrada = document.getElementById('valor').value;

        document.getElementById('SAIDA').innerHTML = '';

        if(moedaEntrada.value == moedaSaida.value){
            document.getElementById('SAIDA').innerHTML += valorEntrada;
        } else{
            if
        }


    })




