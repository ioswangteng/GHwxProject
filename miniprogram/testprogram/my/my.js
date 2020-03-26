// miniprogram/testprogram/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    avatarUrl: '',
    userInfo: {},

    allData: [
      {
        guid: '0001',
        testData: [{
          id: '01',
          name: "第一部分1第一部分1第",
          subTitle:"subTitlesubtitlesubtitlesubtitlesubtitlesubTitlesubtitlesubtitlesubtitlesubtitle"
        }]
      },
      {
        guid: '0002',
        testData: [{
            id: "01",
            name: "第二部分1",
          subTitle: "subTitle"

          },
          {
            id: "02",
            name: "第二部分2",
            subTitle: "subTitle"

          },
          {
            id: "03",
            name: "第二部分3",
            subTitle: "subTitle"

          },
          {
            id: "04",
            name: "第二部分4",
            subTitle: "subTitle"

          },
          {
            id: "05",
            name: "第二部分5",
            subTitle: "subTitle"

          }
        ]
      },
      {
        guid: '0003',
        testData: [{
          id: '01',
          name: "第三部分1",
          subTitle: "subTitle"
        }]
      }
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 获取用户信息
    wx.getSetting({

      success: res => {

        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              console.log("getUserInfo" + res);
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
  },
  clickItem: function(e) {
    var aa = e.currentTarget.dataset.id;
    console.log(aa);
    wx.navigateTo({
      url: '../my/myDetial/myDetial?object=' + JSON.stringify(aa),
      // url: '../my/myDetial/myDetial',
    })
  },
  clickHeader:function(e){
    var header = e.currentTarget.dataset.title;
    console.log(header);
    wx.navigateTo({
      url: '../my/myNewInfor/myNewInfor?object=' + header,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})