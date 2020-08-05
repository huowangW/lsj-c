// components/nav-bar/nav-bar.js
Component({
  properties:{
    //定义innerText,组件值可以在使用时指定
    navText:{
      type:String,
      value:'老司机货运'
    },
    imgUrl: {
      type:String,
      value:'/iconfont/yonghu.svg'
    }
  },
  data:{//这是组件内部数据
    navPadding:0
  },
  methods:{//组件方法
    touser: function (){
      if(this.properties.imgUrl=== '/iconfont/yonghu.svg'){
          wx.navigateTo({
          url: '/pages/user/user'
        })
      }else if(this.properties.imgUrl!= '/iconfont/yonghu.svg')
      wx.navigateBack({
        delta: 1,
      })
    }
  },
  
  attached: function (){
    var that = this
    wx.getSystemInfo({
      success: (result) => {
        if(result.windowHeight==736 || result.windowHeight<736){
          that.setData({navPadding:52})
        }else if(result.windowHeight>736){
          that.setData({navPadding:90})
        }
      },
    })
  }
})