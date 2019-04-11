var margin = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  mapD = {
    w: 0,
    h: 0,
    m: 8
  },
  totalSvg = 2
var large_screen = false,
  medium_screen = false,
  small_screen = false,
  map0 = false;
var controller = new ScrollMagic.Controller();
var windowW, windowH, mapD, projection, path;

var trophyList = ["NBA", "NHL", "NFL", "MLB", "CFL", "MLS", "volleyball-w", "baseball-m", "basketball-w", "basketball-m", "football-m", "soccer-w"],
  opacityScale = d3.scaleLinear().domain([1, 66]).range([.25, .05]);

function handleResize() {

  windowW = window.innerWidth;
  windowH = window.innerHeight;

  large_screen = false
  medium_screen = false
  small_screen = false

  if (windowW >= 900) {
    large_screen = true;
  } else if (windowW >= 650) {
    medium_screen = true;
  } else if (windowW < 650) {
    small_screen = true;
  }

  if (small_screen) {
    margin.left = 0
    margin.right = 0
    mapD.w = windowW - 16
    mapD.h = windowW * .66
  } else {
    margin.left = (windowW * .125) - 8
    margin.right = (windowW * .125) - 8
    mapD.w = windowW * .75
    mapD.h = (windowW * .75) * .66
  }

  projection = d3.geoAlbers()
    .scale(mapD.w + 100)
    .translate([mapD.w / 2, mapD.h * .6])
    .precision(0.1)

  path = d3.geoPath()
    .projection(projection)

  d3.selectAll("path").attr("d", path)

  for (var i = 0; i < totalSvg; i++) {
    d3.select("#map" + i).attr("height", mapD.h)
      .attr("width", mapD.w)
      .attr("transform", "translate(" + margin.left + ")")
  }

} // end handleResize

loadData();

function loadData() {
  queue()
    .defer(d3.json, "js/maps/world-continents.json")
    .defer(d3.json, "js/maps/us.json")
    .defer(d3.json, "js/maps/canada.json")
    .defer(d3.csv, "data/data.csv")
    .defer(d3.csv, "data/cities.csv")
    .defer(d3.csv, "data/matrix.csv")
    .await(processData);
} // end loadData

function processData(error, world, us, canada, titles, places, matrix) {
  handleResize();
  window.addEventListener("resize", handleResize)
  drawMaps(world, us, canada);
  if (small_screen) drawMap0small(titles)
  if (!small_screen) drawMap0(titles)
  drawMap1(titles)
  detectView();
} // end processData

function drawMaps(world, us, canada) {
  for (var i = 0; i < totalSvg; i++) {
    var svg = d3.select("#map" + i);
    var g = svg.append("g").attr("transform", "translate(" + mapD.m + "," + mapD.m + ")")

    var defs = svg.append("defs");

    var filter = defs.append("filter")
      .attr("id", "glow");
    filter.append("feGaussianBlur")
      .attr("in", "SourceAlpha")
      .attr("stdDeviation", "25")
      .attr("result", "blur");
    filter.append("feColorMatrix")
      .attr("type", "matrix")
      .attr("values", ".25 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.25 0 ")
      .attr("result", "bluralpha");
    filter.append("feOffset")
      .attr("in", "bluralpha")
      .attr("dx", 0)
      .attr("dy", 0)
      .attr("result", "offsetBlur");
    var feMerge = filter.append("feMerge");
    feMerge.append("feMergeNode")
      .attr("in", "offsetBlur");
    feMerge.append("feMergeNode")
      .attr("in", "SourceGraphic");

    g.append("path")
      .attr("class", "continent")
      .datum(topojson.feature(world, world.objects.continent))
      .attr("d", path)
      .style("fill", "#fff")
      .style("filter", "url(#glow)")
  }
} // end drawMaps

function detectView() {
  var map0scene = new ScrollMagic.Scene({
      triggerElement: "#map0"
    })
    .addTo(controller);

  map0scene.on("enter", function() {
    if (!map0) {
      map0 = true;
      $("#play-button").click();
    }
  })
} // end detectView

