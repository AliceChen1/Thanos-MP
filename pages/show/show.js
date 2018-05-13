// pages/show/show.js
Page({

  data: {
  
  },

  onLoad: function (options) {
    console.log(234234,options)
    this.setData({image_url: options.leanCloudImage})
  },

})