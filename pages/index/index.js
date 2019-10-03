//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    area:['亚洲','欧洲','非洲','南美洲','北美洲','澳洲','南极洲'],
    person:[
      { name: '王二', sex: '男', come:'欧洲'},
      { name: 'Tom', sex: '男', come: '亚洲' },
      { name: 'Black', sex: '女', come: '非洲' },
      { name: '马拉多纳', sex: '男', come: '北美洲' },
      { name: 'cruse', sex: '男', come: '南极洲' }
    ],
    areaIndex:[]
  },

  onLoad: function () {
    var lis =[]
    var area = this.data.area;
    var person = this.data.person;
    //把areaindex转变成数组。
    for(var i =0;i<person.length;i++){
      for (var j = 0; j < area.length;j++){
        //当person中的come和area中相等时，组成新数组
        if (person[i].come === area[j]){
          lis.push(j)
        }
      } 
    }
    this.setData({ areaIndex: lis })
    console.log(this.data.areaIndex)  
  },
  bindPickerChange:function(e){
    //解决当改变一个picker时，所有picker都改变的状况。
    var curindex = e.target.dataset.current;
    var curlist = this.data.areaIndex;
    //替换原来的数组中的元素
    curlist.splice(curindex,1,e.detail.value);
    this.setData({areaIndex:curlist})
  }
})