function drawMap0(titles) {

  var svg = d3.select("#map0");
  var gCircle = svg.append("g").attr("transform", "translate(" + mapD.m + "," + mapD.m + ")"),
    gTrophy = svg.append("g").attr("transform", "translate(" + mapD.m + "," + mapD.m + ")");

  for (var i = 0; i < trophyList.length; i++) {
    gTrophy.append("svg:image")
      .attr("class", "trophy trophy-" + trophyList[i])
      .attr("width", 50)
      .attr("height", 50)
      .attr("xlink:href", "img/icons/" + trophyList[i] + ".png")
      .style("opacity", 0)
  }

  d3.select(".trophy-NBA").attr("x", projection([-75.1652215, 39.9525839])[0] - 25).attr("y", projection([-75.1652215, 39.9525839])[1] - 25);
  d3.select(".trophy-NHL").attr("x", projection([-79.3831843, 43.653226])[0] - 25).attr("y", projection([-79.3831843, 43.653226])[1] - 25);
  d3.select(".trophy-NFL").attr("x", projection([-81.378447, 40.7989472999999])[0] - 25).attr("y", projection([-81.378447, 40.7989472999999])[1] - 25);
  d3.select(".trophy-MLB").attr("x", projection([-71.0588801, 42.3600825])[0] - 25).attr("y", projection([-71.0588801, 42.3600825])[1] - 25);
  d3.select(".trophy-CFL").attr("x", projection([-79.3831843, 43.653226])[0] - 25).attr("y", projection([-79.3831843, 43.653226])[1] - 25);
  d3.select(".trophy-MLS").attr("x", projection([-77.0368707, 38.9071923])[0] - 25).attr("y", projection([-77.0368707, 38.9071923])[1] - 25);
  d3.select(".trophy-volleyball-w").attr("x", projection([-81.0348144, 34.0007104])[0] - 25).attr("y", projection([-81.0348144, 34.0007104])[1] - 25);
  d3.select(".trophy-baseball-m").attr("x", projection([-122.272747, 37.8715926])[0] - 25).attr("y", projection([-122.272747, 37.8715926])[1] - 25);
  d3.select(".trophy-basketball-m").attr("x", projection([-123.0867536, 44.0520691])[0] - 25).attr("y", projection([-123.0867536, 44.0520691])[1] - 25);
  d3.select(".trophy-basketball-w").attr("x", projection([-79.8742367999999, 40.5077792])[0] - 25).attr("y", projection([-79.8742367999999, 40.5077792])[1] - 25);
  d3.select(".trophy-football-m").attr("x", projection([-74.6672226, 40.3572976])[0] - 25).attr("y", projection([-74.6672226, 40.3572976])[1] - 25);
  d3.select(".trophy-soccer-w").attr("x", projection([-79.0558445, 35.9131996])[0] - 25).attr("y", projection([-79.0558445, 35.9131996])[1] - 25);


  // -----SLIDER----- // https://bl.ocks.org/officeofjane/47d2b0bfeecfcb41d2212d06d095c763
  var formatDateIntoYear = d3.timeFormat("%Y");
  var formatDate = d3.timeFormat("%b %Y");
  var parseDate = d3.timeParse("%m/%d/%y");

  var startDate = new Date(1870, 0, 1),
    endDate = new Date(2018, 11, 31);

  var moving = false;
  var currentValue = 30;
  var targetValue = mapD.w - 100;

  var playButton = d3.select("#play-button").style("left", margin.left + 25 + "px").style("top", 25 + "px");

  var x = d3.scaleTime()
    .domain([startDate, endDate])
    .range([30, targetValue])
    .clamp(true);

  var slider = svg.append("g")
    .attr("class", "slider")
    .attr("transform", "translate(" + 60 + "," + 50 + ")");

  slider.append("line")
    .attr("class", "track")
    .attr("x1", x.range()[0])
    .attr("x2", x.range()[1])
    .select(function() {
      return this.parentNode.appendChild(this.cloneNode(true));
    })
    .attr("class", "track-inset")
    .select(function() {
      return this.parentNode.appendChild(this.cloneNode(true));
    })
    .attr("class", "track-overlay")
    .call(d3.drag()
      .on("start.interrupt", function() {
        slider.interrupt();
      })
      .on("start drag", function() {
        currentValue = d3.event.x;
        update(x.invert(currentValue));
      })
    );

  slider.insert("g", ".track-overlay")
    .attr("class", "ticks")
    .attr("transform", "translate(60," + -18 + ")")
    .selectAll("text")
    .data(x.ticks(12))
    .enter()
    .append("text")
    .attr("x", x)
    .attr("y", 10)
    .attr("text-anchor", "middle")
    .text(function(d) {
      return parseInt(formatDateIntoYear(d)) + 10;
    });

  var handle = slider.insert("circle", ".track-overlay")
    .attr("class", "handle")
    .attr("r", 4)
    .attr("cx", x(startDate));

  var firstMap = d3.select("#firstMap")

  var label = firstMap.append("div")
    .attr("class", "label")
    .style("left", margin.left + 60 + x(startDate) + "px")
    .style("top", 25 + "px")
    .text(formatDateIntoYear(startDate))

  playButton
    .on("click", function() {
      var button = d3.select(this);
      if (button.text() == "Pause") {
        moving = false;
        clearInterval(timer);
        // timer = 0;
        button.text("Play");
        $("#play-button").removeClass("played").addClass("paused")
      } else {
        moving = true;
        timer = setInterval(step, 100);
        button.text("Pause");
        $("#play-button").removeClass("paused").addClass("played")
      }
    })

  function prepare(d) {
    d.id = d.id;
    d.date = parseDate(d.date);
    return d;
  }

  function step() {
    update(x.invert(currentValue));
    currentValue = currentValue + (targetValue / 151);
    if (currentValue > targetValue) {
      moving = false;
      currentValue = 0;
      clearInterval(timer);
      // timer = 0;
      playButton.text("Play");
    }
  } // end step

  function drawPlot(data) {
    var cities = gCircle.selectAll(".city")
      .data(data);

    cities.enter()
      .append("circle")
      .attr("class", "city")
      .attr("cx", function(d) {
        gTrophy.select("." + d.trophySelector)
          .transition().duration(250)
          .attr("x", projection(parseCoord(d.t1coord))[0] - 25)
          .attr("y", projection(parseCoord(d.t1coord))[1] - 25)
          .style("opacity", "1");

        return projection(parseCoord(d.t1coord))[0]
      })
      .attr("cy", function(d) {
        return projection(parseCoord(d.t1coord))[1]
      })
      .style("fill", function(d) {
        return d.colour
      })
      .style("opacity", function(d) {
        return opacityScale(d.nth) / 2
      })
      .attr("r", 0)
      .transition().duration(400)
      .attr("r", function(d) {
        return d.nth
      })

    cities.exit()
      .remove();

    gTrophy.selectAll(".trophy").style("opacity", 0)
  } // end drawPlot

  function update(h) {
    // update position and text of label according to slider scale
    handle.attr("cx", x(h));
    label.attr("transform", "translate(" + x(h) + ")")
      .style("left", margin.left + 60 + x(h) + "px")
      .text(formatDateIntoYear(h));

    var newData = titles.filter(function(d) {
      return d.year <= formatDateIntoYear(h);
    })
    drawPlot(newData);
  } //end update
} // end drawMap0

