$(function () {
  let form = layui.form

  form.verify({
    nickname: function (value) {
      if (value.length <= 6) return '昵称不能少于6位'
    }
  })

  getUserInfo()
  //重置默认信息
  $("#resetBtn").on('click', function (e) {
    e.preventDefault()
    getUserInfo()
  })

  function getUserInfo() {
    $.ajax({
      method: 'GET',
      url: "/my/userinfo",
      success: function (res) {
        // console.log(res);
        //表单对应属性lay-filter='formData'  
        form.val('formData', res.data)
      }
    })
  }
})