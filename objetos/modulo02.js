const colecionador = {
    nome: "João do Gibi",
    idade:41,
    tipocolecao: ["quadrinhos", "HQ's"],
    dependentes: [{
        nome: "Maria",
        idade: 18,
        contato: ["maria@email.com", "99887455"]
    }],
    contato: "joao@email.com",
    saldo: 100,
    depositar: function(valor) {
        this.saldo += valor;
    }
   }

   colecionador.tipocolecao.push("livros");
   colecionador.depositar(100);

   console.log(colecionador.dependentes[0].contato.filter(res => res === "maria@email.com"));