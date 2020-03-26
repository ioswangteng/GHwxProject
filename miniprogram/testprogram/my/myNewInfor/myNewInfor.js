// miniprogram/testprogram/my/myNewInfor/myNewInfor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: 0,
    // 页面总高度将会放在这里
    windowHeight: 0,
    // scroll-view的高度
    swiperViewHeight: 0,
    winHeight: ''//窗口高度

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let getStr = options.object;
    console.log("dayinhahhah" + getStr);
    wx.setNavigationBarTitle({
      title: getStr + "的主页"
    });

    this.swiperHeight();
  },
/**
 * 设置下边swiper高度
 */
  swiperHeight: function (e) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        var clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth;
        var calc = clientHeight * rpxR-100;
        that.setData({
          winHeight: calc,
        });
        console.log("打印高度" + that.data.winHeight);
      },
    })
  },
/**
 * 点击头部切换
 */
  switchNav: function (e) {
    var that = this;
    var newID = e.target.id;
    if (that.data.flag == newID) {
      return false;
    } else {
      that.setData({
        flag: newID,
      });
    }
  },
  /**
 * 滑动下边swiper的item
 */
  changeSwipe: function (event) {
    console.log(event);
    var type =
      event.detail.current;
    this.setData({
      flag: type
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})