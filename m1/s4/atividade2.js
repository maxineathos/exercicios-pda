// Função que exibe linhas para melhor leitura no console

function exibirLinhas() {
    console.log('')
    console.log('=-='.repeat(20))
    console.log('')
}

// Dados

const usuarios = [
  {
    nome: "Carlos",
    idade: 28,
    email: "carlos@exemplo.com",
    cidade: "São Paulo",
    interesses: ["Música", "Tecnologia", "Fotografia"]
  },
  {
    nome: "Beatriz",
    idade: 22,
    email: "beatriz@exemplo.com",
    cidade: "Rio de Janeiro",
    interesses: ["Viagens", "Leitura", "Cinema"]
  }
];

// Desafio 1

const { nome, cidade } = usuarios[1];
console.log('')
console.log(`${nome} mora na cidade de ${cidade}.`);

exibirLinhas()

// Desafio 2

const usuariosDoNorte = [...usuarios,
    {
        nome: "Maxine",
        idade: 22,
        email: "maxine@exemplo.com",
        cidade: "Manaus",
        interesses: ["Música", "Programação", "Política"]    
    }
];
console.log(usuariosDoNorte);

exibirLinhas()

// Desafio 3

const beatrizAtualizada = {...usuariosDoNorte[1], email: "bia.dev@example.com"};
console.log(beatrizAtualizada);

exibirLinhas()

// Desafio 4

function mostrarInteresses(usuario) {
    console.log(`${usuario.nome} tem interesse em: ${usuario.interesses.join(', ')}`)
}

mostrarInteresses({...usuariosDoNorte[1]})