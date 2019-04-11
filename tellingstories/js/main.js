var svgExp = d3.select("#experience").append("svg").attr("class", "svgExp");

var width = document.getElementById("experience").offsetWidth;


d3.selectAll(".labelEducation").on("mouseover", function(d) {
  d3.selectAll(".faded").transition().duration(200).style("opacity", .25)
  d3.selectAll(".education").transition().duration(200).style("opacity", 1)
}).on("mouseout", function(d) {
  d3.selectAll(".faded").style("opacity", 1)
})

d3.selectAll(".labelJobs").on("mouseover", function(d) {
  d3.selectAll(".faded").transition().duration(200).style("opacity", .25)
  d3.selectAll(".jobs").transition().duration(200).style("opacity", 1)
}).on("mouseout", function(d) {
  d3.selectAll(".faded").style("opacity", 1)
})

d3.selectAll(".labelOther").on("mouseover", function(d) {
  d3.selectAll(".faded").transition().duration(200).style("opacity", .25)
  d3.selectAll(".shenanigans").transition().duration(200).style("opacity", 1)
}).on("mouseout", function(d) {
  d3.selectAll(".faded").style("opacity", 1)
})

// YEAR MARKERS (EXPERIENCE)

var y2011 = svgExp.append("line")
  .attr("class", "year-line")
  .attr("x1", width * .05)
  .attr("x2", width * .05)
  .attr("y1", 0)
  .attr("y2", 450);

var y2012 = svgExp.append("line")
  .attr("class", "year-line")
  .attr("x1", width * .25)
  .attr("x2", width * .25)
  .attr("y1", 0)
  .attr("y2", 450);

var y2013 = svgExp.append("line")
  .attr("class", "year-line")
  .attr("x1", width * .35)
  .attr("x2", width * .35)
  .attr("y1", 0)
  .attr("y2", 450);

var y2014 = svgExp.append("line")
  .attr("class", "year-line")
  .attr("x1", width * .55)
  .attr("x2", width * .55)
  .attr("y1", 0)
  .attr("y2", 450);

var y2015 = svgExp.append("line")
  .attr("class", "year-line")
  .attr("x1", width * .65)
  .attr("x2", width * .65)
  .attr("y1", 0)
  .attr("y2", 450);

var y2016 = svgExp.append("line")
  .attr("class", "year-line")
  .attr("x1", width * .80)
  .attr("x2", width * .80)
  .attr("y1", 0)
  .attr("y2", 450);

var l2011 = svgExp.append("text")
  .attr("class", "year-label")
  .attr("x", width * .025)
  .attr("y", 10)
  .attr("text-anchor", "middle")
  .text("2011");

var l2012 = svgExp.append("text")
  .attr("class", "year-label")
  .attr("x", width * .15)
  .attr("y", 10)
  .attr("text-anchor", "middle")
  .text("2012");

var l2013 = svgExp.append("text")
  .attr("class", "year-label")
  .attr("x", width * .30)
  .attr("y", 10)
  .attr("text-anchor", "middle")
  .text("2013");

var l2014 = svgExp.append("text")
  .attr("class", "year-label")
  .attr("x", width * .45)
  .attr("y", 10)
  .attr("text-anchor", "middle")
  .text("2014");

var l2015 = svgExp.append("text")
  .attr("class", "year-label")
  .attr("x", width * .60)
  .attr("y", 10)
  .attr("text-anchor", "middle")
  .text("2015");

var l2016 = svgExp.append("text")
  .attr("class", "year-label")
  .attr("x", width * .725)
  .attr("y", 10)
  .attr("text-anchor", "middle")
  .text("2016");

var l2017 = svgExp.append("text")
  .attr("class", "year-label")
  .attr("x", width * .90)
  .attr("y", 10)
  .attr("text-anchor", "middle")
  .text("2017");


// EDUCATION

var waterloo = svgExp.append("rect")
  .attr("class", "education eduFill waterloo faded")
  .attr("x", 0)
  .attr("y", 25)
  .attr("width", width * .625)
  .attr("height", 15);

var waterloobegin = svgExp.append("path")
  .attr("transform", function(d) {
    return "translate(" + 0 + "," + 32.5 + ") rotate(90) scale(1, 0.66)";
  })
  .attr("class", "educationArrow eduFill educationArrowBegin")
  .attr("d", d3.symbol()
    .size(function(d) {
      return 225;
    })
    .type(function(d) {
      return d3.symbolTriangle;
    }));

var rome = svgExp.append("rect")
  .attr("class", "educationLight eduFill faded waterloo rome")
  .attr("x", width * .475)
  .attr("y", 32.5)
  .attr("width", width * .1)
  .attr("height", 7.5);

var parsons = svgExp.append("rect")
  .attr("class", "education eduFill faded parsons")
  .attr("x", width * .725)
  .attr("y", 25)
  .attr("width", width * .16)
  .attr("height", 15);




// JOBS

var e2 = svgExp.append("rect")
  .attr("class", "jobs jobsFill e2 faded")
  .attr("x", width * .05)
  .attr("y", 155)
  .attr("width", width * .075)
  .attr("height", 15);

var deRooted = svgExp.append("rect")
  .attr("class", "jobs jobsFill derooted faded")
  .attr("x", width * .27)
  .attr("y", 155)
  .attr("width", width * .033)
  .attr("height", 15);

