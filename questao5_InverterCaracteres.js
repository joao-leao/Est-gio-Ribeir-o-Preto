
//Função que inverte os caracteres de uma string
function inverterString(string){

    //declarando uma variavel para armazenar a string invertida
    let stringInvertida = ""

    //fazendo o loop que mapea e salva os caracteres invertidos
    for (let i = string.length - 1; i>= 0; i--) {
        stringInvertida += string[i]
    }
    return stringInvertida
}

//declarando a variavel com a string que será invertida 
const frase = "brasil"

//salvando o resultado da função em uma variavel
const fraseInvertida = inverterString(frase)

//exibindo no console
console.log(fraseInvertida);