export default class User{
    constructor(nome, email, nascimento, role, ativo = true) {
        this.nome = nome;
        this.email = email;
        this.nascimento = nascimento;
        this.role = role || 'estudante';
        this.ativo = ativo;
    }
    exibirInfos(nome, email) {
        return `${nome}, ${email}`
    }
}

const novoUser = new User();
/*console.log(novoUser)
console.log(novoUser.exibirInfos("Lucas", "email@email.com"))*/

