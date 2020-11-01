$(function () {
  let form = layui.form

  form.verify({
    nickname: function (value) {
      if (value.length <= 6) return '昵称不能少于6位'
    }
  })
})