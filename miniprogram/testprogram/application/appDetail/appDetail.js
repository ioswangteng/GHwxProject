// miniprogram/testprogram/application/appDetail/appDetail.js

var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["测试一", "测试二"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
  
    inputShowed: true,  // 搜索框状态
    
    viewShowed: false,//显示结果view的状态
  
    inputVal: "",  // 搜索框值
    
    list: [],//搜索渲染推荐数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let getStr = options.object;
    wx.setNavigationBarTitle({
      title: getStr
    });

    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  // 隐藏搜索框样式
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  // 清除搜索框值
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  // 键盘抬起事件
  inputTyping: function (e) {
    console.log(e.detail.value)
    var that = this;
    if (e.detail.value == '') {
      return;
    }
    that.setData({
      viewShowed: false,
      inputVal: e.detail.value
    });

    /*wx.request({
      url: "*****",
      data: { "openid": "*****", "name": e.detail.value },
      method: 'GET',
      header: {
        'Content-type': 'application/json'
      },
      success: function (res) {
        that.setData({
          list: res.data
        })
      }
    });*/
    //随便写几个单词作为检索后的结果集
    that.setData({
      list: [{
        "deviceId": "001",
        "name": "abcaaaaaaaa"
      },
      {
        "deviceId": "002",
        "name": "bcdaaaaaaaaa"
      },
      {
        "deviceId": "003",
        "name": "cde"
      },
      {
        "deviceId": "004",
        "name": "def"
      },
      {
        "deviceId": "005",
        "name": "efg"
      }]
    })
  },
  // 获取选中推荐列表中的值
  btn_name: function (res) {
    var that = this;
    that.hideInput();
    console.log('name:  ' + res.currentTarget.dataset.name);
    wx.navigateTo({
      url: '',
    })
  },
// });
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