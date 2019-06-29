// pages/index/index.js

var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 800,
    circular: true,
    imgUrls: [
      'http://img3.redocn.com/tupian/20150112/lantianaixinyuntupian_3831696.jpg',
      'http://img3.redocn.com/tupian/20150112/lantianaixinyuntupian_3831696.jpg',
      'http://img3.redocn.com/tupian/20150112/lantianaixinyuntupian_3831696.jpg',
      'http://img3.redocn.com/tupian/20150112/lantianaixinyuntupian_3831696.jpg'
    ],
    articleData:app.globalData.articleData
  },

  /**
   * 跳转到文章界面
   */
  articleEvent:function(event){
    wx.navigateTo({
      url: '../article/article',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  /**
   * 跳转到话题界面
   */

  topicEvent:function(event){
    wx.navigateTo({
      url: '../topic/topic',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

/**
 * 跳转到鉴定界面
 */
  authenticateEvent: function(event) {
    wx.navigateTo({
      url: '',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },


/**
 * 跳转到百科界面
 */
  cyclopediaEvent: function(event) {
    wx.navigateTo({
      url: '',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

/**
 * 跳转到搜索界面
 */
  searchEvent: function(event) {

  },


  onLoad: function (options) {

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