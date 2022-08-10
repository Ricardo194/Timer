let hh = 0
let mm = 0
let ss = 0
let hour = (document.querySelector('.horas').textContent = '00:00:00')

const tempo = 1000
const tempoColor = tempo * 60.5
var cron
var cronCor

function changeBgColor() {
  function random(number) {
    return Math.floor(Math.random() * (number + 1))
  }
  const rdnCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`

  var cor = document.getElementById('cor')
  cor.style.backgroundColor = rdnCol
}

function start() {
  cron = setInterval(() => {
    timer()
  }, tempo)
  cronCor = setInterval(() => {
    changeBgColor()
  }, tempoColor)
}

function pause() {
  this.clearInterval(cron)
  this.clearInterval(cronCor)
  hh = 0
  mm = 0
  ss = 0
  hour = document.querySelector('.horas').textContent = '00:00:00'
}

function timer() {
  ss++
  if (ss == 60) {
    ss = 0
    mm++
    if (mm == 60) {
      mm = 0
      hh++
    }
  }

  var format =
    (hh < 10 ? '0' + hh : hh) +
    ':' +
    (mm < 10 ? '0' + mm : mm) +
    ':' +
    (ss < 10 ? '0' + ss : ss)
  hour = document.querySelector('.horas').textContent = format
}

window.addEventListener('keyup', function (e) {
  var codigoTecla = e.which || e.keyCode || 0
  var space = codigoTecla == 32
  var enter = codigoTecla == 13

  if (space) {
    pause()
  }

  if (enter) {
    start()
  }
})
