//app.js
App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

    this.globalData = {
      articleData: [
        {
          "title": "云卷云舒",
          "id": 1,
          "content": "云卷云舒",
          "userName": "cuit",
          "userHead": "../../images/camera.png",
          "publishDate": "2019.01.01",
          "newsImage": "http://img3.redocn.com/tupian/20150112/lantianaixinyuntupian_3831696.jpg",
          "contentPreview": "文章预览"
        },
        {
          "title": "云卷云舒",
          "id": 2,
          "content": "云卷云舒",
          "userName": "cuit",
          "userHead": "../../images/camera.png",
          "publishDate": "2019.01.01",
          "newsImage": "http://img3.redocn.com/tupian/20150112/lantianaixinyuntupian_3831696.jpg",
          "contentPreview": "文章预览"
        },
        {
          "title": "云卷云舒",
          "id": 3,
          "content": "云卷云舒",
          "userName": "cuit",
          "userHead": "../../images/camera.png",
          "publishDate": "2019.01.01",
          "newsImage": "http://img3.redocn.com/tupian/20150112/lantianaixinyuntupian_3831696.jpg",
          "contentPreview": "文章预览"
        }
      ]
    }
  }
})