var cherry = svgExp.append("rect")
  .attr("class", "jobs jobsFill cherry faded")
  .attr("x", width * .35)
  .attr("y", 155)
  .attr("width", width * .13)
  .attr("height", 15);

var interluude = svgExp.append("rect")
  .attr("class", "jobs jobsFill interluude faded")
  .attr("x", width * .52)
  .attr("y", 155)
  .attr("width", width * .1)
  .attr("height", 15);

var interluudeend = svgExp.append("path")
  .attr("transform", function(d) {
    return "translate(" + width * .623 + "," + 162.5 + ") rotate(90) scale(1, 0.66)";
  })
  .attr("class", "jobsArrow jobsFill interluude jobsArrowEnd faded")
  .attr("d", d3.symbol()
    .size(function(d) {
      return 102;
    })
    .type(function(d) {
      return d3.symbolTriangle;
    }));

var adobe = svgExp.append("rect")
  .attr("class", "jobsLight jobsFill adobe faded")
  .attr("x", width * .52)
  .attr("y", 155)
  .attr("width", width * .05)
  .attr("height", 7.5);

var freelance = svgExp.append("rect")
  .attr("class", "jobs jobsFill freelance faded")
  .attr("x", width * .635)
  .attr("y", 155)
  .attr("width", width * .075)
  .attr("height", 15);

var undp = svgExp.append("rect")
  .attr("class", "jobs jobsFill undp faded")
  .attr("x", width * .75)
  .attr("y", 155)
  .attr("width", width * .05)
  .attr("height", 15);

var taco = svgExp.append("rect")
  .attr("class", "jobs jobsFill taco faded")
  .style("opacity", .5)
  .attr("x", width * .9)
  .attr("y", 155)
  .attr("width", width * .05)
  .attr("height", 15);

var tacoend = svgExp.append("path")
  .attr("transform", function(d) {
    return "translate(" + width * .9536 + "," + 162.5 + ") rotate(90) scale(1, 0.66)";
  })
  .attr("class", "jobsArrow jobsFill taco jobsArrowEnd faded")
  .style("opacity", .5)
  .attr("d", d3.symbol()
    .size(function(d) {
      return 102;
    })
    .type(function(d) {
      return d3.symbolTriangle;
    }));




// OTHER

var first = svgExp.append("rect")
  .attr("class", "shenanigans shenanigansFill first faded")
  .attr("x", width * 0)
  .attr("y", 280)
  .attr("width", width * .95)
  .attr("height", 15);

var firstBlip = svgExp.append("rect")
  .attr("class", "shenanigansLight shenanigansFill first faded")
  .attr("x", width * 0)
  .attr("y", 287.5)
  .attr("width", width * .035)
  .attr("height", 7.5);

var shenanigansend = svgExp.append("path")
  .attr("transform", function(d) {
    return "translate(" + width * .9536 + "," + 287.5 + ") rotate(90) scale(1, 0.66)";
  })
  .attr("class", "shenanigansArrow shenanigansFill first shenanigansArrowEnd faded")
  .attr("d", d3.symbol()
    .size(function(d) {
      return 102;
    })
    .type(function(d) {
      return d3.symbolTriangle;
    }));


// LABELS SCHOOL

var labWaterloo = svgExp.append("text")
  .attr("x", 0)
  .attr("y", 55)
  .attr("class", "exp-h1 waterloo education faded")
  .text("University of Waterloo School of Architecture");

var subLabWaterloo = svgExp.append("text")
  .attr("x", 0)
  .attr("y", 70)
  .attr("class", "exp-h2 waterloo education faded")
  .text("Bachelor of Architecture, w/ Honours -- Co-operative Program");

var locLabWaterloo = svgExp.append("text")
  .attr("x", 0)
  .attr("y", 82)
  .attr("class", "exp-h3 waterloo education faded")
  .text("Cambridge, ON");

var labRome = svgExp.append("text")
  .attr("x", width * .475)
  .attr("y", 55)
  .attr("class", "exp-h1 rome faded education waterloo")
  .text("Rome Program");

var locLabRome = svgExp.append("text")
  .attr("x", width * .475)
  .attr("y", 70)
  .attr("class", "exp-h3 rome faded education waterloo")
  .text("Rome, Italy");

var labParsons = svgExp.append("text")
  .attr("x", width * .725)
  .attr("y", 55)
  .attr("class", "exp-h1 parsons education faded")
  .text("Parsons the New School for Design");

var sublabParsons = svgExp.append("text")
  .attr("x", width * .725)
  .attr("y", 70)
  .attr("class", "exp-h2 parsons education faded")
  .text("Masters of Science in Data Visualization");

var loclabParsons = svgExp.append("text")
  .attr("x", width * .725)
  .attr("y", 82)
  .attr("class", "exp-h3 parsons education faded")
  .text("New York, NY");


d3.selectAll(".parsons").on("mouseover", function(d) {
  d3.selectAll(".faded").transition().duration(200).style("opacity", .25)
  d3.selectAll(".parsons").transition().duration(200).style("opacity", 1)
}).on("mouseout", function(d) {
  d3.selectAll(".faded").style("opacity", 1)
});

d3.selectAll(".waterloo").on("mouseover", function(d) {
  d3.selectAll(".faded").transition().duration(200).style("opacity", .25)
  d3.selectAll(".waterloo").transition().duration(200).style("opacity", 1)
}).on("mouseout", function(d) {
  d3.selectAll(".faded").style("opacity", 1)
});



