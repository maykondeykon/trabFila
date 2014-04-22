function Cliente(i, t) {
    var transacao = [];
    var entrada = 0;
    var saida = 0;
    var nome;

    nome = "cliente" + i;
    transacao = t;

    this.getNome = function() {
        return nome;
    };

    this.getTransacao = function() {
        return transacao;
    };

    this.getCliente = function() {
        var c = [{'nome': this.getNome(), 'transacao': this.getTransacao(),'saida':this.getSaida()}];
        return c;
    };

    this.setEntrada = function(hora) {
        entrada = hora;
    };

    this.getEntrada = function() {
        return entrada;
    };
    
    this.setSaida = function (hora){
        saida = hora;
    };
    
    this.getSaida =function (){
        return saida;  
    };
    
    this.getTempoNaFila = function (){
        var tempo = this.getSaida() - this.getEntrada();
        return tempo / 1000;;  
    };

}