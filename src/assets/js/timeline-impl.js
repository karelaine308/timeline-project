var tl;

function onLoad() {
  eventSource1 = new Timeline.DefaultEventSource();
  
  var bandInfos = [
    Timeline.createBandInfo({
        width:          "70%", 
        intervalUnit:   Timeline.DateTime.MONTH, 
        intervalPixels: 100,
        eventSource: eventSource1
    }),
    Timeline.createBandInfo({
        width:          "30%", 
        intervalUnit:   Timeline.DateTime.YEAR, 
        intervalPixels: 200,
        eventSource: eventSource1
    })
  ];

  bandInfos[1].syncWith = 0;
  bandInfos[1].highlight = true;
  
  tl = Timeline.create(document.getElementById("my-timeline"), bandInfos);

  var url = '.'; // The base url for image, icon and background image
  eventSource1.loadJSON(timeline_data, url);
}

var resizeTimerID = null;
function onResize() {
    if (resizeTimerID == null) {
        resizeTimerID = window.setTimeout(function() {
            resizeTimerID = null;
            tl.layout();
        }, 500);
    }
}