// LABELS JOBS

var labE2 = svgExp.append("text")
  .attr("x", width * .05)
  .attr("y", 185)
  .attr("class", "exp-h1 e2 faded jobs")
  .text("E2 Architecture");

var sublabE2 = svgExp.append("text")
  .attr("x", width * .05)
  .attr("y", 200)
  .attr("class", "exp-h2 e2 faded jobs")
  .text("Student Architect");

var loclabE2 = svgExp.append("text")
  .attr("x", width * .05)
  .attr("y", 212)
  .attr("class", "exp-h3 e2 faded jobs")
  .text("London, England");

var labDerooted = svgExp.append("text")
  .attr("x", width * .27)
  .attr("y", 185)
  .attr("class", "exp-h1 derooted faded jobs")
  .text("DeRooted");

var sublabDerooted = svgExp.append("text")
  .attr("x", width * .27)
  .attr("y", 200)
  .attr("class", "exp-h2 derooted faded jobs")
  .text("Design Intern");

var loclabDerooted = svgExp.append("text")
  .attr("x", width * .27)
  .attr("y", 212)
  .attr("class", "exp-h3 derooted faded jobs")
  .text("Toronto, ON");

var labCherry = svgExp.append("text")
  .attr("x", width * .35)
  .attr("y", 185)
  .attr("class", "exp-h1 cherry faded jobs")
  .text("Cherry");

var sublabCherry = svgExp.append("text")
  .attr("x", width * .35)
  .attr("y", 200)
  .attr("class", "exp-h2 cherry faded jobs")
  .text("Design Intern");

var loclabCherry = svgExp.append("text")
  .attr("x", width * .35)
  .attr("y", 212)
  .attr("class", "exp-h3 cherry faded jobs")
  .text("London, England");

var labInterluude = svgExp.append("text")
  .attr("x", width * .52)
  .attr("y", 185)
  .attr("class", "exp-h1 interluude faded jobs")
  .text("Interluude");

var sublabInterluude = svgExp.append("text")
  .attr("x", width * .52)
  .attr("y", 200)
  .attr("class", "exp-h2 interluude faded jobs")
  .text("Co-Founder");

var labAdobe = svgExp.append("text")
  .attr("x", width * .52)
  .attr("y", 130)
  .attr("class", "exp-h1 adobe faded jobs")
  .text("Adobe");

var sublabAdobe = svgExp.append("text")
  .attr("x", width * .52)
  .attr("y", 145)
  .attr("class", "exp-h2 adobe faded jobs")
  .text("Campus Rep");

var loclabFreelance = svgExp.append("text")
  .attr("x", width * .635)
  .attr("y", 185)
  .attr("class", "exp-h3 freelance faded jobs")
  .text("Freelance Work");

var labUndp = svgExp.append("text")
  .attr("x", width * .75)
  .attr("y", 185)
  .attr("class", "exp-h1 undp faded jobs")
  .text("UNDP");

var sublabUndp = svgExp.append("text")
  .attr("x", width * .75)
  .attr("y", 200)
  .attr("class", "exp-h2 undp faded jobs")
  .text("Student Work");

var labTaco = svgExp.append("text")
  .style("opacity", .35)
  .attr("x", width * .9)
  .attr("y", 185)
  .attr("class", "exp-h1 taco faded jobs")
  .text("Taco truck");

var sublabTaco = svgExp.append("text")
  .style("opacity", .35)
  .attr("x", width * .9)
  .attr("y", 200)
  .attr("class", "exp-h2 taco faded jobs")
  .text("Future plans?");



d3.selectAll(".e2").on("mouseover", function(d) {
  d3.selectAll(".faded").transition().duration(200).style("opacity", .25)
  d3.selectAll(".e2").transition().duration(200).style("opacity", 1)
}).on("mouseout", function(d) {
  d3.selectAll(".faded").style("opacity", 1)
});

d3.selectAll(".derooted").on("mouseover", function(d) {
  d3.selectAll(".faded").transition().duration(200).style("opacity", .25)
  d3.selectAll(".derooted").transition().duration(200).style("opacity", 1)
}).on("mouseout", function(d) {
  d3.selectAll(".faded").style("opacity", 1)
});

d3.selectAll(".cherry").on("mouseover", function(d) {
  d3.selectAll(".faded").transition().duration(200).style("opacity", .25)
  d3.selectAll(".cherry").transition().duration(200).style("opacity", 1)
}).on("mouseout", function(d) {
  d3.selectAll(".faded").style("opacity", 1)
});

d3.selectAll(".adobe").on("mouseover", function(d) {
  d3.selectAll(".faded").transition().duration(200).style("opacity", .25)
  d3.selectAll(".adobe").transition().duration(200).style("opacity", 1)
}).on("mouseout", function(d) {
  d3.selectAll(".faded").style("opacity", 1)
});

d3.selectAll(".interluude").on("mouseover", function(d) {
  d3.selectAll(".faded").transition().duration(200).style("opacity", .25)
  d3.selectAll(".interluude").transition().duration(200).style("opacity", 1)
}).on("mouseout", function(d) {
  d3.selectAll(".faded").style("opacity", 1)
});

