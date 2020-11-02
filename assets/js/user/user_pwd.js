$(function () {
  console.log(1);
  let form = layui.form

  form.verify({
    pwd: [
      /^[\S]{6,12}$/
      , '密码必须6到12位，且不能出现空格'
    ],
    samepwd: function (value) {
      if (value === $('[name=oldPwd]').val()) return '新旧密码不能相同'
    },
    repwd: function (value) {
      if (value !== $('[name=newPwd]').val()) return '两次密码必须相同'
    }
  })


  $('.layui-form').on('submit', function (e) {
    e.preventDefault()
 
    $.ajax({
      method: "POST",
      url: "/my/updatepwd",
      data:$(this).serialize(),
      success: function (res) {
        console.log(res);
        $('.layui-form')[0].reset()
      }
    })
  })

})