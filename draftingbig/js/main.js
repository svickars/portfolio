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

var margin = {
    top: 75,
    right: 20,
    bottom: 30,
    left: 50
  },
  width = $(".chart").width() - margin.left - margin.right,
  height = 1000 - margin.top - margin.bottom,
  GPo = .65,
  noGPo = .25;

var teamlist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 13, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
  teamAbb = ["", "ANA", "ARI", "BOS", "BUF", "CGY", "CAR", "CHI", "COL", "CBJ", "DAL", "DET", "EDM", "FLA", "LAK", "MIN", "MTL", "NSH", "NJD", "NYI", "NYR", "OTT", "PHI", "PIT", "STL", "SJS", "TBL", "TOR", "VAN", "VGK", "WSH", "WPG"];

var y = d3.scaleLinear().range([0, height]),
  x = d3.scaleLinear().range([0, width]),
  y2 = d3.scaleLinear().range([0, height]).domain([1, 253]),
  x2 = d3.scaleLinear().range([0, width]).domain([1, 31]),
  radius = d3.scaleLinear().range([2, 2, 8, 15]).domain([-0.338793103, 0, .90, 1.458436482]),
  roundpick = d3.scaleLinear().range([.1, .99]);

var svg = d3.select(".chart").append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform",
    "translate(" + margin.left + "," + margin.top + ")");

var xLabel = d3.select(".chart").append("div").attr("class", "xLabel").style("left", "65px").style("top", "20px");
var yLabel = d3.select(".chart").append("div").attr("class", "yLabel").style("left", "-10px").style("top", "83px");

$(".xLabel").html('Pick Number <i class="far fa-long-arrow-right"></i>')
$(".yLabel").fadeOut(function() {
  $(this).html('<i class="far fa-long-arrow-left"></i> Year')
}).fadeIn();


