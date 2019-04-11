var container = d3.select("#scroll"),
  graphic = container.select(".scroll__graphic"),
  text = container.select(".scroll__text"),
  step = text.selectAll(".step:not(.intro)"),
  scroller = scrollama(),
  inScroll = false;

// margin setup
var margin = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};

// set screen size
var windowW, windowH;

var large_screen = false,
  medium_screen = false,
  small_screen = false;

var tD, gD;

function handleResize() {

  windowW = window.innerWidth;
  windowH = window.innerHeight;

  if (windowW > 900) {
    large_screen = true;
  } else if (windowW > 650) {
    medium_screen = true;
  } else {
    small_screen = true;
  }

  if (small_screen) {
    tD = {
      w: windowW - 15,
      h: 10
    };
    gD = {
      w: windowW - 15,
      h: windowH
    };
    step.style("padding-left", windowW * .125 + "px").style("padding-right", windowW * .125 + "px")
    d3.selectAll(".introinner").style("padding-left", windowW * .125 + "px").style("padding-right", windowW * .125 + "px")
  } else {
    tD = {
      w: windowW / 3,
      h: 10
    };
    gD = {
      w: windowW - tD.w - 14,
      h: windowH
    };
  }

  step.style("height", tD.h + "px")
    .style("width", tD.w + "px")
  graphic.style("width", gD.w + "px")
    .style("height", gD.h + "px");

  d3.selectAll(".introinner").style("width", tD.w + "px")

  scroller.resize();
}

function handleContainerEnter(response) {
  inScroll = true;
}

function handleContainerExit(response) {
  inScroll = false;
}

// function setupStickyfill() {
//   d3.selectAll(".sticky").each(function() {
//     Stickyfill.add(this);
//   });
// }

function init() {
  handleResize();
  section1();
  window.addEventListener("resize", handleResize)
}

