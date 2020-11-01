$.ajaxPrefilter(function (options) {
  // console.log(options);
  options.url = 'http://ajax.frontend.itheima.net' + options.url
  if (options.url.indexOf('/my/')) {
    options.headers= {
      Authorization: localStorage.getItem('token') || ''
    }
  }
  options.complete = function (res) {
    // console.log(res);
    if (res.responseJSON.status === 1 && res.responseJSON.message == '身份认证失败！') {
      console.log(11);
      localStorage.removeItem('token')
      location.href='/login.html'
    }
  }
})