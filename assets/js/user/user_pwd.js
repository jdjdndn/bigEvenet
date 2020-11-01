$(function () {
  let form = layui.form

  form.verify({
    pwd: [
      /^[\S]{6,12}$/
      , '密码必须6到12位，且不能出现空格'
    ],
    samepwd: function (value) {
      if (value === $('[name=oldpwd]').val()) return '新旧密码不能相同'
    },
    repwd: function (value) {
      if (value !== $('[name=newpwd]').val()) return '两次密码必须相同'
    }
  })

  
})