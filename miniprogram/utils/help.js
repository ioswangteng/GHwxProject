var webUrl = "";
//网络请求方法
function getWebDataWithPostOrGet(model) {
  wx.request({
    url: webUrl + model.url,
    data: model.param,
    header: {
      // "Content-Type": "application/json"
      'content-type': 'application/x-www-form-urlencoded'

    },
    method: model.method,
    success: function (res) {
      model.success(res.data)
    },
    fail: function (res) {
      wx.showModal({
        title: res,
        showCancel: false
      })
    }
  })
}
// 导出模块
module.exports = {
  getWebDataWithPostOrGet: getWebDataWithPostOrGet
}
