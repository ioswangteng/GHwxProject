// miniprogram/testprogram/homePage/home.js
var toolHelp = require('../../utils/help.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    requestArr: [],
    showToastText: "",
    selectArray: [
      {
        id: '0',
        name: 'aaa'
      },
      {
        id: '1',
        name: 'bbb'
      },
      {
        id: '2',
        name: 'ccc'
      },
    ],
    current_text: '01',
    inputShowed: false,
    inputVal: ""

  },
  getRequestData: function () {
    var that = this;
    let allParam = {
      QueryType: "GetActivity_v1",
      UserGuid: '@@ODg4ODg4fEAxODM1NDI4OTg1N3xAZGU0M2UwZmU4ODg2OWIxNTE2MGU3ZTBiZTQxOTA0MjN8QDIuMS40fEBaVEV4TkROaU1tVXdNVE0xWVdVNU5UazROR1E0TVRJd1pHVXhabUV3TVRBLXxAY29tLnJvbWVucy5lcnAuY2hhaW58QE1UVTRNVFUyTXpFek13LS0-',
      Params: ''
    };
    toolHelp.getWebDataWithPostOrGet({
      url: "https://im.yiyao365.cn/yyzs/handle",
      param: allParam,
      method: "POST",
      success: function (data) {
        console.log(data.DATA);
        if (data.DATA) {
          that.setData({
            requestArr: data.DATA,
          });
        } else {
          wx.showToast({
            title: '加载数据失败',
          }),
            that.setData({
              showToastText: "加载数据失败",
            });
        }
      }
    });
  },
  clickItem: function (e) {
    console.log("点击了首页的cell");



  },
  hideInput:function(e){
    console.log("点击了首页的quxiao");
  },
  getCurrentTextAction: function (e) {
    let item = e.detail;
    this.setData({
      current_text: item.name,
      current_type: item.type
    });
  },
  //搜索框搜索结果
  searchResult: function (e) {

    console.log("搜索的：" + e);

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getRequestData();

    this.setData({
      search: this.search.bind(this)
    })
  },
  search: function (value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([{ text: '搜索结果', value: 1 }, { text: '搜索结果2', value: 2 }])
      }, 200)
    })
  },
  searchInputAction: function (e) {
    console.log('select result', e.detail)
  },
  testSearch:function(e){
    console.log('search result', e.detail);
    var that = this;
    if (e.detail.value == '') {
      return;
    }
    that.setData({
      // viewShowed: false,
      inputVal: e.detail.value
    });
  },
  // 清除搜索框值
  clearInput: function () {
    this.setData({
      inputVal: ""
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