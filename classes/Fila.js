function Fila() {
    var inicio;
    var fim = 0;
    var tempoNaFila = 0;
    var clientes = [];


    this.getInicio = function() {
        return inicio;
    };

    this.getCliente = function(indice) {
        return  clientes[indice];
    };

    this.iniciaFila = function() {
        inicio = 0;
        fim = 0;
        tempoNaFila = 0;
    };

    this.isVazia = function() {
        if (fim === 0) {
            return true;
        } else {
            return false;
        }
    };

    this.incluiClienteNaFila = function(cliente) {
        var d = new Date();
        var t = d.getTime();
        cliente.setEntrada(t);
        clientes.push(cliente);
        tempoNaFila += cliente.getTransacao()['tempo'];
        fim++;
        insereNaLista(cliente.getNome() + " - " + cliente.getTransacao()['tipo'], "fila");
    };

    this.retiraClienteDaFila = function() {
        var d = new Date();
        var t = d.getTime();
        if (fim > 0) {
            var cliente = this.getCliente(0);
            cliente.setSaida(t);
            tempoNaFila -= cliente.getTransacao()['tempo'];
            clientes.shift();
            fim--;
        }


        return cliente;
    };

    this.listarFila = function() {
        return clientes;
    };

    this.getTempoNaFila = function() {
        return tempoNaFila;
    };
}