d3.selectAll(".freelance").on("mouseover", function(d) {
  d3.selectAll(".faded").transition().duration(200).style("opacity", .25)
  d3.selectAll(".freelance").transition().duration(200).style("opacity", 1)
}).on("mouseout", function(d) {
  d3.selectAll(".faded").style("opacity", 1)
});

d3.selectAll(".taco").on("mouseover", function(d) {
  d3.selectAll(".faded").transition().duration(200).style("opacity", .25)
  d3.selectAll(".taco").transition().duration(200).style("opacity", 1)
}).on("mouseout", function(d) {
  d3.selectAll(".faded").style("opacity", 1)
});

d3.selectAll(".undp").on("mouseover", function(d) {
  d3.selectAll(".faded").transition().duration(200).style("opacity", .25)
  d3.selectAll(".undp").transition().duration(200).style("opacity", 1)
}).on("mouseout", function(d) {
  d3.selectAll(".faded").style("opacity", 1)
});



// OTHER LABELS

var labFirst = svgExp.append("text")
  .attr("x", width * .0)
  .attr("y", 315)
  .attr("class", "exp-h1 first faded shenanigans")
  .text("Youth Citizenship Award");

var sublabFirst = svgExp.append("text")
  .attr("x", width * .0)
  .attr("y", 330)
  .attr("class", "exp-h1 first faded shenanigans")
  .text("Chief Scout's Award");

var loclabFirst = svgExp.append("text")
  .attr("x", width * .0)
  .attr("y", 345)
  .attr("class", "exp-h1 first faded shenanigans")
  .text("High School Track & Field");

var labLax = svgExp.append("text")
  .attr("x", width * .3)
  .attr("y", 315)
  .attr("class", "exp-h1 first faded shenanigans")
  .text("Lacrosse");

var sublabLax = svgExp.append("text")
  .attr("x", width * .3)
  .attr("y", 330)
  .attr("class", "exp-h2 first faded shenanigans")
  .text("Two-time All-star / Team Captain / Smartass");

var loclabLax = svgExp.append("text")
  .attr("x", width * .3)
  .attr("y", 342)
  .attr("class", "exp-h3 first faded shenanigans")
  .text("Richmond, BC / Cambridge, ON / Glasgow, Scotland");

var labSoccer = svgExp.append("text")
  .attr("x", width * .725)
  .attr("y", 315)
  .attr("class", "exp-h1 first faded shenanigans")
  .text("New School Narwhals");

var sublabSoccer = svgExp.append("text")
  .attr("x", width * .725)
  .attr("y", 330)
  .attr("class", "exp-h2 first faded shenanigans")
  .text("Varsity Soccer Team");

var loclabSoccer = svgExp.append("text")
  .attr("x", width * .725)
  .attr("y", 342)
  .attr("class", "exp-h3 first faded shenanigans")
  .text("Starting Centre Forward");



d3.selectAll(".first").on("mouseover", function(d) {
  d3.selectAll(".faded").transition().duration(200).style("opacity", .25)
  d3.selectAll(".first").transition().duration(200).style("opacity", 1)
}).on("mouseout", function(d) {
  d3.selectAll(".faded").style("opacity", 1)
});


$(".parsons").on("click", function() {
  $(".cv-infobox").addClass("cv-infobox-expand");
  $(".cv-ib-top").fadedOut(function() {
    $(this).html("Education")
  }).fadedIn();
  $("#cv-ib-year").fadedOut(function() {
    $(this).html("2016-2017<br>New York, NY")
  }).fadedIn();
  $("#cv-ib-place").fadedOut(function() {
    $(this).html("Parsons the New School for Design")
  }).fadedIn();
  $("#cv-ib-l1").fadedOut(function() {
    $(this).html("<em>Masters of Science in Data Visualization</em>")
  }).fadedIn();
  $("#cv-ib-l2").fadedOut(function() {
    $(this).html("Coursework included quantitative methods and statistics, machine learning, data structures, information design, typography, and various programming libraries like D3.js, node.js, and P5.js.")
  }).fadedIn();
  $("#cv-ib-l3").fadedOut(function() {
    $(this).html("Major projects included <a href='https://visualizedata.github.io/undp-inequality/work/sam-vickars/index.html'>visualizing the UNDP's Inequality in Africa report</a>, <a href='http://residentialschools.info'>visualizing Canada's Indian Residential Schools</a>, and <a href='http://2017.samvickars.is/portfolio/the-biggest-rivalries-in-sports/'>mapping sports rivalries across North America in the past 150 years</a>.")
  }).fadedIn();
  $("#cv-ib-l4").fadedOut(function() {
    $(this).html("<strong>Activities, Extracirriculars, and Recognition</strong>&nbsp; Dean's Scholarship, New School Narwhals Varsity Soccer, AIGA Fresh Grad 2017 Speaker, Parsons Festival Keynote Speaker")
  }).fadedIn();
})

