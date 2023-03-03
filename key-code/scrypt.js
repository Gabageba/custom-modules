$(document).ready(() => {
  $('body').keyup((event) => {
    $('#key').text(`key: ${event.key}`)
    $('#code').text(`code: ${event.code}`)
    $('#key-code').text(`key-code: ${event.keyCode}`)
  })
})
