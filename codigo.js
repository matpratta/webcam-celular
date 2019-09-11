const palavras = [
  'amigo',
  'carro',
  'trem',
  'casa',
  'role',
  'bike',
  'liso',
  'bola',
  'barra',
  'casa',
  'bairro',
  'rua'
]

function gerarCodigo(numPalavras) {
  let palavrasGeradas = []

  for (let iPalavra = 0; iPalavra < numPalavras; iPalavra++) {
    let indice = Math.round(Math.random() * (palavras.length - 1))
    let palavra = palavras[indice]

    palavrasGeradas.push(palavra)
  }

  return palavrasGeradas.join('-')
}