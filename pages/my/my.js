// pages/my/my.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    CopyLink(e) {
      wx.setClipboardData({
        data: e.currentTarget.dataset.link,
        success: res => {
          wx.showToast({
            title: '已复制',
            duration: 1000,
          })
        }
      })
    },
    showQrcode() {
      wx.previewImage({
        urls: ['https://imapi.datealive.top/zanshang/img/weipayimg.jpg'],
        current: 'https://imapi.datealive.top/zanshang/img/weipayimg.jpg' // 当前显示图片的http链接      
      })
    },
    showWeixin() {
      wx.previewImage({
        urls: ['https://www.datealive.top/wp-content/uploads/2020/04/277417677d481ecaa0544edfa092fab.jpg'],
        current: 'https://www.datealive.top/wp-content/uploads/2020/04/277417677d481ecaa0544edfa092fab.jpg' // 当前显示图片的http链接      
      })
    },
  }
})
