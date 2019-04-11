var isMobile = false; //initiate as false
// device detection
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
  /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;

jQuery(document).ready(function($) {
  //move nav element position according to window width
  moveNavigation();
  $(window).on('resize', function() {
    (!window.requestAnimationFrame) ? setTimeout(moveNavigation, 300): window.requestAnimationFrame(moveNavigation);
  });

  //mobile version - open/close navigation
  $('.cd-nav-trigger').on('click', function(event) {
    event.preventDefault();
    if ($('header').hasClass('nav-is-visible')) $('.moves-out').removeClass('moves-out');

    $('header').toggleClass('nav-is-visible');
    $('.cd-main-nav').toggleClass('nav-is-visible');
    $('.cd-main-content').toggleClass('nav-is-visible');
  });

  //mobile version - go back to main navigation
  $('.go-back').on('click', function(event) {
    event.preventDefault();
    $('.cd-main-nav').removeClass('moves-out');
  });

  //open sub-navigation
  $('.cd-subnav-trigger').on('click', function(event) {
    event.preventDefault();
    $('.cd-main-nav').toggleClass('moves-out');
    $('#menulink').toggleClass('.menulink-opp');
    $('.cd-logo').toggleClass('.cd-logo-opp');
  });

  function moveNavigation() {
    var navigation = $('.cd-main-nav-wrapper');
    var screenSize = checkWindowWidth();
    if (screenSize) {
      //desktop screen - insert navigation inside header element
      navigation.detach();
      navigation.insertBefore('.cd-nav-trigger');
    } else {
      //mobile screen - insert navigation after .cd-main-content element
      navigation.detach();
      navigation.insertAfter('.cd-main-content');
    }
  }

  function checkWindowWidth() {
    var mq = window.getComputedStyle(document.querySelector('header'), '::before').getPropertyValue('content').replace(/"/g, '').replace(/'/g, "");
    return (mq == 'mobile') ? false : true;
  }
});

var titleHeight = $('.title').height();

$(window).scroll(function() {
  if ($(window).width() > 768) {
    if ($(window).scrollTop() > titleHeight) {
      $('.project-info').css('position', 'fixed').css('top', '0');
    } else {
      $('.project-info').css('position', 'static');
    }
  } else {
    if ($(window).scrollTop() > titleHeight) {
      $('.project-info').css('position', 'static');
    } else {
      $('.project-info').css('position', 'static');
    }
  }
});

$(".btn-group > .btn").click(function() {
  $(this).addClass("active").siblings().removeClass("active");
});

// ***********************************************************
// Visualization

// COLOUR SCALES
var mS1 = d3.scaleLinear().domain([10, 150])
  .interpolate(d3.interpolateHcl)
  .range([d3.rgb("#88cae3"), d3.rgb('#027296')]);

var fS1 = d3.scaleLinear().domain([10, 150])
  .interpolate(d3.interpolateHcl)
  .range([d3.rgb("#fdae95"), d3.rgb('#fa4d16')]);


d3.selectAll(".countsData").on("change", selectDataS1);

// on pronoun change
function selectDataS1() {
  var value = this.value;
  if (value === "his") {
    s1drawNew("following", "his", "hers", "all");
  } else {
    if (value === "him") {
      s1drawNew("preceding", "him", "her", "all");
    } else {
      s1drawNew("following", "he", "she", "all");
    }
  };
}


d3.csv("data/s1.csv", function(data) {

  var s1l_container = d3.select(".s1l").append("div").attr("class", "s1container");
  var s1r_container = d3.select(".s1r").append("div").attr("class", "s1container");

  for (var i = 0; i < data.length; i++) {
    if (data[i].year === "all" && data[i].category === "he") {
      s1l_container.append("span").attr("class", "s1word").html(data[i].word)
        .style("color", mS1(data[i].total));
    }
  };

  for (var i = 0; i < data.length; i++) {
    if (data[i].year === "all" && data[i].category === "she") {
      s1r_container.append("span").attr("class", "s1word").html(data[i].word)
        .style("color", fS1(data[i].total));
    }
  }
});

function s1drawNew(prepro, pro, pro2, year) {
  $(".s1container").fadeOut(function() {
    $(".s1l").html('<div class="s1legend s1legendR">Most common words <strong>' + prepro + ' ' + pro + '</strong></div>')
    $(".s1r").html('<div class="s1legend s1legendL">Most common words <strong>' + prepro + ' ' + pro2 + '</strong></div>')


    var s1l_container = d3.select(".s1l").append("div").attr("class", "s1container");
    var s1r_container = d3.select(".s1r").append("div").attr("class", "s1container");
    d3.csv("data/s1.csv", function(data) {

      for (var i = 0; i < data.length; i++) {
        if (data[i].year === year && data[i].category === pro) {
          s1l_container.append("span").attr("class", "s1word").html(data[i].word)
            .style("color", mS1(data[i].total)).style("opacity", 0).transition().duration(750).style("opacity", 1);
        }
      };

      for (var i = 0; i < data.length; i++) {
        if (data[i].year === year && data[i].category === pro2) {
          s1r_container.append("span").attr("class", "s1word").html(data[i].word)
            .style("color", fS1(data[i].total)).style("opacity", 0).transition().duration(750).style("opacity", 1);
        }
      }
    });

  }).fadeIn();

}

/////////////////// S4 LINE GRAPH////////////////////
////////// Sortable bypronoun. +/- values///////////

// Get the dataset on input change
d3.selectAll(".lineData").on("change", s4selectData);

var s4margin = {
    top: 30,
    right: 60,
    bottom: 10,
    left: 60
  },
  s4width = $(".section4").width() - s4margin.left - s4margin.right,
  s4height = $(".section4").height() - s4margin.top - s4margin.bottom;

// Create the svg canvas in the "graph" div
var s4svg = d3.select(".section4")
  .append("svg")
  .style("width", s4width + s4margin.left + s4margin.right + "px")
  .style("height", s4height + s4margin.top + s4margin.bottom + "px")
  .attr("width", s4width + s4margin.left + s4margin.right)
  .attr("height", s4height + s4margin.top + s4margin.bottom)
  .append("g")
  .attr("transform", "translate(" + s4margin.left + "," + s4margin.top + ")")
  .attr("class", "svg");

// Set the ranges
var s4xF = d3.scaleTime().range([s4width / 2, (s4width / 2) + ((s4width / 2) * .33), (s4width / 2) + ((s4width / 2) * .67), s4width]);
var s4xM = d3.scaleTime().range([s4width / 2, (s4width / 2) * .67, (s4width / 2) * .33, 0]);
var s4y = d3.scaleLinear().domain([1967, 2010]).range([s4height, 0]);

s4xM.domain([0, 10, 25, 100]);
s4xF.domain([0, 10, 25, 100]);

// Declare nests as empty VARIABLES
var Alinenest,
  Blinenest,
  Clinenest;

// Define the line
var valueLine = d3.line()
  .curve(d3.curveCatmullRom)
  .x(function(d) {
    if (d.word1 === "he" || d.word1 === "his" || d.word1 === "him" || d.word1 === "hims") {
      return s4xM(+d.totalPer);
    } else {
      if (d.word1 === "she" || d.word1 === "hers" || d.word1 === "her") {
        return s4xF(+d.totalPer);
      }
    }
  })
  .y(function(d) {
    return s4y(d.year);
  })

//  Set up the x axis
var s4xAxisM = d3.axisBottom(s4xM).tickSize(s4height).tickValues([0, 10, 20, 40, 80]).tickFormat(d3.format(".2r"));
var s4xAxisF = d3.axisBottom(s4xF).tickSize(s4height).tickValues([0, 10, 20, 40, 80]).tickFormat(d3.format(".2r"));
var s4yAxis = d3.axisLeft(s4y).tickSize(0).tickFormat(d3.format(""));

createLines();
setTimeout(function() {
  drawLines("Aline");
  loadWordSearch("Aline");
}, 1000)

function s4selectData() {
  var value = this.value;
  removeLines(value);
  setTimeout(function() {
    drawLines(value);
    loadWordSearch(value);
  }, 500)
}

function removeLines(value) {
  var theline;
  var theline = d3.selectAll(".s4line:not(." + value + ")")
  var totalLength = theline.node().getTotalLength();

  theline
    .attr("stroke-dashoffset", 0)
    .transition().duration(500)
    .attr("stroke-dasharray", totalLength + " " + totalLength)
    .attr("stroke-dashoffset", -totalLength)
    .style("opacity", 0)
    .transition().delay(500).duration(100)
    .style("display", "none");
  // .remove();
}

function drawLines(value) {
  d3.selectAll(".s4options").remove();

  var mouselabelBG = s4svg.append("text")
    .attr("class", "s4mouselabelBG")
    .style("display", "none");

  var mouselabel = s4svg.append("text")
    .attr("class", "s4mouselabel")
    .style("display", "none");

  var theline = d3.selectAll("." + value)

  // MOUSEOVER
  if (!isMobile) {
    theline.on("mouseover", function(d) {
        if (!clickable) {
          d3.select(this).style("stroke-width", 2);
          d3.select(this).style("opacity", 1);
          d3.select(".s4mouselabelBG").style("display", "block").attr("x", d3.mouse(this)[0]).attr("y", d3.mouse(this)[1]).text(d.key.split("-")[1]);
          d3.select(".s4mouselabel").style("display", "block").attr("x", d3.mouse(this)[0]).attr("y", d3.mouse(this)[1]).text(d.key.split("-")[1]);
        }
      })
      .on("click", function(d) {
        d3.selectAll(".s4line:not(this)").style("opacity", .1)
        d3.select(this).style("stroke-width", 2);
        d3.select(this).style("opacity", 1);
        selectLine(d.key);
        // clickable = true;
      })
      .on("mouseout", function(d) {
        if (!clickable) {
          d3.select(this).style("stroke-width", .2);
          d3.selectAll(".s4mouselabelBG").style("display", "none");
          d3.selectAll(".s4mouselabel").style("display", "none");
          deselectLine();
        }
      })
  } else {
    theline.on("click", function(d) {
        d3.selectAll(".s4line:not(this)").style("opacity", .1)
        d3.select(this).style("stroke-width", 2);
        d3.select(this).style("opacity", 1);
        selectLine(d.key);
      })
      .on("mouseout", function(d) {
        if (!clickable) {
          d3.select(this).style("stroke-width", .2);
          d3.selectAll(".s4mouselabelBG").style("display", "none");
          d3.selectAll(".s4mouselabel").style("display", "none");
          deselectLine();
        }
      })
  }

  // ANIMATE
  var totalLength = theline.node().getTotalLength();
  var duration = 500;
  theline
    .style("display", "block")
    .attr("stroke-dasharray", totalLength + " " + totalLength)
    .attr("stroke-dashoffset", -totalLength)
    .transition()
    .duration(duration)
    .style("opacity", 1)
    .attr("stroke-dashoffset", 0);

  // theline.style("display", "block").transition().duration(500).style("opacity", 1)
}

function createLines() {

  // AXES
  s4svg.append("g")
    .attr("class", "x axis s4xa")
    // .attr("transform", "translate(0," + height + ")")
    .call(s4xAxisM);

  s4svg.append("g")
    .attr("class", "x axis s4xa")
    // .attr("transform", "translate(0," + height + ")")
    .call(s4xAxisF);

  s4svg.append("g")
    .attr("class", "x axis s4xa")
    .attr("transform", "translate(0," + parseInt(-s4height - 25) + ")")
    .call(s4xAxisM);

  s4svg.append("g")
    .attr("class", "x axis s4xa")
    .attr("transform", "translate(0," + parseInt(-s4height - 25) + ")")
    .call(s4xAxisF);

  s4svg.append("g")
    .attr("class", "y axis s4yt")
    .attr("transform", "translate(" + parseInt(s4width / 2 + 3) + ",0)")
    .call(s4yAxis);

  s4svg.append("g")
    .attr("class", "y axis s4ya")
    .attr("transform", "translate(" + parseInt(s4width / 2 + 3) + ",0)")
    .call(s4yAxis);

  // C DATA
  d3.csv("data/s4c.csv", function(error, data) {
    if (error) throw error;
    // DATA
    data.forEach(function(d) {
      d.year = parseInt(d.year);
      d.totalPer = +d.totalPer;
      d.pronounWord2 = d.word1 + "-" + d.word2
    });
    Clinenest = d3.nest()
      .key(function(d) {
        return d.pronounWord2;
      })
      .entries(data)
    // LINE
    var theline = s4svg.selectAll(".Cline")
      .data(Clinenest)
      .enter()
      .append("path")
      // .attr("class", "line s4line Cline")
      .attr("class", function(d) {
        return "line s4line Cline " + d.key
      })
      .attr("d", function(d) {
        return valueLine(d.values)
      })
      .style("opacity", 0)
      .style("display", "none")
      .style("stroke", function(d) {
        var pn = d.key.split("-")[0];
        if (pn === "he" || pn === "his" || pn === "him" || pn === "hims") {
          return "#027296";
        } else {
          if (pn === "she" || pn === "hers" || pn === "her") {
            return "#fa4d16";
          }
        }
      });
  });

  // B DATA
  d3.csv("data/s4b.csv", function(error, data) {
    if (error) throw error;
    // DATA
    data.forEach(function(d) {
      d.year = parseInt(d.year);
      d.totalPer = +d.totalPer;
      d.pronounWord2 = d.word1 + "-" + d.word2
    });
    Blinenest = d3.nest()
      .key(function(d) {
        return d.pronounWord2;
      })
      .entries(data)
    // LINE
    var theline = s4svg.selectAll(".Bline")
      .data(Blinenest)
      .enter()
      .append("path")
      // .attr("class", "line s4line Bline")
      .attr("class", function(d) {
        return "line s4line Bline " + d.key
      })
      .attr("d", function(d) {
        return valueLine(d.values)
      })
      .style("opacity", 0)
      .style("display", "none")
      .style("stroke", function(d) {
        var pn = d.key.split("-")[0];
        if (pn === "he" || pn === "his" || pn === "him" || pn === "hims") {
          return "#027296";
        } else {
          if (pn === "she" || pn === "hers" || pn === "her") {
            return "#fa4d16";
          }
        }
      });
  });

  d3.csv("data/s4a.csv", function(error, data) {
    if (error) throw error;

    // DATA
    data.forEach(function(d) {
      d.year = parseInt(d.year);
      d.totalPer = +d.totalPer;
      d.pronounWord2 = d.word1 + "-" + d.word2
    });

    Alinenest = d3.nest()
      .key(function(d) {
        return d.pronounWord2;
      })
      .entries(data);

    console.log(Alinenest)

    // // Add a label to the y axis
    // s4svg.append("text")
    //   .attr("transform", "rotate(-90)")
    //   .attr("y", 0 - 60)
    //   .attr("x", 0 - (s4height / 2))
    //   .attr("dy", "1em")
    //   .style("text-anchor", "middle")
    //   .text("Monthly Sales")
    //   .attr("class", "y axis label");

    // LINE
    var theline = s4svg.selectAll(".Aline")
      .data(Alinenest)
      .enter()
      .append("path")
      // .attr("class", "line s4line Aline")
      .attr("class", function(d) {
        return "line s4line Aline " + d.key
      })
      .attr("d", function(d) {
        return valueLine(d.values)
      })
      .style("opacity", 0)
      .style("display", "none")
      .style("stroke", function(d) {
        var pn = d.key.split("-")[0];
        if (pn === "he" || pn === "his" || pn === "him" || pn === "hims") {
          return "#027296";
        } else {
          if (pn === "she" || pn === "hers" || pn === "her") {
            return "#fa4d16";
          }
        }
      });
  })
}

function loadWordSearch(value) {
  var nest;
  if (value === "Aline") {
    nest = Alinenest;
  } else {
    if (value === "Bline") {
      nest = Blinenest;
    } else {
      nest = Clinenest
    }
  };

  // SELECT BOX
  var select = d3.select(".s4wordsearch");

  $('.s4wordsearch').select2({
    placeholder: "Find a word...",
    allowClear: !0,
    width: "150px"
  });
  $('.s4wordsearch').on("select2:select", wordsearch);
  $('.s4wordsearch').on("select2:unselect", wordsearchClear);

  select.append("option")
    .attr("value", "")
    .text("");

  select.selectAll("option")
    .data(nest)
    .enter()
    .append("option")
    .attr("class", "s4options")
    .attr("value", function(d) {
      return d.key;
    })
    .text(function(d) {
      var pn = d.key.split("-")[0],
        wrd = d.key.split("-")[1];

      if (pn === "her" || pn === "him") {
        return wrd + " (" + pn + ")";
      } else {
        if (pn === "hers") {
          pn = "her";
          return "(" + pn + ") " + wrd;
        } else {
          if (pn === "hims") {
            pn = "him";
            return "(" + pn + ") " + wrd;
          } else {
            return "(" + pn + ") " + wrd;
          }
        }
      }
    })

  var s4databox = d3.select(".s4").append("div").attr("class", "s4databox");
}

var wordsearched = false,
  clickable = false;

function wordsearch() {
  var value = $(".s4wordsearch").val();
  selectLine(value);
  if (value != null) {
    d3.selectAll(".s4line").style("opacity", .1);
    d3.selectAll("." + value).style("opacity", 1).style("stroke-width", "2px");
  }
}

function wordsearchClear() {
  deselectLine()
  d3.selectAll(".s4line").style("opacity", 1).style("stroke-width", ".2px")
}

function selectLine(value) {

  var pn = value.split("-")[0],
    wrd = value.split("-")[1],
    string,
    newd;

  if (pn === "she" || pn === "he") {
    newd = Alinenest.filter(function(d) {
      return d.key === value;
    });
  } else {
    if (pn === "hims" || pn === "hers" || pn === "his") {
      newd = Blinenest.filter(function(d) {
        return d.key === value;
      });
    } else {
      newd = Clinenest.filter(function(d) {
        return d.key === value;
      });
    }
  }
  var newn = newd[0].values;

  s4svg.selectAll(".s4circle")
    .data(newn)
    .enter().append("circle")
    .attr("class", "s4circle")
    .attr("r", 3)
    .attr("cx", function(d) {
      if (d.word1 === "he" || d.word1 === "his" || d.word1 === "him") {
        return s4xM(+d.totalPer);
      } else {
        if (d.word1 === "she" || d.word1 === "hers" || d.word1 === "her") {
          return s4xF(+d.totalPer);
        }
      }
    })
    .attr("cy", function(d) {
      return s4y(d.year);
    })
    .style("fill", function(d) {
      if (pn === "he" || pn === "his" || pn === "him" || pn === "hims") {
        return "#027296";
      } else {
        if (pn === "she" || pn === "hers" || pn === "her") {
          return "#fa4d16";
        }
      }
    })
    .style("opacity", 0)
    .transition().duration(200)
    .style("opacity", 1);

  s4svg.selectAll(".s4labelsBG")
    .data(newn)
    .enter().append("text")
    .attr("class", "s4labelsBG")
    .attr("x", function(d, i) {
      if (d.word1 === "he" || d.word1 === "his" || d.word1 === "him") {
        return s4xM(+d.totalPer);
      } else {
        if (d.word1 === "she" || d.word1 === "hers" || d.word1 === "her") {
          return s4xF(+d.totalPer);
        }
      }
    })
    .attr("y", function(d) {
      return s4y(d.year);
    })
    .attr("dy", 3)
    .attr("dx", 10)
    .text(function(d, i) {
      return d.totalPer;
    })

  s4svg.selectAll(".s4labels")
    .data(newn)
    .enter().append("text")
    .attr("class", "s4labels")
    .attr("x", function(d, i) {
      if (d.word1 === "he" || d.word1 === "his" || d.word1 === "him") {
        return s4xM(+d.totalPer);
      } else {
        if (d.word1 === "she" || d.word1 === "hers" || d.word1 === "her") {
          return s4xF(+d.totalPer);
        }
      }
    })
    .attr("y", function(d) {
      return s4y(d.year);
    })
    .attr("dy", 3)
    .attr("dx", 10)
    .text(function(d, i) {
      return d.totalPer;
    })

  d3.select(".s4databox").style("display", "block")

  if (pn === "her" || pn === "him") {
    string = wrd + " (" + pn + ")";
  } else {
    if (pn === "hers") {
      pn = "her";
      string = "(" + pn + ") " + wrd;
    } else {
      if (pn === "hims") {
        pn = "him";
        string = "(" + pn + ") " + wrd;
      } else {
        string = "(" + pn + ") " + wrd;
      }
    }
  }


  $(".s4databox").html(string + "<div class='s4db-c'>Heard</div>")

  if (newn.length > 3) {
    d3.select(".s4db-c").append("span").html(" from " + newn[0].year + "&mdash;" + newn[newn.length - 1].year);
  } else {
    if (newn.length === 1) {
      d3.select(".s4db-c").append("span").html(" in " + newn[0].year + ".");
    } else {
      if (newn.length === 2) {
        d3.select(".s4db-c").append("span").html(" in " + newn[0].year + " and " + newn[1].year + ".");
      } else {
        d3.select(".s4db-c").append("span").html(" in " + newn[0].year + ", " + newn[1].year + " and " + newn[2].year + ".");
      }
    }
  }

  setTimeout(function(d) {
    clickable = true;
  }, 50);
}

$(".s4").on("click", function() {
  if (clickable) {
    deselectLine()
    d3.selectAll(".s4line").style("opacity", 1).style("stroke-width", ".2px")
    setTimeout(function() {
      clickable = false;
    }, 100);
  }
});

function deselectLine() {
  d3.select(".s4databox").style("display", "none")
  d3.selectAll(".s4circle").remove();
  d3.selectAll(".s4labels").remove();
  d3.selectAll(".s4labelsBG").remove();
}


//////////////////// S2 BAR CHART ////////////////////
////// Sortable by genre or pronoun. +/- values//////

// set defaults
var s2genre = "all";
var s2pronoun = "he";

// Get the dataset on input change
d3.selectAll(".dataset").on("change", selectDataset);

$('.s2genre_select').select2({
  placeholder: "All Genres",
  allowClear: false,
  width: "150px"
});

$('.s2genre_select').on("select2:select", selectGenre);
$('.s2genre_select').on("select2:unselect", selectGenre);


// on pronoun change
function selectDataset() {
  var value = this.value;
  s2pronoun = value;
  change(dataset[value + "_" + s2genre], false);
}

// on genre change
function selectGenre() {
  var value = this.value;
  s2genre = value;
  changeGenre(dataset[s2pronoun + "_" + value]);
}

// set up sizes
var margin = {
    top: 10,
    right: 60,
    bottom: 10,
    left: 60
  },
  width = $(".s2m").width() - margin.left - margin.right,
  height = $(".s2m").height() - margin.top - margin.bottom;

// set up scales
var y = d3.scaleBand()
  .rangeRound([height, 0])
  .padding(0.2);
var x = d3.scaleLinear()
  .range([0, width]);

// set up axes and colours
var xAxis = d3.axisBottom(x).tickSize(-height).ticks(9).tickFormat(function(d) {
  if (Math.abs(d) === 6) {
    return ""
  }
  if (Math.abs(d) === 5) {
    return "32x"
  }
  if (Math.abs(d) === 4) {
    return "16x"
  }
  if (Math.abs(d) === 3) {
    return "8x"
  }
  if (Math.abs(d) === 2) {
    return "4x"
  }
  if (Math.abs(d) === 1) {
    return "2x"
  } else {
    return "even"
  }
}).tickSizeOuter(0);
// var xAxis = d3.axisBottom(x).tickSize(-height).tickSizeOuter(0);
var yAxis = d3.axisLeft(y).tickSize(0);
var colourS2 = d3.scaleLinear()
  .interpolate(d3.interpolateHcl)
  .range([d3.rgb("#027296"), d3.rgb('#f2e6e6'), d3.rgb('#fa4d16')]);

// draw the svg
var svg = d3.select(".s2m").append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
svg.append("g")
  .attr("class", "x axis")
  .attr("transform", "translate(0," + height + ")")
  .call(xAxis);

// draw using data from all genres, he/she pronouns
change(dataset["he_all"], true);

function change(dataset, isitnew) {

  var minmax = d3.extent(dataset, function(d) {
    return d.logratio;
  })
  colourS2.domain([minmax[0], 0, minmax[1]]);

  // sort the data
  dataset.sort(function(x, y) {
    return d3.ascending(x.logratio, y.logratio);
  })

  // scales
  y.domain(dataset.map(function(d) {
    return d.word;
  }));
  x.domain([-6, 6]);

  // draw the axes, only if this is the first load
  if (isitnew === true) {
    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

    svg.select(".y.axis").remove();
    svg.select(".x.axis").remove();
  }

  // this is what happens to new labels
  var s2label = svg.selectAll(".s2label")
    .data(dataset, function(d) {
      return d.word;
    });
  s2label.enter().append("text")
    .attr("class", "s2label")
    .attr("x", x(0))
    .attr("y", function(d) {
      return y(d.word);
    })
    .attr("text-anchor", function(d) {
      if (d.logratio < 0) {
        return "end"
      } else {
        return "start"
      }
    })
    .attr("dy", 14)
    .style("fill", "#ffffff")
    .style("opacity", 0)
    .transition().delay(500).ease(d3.easeExp, 3).duration(750)
    .attr("x", function(d) {
      if (d.logratio < 0) {
        return x(d.logratio) - 10
      } else {
        return x(d.logratio) + 10
      }
    })
    .attr("y", function(d) {
      return y(d.word);
    })
    .text(function(d) {
      return d.word
    })
    .attr("text-anchor", function(d) {
      if (d.logratio < 0) {
        return "end"
      } else {
        return "start"
      }
    })
    .attr("dy", 14)
    .style("fill", "#b5b5b5")
    .style("opacity", 1)

  // this is what happens to removed labels
  s2label.exit().transition().ease(d3.easeExp, 3).duration(750)
    .attr("x", x(0))
    .attr("height", y.bandwidth())
    .style("fill", "#ffffff")
    .style("opacity", 0)
    .remove();

  // this is what happens to updated labels
  s2label
    .transition().duration(500)
    .attr("x", function(d) {
      if (d.logratio < 0) {
        return x(d.logratio) - 10
      } else {
        return x(d.logratio) + 10
      }
    })
    .attr("y", function(d) {
      return y(d.word);
    })
    .text(function(d) {
      return d.word
    })
    .attr("text-anchor", function(d) {
      if (d.logratio < 0) {
        return "end"
      } else {
        return "start"
      }
    })
    .attr("dy", 14)
    .style("fill", "#b5b5b5")
    .style("opacity", 1);

  // this is what happens to new bars
  var bar = svg.selectAll(".bar")
    .data(dataset, function(d) {
      return d.word;
    });
  bar.enter().append("rect")
    .attr("class", "bar")
    .attr("x", x(0))
    .attr("y", function(d) {
      return y(d.word);
    })
    .attr("width", 0)
    .attr("height", y.bandwidth())
    .style("fill", "#ffffff")
    .transition().delay(500).ease(d3.easeExp, 3).duration(750)
    .attr("x", function(d) {
      if (d.logratio < 0) {
        return x(d.logratio)
      } else {
        return x(0);
      }
    })
    .attr("y", function(d) {
      return y(d.word);
    })
    .attr("width", function(d) {
      return Math.abs(x(d.logratio) - x(0));
    })
    .attr("height", y.bandwidth())
    .style("fill", function(d) {
      return colourS2(d.logratio)
    });

  // this is what happens to removed bars
  bar.exit().transition().ease(d3.easeExp, 3).duration(750)
    .attr("x", x(0))
    .attr("width", 0)
    .attr("height", y.bandwidth())
    .remove();

  // this is what happens to updated bars
  bar.transition().ease(d3.easeExp, 3).duration(750).attr("x", function(d) {
      if (d.logratio < 0) {
        return x(d.logratio)
      } else {
        return x(0);
      }
    })
    .attr("y", function(d) {
      return y(d.word);
    })
    .attr("width", function(d) {
      return Math.abs(x(d.logratio) - x(0));
    })
    .attr("height", y.bandwidth())
    .style("fill", function(d) {
      return colourS2(d.logratio)
    });

};

// function on genre change
function changeGenre(dataset) {

  // sort data
  dataset.sort(function(x, y) {
    return d3.ascending(x.logratio, y.logratio);
  })

  // set up scales
  y.domain(dataset.map(function(d) {
    return d.word;
  }));
  x.domain([-6, 6]);

  // this is what happens to new labels
  var s2label = svg.selectAll(".s2label")
    .data(dataset, function(d) {
      return d.word;
    });
  s2label.enter().append("text")
    .attr("class", "s2label")
    .attr("x", function(d) {
      if (d.logratio < 0) {
        return x(d.logratio) - 10
      } else {
        return x(d.logratio) + 10
      }
    })
    .attr("y", function(d) {
      return y(d.word);
    })
    .text(function(d) {
      return d.word
    })
    .attr("text-anchor", function(d) {
      if (d.logratio < 0) {
        return "end"
      } else {
        return "start"
      }
    })
    .attr("dy", 14)
    .style("opacity", 0)
    .transition().duration(500)
    .attr("x", function(d) {
      if (d.logratio < 0) {
        return x(d.logratio) - 10
      } else {
        return x(d.logratio) + 10
      }
    })
    .attr("y", function(d) {
      return y(d.word);
    })
    .text(function(d) {
      return d.word
    })
    .attr("text-anchor", function(d) {
      if (d.logratio < 0) {
        return "end"
      } else {
        return "start"
      }
    })
    .attr("dy", 14)
    .style("fill", "#b5b5b5")
    .style("opacity", 1)

  // this is what happens to removed labels
  s2label.exit().transition().duration(250)
    .style("opacity", 0).remove();

  // this is what happens to updated labels
  s2label
    .transition().duration(500)
    .attr("x", function(d) {
      if (d.logratio < 0) {
        return x(d.logratio) - 10
      } else {
        return x(d.logratio) + 10
      }
    })
    .attr("y", function(d) {
      return y(d.word);
    })
    .text(function(d) {
      return d.word
    })
    .attr("text-anchor", function(d) {
      if (d.logratio < 0) {
        return "end"
      } else {
        return "start"
      }
    })
    .attr("dy", 14)
    .style("fill", "#b5b5b5")
    .style("opacity", 1);

  // this is what happens to new bars
  var bar = svg.selectAll(".bar")
    .data(dataset, function(d) {
      return d.word;
    });
  bar.enter().append("rect")
    .attr("class", "bar")
    .attr("x", function(d) {
      if (d.logratio < 0) {
        return x(d.logratio)
      } else {
        return x(0);
      }
    })
    .attr("y", function(d) {
      return y(d.word);
    })
    .attr("width", function(d) {
      return Math.abs(x(d.logratio) - x(0));
    })
    .attr("height", y.bandwidth())
    .style("fill", "#ffffff")
    .style("opacity", 0)
    .transition().duration(500)
    .attr("x", function(d) {
      if (d.logratio < 0) {
        return x(d.logratio)
      } else {
        return x(0);
      }
    })
    .attr("y", function(d) {
      return y(d.word);
    })
    .attr("width", function(d) {
      return Math.abs(x(d.logratio) - x(0));
    })
    .attr("height", y.bandwidth())
    .style("fill", function(d) {
      return colourS2(d.logratio)
    })
    .style("opacity", 1)

  // this is what happens to removed bars
  bar.exit().transition().duration(250)
    .style("fill", "#ffffff").style("opacity", 0).remove();

  // this is what happens to updated bars
  bar
    .transition().duration(500)
    .attr("x", function(d) {
      if (d.logratio < 0) {
        return x(d.logratio)
      } else {
        return x(0);
      }
    })
    .attr("y", function(d) {
      return y(d.word);
    })
    .attr("width", function(d) {
      return Math.abs(x(d.logratio) - x(0));
    })
    .attr("height", y.bandwidth())
    .style("fill", function(d) {
      return colourS2(d.logratio)
    })
    .style("opacity", 1)

};


//////////////////// S3 RADAR CHARTS ////////////////////
/* Radar chart design created by Nadieh Bremer - VisualCinnamon.com */
/* Updated for d3.js v4 by Ingo Kleiber <ingo@kleiber.me> */

// Radar chart set up

var r_margin = {
    top: 50,
    right: 25,
    bottom: 25,
    left: 25
  },
  r_width = $(".s3-1").width() - r_margin.left - r_margin.right,
  r_height = r_width + 100;

// Draw the radar chart
var color = d3.scaleOrdinal()
  .range(["#EDC951", "#CC333F", "#00A0B0"]);

var radarChartOptions = {
  w: r_width,
  h: r_height,
  margin: r_margin,
  maxValue: 6,
  levels: 2,
  roundStrokes: true,
  color: color
};

//Call function to draw the Radar chart
var data_he = [r_he_calls, r_he_feel, r_he_loves, r_he_leaves, r_he_falls, r_he_hits, r_he_died, r_he_moves],
  data_his = [r_his_feel, r_his_mother, r_his_cry, r_his_gun, r_his_finger, r_his_home, r_his_love, r_his_mind],
  data_him = [r_him_kiss, r_him_shot, r_him_touch, r_him_teach, r_him_hold, r_him_change, r_him_leave, r_him_tells];
var overall_he = [0.206750465416835, 0.811130419965232, 0.488515490958309, 1.03619697560001, 0.33258997838023, -1.06333869795091, -1.21714403402994, 1.60651270035676],
  overall_his = [1.09069765588381, 0.117385761235349, 1.42334532675438, -3.26193552489228, 2.18153997162396, -0.676035319403266, 0.748789767364394, 0.852242587780147],
  overall_him = [0.766585741997716, -0.0759586085221877, 1.26981622831954, -3.1754942820731, 1.15425331727356, 2.43921556204211, -0.263850156493949, 0.35588717844321];
var words_he = ["calls", "feels", "loves", "leaves", "falls", "hits", "died", "moves"],
  words_his = ["feel", "mother", "cry", "gun", "finger", "home", "love", "mind"],
  words_him = ["kiss", "shot", "touch", "teach", "hold", "change", "leave", "tells"];
var extrawords_he = ["called", "feel/felt", "", "left/leaving", "fell/falling", "hit", "dies/die", "moved/move"],
  extrawords_his = ["feelings/feeling", "mama/momma", "cryin'", "guns/rifle/shotgun", "fingers", "", "loves/loving", ""],
  extrawords_him = ["kissed/kissing", "shoots/shoot", "touched/touchin'", "teaches/taught", "held/holds", "changed/changin'", "left", "telling/told"];

d3.selectAll(".radarData").on("change", selectRadarData);

// on pronoun change
function selectRadarData() {
  var value = this.value;

  if (value === "his") {
    updateRadar(data_his, overall_his);
    setTimeout(function() {
      drawRadar(data_his, overall_his, "his/her", words_his, extrawords_his)
    }, 500)
  } else {
    if (value === "him") {
      updateRadar(data_him, overall_him);
      setTimeout(function() {
        drawRadar(data_him, overall_him, "him/her", words_him, extrawords_him)
      }, 500)
    } else {
      updateRadar(data_he, overall_he);
      setTimeout(function() {
        drawRadar(data_he, overall_he, "he/she", words_he, extrawords_he)
      }, 500)
    }
  };
}

drawRadar(data_he, overall_he, "he/she", words_he, extrawords_he);
// RadarChart(".s3-0", r_he_calls.dataset[0], radarChartOptions, overall_he[0], "he/she", words_he[0])

function drawRadar(data, overall, pronouns, theword, extras) {
  for (i = 0; i < data.length; i++) {
    var p = ".s3-" + i;
    RadarChart(p, data[i].dataset[0], data[i], radarChartOptions, overall[i], pronouns, theword[i], extras[i]);
  }
}

function updateRadar(data, overall) {
  for (i = 0; i < data.length; i++) {
    var p = ".s3-" + i;
    UpdateRadarChart(p, data[i].dataset[0], radarChartOptions, overall[i]);
  }
}