function drawMap0small(titles) {

  var data = titles;

  var cityList = [];

  var svg = d3.select("#map0");
  var g = svg.append("g").attr("transform", "translate(" + mapD.m + "," + mapD.m + ")");
  d3.select("#play-button").style("display", "none")

  var cities = g.selectAll(".cityNFL")
    .data(data);

  cities.enter()
    .append("circle")
    .attr("class", "cityNFL")
    .attr("cx", function(d) {
      return projection(parseCoord(d.t1coord))[0]
    })
    .attr("cy", function(d) {
      return projection(parseCoord(d.t1coord))[1]
    })
    .style("fill", function(d) {
      return d.colour
    })
    .style("opacity", function(d) {
      var t1loc = camelize(d.t1loc)
      cityList.push(t1loc)
      var nth = countThis(cityList, t1loc)
      return opacityScale(nth) / 2
    })
    .attr("r", function(d) {
      var t1loc = camelize(d.t1loc)
      cityList.push(t1loc)
      var nth = countThis(cityList, t1loc)
      return nth / 2
    })

} // end drawMap0small

function drawMap1(titles) {

  var data = titles.filter(function(d) {
    return d.leagueLevel === "NCAA"
  })

  var cityList = [];

  var svg = d3.select("#map1");
  var g = svg.append("g").attr("transform", "translate(" + mapD.m + "," + mapD.m + ")");

  var cities = g.selectAll(".cityNFL")
    .data(data);

  cities.enter()
    .append("circle")
    .attr("class", "cityNFL")
    .attr("cx", function(d) {
      return projection(parseCoord(d.t1coord))[0]
    })
    .attr("cy", function(d) {
      return projection(parseCoord(d.t1coord))[1]
    })
    .style("fill", function(d) {
      return d.colour
    })
    .style("opacity", function(d) {
      var t1loc = camelize(d.t1loc)
      cityList.push(t1loc)
      var nth = countThis(cityList, t1loc)
      return opacityScale(nth) / 2
    })
    .attr("r", function(d) {
      var t1loc = camelize(d.t1loc)
      cityList.push(t1loc)
      var nth = countThis(cityList, t1loc)
      return nth
    })

} // end drawMap1

// supplementary functions
function camelize(str) {
  return str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
    return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
  }).replace(/\s+/g, '');
}

function countThis(array, value) {
  var n = -1;
  var i = -1;
  do {
    n++;
    i = array.indexOf(value, i + 1);
  } while (i >= 0);

  return n;
}

function parseCoord(value) {
  return JSON.parse("[" + value + "]")[0]
}