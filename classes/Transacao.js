function Transacao() {

    var transacao = [
        {'tempo': 10, 'tipo': 'saldo'},
        {'tempo': 20, 'tipo': 'saque'},
        {'tempo': 30, 'tipo': 'aplicação'},
        {'tempo': 40, 'tipo': 'extrato Semanal'},
        {'tempo': 50, 'tipo': 'extrato Mensal'}
    ];

    var t = {'tempo': 10, 'tipo': 'saldo'};

    this.getTransacao = function() {
        codigo = this.geraTransacao();
        if (codigo >= 0 && codigo < 5) {
            return transacao[codigo];
        }
    };

    this.geraTransacao = function() {
        return Math.floor((Math.random() * 4) + 0);
    };

}