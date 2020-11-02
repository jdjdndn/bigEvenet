$(function () {
  //获取用户数据,渲染用户头像,改用户名
  getUserInfo()

  let layer = layui.layer
  //退出功能
  $('#toLoginout').click(function () {
    console.log(11);
    layer.confirm('确定退出登录?', { icon: 3, title: '提示' }, function (index) {
      //do something
      localStorage.removeItem('token')
      location.href = '/login.html'
      layer.close(index);
    });
  })


})
function getUserInfo() {
  $.ajax({
    // http://ajax.frontend.itheima.net
    method: 'GET',
    url: "/my/userinfo",
    success: function (res) {
      if (res.status != 0) return layer.msg('获取用户信息失败')
      renderUser(res.data)
    }
  })
}

function renderUser(user) {

  let name = user.nickname || user.username
  $('.text-avatar').html('欢迎 &nbsp;&nbsp;' + name)
  if (user.user_pic) {
    $('.layui-nav-img').prop('src', user.user_pic).show()
    $('.text-avatar').hide()
  } else {
    let first = name[0].toUpperCase()
    $('.layui-nav-img').hide()
    $('.moren').html(first).show()
  }
}
