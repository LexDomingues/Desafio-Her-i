class classeHerois{
    constructor(nome, idade, tipo, poder){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.poder = poder;
    }
    escrever(){
        console.log(`O ${this.tipo} atacou usando uma ${this.poder}`);
    }
}
let heroi = new classeHerois("Felipão", 30, "Guerreiro", "Espada");
heroi.escrever()