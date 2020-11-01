$.ajaxPrefilter(function (options) {
  // console.log(options);
  options.url = 'http://ajax.frontend.itheima.net' + options.url
  if (options.url.indexOf('/my/')) {
    options.headers= {
      Authorization: localStorage.getItem('token') || ''
    }
  }
})