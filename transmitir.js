const codigo = document.location.hash.substring(1)
const codigoStream = `${codigo}-call`

const peer = new Peer()
const peerStream = new Peer(codigoStream)

const btnIniciar = document.getElementById('iniciar')

peerStream.on('call', call => {
  console.log('chamada chegando')

  btnIniciar.addEventListener('click', e => {
    console.log('iniciando...')

    navigator.getUserMedia({
      video: true,
      audio: true
    }, stream => {
      console.log('atendendo', stream)
      call.answer(stream)

      btnIniciar.style.display = 'none'
    }, err => console.error(err))
  })

  btnIniciar.style.display = 'block'
})

console.log('conectando ao peer', codigo)
const conn = peer.connect(codigo)
conn.on('open', () => {
  console.log('conectado, enviando código de stream', codigoStream)
  conn.send(codigoStream)
})