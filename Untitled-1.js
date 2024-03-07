//P

// Exercicio 1

let indice = 13
let soma = 0
let k = 0

for (k; k < indice; k++) {
    k += 1
    soma += k
    return soma
}
console.log(soma)


// Exercicio 2

function fibonacci(n) {
    let fibData = [0, 1];
    let contem = false;

    for (let i = 2; i < n; i++) {
        fibData[i] = fibData[i - 1] + fibData[i - 2];
        if (fibData[i] == n) {
            contem = true;

        }
    }


    return { fibData: fibData, contem: contem }
}

let sequencia = fibonacci(46)
console.log(sequencia.fibData)

if (sequencia.contem == true) {
    console.log('A variavel dada para a função fibonacci está dentro da sequencia. Pois seu valor é True.')
    console.log(`${sequencia.contem}`)
} else {
    console.log('A variavel dada para a função fibonacci não está dentro da sequencia. Pois seu valor é False.')
    console.log(`${sequencia.contem}`)
}


// Exercicio 3

a) = 1, 3, 5, 7, 11(Numeros primos)
b) = 2, 4, 8, 16, 32, 64, 128(Multiplos de 2)
c) = 0, 1, 4, 9, 16, 25, 36, 49(Sequencia de Quadrados perfeitos)
e) 1, 1, 2, 3, 5, 8, 13(Sequencia fibonacci)
f) 2, 10, 12, 16, 17, 18, 19, 20(Proximo numero da sequencia)


// Exercicio 4

Para a resolução deste problema eu ligaria uma lampada(lampada A) por um tempo
e apagaria ela, em seguida ligaria outra lampada(lampada B) e deixaria ligada, a outra eu 
não ligaria(lampada C) após isso, iria na sala das lampadas e resolveria da seguinte maneira.
A lampada quente e acesa e a segunda que eu liguei.Logo lampada B esta conectada ao segundo interruptor
A lampada fria e a que eu nao liguei.Logo lampada C esta conectada ao terceiro interruptor, que no caso eu nao liguei.
A lampada morna e a que eu liguei primeiro e desliguei.Logo lampada A que esta conectada ao primeiro interruptor.


// Exercicio 5

let str = 'javascript'
let result = []

for (let i = str.length - 1; i >= 0; i--) {
    result.push(str[i])
}

let strResult = result.join('')
console.log(strResult)

