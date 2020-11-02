$(function () {
  getArtCatelist()

  function getArtCatelist() {
    $.ajax({
      method: "GET",
      url: "/my/article/cates",
      success: function (res) {
        // console.log(res);
        let html=template('templ',res)
        $('tbody').html(html)
      }
    })
  }
})