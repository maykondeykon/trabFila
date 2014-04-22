caixas = 1;
function Caixa() {

    var livre = true;
    var cliente;
    var tempoOcupado = 0;
    var contador = caixas++;
    var nome = "caixa" + contador;
    var qtdClientes = 0;

    this.getNome = function() {
        return nome;
    };

    this.isLivre = function() {
        return livre;
    };

    this.setLivre = function() {
        livre = true;
    };

    this.setOcupado = function() {
        livre = false;
    };
    this.setTempoOcupado = function(tempo) {
        tempoOcupado += tempo;
    };

    this.getTempoOcupado = function() {
        return tempoOcupado;
    };


    this.recebeCliente = function(cliente) {
        this.cliente = cliente;
        this.setOcupado();
        qtdClientes++;
        moveItemDeLista("fila", this.getNome());
    };

    this.retiraCliente = function() {
        cliente = '';
        this.setLivre();
        removeDoCaixa(nome);
    };
    
    this.getTotalClientes = function (){
        return qtdClientes;  
    };
    
    this.mediaPorCliente = function (){
        return (tempoOcupado / qtdClientes);  
    };

}