$(".waterloo").on("click", function() {
  $(".cv-infobox").addClass("cv-infobox-expand");
  $(".cv-ib-top").fadedOut(function() {
    $(this).html("Education")
  }).fadedIn();
  $("#cv-ib-year").fadedOut(function() {
    $(this).html("2010-2015<br>Cambridge, ON")
  }).fadedIn();
  $("#cv-ib-place").fadedOut(function() {
    $(this).html("University of Waterloo School of Architecture")
  }).fadedIn();
  $("#cv-ib-l1").fadedOut(function() {
    $(this).html("<em>Bechelor's of Architecture, with Honours, Co-operative Program</em>")
  }).fadedIn();
  $("#cv-ib-l2").fadedOut(function() {
    $(this).html("Coursework included hand drafting and drawing, building science, computer aided modelling and drafting, construction techniques, cultural history, digital design, fabrication, construction management, etc., as well as a semester in Rome.")
  }).fadedIn();
  $("#cv-ib-l3").fadedOut(function() {
    $(this).html("Major projects included <a href='http://sam-vickars.squarespace.com/t-dotairport/'>Play: Revitalizing Toronto Island Airport</a>, <a href='http://samvickars.is/movingtoiceland'>Alpine Socialhouse</a>, <a href='http://sam-vickars.squarespace.com/roma-xxxvi/'>Roma Sketch project</a>and <a href='http://sam-vickars.squarespace.com/museooooooo/'Mueseo della Citta</a>")
  }).fadedIn();
  $("#cv-ib-l4").fadedOut(function() {
    $(this).html("<strong>Activities, Extracirriculars, and Recognition</strong>&nbsp; Waterloo Intramural Soccer and Hockey, WASA Student Association, Waterloo Architecture Open House, Creative Direction for Waterloo 2B Class Play 2012: Athru, Design Coordinator for ACADIA International Conference 2013, Entrepreneurial Co-op Program, Come Up To My Room 2014, and the 2014 Year End Exhibition")
  }).fadedIn();
})

$(".e2").on("click", function() {
  $(".cv-infobox").addClass("cv-infobox-expand");
  $(".cv-ib-top").fadedOut(function() {
    $(this).html("Work")
  }).fadedIn();
  $("#cv-ib-year").fadedOut(function() {
    $(this).html("Jan-Apr 2012<br>London, England")
  }).fadedIn();
  $("#cv-ib-place").fadedOut(function() {
    $(this).html("E2 Architecture + Interiors")
  }).fadedIn();
  $("#cv-ib-l1").fadedOut(function() {
    $(this).html("<em>Student Architect</em>")
  }).fadedIn();
  $("#cv-ib-l2").fadedOut(function() {
    $(this).html("During my first co-op semester at Waterloo, I worked as a student architect at E2 Architectures and Interiors in London. Responsibilities included AutoCAD drawing development, preparation of construction drawings, designing a pop-up installation, and of course, making tea.")
  }).fadedIn();
  $("#cv-ib-l3").fadedOut(function() {
    $(this).html("")
  }).fadedIn();
  $("#cv-ib-l4").fadedOut(function() {
    $(this).html("")
  }).fadedIn();
})

$(".derooted").on("click", function() {
  $(".cv-infobox").addClass("cv-infobox-expand");
  $(".cv-ib-top").fadedOut(function() {
    $(this).html("Work")
  }).fadedIn();
  $("#cv-ib-year").fadedOut(function() {
    $(this).html("May-July 2013<br>Toronto, ON")
  }).fadedIn();
  $("#cv-ib-place").fadedOut(function() {
    $(this).html("derooted Creative Technologies")
  }).fadedIn();
  $("#cv-ib-l1").fadedOut(function() {
    $(this).html("<em>Design Intern</em>")
  }).fadedIn();
  $("#cv-ib-l2").fadedOut(function() {
    $(this).html("As part of my second co-op semester, I worked as a design intern at derooted Creative Agency in Toronto, ON. I helped with various design project, dealt with clients, and assited in photography and prep for 3D projections.")
  }).fadedIn();
  $("#cv-ib-l3").fadedOut(function() {
    $(this).html("")
  }).fadedIn();
  $("#cv-ib-l4").fadedOut(function() {
    $(this).html("")
  }).fadedIn();
})

$(".cherry").on("click", function() {
  $(".cv-infobox").addClass("cv-infobox-expand");
  $(".cv-ib-top").fadedOut(function() {
    $(this).html("Work")
  }).fadedIn();
  $("#cv-ib-year").fadedOut(function() {
    $(this).html("Jan-Aug 2014<br>London, England")
  }).fadedIn();
  $("#cv-ib-place").fadedOut(function() {
    $(this).html("Cherry")
  }).fadedIn();
  $("#cv-ib-l1").fadedOut(function() {
    $(this).html("<em>Design Intern</em>")
  }).fadedIn();
  $("#cv-ib-l2").fadedOut(function() {
    $(this).html("After my third year at Waterloo, I worked for eight months at a creative agency called Cherry, again in London, England. Some might say I was only there for the pints, but I also helped create animations, code websites, mockup presentations, and other various design work (like branding, icon design, and asset creation!)")
  }).fadedIn();
  $("#cv-ib-l3").fadedOut(function() {
    $(this).html("")
  }).fadedIn();
  $("#cv-ib-l4").fadedOut(function() {
    $(this).html("")
  }).fadedIn();
})