function section1() {

  // the basics
  var mapW = gD.w,
    mapH = gD.h;

  if (small_screen) mapW = windowW;

  scale = mapW + 200;

  mapW = mapW - margin.left - margin.right;
  mapH = mapH - margin.top - margin.bottom;

  var mapSVG = d3.select(".map")
    .attr("width", mapW + margin.left + margin.right)
    .attr("height", mapH + margin.top + margin.bottom),
    mapG = mapSVG.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")"),
    opacityScale = d3.scaleLinear().domain([1, 66]).range([.25, .05]);

  var projection = d3.geoAlbers()
    .scale(scale)
    // .center()
    .translate([mapW * .5, mapH * .6])
    // .rotate([122.4194, -37.7749])
    // .clipAngle(180 - 1e-3)
    .precision(0.1);

  var path = d3.geoPath()
    .projection(projection);

  //Container for the gradients
  var defs = mapSVG.append("defs");

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

  // draw continent
  d3.json("js/world-continents.json", function(error, world) {
    if (error) throw error;

    var continents = topojson.feature(world, world.objects.continent).features;

    mapSVG.selectAll(".continent")
      .data(continents)
      .enter()
      .append("path")
      .attr("class", "continent")
      .attr("d", path)
      .style("fill", "#ffffff")
      .style("stroke", "#ff000000")
      .style("stroke-width", 2)
      .style("filter", "url(#glow)")

  }); //end draw continents

  // load data
  d3.csv("data/data.csv", function(error, data) {
    if (error) throw error;

    var cities = [];

    for (var i = 0; i < data.length; i++) {
      var n = i + 1;
      d3.select(".scroll__text").append("div").attr("id", "step" + n).attr("class", "step stepyear-" + data[i].yearFirst).attr("data-step", n).attr("data-scrollama-index", data[i].league + data[i].year).html("<p>" + data[i].sport + data[i].year + " step: " + data[i].number + "</p>")
    }

    step = text.selectAll('.step:not(.intro)');
    step.style("height", tD.h + "px")
      .style("width", tD.w + "px")

    // draw trophies
    var trophyList = ["NBA", "NHL", "NFL", "MLB", "CFL", "MLS", "volleyball-w", "baseball-m", "basketball-w", "basketball-m", "football-m", "soccer-w"];
    var circleG = mapSVG.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")"),
      trophyG = mapSVG.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")")

    for (var i = 0; i < trophyList.length; i++) {
      trophyG.append("svg:image")
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


    // setupStickyfill();
    scroller.setup({
        container: "#scroll",
        graphic: ".scroll__graphic",
        text: ".scroll__text",
        step: ".scroll__text .step",
        debug: false,
        offset: 0.33,
      })
      .onStepEnter(handleStepEnter)
      .onContainerEnter(handleContainerEnter)
      .onContainerExit(handleContainerExit);

    // handle steps
    function handleStepEnter(response) {
      step.classed('is-active', function(d, i) {
        return i === response.index;
      })

      if (response.index === 0) {
        d3.csv("data/cities.csv", function(error, cities) {
          if (error) throw error;
          // DRAW THE CITIES BABY
          mapSVG.selectAll(".ch1cities")
            .data(cities)
            .enter()
            .append("circle")
            .attr("class", "ch1cities")
            .attr("cx", function(d) {
              return projection(parseCoord(d.lngLat))[0]
            })
            .attr("cy", function(d) {
              return projection(parseCoord(d.lngLat))[1]
            })
            .attr("r", 0)
            .style("fill", "#333333")
            .transition().duration(500).ease(d3.easeExp).delay(function(d, i) {
              return i * 10
            })
            .attr("r", 4)
        });
      }

      if (response.index === 1) {
        d3.selectAll(".ch1cities")
          .transition().duration(500).ease(d3.easeExp).delay(function(d, i) {
            return i * 10
          })
          .attr("r", 0)
      }

      // only do stuff if it's not the first step!
      if (response.index > 1) {
        d3.selectAll(".ch1cities").remove();
        var n = response.index - 2,
          game = data[n],
          prevgame = game;
        if (n > 0) prevgame = data[n - 1];

        var slider = document.getElementById("yearSlider"),
          sliderLabel = document.getElementById("yearValue");

        var t1loc = camelize(game.t1loc),
          nth = countThis(cities, t1loc),
          thisCity = "city-" + t1loc + "-" + nth,
          t1 = parseCoord(game.t1coord),
          t2 = parseCoord(game.t2coord),
          t3 = parseCoord(game.t3coord),
          t4 = parseCoord(game.t4coord),
          prevt1 = parseCoord(prevgame.t1coord);

        if (game.t1.length > 0) {
          trophyG.select("." + game.trophySelector)
            .transition().duration(250)
            .attr("x", projection(t1)[0] - 25)
            .attr("y", projection(t1)[1] - 25)
            .style("opacity", "1")
        }

        // if (game.t2.length > 0) {
        //   circleG.append("line")
        //     .attr("x1", projection(t1)[0])
        //     .attr("y1", projection(t1)[1])
        //     .attr("x2", projection(t1)[0])
        //     .attr("y2", projection(t1)[1])
        //     .style("fill", "none")
        //     .style("stroke", "#666")
        //     .style("opacity", .1)
        //     .transition().duration(500)
        //     .attr("x2", projection(t2)[0])
        //     .attr("y2", projection(t2)[1])
        //     .transition().delay(500).duration(500)
        //     .attr("x1", projection(t2)[0])
        //     .attr("y1", projection(t2)[1])
        //
        //
        //   circleG.append("circle")
        //     .attr("class", "t2-" + game.number)
        //     .attr("cx", projection(t2)[0])
        //     .attr("cy", projection(t2)[1])
        //     .attr("r", 0)
        //     .style("fill", "#666")
        //     .style("stroke", "none")
        //     .style("opacity", .1)
        //     .transition().delay(500).duration(200)
        //     .attr("r", 2)
        //     .transition().delay(500).duration(500)
        //     .attr("r", 0)
        // }
        //
        // if (game.t3.length > 0) {
        //   circleG.append("line")
        //     .attr("x1", projection(t1)[0])
        //     .attr("y1", projection(t1)[1])
        //     .attr("x2", projection(t1)[0])
        //     .attr("y2", projection(t1)[1])
        //     .style("fill", "none")
        //     .style("stroke", "#666")
        //     .style("opacity", .1)
        //     .transition().duration(500)
        //     .attr("x2", projection(t3)[0])
        //     .attr("y2", projection(t3)[1])
        //     .transition().delay(500).duration(500)
        //     .attr("x1", projection(t3)[0])
        //     .attr("y1", projection(t3)[1])
        //
        //
        //   circleG.append("circle")
        //     .attr("class", "t3-" + game.number)
        //     .attr("cx", projection(t3)[0])
        //     .attr("cy", projection(t3)[1])
        //     .attr("r", 0)
        //     .style("fill", "#666")
        //     .style("stroke", "none")
        //     .style("opacity", .1)
        //     .transition().delay(500).duration(200)
        //     .attr("r", 2)
        //     .transition().delay(500).duration(500)
        //     .attr("r", 0)
        // }
        //
        // if (game.t4.length > 0) {
        //   circleG.append("line")
        //     .attr("x1", projection(t1)[0])
        //     .attr("y1", projection(t1)[1])
        //     .attr("x2", projection(t1)[0])
        //     .attr("y2", projection(t1)[1])
        //     .style("fill", "none")
        //     .style("stroke", "#666")
        //     .style("opacity", .1)
        //     .transition().duration(500)
        //     .attr("x2", projection(t4)[0])
        //     .attr("y2", projection(t4)[1])
        //     .transition().delay(500).duration(500)
        //     .attr("x1", projection(t4)[0])
        //     .attr("y1", projection(t4)[1])
        //
        //
        //   circleG.append("circle")
        //     .attr("class", "t4-" + game.number)
        //     .attr("cx", projection(t4)[0])
        //     .attr("cy", projection(t4)[1])
        //     .attr("r", 0)
        //     .style("fill", "#666")
        //     .style("stroke", "none")
        //     .style("opacity", .1)
        //     .transition().delay(500).duration(200)
        //     .attr("r", 2)
        //     .transition().delay(500).duration(500)
        //     .attr("r", 0)
        // }


        if (response.direction === "down") { // on scroll down
          slider.value = game.number;
          sliderLabel.innerHTML = game.year;

          if (game.t1.length > 0) { //draw circles and stuff
            cities.push(t1loc);

            circleG.append("circle")
              .attr("class", "circle-" + game.number)
              .attr("cx", projection(t1)[0])
              .attr("cy", projection(t1)[1])
              .attr("r", nth + 2)
              .style("opacity", opacityScale(nth) / 2)
              .style("fill", game.colour);

            if (nth > 4) { // add text
              mapSVG.append("text")
                .attr("x", projection(t1)[0])
                .attr("y", projection(t1)[1])
                .attr("class", "mapLabel")
                .attr("dx", function() {
                  if (t1loc === "torontoOntario") {
                    return -10
                  } else if (projection(t1)[0] > projection([-79.0558445, 35.9131996])[0]) {
                    return -10
                  } else {
                    return 10
                  }
                })
                .attr("dy", 5)
                .style("text-anchor", function() {
                  if (t1loc === "torontoOntario") {
                    return "end"
                  } else if (projection(t1)[0] > projection([-79.0558445, 35.9131996])[0]) {
                    return "end"
                  } else {
                    return "start"
                  }
                })
                .text(game.t1loc)
                .transition().delay(500).duration(1000).style("opacity", 0).remove();
            } // end add text
          } // end draw circles and stuff
        } else { // end on scroll down
          slider.value = prevgame.number;
          sliderLabel.innerHTML = prevgame.year;
          cities.splice(-1, 1)
          d3.selectAll(".circle-" + game.number).remove()
          if (game.first === "TRUE") {
            trophyG.select("." + game.trophySelector)
              .transition().duration(250)
              .style("opacity", "0")
          }
        } // end on scroll up
      }
    } //end handle steps
  }); //end load data

  var slider = document.getElementById("yearSlider");

  slider.oninput = function() {
    var whereto = this.value
    $('html, body').animate({
      scrollTop: $("#step" + whereto).offset().top - ((windowH / 3))
    }, 0);
  }

} //end section 1

init();

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