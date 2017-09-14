var tl;

function onLoad() {
  var eventSourceGov = new Timeline.DefaultEventSource();
  var eventSourceCommr = new Timeline.DefaultEventSource();

  var bandInfos = [
    Timeline.createBandInfo({
        width:          "20%", 
        intervalUnit:   Timeline.DateTime.DECADE, 
        intervalPixels: 200,
        eventSource: eventSourceGov
    }),
    Timeline.createBandInfo({
        width:          "70%", 
        intervalUnit:   Timeline.DateTime.DECADE, 
        intervalPixels: 200,
        eventSource: eventSourceCommr
    }),
    Timeline.createBandInfo({
        width:          "30%", 
        intervalUnit:   Timeline.DateTime.CENTURY, 
        intervalPixels: 200,
        eventSource: eventSourceCommr,
        layout: 'overview'  // original, overview, detailed        
    })
  ];
  bandInfos[0].syncWith = 1;
  bandInfos[2].syncWith = 1;
  bandInfos[2].highlight = true;
  //#0924bf this is the blue for the gov band dem
  //#db0404 this is the red for the gov band rep
  tl = Timeline.create(document.getElementById("my-timeline"), bandInfos);

  var url = '.'; // The base url for image, icon and background image
  eventSourceGov.loadJSON(timeline_dataGov, url);
  eventSourceCommr.loadJSON(timeline_dataCommr, url);
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