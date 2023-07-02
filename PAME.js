const prompt = require("prompt-sync")({sigint : true})

class Cliente{
    constructor(id, nome, pets, fidelizado){
        this.id = id;
        this.nome = nome;
        this.pets = pets;
        this.fidelizado = fidelizado;
    }
}

class Funcionario{
    constructor(id, nome, senha){
        this.id = id;
        this.nome = nome;
        this.senha = senha;
    }
}

class Animal{
    constructor(id, nome_pet, nome_dono, consultas){
        this.id = id;
        this.nome_pet = nome_pet;
        this.nome_dono = dono;
        this.consultas = consultas;
    }
}

class Consulta{
    constructor(id, nome_cliente, nome_pet, nome_funcionario, stato, data){
        this.id = id;
        this.nome_cliente = nome_cliente;
        this.nome_pet = nome_pet;
        this.nome_funcionario = nome_funcionario;
        this.stato = stato;
        this.data = data;
    }
}

class Sistema {
    constructor(){
      this.clientes = [];
      this.funcionarios = [];
      this.animais = [];
      this.consultas = [];
      this.usuarioLogado = null;
    }
}

function Login(){
    const id = prompt("Digite o seu ID: ")
    const nome = prompt("Digite o seu nome de usuário: ")
    const senha = prompt("Digite a sua senha: ")
    //As linhas abaixo estão dando erro, porém, elas seriam para verificar se o login desse funcionario já esta cadastrado
    //if ([id, nome, senha] in Sistema.funcionarios){
        
    //}
    //else{
        
    //}
}

function Cadastrar(){
    const id = prompt("Digite o seu ID: ")
    const nome = prompt("Digite o seu nome de usuário: ")
    const senha = prompt("Digite a sua senha: ")
    Sistema.funcionarios += [id, nome, senha]
}

function Main(){
    while(true){
        console.log("1) Fazer login \n2) Fazer cadastro \n3) Fechar programa")
        const escolha = parseInt(prompt("Digite o número da opção desejada: "));
        if (escolha == 1){
            Login()
        }
        if (escolha == 2){
            Cadastrar()
        }
        if (escolha == 3){
            break
        }
    }
}

Main()