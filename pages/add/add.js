// pages/add/add.js
var delid=0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad: function (e) {
    var id = e.id;
    delid=id;
    console.log(id);
    if (id) {
      getData(id, this);
    } else {
      this.setData({
        id: Date.now()
      })
    }
  },
  
  //  1211
  //   19382
  //4352
  /**
   * input change事件
   */
  change (e) {
    var val = e.detail.value;
    this.setData({
      content: val
    });
  },

  /**
   * del 事件
   */
  del (e) {
    var arr = wx.getStorageSync('txt',JSON.stringify(arr));
   
    // 下标等于在何处删除    1：删除一个
    for(var i=0;i<arr.length;i++){
      
      if(arr[i]['id']==delid){
        
        arr.splice(i, 1);
      }
    }
   
    wx.setStorageSync('txt', arr);
    wx.navigateBack();
  },

  sure () {
    var reg = /^\s*$/g;
    if (!this.data.content || reg.test(this.data.content)) {
      console.log('不能为空');
      return;
    }
    this.setData({
      time: Date.now()
    });
    setValue(this);
    wx.navigateBack();
  }
})

/**
 * 根据跳转的url中的id获取编辑信息回填
 */
function getData(id, page) {
  var arr = wx.getStorageSync('txt');
  if (arr.length) {
    arr.forEach((item) => {
      if (item.id == id) {
        page.setData({
          id: item.id,
          content: item.content
        })
      }
    })
  }
}

/**
 * 设置填写的信息，分编辑、新增
 */
function setValue(page) {
  var arr = wx.getStorageSync('txt');
  var data = [], flag = true;
  if(arr.length) {
    arr.forEach(item => {
      if(item.id == page.data.id) {
        item.time = Date.now();
        item.content = page.data.content;
        flag = false;
      }
      data.push(item);
    })
  }
  if (flag) {
    data.push(page.data);
  }
  wx.setStorageSync('txt', data);
}