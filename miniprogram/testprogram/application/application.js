// miniprogram/testprogram/application/application.js
var gApp = getApp();
var util = require("../../utils/help.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    // getDataInfo: [
    //   {
    //     id: "001"
    //   },
    //   {
    //     id: "002"
    //   }]
    getDataInfo: [],

    hiddenName: true,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.getGetUsers();
  },
  getGetUsers: function () {
    var that = this;
    let allParams = {
      QueryType: "syncUserConfig",
      UserGuid: "@@ODg4ODg4fEAxODM1NDI4OTg1N3xAZGU0M2UwZmU4ODg2OWIxNTE2MGU3ZTBiZTQxOTA0MjN8QDIuMS40fEBaVEV4TkROaU1tVXdNVE0xWVdVNU5UazROR1E0TVRJd1pHVXhabUV3TVRBLXxAY29tLnJvbWVucy5lcnAuY2hhaW58QE1UVTRNVFUyTXpFek13LS0-",
      Params: ""
    };


    util.getWebDataWithPostOrGet({
      url: "https://im.yiyao365.cn/handle",
      param: allParams,
      method: "POST",
      success: function (data) {
        console.log("数据请求的" + data);
        if (data) {
          that.setData({
            // getDataInfo: Object.entries(data),
            getDataInfo: data
          });

          console.log(that.data.getDataInfo)

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
  click: function (e) {
    this.setData({
      hiddenName: !this.data.hiddenName
    })
  },
  answerSelected(e) {
    let outidx = e.currentTarget.dataset.outidx;
    let idx = e.currentTarget.dataset.idx;
    let question = this.data.quest[outidx];
    if (question.type == 1) {
      //单选
      for (let item of question.answers) {
        item.selected = false;
      }
      question.answers[idx].selected = true;
      this.setData({
        quest: this.data.quest
      });
    } else if (question.type == 2) {
      //多选
      question.answers[idx].selected = !question.answers[idx].selected;
      this.setData({
        quest: this.data.quest
      });
    }
  },
  clickItem: function (e) {
    console.log("lalaa" + e.currentTarget.dataset.title);
    wx: wx.navigateTo({
      url: '../application/appDetail/appDetail?object=' + e.currentTarget.dataset.title,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
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