$(".undp").on("click", function() {
  $(".cv-infobox").addClass("cv-infobox-expand");
  $(".cv-ib-top").fadedOut(function() {
    $(this).html("Work")
  }).fadedIn();
  $("#cv-ib-year").fadedOut(function() {
    $(this).html("Oct-Dec 2016<br>New York, NY")
  }).fadedIn();
  $("#cv-ib-place").fadedOut(function() {
    $(this).html("United Nations Development Programme")
  }).fadedIn();
  $("#cv-ib-l1").fadedOut(function() {
    $(this).html("<em>Student Work</em>")
  }).fadedIn();
  $("#cv-ib-l2").fadedOut(function() {
    $(this).html("As part of my final project for my first semester at Parsons, our class assisted the United Nations Development Porgramma in visualizing their report on inequality in Africa, 2016. I visualized how governance indicators affect inequality and GINI scores throughout Sub-Saharan Africa.")
  }).fadedIn();
  $("#cv-ib-l3").fadedOut(function() {
    $(this).html("")
  }).fadedIn();
  $("#cv-ib-l4").fadedOut(function() {
    $(this).html("")
  }).fadedIn();
})

$(".freelance").on("click", function() {
  $(".cv-infobox").addClass("cv-infobox-expand");
  $(".cv-ib-top").fadedOut(function() {
    $(this).html("")
  }).fadedIn();
  $("#cv-ib-year").fadedOut(function() {
    $(this).html("")
  }).fadedIn();
  $("#cv-ib-place").fadedOut(function() {
    $(this).html("")
  }).fadedIn();
  $("#cv-ib-l1").fadedOut(function() {
    $(this).html("")
  }).fadedIn();
  $("#cv-ib-l2").fadedOut(function() {
    $(this).html("")
  }).fadedIn();
  $("#cv-ib-l3").fadedOut(function() {
    $(this).html("")
  }).fadedIn();
  $("#cv-ib-l4").fadedOut(function() {
    $(this).html("")
  }).fadedIn();
})

$(".interluude").on("click", function() {
  $(".cv-infobox").addClass("cv-infobox-expand");
  $(".cv-ib-top").fadedOut(function() {
    $(this).html("")
  }).fadedIn();
  $("#cv-ib-year").fadedOut(function() {
    $(this).html("")
  }).fadedIn();
  $("#cv-ib-place").fadedOut(function() {
    $(this).html("")
  }).fadedIn();
  $("#cv-ib-l1").fadedOut(function() {
    $(this).html("")
  }).fadedIn();
  $("#cv-ib-l2").fadedOut(function() {
    $(this).html("")
  }).fadedIn();
  $("#cv-ib-l3").fadedOut(function() {
    $(this).html("")
  }).fadedIn();
  $("#cv-ib-l4").fadedOut(function() {
    $(this).html("")
  }).fadedIn();
})

$(".first").on("click", function() {
  $(".cv-infobox").addClass("cv-infobox-expand");
  $(".cv-ib-top").fadedOut(function() {
    $(this).html("")
  }).fadedIn();
  $("#cv-ib-year").fadedOut(function() {
    $(this).html("")
  }).fadedIn();
  $("#cv-ib-place").fadedOut(function() {
    $(this).html("")
  }).fadedIn();
  $("#cv-ib-l1").fadedOut(function() {
    $(this).html("")
  }).fadedIn();
  $("#cv-ib-l2").fadedOut(function() {
    $(this).html("")
  }).fadedIn();
  $("#cv-ib-l3").fadedOut(function() {
    $(this).html("")
  }).fadedIn();
  $("#cv-ib-l4").fadedOut(function() {
    $(this).html("")
  }).fadedIn();
})

$(".taco").on("click", function() {
  $(".cv-infobox").addClass("cv-infobox-expand");
  $(".cv-ib-top").fadedOut(function() {
    $(this).html("")
  }).fadedIn();
  $("#cv-ib-year").fadedOut(function() {
    $(this).html("")
  }).fadedIn();
  $("#cv-ib-place").fadedOut(function() {
    $(this).html("")
  }).fadedIn();
  $("#cv-ib-l1").fadedOut(function() {
    $(this).html("")
  }).fadedIn();
  $("#cv-ib-l2").fadedOut(function() {
    $(this).html("")
  }).fadedIn();
  $("#cv-ib-l3").fadedOut(function() {
    $(this).html("")
  }).fadedIn();
  $("#cv-ib-l4").fadedOut(function() {
    $(this).html("")
  }).fadedIn();
});

$(".adobe").on("click", function() {
  $(".cv-infobox").addClass("cv-infobox-expand");
  $(".cv-ib-top").fadedOut(function() {
    $(this).html("")
  }).fadedIn();
  $("#cv-ib-year").fadedOut(function() {
    $(this).html("")
  }).fadedIn();
  $("#cv-ib-place").fadedOut(function() {
    $(this).html("")
  }).fadedIn();
  $("#cv-ib-l1").fadedOut(function() {
    $(this).html("")
  }).fadedIn();
  $("#cv-ib-l2").fadedOut(function() {
    $(this).html("")
  }).fadedIn();
  $("#cv-ib-l3").fadedOut(function() {
    $(this).html("")
  }).fadedIn();
  $("#cv-ib-l4").fadedOut(function() {
    $(this).html("")
  }).fadedIn();
});


