$(function () {
  //获取分类列表并显示
  getArtCatelist()
  let layer = layui.layer
  let form = layui.form

  function getArtCatelist() {
    $.ajax({
      method: "GET",
      url: "/my/article/cates",
      success: function (res) {
        // console.log(res);
        let html = template('templ', res)
        $('tbody').html(html)
      }
    })
  }
  let addindex = ''
  $('#addCateBtn').on('click', function () {
    addindex = layer.open({
      type: 1,
      area: ['500px', '250px'],
      title: '添加文章分类'
      , content: $("#addCateTep").html()
    })
  })

  //新增分类
  $(document).on('submit', '#addForm', function (e) {
    e.preventDefault()
    $.ajax({
      method: "POST",
      url: "/my/article/addcates",
      data: $(this).serialize(),
      success: function (res) {
        // console.log(res);
        if (res.status !== 0) return layer.msg('新增失败')
        layer.close(addindex)
        layer.msg('新增成功')
        getArtCatelist()
      }
    })
  })

  let editindex = ''
  $(document).on('click', '#editCate', function () {
    editindex = layer.open({
      type: 1,
      area: ['500px', '250px'],
      title: '添加文章分类',
      content: $("#editCateTep").html()
    })
    //获取数据填充表格
    $.ajax({
      method: "GET",
      url: "/my/article/cates/" + $(this).attr('data-id'),
      success: function (res) {
        // console.log(res);
        if (res.status !== 0) return layer.msg('获取文章数据失败')
        // layer.msg('获取文章数据成功')
        form.val('editForm', res.data)
      }
    })
  })
  //修改表单提交
  $(document).on('submit', '#editForm', function (e) {
    e.preventDefault()
    $.ajax({
      method: "POST",
      url: "/my/article/updatecate",
      data: $(this).serialize(),
      success: function (res) {
        // console.log(res);
        if (res.status !== 0) return layer.msg('修改文章数据失败')
        layer.msg('修改文章数据成功')
        getArtCatelist()
        layer.close(editindex)
      }
    })
  })

  //删除当前分类
  $('tbody').on('click','#removeCate', function () {
    $.ajax({
      method: 'GET',
      url: "/my/article/deletecate/" + $(this).attr('data-id'),
      success: function (res) {
        if (res.status !== 0) return layer.msg('删除文章数据失败')
        layer.msg('删除文章数据成功')
        getArtCatelist()
      }
  })
})
})