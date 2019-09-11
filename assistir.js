const codigo = `webcam-mobile-${gerarCodigo(4)}`
const peer = new Peer(codigo)

const qrcode = document.getElementById('qrcode')
const player = document.getElementById('player')
const vazio = document.getElementById('vazio')

const minSize = Math.min(window.innerWidth, window.innerHeight)
const url = `${document.location.origin}/transmitir.html#${codigo}`

new QRCode(qrcode, {
  text: url,
  width: minSize,
  height: minSize
})

peer.on('connection', conn => {
  qrcode.style.display = 'none'
  conn.on('data', data => {
    const call = peer.call(data, vazio.captureStream())
    call.on('stream', remoteStream => {
      console.log('atendido', remoteStream)
      player.srcObject = remoteStream
    })
  })
})