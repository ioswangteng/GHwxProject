import F2 from '@antv/wx-f2'; // 注：也可以不引入， initChart 方法已经将 F2 传入，如果需要引入，注意需要安装 @antv/wx-f2 依赖

let chart = null;

function initChart(canvas, width, height, F2) { // 使用 F2 
// F2 对数据源格式的要求，仅仅是 JSON 数组，数组的每个元素是一个标准 JSON 对象。
  const data = [
    { year: '1951 年', sales: 38 },
    { year: '1952 年', sales: 52 },
    { year: '1956 年', sales: 61 },
    { year: '1957 年', sales: 145 },
    { year: '1958 年', sales: 48 },
    { year: '1959 年', sales: 38 },
    { year: '1960 年', sales: 38 },
    { year: '1962 年', sales: 38 },
  ];
  // Step 1: 创建 Chart 对象
  chart = new F2.Chart({
    el: canvas,
    width,
    height
  });
// Step 2: 载入数据源
  chart.source(data, {
    sales: {
      tickCount: 5
    }
  });
  chart.tooltip({
    showItemMarker: false,
    onShow(ev) {
      const { items } = ev;
      items[0].name = null;
      items[0].name = items[0].title;
      items[0].value = '¥ ' + items[0].value;
    }
  });
  // Step 3：创建图形语法，绘制柱状图，由 year 和 sales 两个属性决定图形位置，year 映射至 x sales 映射至 y 轴
  chart.interval().position('year*sales');
  // Step 4: 渲染图表
  chart.render();
  return chart;
}

Page({
  data: {
    opts: {
      onInit: initChart
    },
    isflag: false,
  },

  clickbtn: function () {
    this.setData({
      isflag: true
    })

  },

  actioncnt: function () {
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success: function (res) {
        console.log(res.tapIndex)
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },

  onReady() {
  }
});