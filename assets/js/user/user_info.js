$(function () {
  let form = layui.form

  form.verify({
    nickname: function (value) {
      if (value.length > 6) return '昵称不能多于6位'
    }
  })

  getUser()
  //重置默认信息
  $("#resetBtn").on('click', function (e) {
    e.preventDefault()
    getUser()
  })

  //发起请求修改表单信息
  $('.layui-form').on('submit', function (e) {
    e.preventDefault()
    $.ajax({
      method: "POST",
      url: "/my/userinfo",
      data: $(this).serialize(),
      success: function (res) {
        
        // if(res.status!==200)
        getUser()
        window.parent.getUserInfo()
      }
    })
  })

  function getUser() {
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