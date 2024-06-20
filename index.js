var map = new AMap.Map("container", {
  center: [119.481406, 28.448883],
  zoom: 14,
  viewMode: "3D",
});

var path = [
  [119.492924, 28.46597],
  [119.474051, 28.453598],
  [119.491765, 28.445884],
];
var path1 = [
  [116.453322, 39.920255],
  [116.460703, 39.897555],
  [116.452292, 39.892353],
  [116.439846, 39.891365],
];

var polygon = new AMap.Polygon({
  path: path,
  strokeColor: "#FF33FF",
  strokeWeight: 6,
  strokeOpacity: 0.2,
  fillOpacity: 0.4,
  fillColor: "#1791fc",
  zIndex: 50,
  bubble: true,
});
var polygon1 = new AMap.Polygon({
  path: path1,
  strokeColor: "green",
  strokeWeight: 6,
  strokeOpacity: 0.2,
  fillOpacity: 0.4,
  fillColor: "#1791fc",
  zIndex: 50,
  bubble: true,
});

// map.add([polygon, polygon1])
map.add([polygon]);

// 缩放地图到合适的视野级别
map.setFitView();
var polyEditor;
// var polyEditor = new AMap.PolyEditor(map, polygon)
// polyEditor = new AMap.PolygonEditor(map)
polyEditor = new AMap.PolygonEditor(map, polygon);
// polyEditor.addAdsorbPolygons(polygon1)
polyEditor.open();

//监听编辑多边形结束
polyEditor.on("end", function (event) {
  console.log(event.target._opts.path);
  console.log(event);
  let getPath = event.target.getPath();
  console.log(getPath);
});
