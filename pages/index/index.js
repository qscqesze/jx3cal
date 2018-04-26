//index.js
//获取应用实例
const app = getApp()
var initData = '0'
var extraLine = ''
Page({
  data: {
    title: 'Hello World',
    text: '0'
  },
  add: function (e) {
    extraLine = '还未计算出 嘻嘻'
    this.setData({
      text: extraLine
    })
  }
})