var avacados = d3.select("#experience").append("div").attr("class", "avacados faded").html('<svg id="87e3a172-86a8-46a0-a66c-109100d417f7" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="15.27" height="15.28" viewBox="0 0 15.27 15.28"><defs><style>.acfd4444-91ff-4db7-b167-bf72cb41b368{fill:#3fac49;}</style></defs><title>Untitled-2</title><path class="acfd4444-91ff-4db7-b167-bf72cb41b368" d="M700.53,687.86c-.39-.38-1.2-1.2-3.61,0-1,.5-1.89.88-2.78,1.23a14,14,0,0,0-5,3,5,5,0,0,0,0,7.17l0,0a5,5,0,0,0,7.17,0,14.1,14.1,0,0,0,3-5c.37-.88.75-1.79,1.24-2.78,1.23-2.39.42-3.21,0-3.6m-12,12,0,0a5.77,5.77,0,0,1,0-8.35,14.78,14.78,0,0,1,5.31-3.17c.86-.36,1.77-.73,2.7-1.22,2.65-1.34,3.88-.55,4.58.15s1.49,1.93.15,4.58c-.47,1-.86,1.84-1.22,2.71a14.89,14.89,0,0,1-3.17,5.31,5.76,5.76,0,0,1-8.34,0" transform="translate(-686.73 -686.39)"/><path class="acfd4444-91ff-4db7-b167-bf72cb41b368" d="M696.1,692.29c-1.25-1.25-3.75.21-4.4.86a2.5,2.5,0,1,0,3.54,3.54c.68-.68,2.13-3.13.86-4.4" transform="translate(-686.73 -686.39)"/></svg>');

avacados.style("transform", "translate(" + width * .02 + "px,-60px)");

var lAvacados = svgExp.append("text")
  .attr("class", "exp-h4 faded")
  .attr("x", width * .04)
  .attr("y", 407)
  .text("Discovered avacados");

var hungary = d3.select("#experience").append("div").attr("class", "avacados faded").html('<svg id="8616e504-f039-415f-a450-a17eb0f1af89" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="10.76" height="14.54" viewBox="0 0 10.76 14.54"><defs><style>.\38 13c3cbe-19f3-4fd0-998b-e5f48db65b81{fill:none;}.\38 9e2249b-f5cd-43ba-bd5e-34447c2a676d{clip-path:url(#94fddf74-7173-4755-8e73-de3d0c419ee8);}.\33 c1a79e6-9f76-438a-b3a5-1e196d503d91{fill:#3fac49;}</style><clipPath id="94fddf74-7173-4755-8e73-de3d0c419ee8" transform="translate(-488.04 -673.46)"><rect class="813c3cbe-19f3-4fd0-998b-e5f48db65b81" x="488.04" y="673.45" width="10.76" height="14.55"/></clipPath></defs><title>Untitled-1</title><g class="89e2249b-f5cd-43ba-bd5e-34447c2a676d"><path class="3c1a79e6-9f76-438a-b3a5-1e196d503d91" d="M498.74,676.87,496.59,675a.29.29,0,0,0-.23-.07l-2.93.29v-1.45a.32.32,0,0,0-.31-.29h-.92a.32.32,0,0,0-.31.29v1.53l-3.54.36a.32.32,0,0,0-.31.29v2.4a.34.34,0,0,0,.31.22l3.54.36v8.8a.32.32,0,0,0,.31.29h.92a.32.32,0,0,0,.31-.29V679l2.93.29a.29.29,0,0,0,.23-.07l2.16-1.89a.44.44,0,0,0,0-.44" transform="translate(-488.04 -673.46)"/></g></svg>');

hungary.style("transform", "translate(" + width * .657 + "px,-83px)");

var lhungary = svgExp.append("text")
  .attr("class", "exp-h4 faded")
  .attr("x", width * .676)
  .attr("y", 400)
  .text("Got lost in the");

var lhungary2 = svgExp.append("text")
  .attr("class", "exp-h4 faded")
  .attr("x", width * .676)
  .attr("y", 410)
  .text("Hungarian Countryside");

var beard = d3.select("#experience").append("div").attr("class", "avacados faded").html('<svg id="8585d889-f50d-46e6-a28f-23e7263251df" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13.08" height="8.24" viewBox="0 0 13.08 8.24"><defs><style>.d5118edb-19c9-4624-8b5f-97e1c0139136{fill:none;}.\30 7eeb040-20c5-4f7d-883a-f3cb958d0032{clip-path:url(#b204de69-f6f1-4643-b034-887e0259f18d);}.b3ea5bc8-51a6-4fed-b9fd-40e02b93f5ae{fill:#3fac49;}</style><clipPath id="b204de69-f6f1-4643-b034-887e0259f18d" transform="translate(-485.83 -676.75)"><rect class="d5118edb-19c9-4624-8b5f-97e1c0139136" x="485.83" y="676.76" width="13.08" height="8.24"/></clipPath></defs><title>Untitled-1</title><g class="07eeb040-20c5-4f7d-883a-f3cb958d0032"><path class="b3ea5bc8-51a6-4fed-b9fd-40e02b93f5ae" d="M492.47,681h-.21c-1,0-1.79.16-1.79.16a2.35,2.35,0,0,1,3.8,0s-.84-.12-1.79-.16m5.93-3.87a5.65,5.65,0,0,1-1.05,2.69c-.32.44-1.2.51-1.94.48a3.38,3.38,0,0,0-.5-.71,6.87,6.87,0,0,0-5.08,0,3.3,3.3,0,0,0-.5.71c-.74,0-1.62,0-1.94-.48a5.65,5.65,0,0,1-1.05-2.69c0-.73-.68-.34-.46,1.25s1.33,5.38,4,6.17a9.54,9.54,0,0,0,2.35.47h.21a9.55,9.55,0,0,0,2.35-.47c2.72-.79,3.83-4.57,4-6.17s-.46-2-.46-1.25" transform="translate(-485.83 -676.75)"/></g></svg>');

