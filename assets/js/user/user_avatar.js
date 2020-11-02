
$(function () {
  let layer = layui.layer

  $("#btnChooseImg").on('click', function () {
    $('#file').click()

  })

  $('#file').on('change', function (e) {
    let files = e.target.files
    // console.log(files);
    if (files.length <= 0) return layer.msg("请上传文件")
    let newImgURL = URL.createObjectURL(files[0])
    $image
      .cropper('destroy')      // 销毁旧的裁剪区域
      .attr('src', newImgURL)  // 重新设置图片路径
      .cropper(options)

  })
  // var dataURL = $image
  //   .cropper('getCroppedCanvas', { // 创建一个 Canvas 画布
  //     width: 100,
  //     height: 100
  //   }).toDataURL('image/png')

  $("#choose").on('click', function () {
    $.ajax({
      method: "POST",
      url: "/my/update/avatar",
      data: {
        avatar: $image
          .cropper('getCroppedCanvas', { // 创建一个 Canvas 画布
            width: 100,
            height: 100
          }).toDataURL('image/png')
      },
      success: function (res) {
        if (res.status !== 0) return '失败'
        window.parent.getUserInfo()
      }
    })
  })
})