d3.csv("data/DRAFT-GAMESCORE.csv", function(error, data) {
  if (error) throw error;

  data.forEach(function(d) {
    d.overall = parseFloat(d.overall);
    d.year = parseInt(d.year);
    d.roundPick = parseFloat(d.roundPick);
    d.GP_c = parseInt(d.GP_c);
  });

  noGP = data.filter(
    function(d) {
      return d.GP_c < 1
    })

  plusGP = data.filter(function(d) {
    return d.GP_c > 0
  })

  x.domain([1.1, 11.825]);
  y.domain([1992, 2016]);
  roundpick.domain([.01, .30]);

  var xAxisV1 = d3.axisTop(x)
    .tickSize(-(height + margin.top / 2))
    .tickFormat(function(d) {
      if (isMobile) {
        return numbered(parseInt(d.toString().split(".")[0]))
      } else {
        return "Round " + d.toString().split(".")[0]
      }
    })
    .tickValues([1.1, 2.1, 3.1, 4.1, 5.1, 6.1, 7.1, 8.1, 9.1, 10.1, 11.1]);

  var xAxisV2 = d3.axisTop(x2)
    .tickSize(0)
    .tickFormat(function(d) {
      return teamAbb[d]
    })
    .tickValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]);

  var yAxisV1 = d3.axisLeft(y)
    .tickSize(0)
    .tickFormat(d3.format(""))

  var yAxisV2 = d3.axisLeft(y2)
    .tickSize(-width)
    .tickFormat(d3.format(""))
    .tickValues([1, 25, 50, 75, 100, 150, 200])

  svg.append("g")
    .attr("class", "x axis v2a")
    .style("opacity", 0)
    .attr("transform", "translate(0,-" + margin.top * .25 + ")")
    .call(xAxisV2)

  svg.append("g")
    .attr("class", "y axis v1a")
    .attr("transform", "translate(-10,0)")
    .style("text-anchor", "end")
    .call(yAxisV1);

  svg.append("g")
    .attr("class", "y axis v2a")
    .attr("transform", "translate(-10,0)")
    .style("opacity", 0)
    .style("text-anchor", "end")
    .call(yAxisV2);

  svg.append("g")
    .attr("class", "x x1 axis v1a xaxislabels")
    .attr("id", "v1xAxis")
    .style("text-anchor", "start")
    .attr("transform", "translate(0,-" + margin.top * .25 + ")")
    .call(xAxisV1)

  d3.select("#v1xAxis").selectAll("text").attr("id", function(d, i) {
    return "axisText-" + i
  });

  var circlesGP = svg.selectAll(".circlesGP")
    .data(plusGP)
    .enter().append("circle")
    .attr("class", function(d) {
      return "circlesGP pos-" + d.pos + " team-" + d.teamNumber + " round-" + d.roundPick.toString().split(".")[0];
    })
    .attr("id", function(d) {
      return d.playerCode;
    })
    .attr("cx", function(d) {
      return x(parseInt(d.roundPick.toString().split(".")[0]) + roundpick(parseFloat("." + d.roundPick.toString().split(".")[1])));
    })
    .attr("cy", function(d) {
      return y(d.year);
    })
    .attr("r", function(d) {
      return radius(d.avg_GS_c)
    })
    .style("fill", function(d) {
      return d.colour;
    })
    .style("opacity", function(d) {
      return GPo;
    });

  var circlesNoGP = svg.selectAll(".circlesNoGP")
    .data(noGP)
    .enter().append("circle")
    .attr("class", function(d) {
      return "circlesNoGP pos-" + d.pos + " team-" + d.teamNumber + " round-" + d.roundPick.toString().split(".")[0];
    })
    .attr("id", function(d) {
      return d.playerCode;
    })
    .attr("r", 5)
    .attr("cx", function(d) {
      return x(parseInt(d.roundPick.toString().split(".")[0]) + roundpick(parseFloat("." + d.roundPick.toString().split(".")[1])));
    })
    .attr("cy", function(d) {
      return y(d.year);
    })
    .attr("r", function(d) {
      return 2
    })
    .style("fill", function(d) {
      return d.colour;
    })
    .style("opacity", function(d) {
      return noGPo;
    });

  if (isMobile) {
    var poppedup = false;
    circlesGP.on("click", function(d) {
      d3.select(this).style("stroke", "black").style("stroke-width", 2).style("opacity", 1);
      showtip(d);
      setTimeout(function(d) {
        poppedup = true;
      }, 50);
    });
    circlesNoGP.on("click", function(d) {
      d3.select(this).style("stroke", "black").style("stroke-width", 2).style("opacity", 1);
      showtip(d);
    });

    d3.selectAll(".playertip").on("click", function(d) {
      $(".circlesGP").css("stroke", "none").css("opacity", GPo)
      $(".circlesNoGP").css("stroke", "none").css("opacity", noGPo)
      $(".playertip")
        .stop()
        .fadeOut(function() {
          $(this).removeAttr("style");
        });
    });
  } else {
    circlesGP.on("mousemove", function(d) {
        d3.select(this).style("stroke", "black").style("stroke-width", 2).style("opacity", 1);
        showtip(d);
      })
      .on("mouseleave", function(d) {
        $(this).css("stroke", "none").css("opacity", GPo)
        $(".playertip")
          .stop()
          .fadeOut(function() {
            $(this).removeAttr("style");
          });
      });
    circlesNoGP.on("mousemove", function(d) {
        d3.select(this).style("stroke", "black").style("stroke-width", 2).style("opacity", 1);
        showtip(d);
      })
      .on("mouseleave", function(d) {
        $(this).css("stroke", "none").css("opacity", noGPo)
        $(".playertip")
          .stop()
          .fadeOut(function() {
            $(this).removeAttr("style");
          });
      });
  }

  // Size selection
  $(".statselect").select2({
    allowClear: false,
    width: "150px"
  });

  $(".positionselect").select2({
    placeholder: "Filter by position",
    allowClear: true,
    width: "150px",
    minimumResultsForSearch: 10
  });

  $(".statselect").on("select2:select", changeStat);
  $(".timeselect").on("change", changeStat);
  $(".viewselect").on("change", changeView);

  $('.positionselect').on("select2:select", changePos);
  $('.positionselect').on("select2:unselect", changePosClear);

  var select = d3.select(".playersearch");

  $('.playersearch').select2({
    placeholder: "Find a player...",
    allowClear: !0,
    width: "150px"
  });
  $('.playersearch').on("select2:select", playersearch);
  $('.playersearch').on("select2:unselect", playersearchClear);

  select.append("option")
    .attr("value", "")
    .text("");

  select.selectAll(".searchoptions")
    .data(data.sort(function(a, b) {
      return d3.ascending(a.player, b.player);
    }))
    .enter()
    .append("option")
    .attr("class", "searchoptions")
    .attr("value", function(d) {
      return d.playerCode;
    })
    .text(function(d) {
      return d.player
    })

  function showtip(d) {
    if (isMobile) {
      $(".playertip")
        .position({
          my: "left top",
          at: "left+10px bottom+10px",
          of: $("#" + d.playerCode),
          collision: "fit",
          within: ".chart"
        })
        .css("display", "block")
        .show();
    } else {
      $(".playertip")
        .position({
          my: "left top",
          at: "left+10px bottom+10px",
          of: $("#" + d.playerCode),
          collision: "flip fit",
          within: ".chart"
        })
        .css("display", "block")
        .show();
    }

    if (d.pos != "G") {
      $(".playertip").css("border", "2px solid " + d.colour).html("<div class='pt-meta'></div><div class='pt-header'></div><div class='pt-main'><div class='pt-main1'></div><div class='pt-career'><h5>Career</h5><div class='statbox'><div class='sbt'>GP</div><div class='sbb'>" + parseInt(d.GP_c) + "</div></div>&nbsp;&nbsp;&nbsp;<div class='statbox'><div class='sbt'>G</div><div class='sbb'>" + parseInt(d.G_c) + "</div></div>&nbsp;&nbsp;&nbsp;<div class='statbox'><div class='sbt'>A</div><div class='sbb'>" + parseInt(d.A_c) + "</div></div>&nbsp;&nbsp;&nbsp;<div class='statbox'><div class='sbt'>PTS</div><div class='sbb'>" + parseInt(d.PTS_c) + "</div></div>&nbsp;&nbsp;&nbsp;<div class='statbox'><div class='sbt'>+/-</div><div class='sbb'>" + parseInt(d.PlusMinus_c) + "</div></div>&nbsp;&nbsp;&nbsp;<div class='statbox'><div class='sbt'>PIM</div><div class='sbb'>" + parseInt(d.PIM_c) + "</div></div><br><div class='statbox'><div class='sbt'>SOG</div><div class='sbb'>" + parseInt(d.SOG_c) + "</div></div>&nbsp;&nbsp;&nbsp;<div class='statbox'><div class='sbt'>Hits</div><div class='sbb'>" + parseInt(d.Hits_c) + "</div></div>&nbsp;&nbsp;&nbsp;<div class='statbox'><div class='sbt'>Blks</div><div class='sbb'>" + parseInt(d.Blocks_c) + "</div></div>&nbsp;&nbsp;&nbsp;<div class='statbox'><div class='sbt'>AGS</div><div class='sbb'>" + parseFloat(d.avg_GS_c).toFixed(2) + "</div></div></div>        <div class='pt-career'><h5>five years after draft</h5><div class='statbox'><div class='sbt'>GP</div><div class='sbb'>" + parseInt(d.GP_f) + "</div></div>&nbsp;&nbsp;&nbsp;<div class='statbox'><div class='sbt'>G</div><div class='sbb'>" + parseInt(d.G_f) + "</div></div>&nbsp;&nbsp;&nbsp;<div class='statbox'><div class='sbt'>A</div><div class='sbb'>" + parseInt(d.A_f) + "</div></div>&nbsp;&nbsp;&nbsp;<div class='statbox'><div class='sbt'>PTS</div><div class='sbb'>" + parseInt(d.PTS_f) + "</div></div>&nbsp;&nbsp;&nbsp;<div class='statbox'><div class='sbt'>+/-</div><div class='sbb'>" + parseInt(d.PlusMinus_f) + "</div></div>&nbsp;&nbsp;&nbsp;<div class='statbox'><div class='sbt'>PIM</div><div class='sbb'>" + parseInt(d.PIM_f) + "</div></div><br><div class='statbox'><div class='sbt'>SOG</div><div class='sbb'>" + parseInt(d.SOG_f) + "</div></div>&nbsp;&nbsp;&nbsp;<div class='statbox'><div class='sbt'>Hits</div><div class='sbb'>" + parseInt(d.Hits_f) + "</div></div>&nbsp;&nbsp;&nbsp;<div class='statbox'><div class='sbt'>Blks</div><div class='sbb'>" + parseInt(d.Blocks_f) + "</div></div>&nbsp;&nbsp;&nbsp;<div class='statbox'><div class='sbt'>AGS</div><div class='sbb'>" + parseFloat(d.avg_GS_f).toFixed(2) + "</div></div></div><div class='footnote1'></div></div>")
    } else {
      $(".playertip").css("border", "2px solid " + d.colour).html("<div class='pt-meta'></div><div class='pt-header'></div><div class='pt-main'><div class='pt-main1'></div><div class='pt-career'><h5>Career</h5><div class='statbox'><div class='sbt'>GP</div><div class='sbb'>" + parseInt(d.GP_c) + "</div></div>&nbsp;&nbsp;&nbsp;<div class='statbox'><div class='sbt'>GS</div><div class='sbb'>" + parseInt(d.gGS_c) + "</div></div>&nbsp;&nbsp;&nbsp;<div class='statbox'><div class='sbt'>W</div><div class='sbb'>" + parseInt(d.gW_c) + "</div></div>&nbsp;&nbsp;&nbsp;<div class='statbox'><div class='sbt'>L</div><div class='sbb'>" + parseInt(d.gL_c) + "</div></div>&nbsp;&nbsp;&nbsp;<div class='statbox'><div class='sbt'>SV%</div><div class='sbb'>" + parseFloat(d.gSVper_c).toFixed(2) + "</div></div>&nbsp;&nbsp;&nbsp;<div class='statbox'><div class='sbt'>GAA</div><div class='sbb'>" + d.gGAA_c + "</div></div><br><div class='statbox'><div class='sbt'>SO</div><div class='sbb'>" + parseInt(d.gSO_c) + "</div></div>&nbsp;&nbsp;&nbsp;<div class='statbox'><div class='sbt'>G</div><div class='sbb'>" + parseInt(d.G_c) + "</div></div>&nbsp;&nbsp;&nbsp;<div class='statbox'><div class='sbt'>A</div><div class='sbb'>" + parseInt(d.A_c) + "</div></div>&nbsp;&nbsp;&nbsp;<div class='statbox'><div class='sbt'>PTS</div><div class='sbb'>" + parseInt(d.PTS_c) + "</div></div>&nbsp;&nbsp;&nbsp;<div class='statbox'><div class='sbt'>AGS</div><div class='sbb'>" + parseFloat(d.avg_GS_c).toFixed(2) + "</div></div></div>        <div class='pt-career'><h5>five years after draft</h5><div class='statbox'><div class='sbt'>GP</div><div class='sbb'>" + parseInt(d.GP_f) + "</div></div>&nbsp;&nbsp;&nbsp;<div class='statbox'><div class='sbt'>GS</div><div class='sbb'>" + parseInt(d.gGS_f) + "</div></div>&nbsp;&nbsp;&nbsp;<div class='statbox'><div class='sbt'>W</div><div class='sbb'>" + parseInt(d.gW_f) + "</div></div>&nbsp;&nbsp;&nbsp;<div class='statbox'><div class='sbt'>L</div><div class='sbb'>" + parseInt(d.gL_f) + "</div></div>&nbsp;&nbsp;&nbsp;<div class='statbox'><div class='sbt'>SV%</div><div class='sbb'>" + parseFloat(d.gSVper_c).toFixed(2) + "</div></div>&nbsp;&nbsp;&nbsp;<div class='statbox'><div class='sbt'>GAA</div><div class='sbb'>" + d.gGAA_c + "</div></div><br><div class='statbox'><div class='sbt'>SO</div><div class='sbb'>" + parseInt(d.gSO_f) + "</div></div>&nbsp;&nbsp;&nbsp;<div class='statbox'><div class='sbt'>G</div><div class='sbb'>" + parseInt(d.G_f) + "</div></div>&nbsp;&nbsp;&nbsp;<div class='statbox'><div class='sbt'>A</div><div class='sbb'>" + parseInt(d.A_f) + "</div></div>&nbsp;&nbsp;&nbsp;<div class='statbox'><div class='sbt'>PTS</div><div class='sbb'>" + parseInt(d.PTS_f) + "</div></div>&nbsp;&nbsp;&nbsp;<div class='statbox'><div class='sbt'>AGS</div><div class='sbb'>" + parseFloat(d.avg_GS_f).toFixed(2) + "</div></div></div></div>")
    }

    $(".pt-meta").html(d.team + " / Round " + d.roundPick + " / " + numbered(d.overall) + " OA / " + d.year)

    if (isMobile) {
      $(".pt-meta").css("padding-right", "25px");
      d3.select(".playertip").append("div").attr("class", "tipclose").html('<i class="far fa-times-circle"></i>')
    }

    $(".pt-header").css("background-color", d.colour).html(d.player)
    $(".pt-main1").html("Age: " + d.age + "&nbsp;&nbsp;&nbsp;&nbsp;Nationality: " + d.nat + "&nbsp;&nbsp;&nbsp;&nbsp;Position: " + d.pos)

    if (d.year < 2007) {
      $(".footnote1").html("Hits, Blocks, and possession metrics (CORSI, Fenwick, POD) are unavailable before the 2007/08 season. As such, some players may display a zero or a lower number than average for these categories.")
    }
  }

  function changePos() {
    var position = $(this).val();
    // GPo = .1;
    // noGPo = .05;
    d3.selectAll(".circlesGP." + position).style("display", "block").transition().duration(500).style("opacity", GPo);
    d3.selectAll(".circlesNoGP." + position).style("display", "block").transition().duration(500).style("opacity", noGPo);
    d3.selectAll(".circlesGP:not(." + position + ")").transition().duration(500).style("opacity", 0).style("display", "none");
    d3.selectAll(".circlesNoGP:not(." + position + ")").transition().duration(500).style("opacity", 0).style("display", "none");
  }

  function changePosClear() {
    GPo = .65;
    noGPo = .25;
    d3.selectAll(".circlesGP").style("display", "block").transition().duration(500).style("opacity", GPo);
    d3.selectAll(".circlesNoGP").style("display", "block").transition().duration(500).style("opacity", noGPo);
  }

  function playersearch() {
    var player = $(this).val();
    var thisdata = data.filter(
      function(d) {
        return d.playerCode === player
      })
    thisdata = thisdata[0]
    showtip(thisdata)
    GPo = .05;
    noGPo = .05;
    d3.selectAll(".circlesGP:not(#" + player + ")").transition().duration(500).style("opacity", GPo).style("pointer-events", "none").style("stroke", "none");
    d3.selectAll(".circlesNoGP:not(#" + player + ")").transition().duration(500).style("opacity", noGPo).style("pointer-events", "none").style("stroke", "none");
    d3.select("#" + player).transition().duration(500).style("opacity", 1).style("stroke", "black").style("stroke-width", 2).style("pointer-events", "none");
  }

  function playersearchClear() {
    GPo = .65;
    noGPo = .25;

    d3.selectAll(".circlesGP").style("display", "block").transition().duration(500).style("opacity", GPo).style("stroke", "none").style("pointer-events", "all");
    d3.selectAll(".circlesNoGP").style("display", "block").transition().duration(500).style("opacity", noGPo).style("stroke", "none").style("pointer-events", "all");


  }

  function changeStat() {
    var stat = $(".statselect").val();
    var time = $('.timeselect:checked').val()
    var view = $('.viewselect:checked').val()

    if (stat === "avg_GS") {
      radius.range([2, 2, 8, 15]).domain([-0.338793103, 0, .90, 1.458436482]);
    } else {
      radius.range([5, 17.5, 25]).domain([0, 5, 20])
    }

    circlesGP
      .transition().duration(500)
      .attr("r", function(d) {
        if (d[stat + time] > 0) {
          return radius(d[stat + time])
        } else {
          return 2
        }
      })
    circlesNoGP
      .transition().duration(500)
      .attr("r", function(d) {
        return 2
      })



    if (view === "view2") {
      x.domain([1, 31]);
      y.domain([0, 253]);
      circlesGP
        .transition().duration(1000)
        .ease(d3.easeExp)
        .attr("cx", function(d) {
          return x(d.teamNumber);
        })
        .attr("cy", function(d) {
          return y(d[stat + time + "_rank"]);
        })
        .attr("r", function(d) {
          if (d[stat + time] > 0) {
            return radius(d[stat + time])
          } else {
            return 2
          }
        });
      circlesNoGP
        .transition().duration(1000)
        .ease(d3.easeExp)
        .attr("cx", function(d) {
          return x(d.teamNumber);
        })
        .attr("cy", function(d) {
          return y(d[stat + time + "_rank"]);
        })
        .attr("r", function(d) {
          return 2
        });
    }
  }

  function changeView() {
    var stat = $(".statselect").val();
    var time = $('.timeselect:checked').val();
    var view = $('.viewselect:checked').val();

    if (stat === "avg_GS") {
      radius.range([2, 2, 8, 15]).domain([-0.338793103, 0, .90, 1.458436482]);
    } else {
      radius.range([5, 17.5, 25]).domain([0, 5, 20])
    }

    d3.selectAll(".axis").transition().duration(500).style("opacity", 0);
    d3.select(".roundclose").transition().duration(300).style("opacity", 0).style("display", "none")

    if (view === "view1") {
      d3.selectAll(".v1a").transition().duration(500).style("opacity", 1);

      $(".xLabel").fadeOut(function() {
        $(this).html('Pick Number <i class="far fa-long-arrow-right"></i>')
      }).fadeIn();
      $(".yLabel").fadeOut(function() {
        $(this).html('<i class="far fa-long-arrow-left"></i> Year')
      }).fadeIn();

      x.range([0, width]).domain([1.1, 11.825])

      svg.select(".x1")
        .call(xAxisV1)

      y.domain([1992, 2016]);
      roundpick.domain([.01, .35]);
      circlesGP
        .transition().duration(1000)
        .ease(d3.easeExp)
        .attr("cx", function(d) {
          return x(parseInt(d.roundPick.toString().split(".")[0]) + roundpick(parseFloat("." + d.roundPick.toString().split(".")[1])));
        })
        .attr("cy", function(d) {
          return y(d.year);
        });
      circlesNoGP
        .transition().duration(1000)
        .ease(d3.easeExp)
        .attr("cx", function(d) {
          return x(parseInt(d.roundPick.toString().split(".")[0]) + roundpick(parseFloat("." + d.roundPick.toString().split(".")[1])));
        })
        .attr("cy", function(d) {
          return y(d.year);
        })
    }

    if (view === "view2") {
      d3.selectAll(".v2a").transition().duration(500).style("opacity", 1);

      $(".xLabel").fadeOut(function() {
        $(this).html('Team <i class="far fa-long-arrow-right"></i>')
      }).fadeIn();
      $(".yLabel").fadeOut(function() {
        $(this).html('<i class="far fa-long-arrow-left"></i> Rank')
      }).fadeIn();

      x.domain([1, 31]).range([0, width]);
      y.domain([1, 253]);

      circlesGP
        .transition().duration(1000)
        .ease(d3.easeExp)
        .attr("cx", function(d) {
          return x(d.teamNumber);
        })
        .attr("cy", function(d) {
          return y(d[stat + time + "_rank"]);
        })
        .attr("r", function(d) {
          if (d[stat + time] > 0) {
            return radius(d[stat + time])
          } else {
            return 2
          }
        });
      circlesNoGP
        .transition().duration(1000)
        .ease(d3.easeExp)
        .attr("cx", function(d) {
          return x(d.teamNumber);
        })
        .attr("cy", function(d) {
          return y(d[stat + time + "_rank"]);
        })
        .attr("r", function(d) {
          return 2
        });
    }
  }

  for (var i = 0; i < 11; i++) {
    $("#axisText-" + i).click(function(event) {
      var thisnumber = parseInt(event.target.id.split("-")[1]) + 1;
      var start = thisnumber + .1,
        end = thisnumber + .99;

      if (thisnumber === 1) {
        x.range([0, (width / 2), width]).domain([1.1, 1.99, 11.825])
      } else {
        x.range([0, thisnumber * ((width / 2) / 11), (width / 2) + (thisnumber * ((width / 2) / 11)), width]).domain([1.1, start, end, 11.825])
      }

      xAxisV1.tickFormat(function(d) {
        if (isMobile) {
          return d.toString().split(".")[0];
        } else {
          return "Round " + d.toString().split(".")[0]
        }
      })

      svg.select(".x1")
        .transition()
        .duration(300)
        .ease(d3.easeExp)
        .call(xAxisV1)

      circlesGP
        .transition().duration(300)
        .ease(d3.easeExp)
        .attr("cx", function(d) {
          return x(parseInt(d.roundPick.toString().split(".")[0]) + roundpick(parseFloat("." + d.roundPick.toString().split(".")[1])));
        });
      circlesNoGP
        .transition().duration(300)
        .ease(d3.easeExp)
        .attr("cx", function(d) {
          return x(parseInt(d.roundPick.toString().split(".")[0]) + roundpick(parseFloat("." + d.roundPick.toString().split(".")[1])));
        })

      if (isMobile) {
        d3.select(".roundclose").style("left", x(start) + 80 + "px").style("display", "block").transition().duration(300).style("opacity", 1)
      } else {
        d3.select(".roundclose").style("left", x(start) + 115 + "px").style("display", "block").transition().duration(300).style("opacity", 1)
      }

      d3.select(".roundclose").on("click", function() {
        x.range([0, width]).domain([1.1, 11.825])

        xAxisV1.tickFormat(function(d) {
          if (isMobile) {
            return numbered(parseInt(d.toString().split(".")[0]))
          } else {
            return "Round " + d.toString().split(".")[0]
          }
        })

        svg.select(".x1")
          .transition()
          .duration(300)
          .ease(d3.easeExp)
          .call(xAxisV1)

        circlesGP
          .transition().duration(300)
          .ease(d3.easeExp)
          .attr("cx", function(d) {
            return x(parseInt(d.roundPick.toString().split(".")[0]) + roundpick(parseFloat("." + d.roundPick.toString().split(".")[1])));
          })
        circlesNoGP
          .transition().duration(300)
          .ease(d3.easeExp)
          .attr("cx", function(d) {
            return x(parseInt(d.roundPick.toString().split(".")[0]) + roundpick(parseFloat("." + d.roundPick.toString().split(".")[1])));
          })
        d3.select(this).transition().duration(300).style("opacity", 0).style("display", "none")
      })

    });
  }
})

var playertip = d3.select(".chart").append("div").attr("class", "playertip");
var roundclose = d3.select(".chart").append("div").attr("class", "roundclose").html('<i class="far fa-times-circle"></i>')

if (isMobile) {
  $(".stb").html("Use the filters above to show selected positions and size by various statistics and time periods. Tap a player&rsquo;s circle to show their statistics. Tap a tick label (i.e. <span class='serif'>ROUND 1</span>) below to zoom in on that round.")
}

function numbered(i) {
  var j = i % 10,
    k = i % 100;
  if (j == 1 && k != 11) {
    return i + "st";
  }
  if (j == 2 && k != 12) {
    return i + "nd";
  }
  if (j == 3 && k != 13) {
    return i + "rd";
  }
  return i + "th";
}
