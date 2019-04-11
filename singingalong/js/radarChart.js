/////////////////////////////////////////////////////////
/////////////// The Radar Chart Function ////////////////
/////////////// Written by Nadieh Bremer ////////////////
////////////////// VisualCinnamon.com ///////////////////
//////////Updated for d3.js v4 by Ingo Kleiber //////////
/////////// Inspired by the code of alangrafu ///////////
/////////////////////////////////////////////////////////

function RadarChart(id, data, supp, options, overall, pronouns, theword, extras) {
  var cfg = {
    w: 1000, //Width of the circle
    h: 1000, //Height of the circle
    margin: {
      top: 20,
      right: 20,
      bottom: 20,
      left: 20
    }, //The margins of the SVG
    levels: 3, //How many levels or inner circles should there be drawn
    maxValue: 6, //What is the value that the biggest circle will represent
    labelFactor: 1, //How much farther than the radius of the outer circle should the labels be placed
    wrapWidth: 60, //The number of pixels after which a label needs to be given a new line
    opacityArea: 0.5, //The opacity of the area of the blob
    dotRadius: 4, //The size of the colored circles of each blog
    opacityCircles: 0.1, //The opacity of the circles of each blob
    strokeWidth: 2, //The width of the stroke around each blob
    roundStrokes: false, //If true the area and stroke will follow a round path (cardinal-closed)
    color: d3.schemeCategory10 //Color function
  };

  var radius = Math.min(options.w, options.h) / 2;

  var s3colour = d3.scaleLinear()
    .domain([-4, 0, 4])
    .interpolate(d3.interpolateHcl)
    .range([d3.rgb("#027296"), d3.rgb('#C3BCBC'), d3.rgb('#fa4d16')]);

  //Put all of the options into a variable called cfg
  if ('undefined' !== typeof options) {
    for (var i in options) {
      if ('undefined' !== typeof options[i]) {
        cfg[i] = options[i];
      }
    } //for i
  } //if

  //If the supplied maxValue is smaller than the actual one, replace by the max in the data
  var maxValue = Math.max(cfg.maxValue, d3.max(data, function(i) {
    return d3.max(i.map(function(o) {
      return o.value;
    }))
  }));

  var allAxis = (data[0].map(function(i, j) {
      return i.axis
    })), //Names of each axis
    total = allAxis.length, //The number of different axes
    radius = Math.min(cfg.w / 2, cfg.h / 2), //Radius of the outermost circle
    Format = d3.format(".1f"),
    angleSlice = Math.PI * 2 / total; //The width in radians of each "slice"

  //Scale for the radius
  var rScale = d3.scaleLinear()
    .range([0, radius])
    .domain([-5, 5]);

  /////////////////////////////////////////////////////////
  //////////// Create the container SVG and g /////////////
  /////////////////////////////////////////////////////////

  //Remove whatever chart with the same id/class was present before
  d3.select(id).select("svg").remove();

  //Initiate the radar chart SVG
  var svg = d3.select(id).append("svg")
    .attr("width", cfg.w + cfg.margin.left + cfg.margin.right)
    .attr("height", cfg.h + cfg.margin.top + cfg.margin.bottom)
    .attr("class", "radar" + id);
  //Append a g element
  var g = svg.append("g")
    .attr("transform", "translate(" + (cfg.w / 2 + cfg.margin.left) + "," + (cfg.h / 2 + cfg.margin.top) + ")");

  /////////////////////////////////////////////////////////
  ////////// Glow filter for some extra pizzazz ///////////
  /////////////////////////////////////////////////////////

  //Filter for the outside glow
  var filter = g.append('defs').append('filter').attr('id', 'glow'),
    feGaussianBlur = filter.append('feGaussianBlur').attr('stdDeviation', '2.5').attr('result', 'coloredBlur'),
    feMerge = filter.append('feMerge'),
    feMergeNode_1 = feMerge.append('feMergeNode').attr('in', 'coloredBlur'),
    feMergeNode_2 = feMerge.append('feMergeNode').attr('in', 'SourceGraphic');

  /////////////////////////////////////////////////////////
  /////////////// Draw the Circular grid //////////////////
  /////////////////////////////////////////////////////////

  //Wrapper for the grid & axes
  var axisGrid = g.append("g").attr("class", "axisWrapper");

  //Draw the background circles
  axisGrid.selectAll(".levels")
    .data(d3.range(1, (cfg.levels + 1)).reverse())
    .enter()
    .append("circle")
    .attr("class", "gridCircle")
    .attr("r", function(d, i) {
      return radius / cfg.levels * d;
    })
    .style("fill", "none")
    .style("stroke", "#b5b5b5")
    .style("fill-opacity", cfg.opacityCircles)
  // .style("filter", "url(#glow)");

  /////////////////////////////////////////////////////////
  //////////////////// Draw the axes //////////////////////
  /////////////////////////////////////////////////////////

  //Create the straight lines radiating outward from the center
  var axis = axisGrid.selectAll(".axis")
    .data(allAxis)
    .enter()
    .append("g")
    .attr("class", "axis");
  //Append the lines
  axis.append("line")
    .attr("x1", 0)
    .attr("y1", 0)
    .attr("x2", function(d, i) {
      return rScale(maxValue * .85) * Math.cos(angleSlice * i + 51.5 - Math.PI / 2);
    })
    .attr("y2", function(d, i) {
      return rScale(maxValue * .85) * Math.sin(angleSlice * i + 51.5 - Math.PI / 2);
    })
    .attr("class", "line")
    .style("stroke", "#dedede")
    // .style("opacity", .5)
    .style("stroke-dasharray", "4,4")
    .style("stroke-width", "1px");

  //Text indicating at what % each level is
  axisGrid.selectAll(".axisLabelBG")
    .data(d3.range(0, (cfg.levels + 1)).reverse())
    .enter().append("text")
    .attr("class", "axisLabelBG")
    .attr("x", 0)
    .attr("y", function(d) {
      return -d * radius / cfg.levels;
    })
    .attr("dy", function(d, i) {
      if ((maxValue * d) === 0) {
        return "-2.3em"
      } else {
        return "3em"
      }
    })
    .text(function(d, i) {
      if ((maxValue * d) === 12) {
        return "MORE FEM."
      } else {
        if ((maxValue * d) === 6) {
          return ""
        } else {
          if ((maxValue * d) === 0)
            return "MORE MASC."
        }
      }
    });

  axisGrid.selectAll(".axisLabel")
    .data(d3.range(0, (cfg.levels + 1)).reverse())
    .enter().append("text")
    .attr("class", "axisLabel")
    .attr("x", 0)
    .attr("y", function(d) {
      return -d * radius / cfg.levels;
    })
    .attr("dy", function(d, i) {
      if ((maxValue * d) === 0) {
        return "-2.3em"
      } else {
        return "3em"
      }
    })
    .text(function(d, i) {
      if ((maxValue * d) === 12) {
        return "MORE FEM."
      } else {
        if ((maxValue * d) === 6) {
          return ""
        } else {
          if ((maxValue * d) === 0)
            return "MORE MASC."
        }
      }
    });


  var labelRadius = (radius * 1.1);
  var numBars = data[0].length;

  // Labels
  var labels = svg.append('g')
    .classed('labels', true);

  axis.append('def')
    .append('path')
    .attr('id', 'label-path')
    .attr('d', 'm0 ' + -labelRadius + ' a' + labelRadius + ' ' + labelRadius + ' 0 1,1 -0.01 0');

  var offsetPercentage;

  axis
    // .selectAll('text')
    // .data(data)
    // .enter()
    .append('text')
    .attr("class", "s3label")
    .style('text-anchor', 'middle')
    .append('textPath')
    .attr('xlink:href', '#label-path')
    .attr('startOffset', function(d, i) {
      offsetPercentage = i * 100 / numBars + 50 / numBars + '%';
      return offsetPercentage;
    })
    .text(function(d, i) {
      return d;
    });


  /////////////////////////////////////////////////////////
  ///////////// Draw the radar chart blobs ////////////////
  /////////////////////////////////////////////////////////

  //The radial line function
  var radarLine = d3.radialLine()
    .curve(d3.curveLinearClosed)
    .radius(function(d) {
      return rScale(d.value);
    })
    .angle(function(d, i) {
      return angleSlice * i - 50;
    });

  if (cfg.roundStrokes) {
    radarLine.curve(d3.curveCardinalClosed);
  }

  //Create a wrapper for the blobs
  var blobWrapper = g.selectAll(".radarWrapper")
    .data(data)
    .enter().append("g")
    .attr("class", "radarWrapper");

  //Append the backgrounds
  blobWrapper
    .append("path")
    .attr("class", "radarArea")
    .attr("d", function(d, i) {
      return radarLine(d);
    })
    .style("fill", "none")
    .style("fill-opacity", 0)
    .transition().duration(2000)
    .style("fill", function(d, i) {
      // return cfg.color(i);
      return s3colour(overall);
    })
    .style("fill-opacity", cfg.opacityArea);
  // blobWrapper.on("mouseover", function(d, i) {
  //     //Dim all blobs
  //     d3.selectAll(".radarArea")
  //       .transition().duration(200)
  //       .style("fill-opacity", 0.1);
  //     //Bring back the hovered over blob
  //     d3.select(this)
  //       .transition().duration(200)
  //       .style("fill-opacity", 0.9);
  //   })
  //   .on('mouseout', function() {
  //     //Bring back all blobs
  //     d3.selectAll(".radarArea")
  //       .transition().duration(200)
  //       .style("fill-opacity", cfg.opacityArea);
  //   });

  //Create the outlines
  var outline = blobWrapper.append("path")
    .attr("class", "radarStroke")
    .attr("d", function(d, i) {
      return radarLine(d);
    })
    .style("stroke-width", cfg.strokeWidth + "px")
    .style("stroke", function(d, i) {
      // return cfg.color(i);
      return s3colour(overall);
    })
    .style("fill", "none")
  // .style("filter", "url(#glow)");

  // animate path
  var totalLength = outline.node().getTotalLength();
  var duration = 1250;
  var segments = [0];

  for (var i = 1; i < data[0].length; i++) {
    var tmp = svg.append("path")
      .datum([data[0][i - 1], data[0][i]])
      .attr("d", radarLine);
    segments.push(segments[i - 1] + tmp.node().getTotalLength());
    tmp.remove();
  }

  outline
    .style("opacity", 0)
    .attr("stroke-dasharray", totalLength + " " + totalLength)
    .attr("stroke-dashoffset", totalLength)
    .transition()
    .duration(duration)
    .style("opacity", 1)
    // .ease("linear")
    .attr("stroke-dashoffset", 0);


  //Append the circles
  var blobCircles = blobWrapper.selectAll(".radarCircle")
    .data(function(d, i) {
      return d;
    })
    .enter().append("circle")
    .attr("class", "radarCircle")
    .attr("r", cfg.dotRadius)
    .attr("cx", function(d, i) {
      return rScale(d.value) * Math.cos(angleSlice * i - Math.PI / 2);
    })
    .attr("cy", function(d, i) {
      return rScale(d.value) * Math.sin(angleSlice * i - Math.PI / 2);
    })
    .style("fill", function(d, i, j) {
      // return cfg.color(j);
      return s3colour(overall);
    })
    .style("fill-opacity", 0);

  blobCircles
    .transition()
    .delay(function(d, i) {
      return segments[i] * (500 / totalLength);
    })
    // .ease("linear")
    .attr("r", cfg.dotRadius)
    .attr("cx", function(d, i) {
      return rScale(d.value) * Math.cos(angleSlice * i - 50 - Math.PI / 2);
    })
    .attr("cy", function(d, i) {
      return rScale(d.value) * Math.sin(angleSlice * i - 50 - Math.PI / 2);
    })
    .style("fill", function(d, i, j) {
      // return cfg.color(j);
      if (d.value === 0.000001) {
        return "#fff"
      } else {
        return s3colour(overall);
      }
    })
    .style("stroke", function(d, i, j) {
      if (d.value === 0.000001) {
        return s3colour(overall);
      } else {
        return "none"
      }
    })
    .style("fill-opacity", 1);

  /////////////////////////////////////////////////////////
  //////// Append invisible circles for tooltip ///////////
  /////////////////////////////////////////////////////////

  // Set up title
  var s3title = d3.select(id).append("div").attr("class", "s3title").style("opacity", 0)
  s3title.transition().duration(500).style("opacity", 1);
  var p = pronouns;
  if (overall >= 0) {
    p = p.split("/")[1];
  } else {
    p = p.split("/")[0];
  }
  if (pronouns === "him/her") {
    var s3title_hl = s3title.append("span").attr("class", "s3title-hl").html(theword).style("background-color", s3colour(overall))
    var s3title_pronoun = s3title.append("span").attr("class", "s3title-pronoun").html("&nbsp;" + p);
  } else {
    var s3title_pronoun = s3title.append("span").attr("class", "s3title-pronoun").html(p + "&nbsp;");
    var s3title_hl = s3title.append("span").attr("class", "s3title-hl").html(theword).style("background-color", s3colour(overall))
  }

  // set up infobox
  var s3dataBox = d3.select(id).append("div").attr("class", "s3dataBox").style("border-color", s3colour(overall));

  //Wrapper for the invisible circles on top
  var blobCircleWrapper = g.selectAll(".radarCircleWrapper")
    .data(data)
    .enter().append("g")
    .attr("class", "radarCircleWrapper");

  //Append a set of invisible circles on top for the mouseover pop-up
  blobCircleWrapper.selectAll(".radarInvisibleCircle")
    .data(function(d, i) {
      return d;
    })
    .enter().append("circle")
    .attr("class", "radarInvisibleCircle")
    .attr("r", cfg.dotRadius * 1.5)
    .attr("cx", function(d, i) {
      return rScale(d.value) * Math.cos(angleSlice * i - 50 - Math.PI / 2);
    })
    .attr("cy", function(d, i) {
      return rScale(d.value) * Math.sin(angleSlice * i - 50 - Math.PI / 2);
    })
    .style("fill", "none")
    .style("pointer-events", "all")
    .on("mousemove", function(d, i) {
      d3.select(this).style("stroke", s3colour(overall));

      var fOrP = "follow",
        mOrF = "feminine",
        vc = 0;

      if (d.freq > 0) {
        mOrF = "feminine";
        vc = 4;
      } else {
        mOrF = "masculine";
        vc = -4;
      }

      if (pronouns === "him/her") {
        fOrP = "precede";
      } else {
        fOrP = "follow";
      }

      $(".s3dataBox")
        .position({
          my: "left top",
          at: "left+10px bottom+10px",
          of: $(this),
          collision: "flip",
          within: ".section3"
        })
        .css("border-color", s3colour(overall))
        .css("display", "block")
        .show();

      $(".s3dataBox").html("<div class='s3dataBox_wrapper'><div class='tooltip-main'></div><div class='tooltip-example'></div></div>")

      if (d.value != 0.000001) {
        $(".tooltip-main").html("In <span class='underline tooltip-genre'></span> songs, the word <span class='underline'>" + theword + "</span> <span class='tt-e'></span> is about <span class='underline'>" + Format(Math.abs(d.freq)) + "x</span> more likely to " + fOrP + " a <span class='underline'>" + mOrF + "</span> pronoun.")
        $(".tooltip-example").html("<div class='tt-fe-i'>For example... In <span class='underline tt-fe-sa'></span> <span class='underline tt-fe-st'></span> (<span class='tt-fe-sy'></span>):</div><div class='s3lyric1'></div><div class='s3lyric2'></div><div class='s3lyric3'></div>")
      } else {
        $(".tooltip-main").html("We could not find this word in this genre.")
      }

      if (extras != "") {
        $(".tt-e").html("(" + extras + ")");
      }

      $(".underline").css("border-color", s3colour(overall)).css("color", s3colour(overall));

      if (i === 0) {
        $(".tooltip-genre").html("blues");
        $(".s3lyric1").html(supp.supplemental.blues.lyric1);
        $(".s3lyric2").html(supp.supplemental.blues.lyric2);
        $(".s3lyric3").html(supp.supplemental.blues.lyric3);
        $(".tt-fe-sa").html(supp.supplemental.blues.artist + "&rsquo;s");
        $(".tt-fe-st").html(supp.supplemental.blues.song);
        $(".tt-fe-sy").html(supp.supplemental.blues.year);
      }
      if (i === 1) {
        $(".tooltip-genre").html("country");
        $(".s3lyric1").text(supp.supplemental.country.lyric1);
        $(".s3lyric2").text(supp.supplemental.country.lyric2);
        $(".s3lyric3").text(supp.supplemental.country.lyric3);
        $(".tt-fe-sa").html(supp.supplemental.country.artist + "&rsquo;s");
        $(".tt-fe-st").html(supp.supplemental.country.song);
        $(".tt-fe-sy").html(supp.supplemental.country.year);
      }
      if (i === 2) {
        $(".tooltip-genre").html("electronic");
        $(".s3lyric1").text(supp.supplemental.electronic.lyric1);
        $(".s3lyric2").text(supp.supplemental.electronic.lyric2);
        $(".s3lyric3").text(supp.supplemental.electronic.lyric3);
        $(".tt-fe-sa").html(supp.supplemental.blues.artist + "&rsquo;s");
        $(".tt-fe-st").html(supp.supplemental.electronic.song);
        $(".tt-fe-sy").html(supp.supplemental.electronic.year);
      }
      if (i === 3) {
        $(".tooltip-genre").html("folk");
        $(".s3lyric1").text(supp.supplemental.folk.lyric1);
        $(".s3lyric2").text(supp.supplemental.folk.lyric2);
        $(".s3lyric3").text(supp.supplemental.folk.lyric3);
        $(".tt-fe-sa").html(supp.supplemental.blues.artist + "&rsquo;s");
        $(".tt-fe-st").html(supp.supplemental.folk.song);
        $(".tt-fe-sy").html(supp.supplemental.folk.year);
      }
      if (i === 4) {
        $(".tooltip-genre").html("hip-hop");
        $(".s3lyric1").text(supp.supplemental.hiphop.lyric1);
        $(".s3lyric2").text(supp.supplemental.hiphop.lyric2);
        $(".s3lyric3").text(supp.supplemental.hiphop.lyric3);
        $(".tt-fe-sa").html(supp.supplemental.blues.artist + "&rsquo;s");
        $(".tt-fe-st").html(supp.supplemental.hiphop.song);
        $(".tt-fe-sy").html(supp.supplemental.hiphop.year);
      }
      if (i === 5) {
        $(".tooltip-genre").html("jazz");
        $(".s3lyric1").text(supp.supplemental.jazz.lyric1);
        $(".s3lyric2").text(supp.supplemental.jazz.lyric2);
        $(".s3lyric3").text(supp.supplemental.jazz.lyric3);
        $(".tt-fe-sa").html(supp.supplemental.blues.artist + "&rsquo;s");
        $(".tt-fe-st").html(supp.supplemental.jazz.song);
        $(".tt-fe-sy").html(supp.supplemental.jazz.year);
      }
      if (i === 6) {
        $(".tooltip-genre").html("metal");
        $(".s3lyric1").text(supp.supplemental.metal.lyric1);
        $(".s3lyric2").text(supp.supplemental.metal.lyric2);
        $(".s3lyric3").text(supp.supplemental.metal.lyric3);
        $(".tt-fe-sa").html(supp.supplemental.blues.artist + "&rsquo;s");
        $(".tt-fe-st").html(supp.supplemental.metal.song);
        $(".tt-fe-sy").html(supp.supplemental.metal.year);
      }
      if (i === 7) {
        $(".tooltip-genre").html("oldies");
        $(".s3lyric1").text(supp.supplemental.oldies.lyric1);
        $(".s3lyric2").text(supp.supplemental.oldies.lyric2);
        $(".s3lyric3").text(supp.supplemental.oldies.lyric3);
        $(".tt-fe-sa").html(supp.supplemental.blues.artist + "&rsquo;s");
        $(".tt-fe-st").html(supp.supplemental.oldies.song);
        $(".tt-fe-sy").html(supp.supplemental.oldies.year);
      }
      if (i === 8) {
        $(".tooltip-genre").html("other");
        $(".s3lyric1").text(supp.supplemental.other.lyric1);
        $(".s3lyric2").text(supp.supplemental.other.lyric2);
        $(".s3lyric3").text(supp.supplemental.other.lyric3);
        $(".tt-fe-sa").html(supp.supplemental.blues.artist + "&rsquo;s");
        $(".tt-fe-st").html(supp.supplemental.other.song);
        $(".tt-fe-sy").html(supp.supplemental.other.year);
      }
      if (i === 9) {
        $(".tooltip-genre").html("pop");
        $(".s3lyric1").text(supp.supplemental.pop.lyric1);
        $(".s3lyric2").text(supp.supplemental.pop.lyric2);
        $(".s3lyric3").text(supp.supplemental.pop.lyric3);
        $(".tt-fe-sa").html(supp.supplemental.blues.artist + "&rsquo;s");
        $(".tt-fe-st").html(supp.supplemental.pop.song);
        $(".tt-fe-sy").html(supp.supplemental.pop.year);
      }
      if (i === 10) {
        $(".tooltip-genre").html("reggae");
        $(".s3lyric1").text(supp.supplemental.reggae.lyric1);
        $(".s3lyric2").text(supp.supplemental.reggae.lyric2);
        $(".s3lyric3").text(supp.supplemental.reggae.lyric3);
        $(".tt-fe-sa").html(supp.supplemental.blues.artist + "&rsquo;s");
        $(".tt-fe-st").html(supp.supplemental.reggae.song);
        $(".tt-fe-sy").html(supp.supplemental.reggae.year);
      }
      if (i === 11) {
        $(".tooltip-genre").html("rock");
        $(".s3lyric1").text(supp.supplemental.rock.lyric1);
        $(".s3lyric2").text(supp.supplemental.rock.lyric2);
        $(".s3lyric3").text(supp.supplemental.rock.lyric3);
        $(".tt-fe-sa").html(supp.supplemental.blues.artist + "&rsquo;s");
        $(".tt-fe-st").html(supp.supplemental.rock.song);
        $(".tt-fe-sy").html(supp.supplemental.rock.year);
      }
      if (i === 12) {
        $(".tooltip-genre").html("soul");
        $(".s3lyric1").text(supp.supplemental.soul.lyric1);
        $(".s3lyric2").text(supp.supplemental.soul.lyric2);
        $(".s3lyric3").text(supp.supplemental.soul.lyric3);
        $(".tt-fe-sa").html(supp.supplemental.blues.artist + "&rsquo;s");
        $(".tt-fe-st").html(supp.supplemental.soul.song);
        $(".tt-fe-sy").html(supp.supplemental.soul.year);
      }

      // $(this).css("stroke", s3colour(overall))
    })
    // .on("click", function(d) {
    // var artist = d3.select(this.parentNode).data()[0].artist;
    // var artist = artistIDMap.get(+d3.select(this.parentNode).data().key).artist;

    // var fileString = "audio/"+artistName+"-"+d.Word+".wav";
    // var fileString = "https://open.spotify.com/embed/track/7kgdVX2Mk8iJ6H3JDiktAM"
    // var audio = new Audio(fileString);
    // audio.play();
    // })
    .on("mouseleave", function() {
      $(this).css("stroke", "none")
      $(".s3dataBox")
        .stop()
        .fadeOut(function() {
          $(this).removeAttr("style");
        });
    });

  /////////////////////////////////////////////////////////
  /////////////////// Helper Function /////////////////////
  /////////////////////////////////////////////////////////

  function isOdd(num) {
    return num % 2;
  }

  //Taken from http://bl.ocks.org/mbostock/7555321
  //Wraps SVG text
  function wrap(text, width) {
    text.each(function() {
      var text = d3.select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.4, // ems
        y = text.attr("y"),
        x = text.attr("x"),
        dy = parseFloat(text.attr("dy")),
        tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "em");

      while (word = words.pop()) {
        line.push(word);
        tspan.text(line.join(" "));
        if (tspan.node().getComputedTextLength() > width) {
          line.pop();
          tspan.text(line.join(" "));
          line = [word];
          tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
        }
      }
    });
  } //wrap

} //RadarChart

function UpdateRadarChart(id, data, options, overall) {

  d3.selectAll(".s3dataBox").remove();

  // animate path
  var outline = d3.selectAll(".radarStroke"),
    blobWrapper = d3.selectAll(".radarArea"),
    blobCircles = d3.selectAll(".radarCircle"),
    s3title = d3.selectAll(".s3title");
  var totalLength = outline.node().getTotalLength() + 100;

  s3title.transition().duration(500).style("opacity", 0).remove();
  outline.attr("stroke-dashoffset", 0)
    .transition().duration(750)
    .attr("stroke-dasharray", totalLength + " " + totalLength)
    .attr("stroke-dashoffset", -totalLength)
  // .transition().duration(100).style("opacity", 0);
  blobWrapper.transition().duration(750).style("opacity", 0);
  blobCircles.transition().duration(750).style("opacity", 0);

}
