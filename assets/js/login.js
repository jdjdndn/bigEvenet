$(function () {
  $("#toReg").on('click', function () {
    $(".login-box").hide()
    $(".reg-box").show()
  })
  $("#toLogin").on('click', function () {
    $(".login-box").show()
    $(".reg-box").hide()
  })
})