beard.style("transform", "translate(" + width * .832 + "px,-108px)");

var lbeard = svgExp.append("text")
  .attr("class", "exp-h4 faded")
  .attr("x", width * .85)
  .attr("y", 407)
  .text("Tried to grow a beard");







d3.selectAll(".cv-sk-p").on("mouseover", function(d) {
  d3.selectAll(".cv-sk-t").style("opacity", .5);
  d3.selectAll(".cv-sk-o").style("opacity", .5);
}).on("mouseout", function(d) {
  d3.selectAll(".cv-sk-t").style("opacity", 1);
  d3.selectAll(".cv-sk-o").style("opacity", 1);
});

d3.selectAll(".cv-sk-t").on("mouseover", function(d) {
  d3.selectAll(".cv-sk-p").style("opacity", .5);
  d3.selectAll(".cv-sk-o").style("opacity", .5);
}).on("mouseout", function(d) {
  d3.selectAll(".cv-sk-p").style("opacity", 1);
  d3.selectAll(".cv-sk-o").style("opacity", 1);
});

d3.selectAll(".cv-sk-o").on("mouseover", function(d) {
  d3.selectAll(".cv-sk-t").style("opacity", .5);
  d3.selectAll(".cv-sk-p").style("opacity", .5);
}).on("mouseout", function(d) {
  d3.selectAll(".cv-sk-t").style("opacity", 1);
  d3.selectAll(".cv-sk-p").style("opacity", 1);
});


d3.selectAll(".labelPersonal").on("mouseover", function(d) {
  d3.selectAll(".cv-sk-t").style("opacity", .5);
  d3.selectAll(".cv-sk-o").style("opacity", .5);
}).on("mouseout", function(d) {
  d3.selectAll(".cv-sk-t").style("opacity", 1);
  d3.selectAll(".cv-sk-o").style("opacity", 1);
});

d3.selectAll(".labelTechnical").on("mouseover", function(d) {
  d3.selectAll(".cv-sk-p").style("opacity", .5);
  d3.selectAll(".cv-sk-o").style("opacity", .5);
}).on("mouseout", function(d) {
  d3.selectAll(".cv-sk-p").style("opacity", 1);
  d3.selectAll(".cv-sk-o").style("opacity", 1);
});

d3.selectAll(".labelOther2").on("mouseover", function(d) {
  d3.selectAll(".cv-sk-t").style("opacity", .5);
  d3.selectAll(".cv-sk-p").style("opacity", .5);
}).on("mouseout", function(d) {
  d3.selectAll(".cv-sk-t").style("opacity", 1);
  d3.selectAll(".cv-sk-p").style("opacity", 1);
});




d3.selectAll(".cv-aw-p").on("mouseover", function(d) {
  d3.selectAll(".cv-aw-a").style("opacity", .5);
  d3.selectAll(".cv-aw-o").style("opacity", .5);
}).on("mouseout", function(d) {
  d3.selectAll(".cv-aw-a").style("opacity", 1);
  d3.selectAll(".cv-aw-o").style("opacity", 1);
});

d3.selectAll(".cv-aw-a").on("mouseover", function(d) {
  d3.selectAll(".cv-aw-p").style("opacity", .5);
  d3.selectAll(".cv-aw-o").style("opacity", .5);
}).on("mouseout", function(d) {
  d3.selectAll(".cv-aw-p").style("opacity", 1);
  d3.selectAll(".cv-aw-o").style("opacity", 1);
});

d3.selectAll(".cv-aw-o").on("mouseover", function(d) {
  d3.selectAll(".cv-aw-a").style("opacity", .5);
  d3.selectAll(".cv-aw-p").style("opacity", .5);
}).on("mouseout", function(d) {
  d3.selectAll(".cv-aw-a").style("opacity", 1);
  d3.selectAll(".cv-aw-p").style("opacity", 1);
});


d3.selectAll(".labelMyOwn").on("mouseover", function(d) {
  d3.selectAll(".cv-aw-a").style("opacity", .5);
  d3.selectAll(".cv-aw-o").style("opacity", .5);
}).on("mouseout", function(d) {
  d3.selectAll(".cv-aw-a").style("opacity", 1);
  d3.selectAll(".cv-aw-o").style("opacity", 1);
});

d3.selectAll(".labelAcademic").on("mouseover", function(d) {
  d3.selectAll(".cv-aw-p").style("opacity", .5);
  d3.selectAll(".cv-aw-o").style("opacity", .5);
}).on("mouseout", function(d) {
  d3.selectAll(".cv-aw-p").style("opacity", 1);
  d3.selectAll(".cv-aw-o").style("opacity", 1);
});

d3.selectAll(".labelOther3").on("mouseover", function(d) {
  d3.selectAll(".cv-aw-a").style("opacity", .5);
  d3.selectAll(".cv-aw-p").style("opacity", .5);
}).on("mouseout", function(d) {
  d3.selectAll(".cv-aw-a").style("opacity", 1);
  d3.selectAll(".cv-aw-p").style("opacity", 1);
});
