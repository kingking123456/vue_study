// pages/each/each.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    students: [
      { id: 1, name: "李四", age: 22, sex: "男" },
      { id: 2, name: "张三", age: 18, sex: "男" },
      { id: 3, name: "赵六", age: 44, sex: "男" },
      { id: 4, name: "王五", age: 55, sex: "男" }
    ]
  },
  addItemHadle() {
    // const students = this.data.students
    //  students .push({ id: Math.random(), name: "六八", age: 19 })
    //  this.setData({students});
    // const students = [{ id: Math.random(), name: "六八", age: 19 }].concat(this.data.students)
    // this.setData({ students});
    // const students=this.data.students
    // students.unshift({id:Math.random(),name:"孙五",age:22})
    // students.push({ id: Math.random(), name: "孙五", age: 22 })
    // this.setData({students})
    const students = [{id:Math.random,name:'小康康',age:1}].concat(this.data.students)
    this.setData({students})
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
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