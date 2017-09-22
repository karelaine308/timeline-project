var tl;

function onLoad() {
  var eventSourceCommr = new Timeline.DefaultEventSource();
  var d = Timeline.DateTime.parseGregorianDateTime("2000")
  var theme = Timeline.ClassicTheme.create();
  theme.timeline_start = new Date(Date.UTC(1860,0,0)); // Date.UTC(YY, MM, DD)
  theme.timeline_stop = new Date(Date.UTC(2030,0,0));
  
  var bandInfos = [
    Timeline.createBandInfo({
        width:          "15%", 
        intervalUnit:   Timeline.DateTime.DECADE, 
        date:           d,
        theme:          theme,
        intervalPixels: 300 
    }),
    Timeline.createBandInfo({
        width:          "60%", 
        intervalUnit:   Timeline.DateTime.DECADE, 
        date:           d,
        theme:          theme,
        intervalPixels: 300,
        eventSource:    eventSourceCommr
    }),
    Timeline.createBandInfo({
        width:          "10%", 
        intervalUnit:   Timeline.DateTime.CENTURY, 
        intervalPixels: 200,
        date:           d,
        theme:          theme,
        eventSource:    eventSourceCommr,
        layout:         'overview'  // original, overview, detailed        
    })
  ];
  bandInfos[0].syncWith = 1;
  bandInfos[2].syncWith = 1;
  bandInfos[2].highlight = true;
  bandInfos[0].decorators = [
                                

                    new Timeline.SpanHighlightDecorator({
                        startDate: "1860",
                        endDate: "1866",
                        color: "white",
                        opacity: 25,
                        //theme: theme
                        cssClass: 'govband'
                    }),
                    new Timeline.SpanHighlightDecorator({
                        startDate: "1866", //Cox was gov
                        endDate: "1868",
                        color: "#db0404",
                        opacity: 25,
                        //theme: theme
                        cssClass: 'govband'
                    }),
                    new Timeline.SpanHighlightDecorator({
                        startDate: "1868", //Hayes was gov
                        endDate: "1872",
                        color: "#db0404",
                        startlabel: "this dude Cox",
                        opacity: 25,
                        //theme: theme
                        cssClass: 'govband'
                    }),
                    new Timeline.SpanHighlightDecorator({
                        startDate: "1872",
                        endDate: "1874",
                        color: "#db0404",
                        startLabel: "Hayes",
                        //startLabel: "Noyes",
                        opacity: 25,
                        //theme: theme
                        cssClass: 'govband'
                    }),
                    new Timeline.SpanHighlightDecorator({
                        startDate: "1874",
                        endDate: "1876",
                        color: "#0924bf",
                        //startLabel: "Allen",
                        opacity: 25,
                        //theme: theme
                        cssClass: 'govband'
                    }),
                    new Timeline.SpanHighlightDecorator({
                        startDate: "1876",
                        endDate: "1877",
                        color: "#db0404",
                        //startLabel: "Hayes",
                        opacity: 25,
                        //theme: theme
                        cssClass: 'govband'
                    }),
                    new Timeline.SpanHighlightDecorator({
                        startDate: "1877",
                        endDate: "1878",
                        color: "#db0404",
                        //startLabel: "Young",
                        opacity: 25,
                        //theme: theme
                        cssClass: 'govband'
                    }),
                    new Timeline.SpanHighlightDecorator({
                        startDate: "1878",
                        endDate: "1880",
                        color: "#0924bf",
                        //startLabel: "Bishop",
                        opacity: 25,
                        //theme: theme
                        cssClass: 'govband'
                    }),
                    new Timeline.SpanHighlightDecorator({
                        startDate: "1880",
                        endDate: "1884",
                        color: "#db0404",
                        //startLabel: "Foster",
                        opacity: 25,
                        //theme: theme
                        cssClass: 'govband'
                    }),
                    new Timeline.SpanHighlightDecorator({
                        startDate: "1884",
                        endDate: "1886",
                        color: "#0924bf",
                        //startLabel: "Hoadly",
                        opacity: 25,
                        //theme: theme
                        cssClass: 'govband'
                    }),
                    new Timeline.SpanHighlightDecorator({
                        startDate: "1886",
                        endDate: "1890",
                        color: "#db0404",
                        //startLabel: "Foraker",
                        opacity: 25,
                        //theme: theme
                        cssClass: 'govband'
                    }),
                    new Timeline.SpanHighlightDecorator({
                        startDate: "1890",
                        endDate: "1892",
                        color: "#0924bf",
                        //startLabel: "Campbell",
                        opacity: 25,
                        //theme: theme
                        cssClass: 'govband'
                    }),
                    new Timeline.SpanHighlightDecorator({
                        startDate: "1892",
                        endDate: "1896",
                        color: "#db0404",
                        //startLabel: "McKinley",
                        opacity: 25,
                        //theme: theme
                        cssClass: 'govband'
                    }),
                    new Timeline.SpanHighlightDecorator({
                        startDate: "1896",
                        endDate: "1900",
                        color: "#db0404",
                        //startLabel: "Bushnell",
                        opacity: 25,
                        //theme: theme
                        cssClass: 'govband'
                    }),
                    new Timeline.SpanHighlightDecorator({
                        startDate: "1900",
                        endDate: "1904",
                        color: "#db0404",
                        //startLabel: "Nash",
                        opacity: 25,
                        //theme: theme
                        cssClass: 'govband'
                    }),
                    new Timeline.SpanHighlightDecorator({
                        startDate: "1904",
                        endDate: "1906",
                        color: "#db0404",
                        //startLabel: "Herrick",
                        opacity: 25,
                        //theme: theme
                        cssClass: 'govband'
                    }),
                    /*new Timeline.SpanHighlightDecorator({
                        startDate: "1906,0,8",
                        endDate: "1906,5,18",
                        color: "#0924bf",
                        //startLabel: "Pattison",
                        opacity: 25,
                        //theme: theme
                        cssClass: 'govband'
                    }), */
                    new Timeline.SpanHighlightDecorator({
                        startDate: "1906",
                        endDate: "1909",
                        color: "#db0404",
                        //startLabel: "Harris",
                        opacity: 25,
                        //theme: theme
                        cssClass: 'govband'
                    }),
                    new Timeline.SpanHighlightDecorator({
                        startDate: "1909",
                        endDate: "1913",
                        color: "#0924bf",
                        //startLabel: "Harmon",
                        opacity: 25,
                        //theme: theme
                        cssClass: 'govband'
                    }),
                    new Timeline.SpanHighlightDecorator({
                        startDate: "1913",
                        endDate: "1915",
                        color: "#0924bf",
                        //startLabel: "Cox",
                        opacity: 25,
                        //theme: theme
                        cssClass: 'govband'
                    }),
                    new Timeline.SpanHighlightDecorator({
                        startDate: "1915",
                        endDate: "1917",
                        color: "#db0404",
                        //startLabel: "Willis",
                        opacity: 25,
                        //theme: theme
                        cssClass: 'govband'
                    }),
                    new Timeline.SpanHighlightDecorator({
                        startDate: "1917",
                        endDate: "1921",
                        color: "#0924bf",
                        //startLabel: "Cox",
                        opacity: 25,
                        //theme: theme
                        cssClass: 'govband'
                    }),
                    new Timeline.SpanHighlightDecorator({
                        startDate: "1921",
                        endDate: "1923",
                        color: "#db0404",
                        //startLabel: "Davis",
                        opacity: 25,
                        //theme: theme
                        cssClass: 'govband'
                    }),
                    new Timeline.SpanHighlightDecorator({
                        startDate: "1923",
                        endDate: "1929",
                        color: "#0924bf",
                        //startLabel: "Donahey",
                        opacity: 25,
                        //theme: theme
                        cssClass: 'govband'
                    }),
                    new Timeline.SpanHighlightDecorator({
                        startDate: "1929",
                        endDate: "1931",
                        color: "#db0404",
                        //startLabel: "Cooper",
                        opacity: 25,
                        //theme: theme
                        cssClass: 'govband'
                    }),
                    new Timeline.SpanHighlightDecorator({
                        startDate: "1931",
                        endDate: "1935",
                        color: "#0924bf",
                        //startLabel: "White",
                        opacity: 25,
                        //theme: theme
                        cssClass: 'govband'
                    }),
                    new Timeline.SpanHighlightDecorator({
                        startDate: "1935",
                        endDate: "1939",
                        color: "#0924bf",
                        //startLabel: "Davey",
                        opacity: 25,
                        //theme: theme
                        cssClass: 'govband'
                    }),
                    new Timeline.SpanHighlightDecorator({
                        startDate: "1939",
                        endDate: "1945",
                        color: "#db0404",
                        //startLabel: "Bricker",
                        opacity: 25,
                        //theme: theme
                        cssClass: 'govband'
                    }),
                    new Timeline.SpanHighlightDecorator({
                        startDate: "1945",
                        endDate: "1947",
                        color: "#0924bf",
                        //startLabel: "Lausche",
                        opacity: 25,
                        //theme: theme
                        cssClass: 'govband'
                    }),
                    new Timeline.SpanHighlightDecorator({
                        startDate: "1947",
                        endDate: "1949",
                        color: "#db0404",
                        //startLabel: "Herbert",
                        opacity: 25,
                        //theme: theme
                        cssClass: 'govband'
                    }),
                    new Timeline.SpanHighlightDecorator({
                        startDate: "1949",
                        endDate: "1957",
                        color: "#0924bf",
                        //startLabel: "Lausche",
                        opacity: 25,
                        //theme: theme
                        cssClass: 'govband'
                    }),
                    /* new Timeline.SpanHighlightDecorator({
					    startDate: "1957-1-3",
					    endDate: "1957-1-14",
                        color: "#db0404",
                        startLabel: "Brown", this should be a dot with a text box for more info
					    opacity: 25,
					    theme: theme
                        cssClass: 'govband'
                    }), */
                    new Timeline.SpanHighlightDecorator({
                        startDate: "1957",
                        endDate: "1959",
                        color: "#db0404",
                        //startLabel: "O'Neill",
                        opacity: 25,
                        //theme: theme
                        cssClass: 'govband'
                    }),
                    new Timeline.SpanHighlightDecorator({
                        startDate: "1959",
                        endDate: "1963",
                        color: "#0924bf",
                        //startLabel: "DiSalle",
                        opacity: 25,
                        //theme: theme
                        cssClass: 'govband'
                    }),
                    new Timeline.SpanHighlightDecorator({
                        startDate: "1963",
                        endDate: "1971",
                        color: "#db0404",
                        //startLabel: "Rhodes",
                        opacity: 25,
                        //theme: theme
                        cssClass: 'govband'
                    }),
                    new Timeline.SpanHighlightDecorator({
                        startDate: "1971",
                        endDate: "1975",
                        color: "#0924bf",
                        //startLabel: "Gilligan",
                        opacity: 25,
                        //theme: theme
                        cssClass: 'govband'
                    }),
                    new Timeline.SpanHighlightDecorator({
					    startDate: "1975",
					    endDate: "1983",
                        color: "#db0404",
                        //startLabel: "Rhodes",
					    opacity: 25,
					    //theme: theme
                        cssClass: 'govband'
                    }),
                    new Timeline.SpanHighlightDecorator({
					    startDate: "1983",
					    endDate: "1991",
                        color: "#0924bf",
                        //startLabel: "Celeste",
					    opacity: 25,
					    //theme: theme
                        cssClass: 'govband'
                    }),
                    new Timeline.SpanHighlightDecorator({
					    startDate: "1991",
					    endDate: "1999",
                        color: "#db0404",
                        //startLabel: "Voinovich",
					    opacity: 25,
					    //theme: theme
                        cssClass: 'govband'
                    }),
                    /* new Timeline.SpanHighlightDecorator({
					    startDate: "1998-12-31",
					    endDate: "1999-1-11",
                        color: "#db0404",
                        startLabel: "Hollister", this should be a dot with a text box for more info
					    opacity: 25,
					    theme: theme
                        cssClass: 'govband'
                    }), */
                    new Timeline.SpanHighlightDecorator({
					    startDate: "1999",
					    endDate: "2007",
                        color: "#db0404",
                        //startLabel: "Taft",
					    opacity: 25,
					    //theme: theme
                        cssClass: 'govband'
                    }),
                    new Timeline.SpanHighlightDecorator({
					    startDate: "2007",
					    endDate: "2011",
                        color: "#0924bf",
                        //startLabel: "Strickland",
					    opacity: 25,
					    //theme: theme
                        cssClass: 'govband'
                    }),
                    new Timeline.SpanHighlightDecorator({
                        startDate: "2011",
                        endDate: "2019",
                        color: "#db0404",
                        startLabel: "Kasich",
                        opacity: 25,
                        //theme: theme
                        cssClass: 'govband'
					})];

  //#0924bf this is the blue for the gov band dem
  //#db0404 this is the red for the gov band rep
  tl = Timeline.create(document.getElementById("my-timeline"), bandInfos);

  var url = '.'; // The base url for image, icon and background image
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