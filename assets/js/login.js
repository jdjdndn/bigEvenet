$(function () {
  $("#toReg").on('click', function () {
    $(".login-box").hide()
    $(".reg-box").show()
  })
  $("#toLogin").on('click', function () {
    $(".login-box").show()
    $(".reg-box").hide()
  })

  // let baseUrl = 'http://ajax.frontend.itheima.net'
  let baseUrl = ''
  let form = layui.form
  let layer = layui.layer
  form.verify({
    pwd: [
      /^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'
    ],
    repwd: function (value) {
      let pwd = $('.reg-box [name=password]').val()
      if (pwd !== value) return '两次密码不一致'
    }
  })
  // 注册
  $('.reg-box form').on('submit', function (e) {
    e.preventDefault()
    let data = $('.reg-box form').serialize()
    $.post(baseUrl + '/api/reguser', data, function (res) {
      console.log(res);
      if (res.status !== 0) return layer.msg(res.message)
      layer.msg('注册成功')
      $("#toLogin").click()
    })
  })
  // 登录  程余123456
  $('.login-box form').on('submit', function (e) {
    e.preventDefault()
    let data = $('.login-box form').serialize()
    $.post(baseUrl + '/api/login', data, function (res) {
      console.log(res);
      if (res.status !== 0) return layer.msg(res.message)
      layer.msg('登录成功')
      localStorage.setItem('token', res.token)
      location.href = '/index.html'
    })
  })
  if (window.top !== window) {
    window.top.location.href = location.href
  }
})