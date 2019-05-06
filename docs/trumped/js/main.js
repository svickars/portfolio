// BASE JQEURY FOR MENUS, ETC.
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

// var titleHeight = $('.title').height();

// $(window).scroll(function() {
//   if ($(window).width() > 768) {
//     if ($(window).scrollTop() > titleHeight) {
//       $('.project-info').css('position', 'fixed').css('top', '0');
//     } else {
//       $('.project-info').css('position', 'static');
//     }
//   } else {
//     if ($(window).scrollTop() > titleHeight) {
//       $('.project-info').css('position', 'static');
//     } else {
//       $('.project-info').css('position', 'static');
//     }
//   }
// });



// COLOUR SCALES

var color = d3.scaleLinear().domain([1, length])
  .interpolate(d3.interpolateHcl)
  .range([d3.rgb("#FF5C5C"), d3.rgb('#CC0000')]);

var color2 = d3.scaleLinear().domain([1, length])
  .interpolate(d3.interpolateHcl)
  .range([d3.rgb("#92A1CF"), d3.rgb('#191970')]);

var color3 = d3.scaleLinear().domain([1, length])
  .interpolate(d3.interpolateHcl)
  .range([d3.rgb("#00fa9a"), d3.rgb('#ff0000')]);

var color4 = d3.scaleLinear().domain([1, length])
  .interpolate(d3.interpolateHcl)
  .range([d3.rgb("#40e0d0"), d3.rgb('#4682b4')]);

var color5 = d3.scaleLinear().domain([1, length])
  .interpolate(d3.interpolateHcl)
  .range([d3.rgb("#ffd700"), d3.rgb('#bdb76b')]);

var color6 = d3.scaleLinear().domain([1, length])
  .interpolate(d3.interpolateHcl)
  .range([d3.rgb("#92A1CF"), d3.rgb('#191970')]);

var bgVizContainer = d3.select(".bg-viz").append("div").attr("class", "bg-viz-container");
var controller = new ScrollMagic.Controller();


// HEADER BG VIZ
d3.json("js/data/100days.json", function(data) {

  var tweet_topic_color = [];

  for (var i = 0; i < data.length; i++) {
    var tweet_word_list = data[i].word_list;

    var bg_tweet = bgVizContainer.append("span").attr("class", "bg_tweet bg_tweet_n-" + i + " bg_tweet-" + camelize(data[i].topic)).html("<span class='bg_tweet_name'>@realDonaldTrump </span>");

    d3.selectAll(".bg_tweet").classed("by-topic", true)
    tweet_topic_color.push($(".bg_tweet_n-" + i).css("color"));

    var tweet_pos_list = data[i].pos_list;

    for (var j = 0; j < tweet_word_list.length; j++) {
      var bg_tweetWord = bg_tweet.append("span").attr("class", "bg_tweetword bg_tweetword-" + tweet_pos_list[j].replace("$", "d")).attr("id", "bg_tweetword-" + i + "-" + j).html(tweet_word_list[j].replace(/InaugurationDay/g, "#InaugurationDay").replace(/MAGA/g, "#MAGA").replace(/AmericaFirst/g, "#AmericaFirst").replace(/MarchForLife/g, "#MarchForLife").replace(/NeverForget/g, "#NeverForget").replace(/SuperBowl/g, "#SuperBowl").replace(/MarineOne/g, "#MarineOne").replace(/ICYMI/g, "#ICYMI").replace(/JointAddress/g, "#JointAddress").replace(/JointSession/g, "#JointSession").replace(/ReadTheBill/g, "#ReadTheBill").replace(/POTUS7/g, "#POTUS7").replace(/PassTheBill/g, "#PassTheBill").replace(/RepealANDReplace/g, "#RepealANDReplace").replace(/NationalAgDay/g, "#NationalAgDay").replace(/KeystonePipeline/g, "#KeystonePipeline").replace(/MedalOfHonorDay/g, "#MedalOfHonorDay").replace(/MadeInTheUSA/g, "#MadeInTheUSA").replace(/ThankAVeteran/g, "#ThankAVeteran").replace(/Obamacare/g, "#Obamacare").replace(/MakeAmericaGreatAgain/g, "#MakeAmericaGreatAgain").replace(/USA/g, "#USA").replace(/ConfirmGorsuch/g, "#ConfirmGorsuch").replace(/WeeklyAddress/g, "#WeeklyAddress").replace(/WorldAutismAwarenessDay/g, "#WorldAutismAwarenessDay").replace(/CEOTownHall/g, "#CEOTownHall").replace(/NABTU2017/g, "#NABTU2017").replace(/SoldierRideDC/g, "#SoldierRideDC").replace(/ChagSameach/g, "#ChagSameach").replace(/SyrianStrikes/g, "#SyrianStrikes").replace(/BuyAmericanHireAmerican/g, "#BuyAmericanHireAmerican").replace(/S544/g, "#S544").replace(/GodBlessTheUSA/g, "#GodBlessTheUSA").replace(/BuildTheWall/g, "#BuildTheWall").replace(/CongratsPeggy/g, "#CongratsPeggy").replace(/ObamaCare/g, "#ObamaCare").replace(/Canada/g, "#Canada").replace(/https /g, "https:") + " ");

      if (tweet_word_list[j].includes("http") === true) {
        d3.select("#bg_tweetword-" + i + "-" + j).classed("bg_tweetword-WEB", true);
      }

      if (tweet_word_list[j].includes("media") === true) {
        d3.select("#bg_tweetword-" + i + "-" + j).classed("bg_tweetword-media", true);
      }
      if (tweet_word_list[j].includes("Trump") === true) {
        d3.select("#bg_tweetword-" + i + "-" + j).classed("bg_tweetword-Trump", true);
      }
      if (tweet_word_list[j].includes("people") === true) {
        d3.select("#bg_tweetword-" + i + "-" + j).classed("bg_tweetword-people", true);
      }
      if (tweet_word_list[j].includes("President") === true) {
        d3.select("#bg_tweetword-" + i + "-" + j).classed("bg_tweetword-President", true);
      }
      if (tweet_word_list[j].includes("country") === true) {
        d3.select("#bg_tweetword-" + i + "-" + j).classed("bg_tweetword-country", true);
      }
      if (tweet_word_list[j].includes("me") === true) {
        d3.select("#bg_tweetword-" + i + "-" + j).classed("bg_tweetword-me", true);
      }
      if (tweet_word_list[j].includes("Whitehouse") === true) {
        d3.select("#bg_tweetword-" + i + "-" + j).classed("bg_tweetword-Whitehouse", true);
      }
      if (tweet_word_list[j].includes("great") === true) {
        d3.select("#bg_tweetword-" + i + "-" + j).classed("bg_tweetword-great", true);
      }
      if (tweet_word_list[j].includes("FAKE") === true) {
        d3.select("#bg_tweetword-" + i + "-" + j).classed("bg_tweetword-FAKE", true);
      }
      if (tweet_word_list[j].includes("American") === true) {
        d3.select("#bg_tweetword-" + i + "-" + j).classed("bg_tweetword-American", true);
      }
      if (tweet_word_list[j].includes("election") === true) {
        d3.select("#bg_tweetword-" + i + "-" + j).classed("bg_tweetword-election", true);
      }
      if (tweet_word_list[j].includes("Obama") === true) {
        d3.select("#bg_tweetword-" + i + "-" + j).classed("bg_tweetword-Obama", true);
      }
      if (tweet_word_list[j].includes("Democrats") === true) {
        d3.select("#bg_tweetword-" + i + "-" + j).classed("bg_tweetword-Democrats", true);
      }
      if (tweet_word_list[j].includes("Russia") === true) {
        d3.select("#bg_tweetword-" + i + "-" + j).classed("bg_tweetword-Russia", true);
      }
    }
  }

  var sentiment_scene = new ScrollMagic.Scene({
      triggerElement: "#sentiment"
    })
    .addTo(controller);

  sentiment_scene.on("progress", function(event) {
    var dir = event.scrollDirection;

    $(".bg_tweetword-media").toggleClass("bg_tweetword-common");
    $(".bg_tweetword-Trump").toggleClass("bg_tweetword-common");
    $(".bg_tweetword-people").toggleClass("bg_tweetword-common");
    $(".bg_tweetword-President").toggleClass("bg_tweetword-common");
    $(".bg_tweetword-me").toggleClass("bg_tweetword-common");
    $(".bg_tweetword-Whitehouse").toggleClass("bg_tweetword-common");
    $(".bg_tweetword-Great").toggleClass("bg_tweetword-common");
    $(".bg_tweetword-FAKE").toggleClass("bg_tweetword-common");
    $(".bg_tweetword-America").toggleClass("bg_tweetword-common");
    $(".bg_tweetword-election").toggleClass("bg_tweetword-common");

    for (var i = 0; i < data.length; i++) {

      if (dir === "FORWARD") {
        $(".bg_tweet_n-" + i).css("background-color", color(data[i].polarity));
      } else {
        $(".bg_tweet_n-" + i).css("background-color", tweet_topic_color[i]);
      }
    }

    // $(".bg_tweet").toggleClass("by-topic")
    $(".bg_tweet").toggleClass("by-polarity")
  });

  var sentiment_back_scene = new ScrollMagic.Scene({
      triggerElement: "#grammar"
    })
    .addTo(controller);

  sentiment_back_scene.on("progress", function(event) {
    var dir = event.scrollDirection;
    if (dir === "REVERSE") {
      for (var i = 0; i < data.length; i++) {
        $(".bg_tweet_n-" + i).css("background-color", color(data[i].polarity));
      }
    };
  })
});

// $('.bg-viz-container').adjustTextSize(false, 1);

$(function() { // wait for document ready
  $("#pol1").css("background-color", color(0));
  $("#sub1").css("background-color", color2(1));
  $("#pol2").css("background-color", color(0));
  $("#sub2").css("background-color", color2(1));
  $("#pol3").css("background-color", color(0));
  $("#sub3").css("background-color", color2(0));
  $("#pol4").css("background-color", color(.8));
  $("#sub4").css("background-color", color2(.9));

  $("#rl1").css("background-color", color3(.2));
  $("#sp1").css("background-color", color2(.2));
  $("#tone1").css("background-color", color5(.5));
  $("#sent1").css("background-color", color(.25));
  $("#rl2").css("background-color", color3(1));
  $("#sp2").css("background-color", color2(.1));
  $("#tone2").css("background-color", color5(.5));
  $("#sent2").css("background-color", color(.5));

  var scene = new ScrollMagic.Scene({
      triggerElement: "#bg-viz",
      duration: distance2grammar
    })
    .triggerHook(0)
    .setPin("#bg-viz")
    .addTo(controller);

  var topic_coloured_scene = new ScrollMagic.Scene({
      triggerElement: "#startit"
    })
    .addTo(controller);

  topic_coloured_scene.on("progress", function(event) {
    $(".bg_tweet_name").toggleClass("bg_tweet-solid");
    setTimeout(function() {
      $(".bg_tweet-makingAmericaGreatAgain.by-topic").toggleClass("bg_tweet-solid");
    }, 50);
    setTimeout(function() {
      $(".bg_tweet-jobs.by-topic").toggleClass("bg_tweet-solid");
    }, 100);
    setTimeout(function() {
      $(".bg_tweet-officialBusiness.by-topic").toggleClass("bg_tweet-solid");
    }, 200);
    setTimeout(function() {
      $(".bg_tweet-election.by-topic").toggleClass("bg_tweet-solid");
    }, 300);
    setTimeout(function() {
      $(".bg_tweet-media.by-topic").toggleClass("bg_tweet-solid");
    }, 400);
    setTimeout(function() {
      $(".bg_tweet-foreignAffairs.by-topic").toggleClass("bg_tweet-solid");
    }, 500);
    setTimeout(function() {
      $(".bg_tweet-immigrationBan.by-topic").toggleClass("bg_tweet-solid");
    }, 600);
    setTimeout(function() {
      $(".bg_tweet-fakeNews.by-topic").toggleClass("bg_tweet-solid");
    }, 700);
    setTimeout(function() {
      $(".bg_tweet-democraticParty.by-topic").toggleClass("bg_tweet-solid");
    }, 800);
    setTimeout(function() {
      $(".bg_tweet-unofficialBusiness.by-topic").toggleClass("bg_tweet-solid");
    }, 900);
    setTimeout(function() {
      $(".bg_tweet-russia.by-topic").toggleClass("bg_tweet-solid");
    }, 950);
    setTimeout(function() {
      $(".bg_tweet-republicanParty.by-topic").toggleClass("bg_tweet-solid");
    }, 1000);
    setTimeout(function() {
      $(".bg_tweet-foreignLeader.by-topic").toggleClass("bg_tweet-solid");
    }, 1100);
    setTimeout(function() {
      $(".bg_tweet-healthcare.by-topic").toggleClass("bg_tweet-solid");
    }, 1150);
  });


  var common_words_scene = new ScrollMagic.Scene({
      triggerElement: "#commonwords"
    })
    .addTo(controller);

  common_words_scene.on("progress", function(event) {
    $(".bg_tweetword-media").toggleClass("bg_tweetword-common");
    $(".bg_tweetword-Trump").toggleClass("bg_tweetword-common");
    $(".bg_tweetword-people").toggleClass("bg_tweetword-common");
    $(".bg_tweetword-President").toggleClass("bg_tweetword-common");
    $(".bg_tweetword-me").toggleClass("bg_tweetword-common");
    $(".bg_tweetword-Whitehouse").toggleClass("bg_tweetword-common");
    $(".bg_tweetword-Great").toggleClass("bg_tweetword-common");
    $(".bg_tweetword-FAKE").toggleClass("bg_tweetword-common");
    $(".bg_tweetword-America").toggleClass("bg_tweetword-common");
    $(".bg_tweetword-election").toggleClass("bg_tweetword-common");
  });

  var tweetbox1_scene = new ScrollMagic.Scene({
      triggerElement: "#tweetbox1"
    })
    .addTo(controller);

  tweetbox1_scene.on("progress", function(event) {
    $(".bg_tweet_n-78").toggleClass("tweetbox-select");
  });

  var tweetbox2_scene = new ScrollMagic.Scene({
      triggerElement: "#tweetbox2"
    })
    .addTo(controller);

  tweetbox2_scene.on("progress", function(event) {
    $(".bg_tweet_n-78").toggleClass("tweetbox-select");
    $(".bg_tweet_n-87").toggleClass("tweetbox-select");
  });

  var tweetbox3_scene = new ScrollMagic.Scene({
      triggerElement: "#tweetbox3"
    })
    .addTo(controller);

  tweetbox3_scene.on("progress", function(event) {
    $(".bg_tweet_n-87").toggleClass("tweetbox-select");
    $(".bg_tweet_n-480").toggleClass("tweetbox-select");
  });

  var tweetbox4_scene = new ScrollMagic.Scene({
      triggerElement: "#tweetbox4"
    })
    .addTo(controller);

  tweetbox4_scene.on("progress", function(event) {
    $(".bg_tweet_n-480").toggleClass("tweetbox-select");
    $(".bg_tweet_n-259").toggleClass("tweetbox-select");
  });

  var grammar_scene = new ScrollMagic.Scene({
      triggerElement: "#grammar"
    })
    .addTo(controller);


  grammar_scene.on("progress", function(event) {
    var dir = event.scrollDirection;
    if (dir === "FORWARD") {
      $(".bg_tweet").css("background-color", "#ffffff");
    };

    $(".bg_tweet_n-259").toggleClass("tweetbox-select");
    $(".bg_tweetword").toggleClass("by-pos");


    setTimeout(function() {
      $(".bg_tweetword-JJ, .bg_tweetword-UH").toggleClass("bg_tweetword-solid");
    }, 400);
    setTimeout(function() {
      $(".bg_tweetword-JJR, .bg_tweetword-FW").toggleClass("bg_tweetword-solid");
    }, 600);
    setTimeout(function() {
      $(".bg_tweetword-JJS, .bg_tweetword-WRB, .bg_tweetword-WP").toggleClass("bg_tweetword-solid");
    }, 800);
    setTimeout(function() {
      $(".bg_tweetword-NN").toggleClass("bg_tweetword-solid");
    }, 850);
    setTimeout(function() {
      $(".bg_tweetword-NNS").toggleClass("bg_tweetword-solid");
    }, 850);
    setTimeout(function() {
      $(".bg_tweetword-NNP, .bg_tweetword-POS").toggleClass("bg_tweetword-solid");
    }, 950);
    setTimeout(function() {
      $(".bg_tweetword-NNPS").toggleClass("bg_tweetword-solid");
    }, 1000);
    setTimeout(function() {
      $(".bg_tweetword-PRP, .bg_tweetword-PRPd").toggleClass("bg_tweetword-solid");
    }, 1050);
    setTimeout(function() {
      $(".bg_tweetword-DT, .bg_tweetword-WDT, .bg_tweetword-MD, .bg_tweetword-IN, .bg_tweetword-CD, .bg_tweetword-CC, .bg_tweetword-TO, .bg_tweetword-RP, .bg_tweetword-EX").toggleClass("bg_tweetword-solid");
    }, 1200);
    setTimeout(function() {
      $(".bg_tweetword-VB, .bg_tweetword-VBD, .bg_tweetword-VBG, .bg_tweetword-VBN, .bg_tweetword-VBP, .bg_tweetword-VBZ").toggleClass("bg_tweetword-solid");
    }, 1350);
    setTimeout(function() {
      $(".bg_tweetword-RB, .bg_tweetword-RBR, .bg_tweetword-RBS").toggleClass("bg_tweetword-solid");
    }, 1450);
    setTimeout(function() {
      $(".bg_tweet_name").toggleClass("bg_tweet_name_solid");
    }, 1500);
    setTimeout(function() {
      $(".bg_tweetword-WEB").addClass("bg_tweetword-solid");
    }, 1600);
  })

  var drawnext_ = new ScrollMagic.Scene({
      triggerElement: "#section2"
    })
    .triggerHook("onEnter")
    .addTo(controller);

  tweetbox4_scene.on("progress", function(event) {
    section2();
  });


});

d3.select(".legend-jobs").on("mouseover", function(d) {
  inline_legend_mousover("jobs");
}).on("mouseout", function(d) {
  d3.selectAll(".bg_tweet").style("opacity", 1)
})

d3.select(".legend-media").on("mouseover", function(d) {
  inline_legend_mousover("media");
}).on("mouseout", function(d) {
  d3.selectAll(".bg_tweet").style("opacity", 1)
})

d3.select(".legend-foreignAffairs").on("mouseover", function(d) {
  inline_legend_mousover("foreignAffairs");
}).on("mouseout", function(d) {
  d3.selectAll(".bg_tweet").style("opacity", 1)
})

d3.select(".legend-fakeNews").on("mouseover", function(d) {
  inline_legend_mousover("fakeNews");
}).on("mouseout", function(d) {
  d3.selectAll(".bg_tweet").style("opacity", 1)
})

d3.select(".legend-immigrationBan").on("mouseover", function(d) {
  inline_legend_mousover("immigrationBan");
}).on("mouseout", function(d) {
  d3.selectAll(".bg_tweet").style("opacity", 1)
})

d3.select(".legend-makingAmericaGreatAgain").on("mouseover", function(d) {
  inline_legend_mousover("makingAmericaGreatAgain");
}).on("mouseout", function(d) {
  d3.selectAll(".bg_tweet").style("opacity", 1)
})

d3.select(".legend-healthcare").on("mouseover", function(d) {
  inline_legend_mousover("healthcare");
}).on("mouseout", function(d) {
  d3.selectAll(".bg_tweet").style("opacity", 1)
})

d3.select(".legend-unofficialBusiness").on("mouseover", function(d) {
  inline_legend_mousover("unofficialBusiness");
}).on("mouseout", function(d) {
  d3.selectAll(".bg_tweet").style("opacity", 1)
})

d3.select(".legend-democraticParty").on("mouseover", function(d) {
  inline_legend_mousover("democraticParty");
}).on("mouseout", function(d) {
  d3.selectAll(".bg_tweet").style("opacity", 1)
})

d3.select(".legend-russia").on("mouseover", function(d) {
  inline_legend_mousover("russia");
}).on("mouseout", function(d) {
  d3.selectAll(".bg_tweet").style("opacity", 1)
})

d3.select(".legend-foreignLeader").on("mouseover", function(d) {
  inline_legend_mousover("foreignLeader");
}).on("mouseout", function(d) {
  d3.selectAll(".bg_tweet").style("opacity", 1)
})

d3.select(".legend-election").on("mouseover", function(d) {
  inline_legend_mousover("election");
}).on("mouseout", function(d) {
  d3.selectAll(".bg_tweet").style("opacity", 1)
})

d3.select(".legend-republicanParty").on("mouseover", function(d) {
  inline_legend_mousover("republicanParty");
}).on("mouseout", function(d) {
  d3.selectAll(".bg_tweet").style("opacity", 1)
})

d3.select(".legend-officialBusiness").on("mouseover", function(d) {
  inline_legend_mousover("officialBusiness");
}).on("mouseout", function(d) {
  d3.selectAll(".bg_tweet").style("opacity", 1)
})

function inline_legend_mousover(topic) {
  d3.selectAll(".bg_tweet").style("opacity", ".25");
  d3.selectAll(".bg_tweet-" + topic).style("opacity", "1");
}

d3.select(".legend-JJ").on("mouseover", function(d) {
  inline_legend_words_mouseover("JJ");
  inline_legend_words_mouseover("JJR");
  inline_legend_words_mouseover("JJS");
}).on("mouseout", function(d) {
  d3.selectAll(".bg_tweetword").style("opacity", 1)
})

d3.select(".legend-RB").on("mouseover", function(d) {
  inline_legend_words_mouseover("RB");
  inline_legend_words_mouseover("RBR");
  inline_legend_words_mouseover("RBS");
}).on("mouseout", function(d) {
  d3.selectAll(".bg_tweetword").style("opacity", 1)
})
d3.select(".legend-UH").on("mouseover", function(d) {
  inline_legend_words_mouseover("UH");
}).on("mouseout", function(d) {
  d3.selectAll(".bg_tweetword").style("opacity", 1)
})

d3.select(".legend-NN").on("mouseover", function(d) {
  inline_legend_words_mouseover("NN");
  inline_legend_words_mouseover("NNS");
}).on("mouseout", function(d) {
  d3.selectAll(".bg_tweetword").style("opacity", 1)
})

d3.select(".legend-PRP").on("mouseover", function(d) {
  inline_legend_words_mouseover("PRP");
  inline_legend_words_mouseover("PRPd");
}).on("mouseout", function(d) {
  d3.selectAll(".bg_tweetword").style("opacity", 1)
})

d3.select(".legend-NNP").on("mouseover", function(d) {
  inline_legend_words_mouseover("NNP");
  inline_legend_words_mouseover("NNPS");
  inline_legend_words_mouseover("POS");
}).on("mouseout", function(d) {
  d3.selectAll(".bg_tweetword").style("opacity", 1)
})

d3.select(".legend-VB").on("mouseover", function(d) {
  inline_legend_words_mouseover("VB");
  inline_legend_words_mouseover("VBD");
  inline_legend_words_mouseover("VBG");
  inline_legend_words_mouseover("VBN");
  inline_legend_words_mouseover("VBP");
  inline_legend_words_mouseover("VBZ");
}).on("mouseout", function(d) {
  d3.selectAll(".bg_tweetword").style("opacity", 1)
})

d3.select(".legend-WP").on("mouseover", function(d) {
  inline_legend_words_mouseover("WP");
  inline_legend_words_mouseover("WRB");
}).on("mouseout", function(d) {
  d3.selectAll(".bg_tweetword").style("opacity", 1)
})

d3.select(".legend-WEB").on("mouseover", function(d) {
  inline_legend_words_mouseover("WEB");
}).on("mouseout", function(d) {
  d3.selectAll(".bg_tweetword").style("opacity", 1)
})

d3.select(".legend-other").on("mouseover", function(d) {
  inline_legend_words_mouseover("DT");
  inline_legend_words_mouseover("WDT");
  inline_legend_words_mouseover("MD");
  inline_legend_words_mouseover("IN");
  inline_legend_words_mouseover("TO");
  inline_legend_words_mouseover("FW");
  inline_legend_words_mouseover("CD");
  inline_legend_words_mouseover("CC");
  inline_legend_words_mouseover("RP");
  inline_legend_words_mouseover("EX");
}).on("mouseout", function(d) {
  d3.selectAll(".bg_tweetword").style("opacity", 1)
})

function inline_legend_words_mouseover(topic) {
  d3.selectAll(".bg_tweetword").style("opacity", ".25");
  d3.selectAll(".bg_tweetword-" + topic).style("opacity", "1");
}







var vpWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
  vpHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
  deskW = false, //desktop, 1024px+
  tabW = false, //tablet, 768px+
  mobileW = false; //phone, 330px+

// What size we dealing with here?
if (vpWidth >= 1024) {
  deskW = true;
}
if (vpWidth >= 768 && vpWidth < 1024) {
  tabW = true;
}
if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  mobileW = true;
}

var distance2grammar = ($("#grammar").offset().top) - (window.innerHeight * .5);

var distance2endS2 = ($("#endS2").offset().top) - ($("#section2").offset().top) - (window.innerHeight * .5);

if (mobileW) {
  // distance2grammar += 200;
  distance2endS2 += 200;
  $(".temporary_spacer").css("height", "800px");
}

// global sizes
var margin = {
  top: 20,
  right: 50,
  bottom: 20,
  left: 20
};
if (tabW) {
  margin.left = 20;
  margin.right = 20;
}
if (mobileW) {
  margin.left = 20;
  margin.right = 20;
}

// sizes for section2
var s2w = document.getElementById("section2chart").offsetWidth - margin.right - margin.left,
  s2h = document.getElementById("section2chart").offsetHeight - margin.top - margin.bottom;

var s2width = (vpWidth - 400) - margin.left - margin.right,
  s2textWidth = vpWidth - 100 - s2width - margin.left - margin.right,
  s2startingHeight = 25,
  s2height = 300,
  s2textHeight = 800;
if (tabW) {
  s2width = (vpWidth) - margin.left - margin.right;
  s2textWidth = (vpWidth) - margin.left - margin.right;
}
if (mobileW) {
  s2width = (vpWidth) - margin.left - margin.right;
  s2textWidth = (vpWidth) - margin.left - margin.right;
}
if (vpWidth > 1300) {
  s2width = 1300 - 300 - margin.left - margin.right
  s2textWidth = vpWidth - 100 - s2width - margin.left - margin.right;
}

d3.select(".section2_text").style("width", s2textWidth + "px");

// date/time
var parseDateTime = d3.timeParse("%m/%d/%Y %H:%M:%S"),
  parseTime = d3.timeFormat("%H:%M:%S"),
  parseDate = d3.timeFormat("%d %B");

// scales - do rae me fa so la tee doe
var x = d3.scaleTime()
  .domain([new Date(2017, 0, 20), new Date(2017, 3, 29)])
  .range([25, s2w]);
var y = d3.scaleLinear()
  .domain([86400, 0])
  .range([s2h - 60, 100]);
var w = d3.scaleLinear()
  .domain([0, 140])
  .range([0, 2.5])



function section2() {

  // append "never-ending" textbox to the left so we can add some scrollytelling
  // var s2text = d3.select("#schedule-chart")
  //   .append("div")
  //   .style("width", s2textWidth + "px")
  //   .style("height", s2textHeight + "px")
  //   .style("float", "left");

  // append a div to attach the tweets to
  var translatex = margin.left - 15;
  // var s2tweetbox = d3.select("#section2chart")
  //   .append("div")
  //   .style("width", s2w + "px")
  //   .attr("class", "s2tweetbox")
  //   .style("transform", "translate(" + margin.left + "px,0)");
  // .style("background-color", "#000000")
  // .style("float", "right")
  // .style("margin-bottom", "50px");

  // append SVG in section2
  var s2svg = d3.select("#section2chart")
    .append("svg")
    .style("width", s2w + margin.left + margin.right + "px")
    .style("height", s2h + margin.top + margin.bottom + "px")
    .attr("width", s2w + margin.left + margin.right)
    .attr("height", s2h + margin.top + margin.bottom)
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

  var s2g = s2svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    .attr("class", "s2svg");

  // GRAPH ELEMENTS
  // axes
  translateHeight = s2startingHeight + 25 + 100;
  var xaxis = s2svg.append("g")
    .attr("transform", "translate(0," + translateHeight + ")")
    .attr("class", "x axis")
    .call(d3.axisBottom(x)
      .ticks(d3.timeMonth)
      .tickSize(0, 0)
      .tickFormat(d3.timeFormat("%b"))
      .tickSizeInner(0)
      .tickPadding(10));

  var yaxis1 = s2svg.append("line")
    .attr("x1", 25)
    .attr("x2", s2w)
    .attr("y1", function(d) {
      return y(hmsToSecondsOnly(parseTime(parseDateTime("01/01/2017 6:00:00"))));
    })
    .attr("y2", function(d) {
      return y(hmsToSecondsOnly(parseTime(parseDateTime("01/01/2017 6:00:00"))));
    })
    .attr("class", "yaxis");

  var yaxis2 = s2svg.append("line")
    .attr("x1", 25)
    .attr("x2", s2w)
    .attr("y1", function(d) {
      return y(hmsToSecondsOnly(parseTime(parseDateTime("01/01/2017 12:00:00"))));
    })
    .attr("y2", function(d) {
      return y(hmsToSecondsOnly(parseTime(parseDateTime("01/01/2017 12:00:00"))));
    })
    .attr("class", "yaxis");

  var yaxis3 = s2svg.append("line")
    .attr("x1", 25)
    .attr("x2", s2w)
    .attr("y1", function(d) {
      return y(hmsToSecondsOnly(parseTime(parseDateTime("01/01/2017 18:00:00"))));
    })
    .attr("y2", function(d) {
      return y(hmsToSecondsOnly(parseTime(parseDateTime("01/01/2017 18:00:00"))));
    })
    .attr("class", "yaxis");

  var yaxis4 = s2svg.append("line")
    .attr("x1", 25)
    .attr("x2", s2w)
    .attr("y1", function(d) {
      return y(hmsToSecondsOnly(parseTime(parseDateTime("01/01/2017 23:59:59"))));
    })
    .attr("y2", function(d) {
      return y(hmsToSecondsOnly(parseTime(parseDateTime("01/01/2017 23:59:59"))));
    })
    .attr("class", "yaxis");

  s2svg.append("text")
    .attr("x", s2w + 2)
    .attr("y", function(d) {
      return y(hmsToSecondsOnly(parseTime(parseDateTime("01/01/2017 06:00:00"))));
    })
    .attr("dy", "2px")
    .attr("class", "yaxislabel")
    .text("6a");

  s2svg.append("text")
    .attr("x", s2w + 2)
    .attr("y", function(d) {
      return y(hmsToSecondsOnly(parseTime(parseDateTime("01/01/2017 12:00:00"))));
    })
    .attr("dy", "2px")
    .attr("class", "yaxislabel")
    .text("12p");

  s2svg.append("text")
    .attr("x", s2w + 2)
    .attr("y", function(d) {
      return y(hmsToSecondsOnly(parseTime(parseDateTime("01/01/2017 18:00:00"))));
    })
    .attr("dy", "2px")
    .attr("class", "yaxislabel")
    .text("6p");

  s2svg.append("text")
    .attr("x", s2w + 2)
    .attr("y", function(d) {
      return y(hmsToSecondsOnly(parseTime(parseDateTime("01/01/2017 23:59:59"))));
    })
    .attr("dy", "2px")
    .attr("class", "yaxislabel")
    .text("12a");

  // titles
  s2svg.append("text")
    .attr("x", s2w / 2)
    .attr("y", 15)
    .attr("class", "graph-title")
    .attr("text-anchor", "middle")
    .text("@realDonaldTrump's first 100 days");

  d3.select(".graph2-title").attr("width", s2w);

  d3.select("#section2tweet").append("text")
    .attr("x", s2w / 2)
    .attr("y", 15)
    .attr("class", "graph-title")
    .attr("text-anchor", "middle")
    .text("Hi first tweet as president");

  // top graph
  var tweetsTitle = s2svg.append("text")
    .attr("x", -112)
    .attr("y", 10)
    .attr("class", "graph-yaxis-title")
    .attr("text-anchor", "middle")
    .attr("transform", "rotate(-90)")
    .text("tweets");

  // bottom graph
  var eventsTitle = s2svg.append("text")
    .attr("x", -180)
    .attr("y", 10)
    .attr("class", "graph-yaxis-title")
    .attr("text-anchor", "middle")
    .attr("transform", "rotate(-90)")
    .text("events");

  var keytweetline = s2svg.append("line")
    .attr("y1", 130)
    .attr("y2", 215)
    .attr("class", "keytweetline");

  var keytweetdate = s2svg.append("text")
    .attr("x", 50)
    .attr("y", 225)
    .attr("class", "keytweetdate")
    .text("15 April");

  // var pin_s2_progress;
  var pin_s2 = new ScrollMagic.Scene({
      triggerElement: ".s2-left-inner",
      // duration: distance2endS2
      duration: "1500%"
    })
    // .triggerHook(.2)
    .offset("300px")
    .setPin(".s2-left-inner", {
      pushfollowers: false
    })
    .addTo(controller);

  // pin_s2.on("progress", function(event) {
  //   // pin_s2_progress = pin_s2.progress();
  //   // console.log(pin_s2_progress);
  // });

  var footnotes_scene = new ScrollMagic.Scene({
      triggerElement: "#footnotes"
    })
    .triggerHook("onEnter")
    .addTo(controller);

  footnotes_scene.on("progress", function(event) {
    var dir = event.scrollDirection;
    if (dir === "FORWARD") {
      pin_s2.removePin();
    } else {
      // pin_s2.setPin(".s2-left-inner", {
      //   pushfollowers: false
      // })
      // pin_s2.removePin(true);
      // pin_s2.setPin(".s2-left-inner", {
      //   pushfollowers: false
      // })
    }
  });



  // show story elements on scroll


  // longest break1
  const type = d3.annotationLabel
  const calloutWithArrow =
    d3.annotationCustomType(
      d3.annotationLabel, {
        "className": "s2annotationArrow",
        "connector": {
          "end": "arrow",
          "type": "elbow"
        },
        "note": {
          "align": "right",
          "orientation": "topBottom",
          "lineType": "horizontal"
        }
      })
  const calloutWithDot = d3.annotationCustomType(
    d3.annotationLabel, {
      "className": "s2annotationDot",
      "connector": {
        "end": "dot"
      },
      "note": {
        "align": "left",
        "orientation": "topBottom",
        "lineType": "vertical"
      }
    })


  // annotations and labels
  const annotations = [{
    note: {
      label: "Day 1"
    },
    className: "anno-day1",
    type: calloutWithDot,
    x: x(parseDateTime("1/20/2017 1:00:00")),
    y: 130,
    dy: 5,
    dx: 0
  }, {
    note: {
      label: "Day 10"
    },
    className: "anno-day10",
    type: calloutWithDot,
    x: x(parseDateTime("1/30/2017 1:00:00")),
    y: 130,
    dy: 5,
    dx: 0
  }, {
    note: {
      label: "Day 25"
    },
    className: "anno-day25",
    type: calloutWithDot,
    x: x(parseDateTime("2/14/2017 1:00:00")),
    y: 130,
    dy: 5,
    dx: 0
  }, {
    note: {
      label: "Day 50"
    },
    className: "anno-day50",
    type: calloutWithDot,
    x: x(parseDateTime("3/11/2017 1:00:00")),
    y: 130,
    dy: 5,
    dx: 0
  }, {
    note: {
      label: "Day 75"
    },
    className: "anno-day75",
    type: calloutWithDot,
    x: x(parseDateTime("4/5/2017 1:00:00")),
    y: 130,
    dy: 5,
    dx: 0
  }, {
    note: {
      label: "Day 100"
    },
    className: "anno-day100",
    type: calloutWithDot,
    x: x(parseDateTime("4/29/2017 23:59:59")),
    y: 130,
    dy: 5,
    dx: 0
  }, {
    note: {
      label: "The first 10% of tweets"
    },
    className: "anno-percent10",
    type: calloutWithArrow,
    x: x(parseDateTime("1/28/2017 23:00:20")),
    y: 130,
    dy: 100,
    dx: 0
  }, {
    note: {
      label: "The first 25% of tweets"
    },
    className: "anno-percent25",
    type: calloutWithArrow,
    x: x(parseDateTime("2/9/2017 23:00:00")),
    y: 130,
    dy: 100,
    dx: 0
  }, {
    note: {
      label: "The first 50% of tweets"
    },
    className: "anno-percent50",
    type: calloutWithArrow,
    x: x(parseDateTime("3/7/2017 23:00:00")),
    y: 130,
    dy: 100,
    dx: 0
  }, {
    note: {
      label: "The first 75% of tweets"
    },
    className: "anno-percent75",
    type: calloutWithArrow,
    x: x(parseDateTime("4/3/2017 23:00:00")),
    y: 130,
    dy: 100,
    dx: 0
  }, {
    note: {
      label: "His longest Twitter silence"
    },
    className: "anno-break1",
    type: calloutWithArrow,
    x: x(parseDateTime("4/15/2017 6:46:20")),
    y: 130,
    dy: 100,
    dx: 0
  }]

  const makeAnnotations = d3.annotation()
    .type(type)
    .annotations(annotations);

  s2svg.append("g")
    .attr("class", "annotation-group")
    .call(makeAnnotations);

  // markers
  var percent10 = s2svg.append("rect")
    .attr("x", x(parseDateTime("1/20/2017 1:00:20")))
    .attr("y", 95)
    .attr("width", function(d) {
      return x(parseDateTime("1/28/2017 23:00:00")) - x(parseDateTime("1/20/2017 1:00:20"))
    })
    .attr("height", 35)
    .style("stroke", "#e00000")
    .style("fill", "none")
    .style("opacity", 0);

  var percent25 = s2svg.append("rect")
    .attr("x", x(parseDateTime("1/20/2017 1:00:20")))
    .attr("y", 95)
    .attr("width", function(d) {
      return x(parseDateTime("2/9/2017 23:00:00")) - x(parseDateTime("1/20/2017 1:00:20"))
    })
    .attr("height", 35)
    .style("stroke", "#e00000")
    .style("fill", "none")
    .style("opacity", 0);

  var percent50 = s2svg.append("rect")
    .attr("x", x(parseDateTime("1/20/2017 1:00:20")))
    .attr("y", 95)
    .attr("width", function(d) {
      return x(parseDateTime("3/07/2017 23:00:00")) - x(parseDateTime("1/20/2017 1:00:20"))
    })
    .attr("height", 35)
    .style("stroke", "#e00000")
    .style("fill", "none")
    .style("opacity", 0);

  var percent75 = s2svg.append("rect")
    .attr("x", x(parseDateTime("1/20/2017 1:00:20")))
    .attr("y", 95)
    .attr("width", function(d) {
      return x(parseDateTime("4/3/2017 23:00:00")) - x(parseDateTime("1/20/2017 1:00:20"))
    })
    .attr("height", 35)
    .style("stroke", "#e00000")
    .style("fill", "none")
    .style("opacity", 0);

  var break1 = s2svg.append("rect")
    .attr("x", x(parseDateTime("4/14/2017 17:46:20")))
    .attr("y", 100)
    .attr("width", function(d) {
      return x(parseDateTime("4/16/2017 8:18:40")) - x(parseDateTime("4/14/2017 17:46:20"))
    })
    .attr("height", 25)
    .style("fill", "#000")
    .style("opacity", 0);

  // var break1_scene = new ScrollMagic.Scene({
  //     triggerElement: "#s2-break1"
  //   })
  //   .addTo(controller);
  //
  // break1_scene.on("progress", function(event) {
  //   var dir = event.scrollDirection;
  //   if (dir === "FORWARD") {
  //     d3.selectAll(".s2-tweet").transition().duration(500).style("opacity", .1);
  //     break1.transition().duration(500).style("opacity", 1);
  //     // break1_annotation.transition().duration(750).style("opacity", 1);
  //   } else {
  //     d3.selectAll(".s2-tweet").transition().duration(500).style("opacity", 1);
  //     break1.transition().duration(500).style("opacity", 0)
  //     // break1_annotation.transition().duration(500).style("opacity", 0);
  //   }
  // });



  d3.json("js/data/100days.json", function(data) {

    var day1_scene = new ScrollMagic.Scene({
        triggerElement: "#s2-day1"
      })
      .addTo(controller);

    day1_scene.on("progress", function(event) {
      var dir = event.scrollDirection;
      if (dir === "FORWARD") {
        d3.selectAll(".s2-tweet").transition().duration(500).style("opacity", .1);
        d3.selectAll(".s2-tweet-1").transition().duration(500).style("opacity", 1);
        d3.select(".anno-day1").transition().duration(750).style("opacity", 1);
      } else {
        d3.selectAll(".s2-tweet").transition().duration(500).style("opacity", 1);
        d3.select(".anno-day1").transition().duration(750).style("opacity", 0);
      }
    });

    var day100_scene = new ScrollMagic.Scene({
        triggerElement: "#s2-day100"
      })
      .addTo(controller);

    day100_scene.on("progress", function(event) {
      var dir = event.scrollDirection;
      if (dir === "FORWARD") {
        d3.selectAll(".s2-tweet-1").transition().duration(500).style("opacity", .1);
        d3.selectAll(".s2-tweet-501").transition().duration(500).style("opacity", 1);
        d3.selectAll(".anno-day10, .anno-day25, .anno-day50, .anno-day75, .anno-day100").transition().duration(750).style("opacity", 1);
        tweetClick(data[500])
      } else {
        d3.selectAll(".s2-tweet-1").transition().duration(500).style("opacity", 1);
        d3.selectAll(".s2-tweet-501").transition().duration(500).style("opacity", .1);
        d3.selectAll(".anno-day10, .anno-day25, .anno-day50, .anno-day75, .anno-day100").transition().duration(750).style("opacity", 0);
        tweetClick(data[0])
      }
    });

    var percent10_scene = new ScrollMagic.Scene({
        triggerElement: "#s2-percent10"
      })
      .addTo(controller);

    percent10_scene.on("progress", function(event) {
      var dir = event.scrollDirection;
      if (dir === "FORWARD") {
        percent10.transition().duration(500).style("opacity", 1);
        d3.selectAll(".s2-tweet-501").transition().duration(500).style("opacity", .1);
        d3.selectAll(".s2-tweet-52").transition().duration(500).style("opacity", 1);
        d3.selectAll(".anno-percent10").transition().duration(750).style("opacity", 1);
        tweetClick(data[51])
      } else {
        percent10.transition().duration(500).style("opacity", 0);
        d3.selectAll(".s2-tweet-501").transition().duration(500).style("opacity", 1);
        d3.selectAll(".s2-tweet-52").transition().duration(500).style("opacity", .1);
        d3.selectAll(".anno-percent10").transition().duration(750).style("opacity", 0);
        tweetClick(data[500])
      }
    });

    var percent25_scene = new ScrollMagic.Scene({
        triggerElement: "#s2-percent25"
      })
      .addTo(controller);

    percent25_scene.on("progress", function(event) {
      var dir = event.scrollDirection;
      if (dir === "FORWARD") {
        percent25.transition().duration(500).style("opacity", 1);
        d3.selectAll(".s2-tweet-52").transition().duration(500).style("opacity", .1);
        d3.selectAll(".s2-tweet-129").transition().duration(500).style("opacity", 1);
        d3.selectAll(".anno-percent10").transition().duration(750).style("opacity", 0);
        d3.selectAll(".anno-percent25").transition().duration(750).style("opacity", 1);
        tweetClick(data[128])
      } else {
        percent25.transition().duration(500).style("opacity", 0);
        d3.selectAll(".s2-tweet-129").transition().duration(500).style("opacity", .1);
        d3.selectAll(".s2-tweet-52").transition().duration(500).style("opacity", 1);
        d3.selectAll(".anno-percent10").transition().duration(750).style("opacity", 1);
        d3.selectAll(".anno-percent25").transition().duration(750).style("opacity", 0);
        tweetClick(data[51])
      }
    });

    var percent75_scene = new ScrollMagic.Scene({
        triggerElement: "#s2-percent75"
      })
      .addTo(controller);

    percent75_scene.on("progress", function(event) {
      var dir = event.scrollDirection;
      if (dir === "FORWARD") {
        percent75.transition().duration(500).style("opacity", 1);
        percent50.transition().duration(500).style("opacity", 1);
        d3.selectAll(".s2-tweet-129").transition().duration(500).style("opacity", .1);
        d3.selectAll(".s2-tweet-377").transition().duration(500).style("opacity", 1);
        d3.selectAll(".anno-percent25").transition().duration(750).style("opacity", 0);
        d3.selectAll(".anno-percent75, .anno-percent50").transition().duration(750).style("opacity", 1);
        tweetClick(data[376])
      } else {
        percent75.transition().duration(500).style("opacity", 0);
        percent50.transition().duration(500).style("opacity", 0);
        d3.selectAll(".s2-tweet-377").transition().duration(500).style("opacity", .1);
        d3.selectAll(".s2-tweet-129").transition().duration(500).style("opacity", 1);
        d3.selectAll(".anno-percent25").transition().duration(750).style("opacity", 1);
        d3.selectAll(".anno-percent75, .anno-percent50").transition().duration(750).style("opacity", 0);
        tweetClick(data[128])
      }
    });

    var keytweet1_scene = new ScrollMagic.Scene({
        triggerElement: "#s2-keytweet1"
      })
      .addTo(controller);

    keytweet1_scene.on("progress", function(event) {
      var dir = event.scrollDirection;
      if (dir === "FORWARD") {
        percent75.transition().style("opacity", 0);
        percent50.transition().style("opacity", 0);
        percent25.transition().style("opacity", 0);
        percent10.transition().style("opacity", 0);
        d3.selectAll(".anno-percent75, .anno-percent50, .anno-percent25, .anno-percent10").transition().style("opacity", 0);
        d3.selectAll(".s2-tweet").transition().duration(500).style("opacity", 0);
        d3.selectAll(".s2-tweet-18").transition().duration(500).style("opacity", 1);
        keytweet(15, 2, 1, "21 January")
      } else {
        percent75.transition().style("opacity", 1);
        percent50.transition().style("opacity", 1);
        percent25.transition().style("opacity", 1);
        percent10.transition().style("opacity", 1);
        keytweetline.transition().style("opacity", 0).style("display", "none");
        keytweetdate.transition().style("opacity", 0).style("display", "none");
        d3.selectAll(".s2-tweet").transition().duration(500).style("opacity", .1);
        d3.selectAll(".s2-tweet-377").transition().duration(500).style("opacity", 1);
        d3.selectAll(".s2-eventOutline").transition().style("opacity", 0).style("display", "none");
        tweetClick(data[376])
      }
    });

    var keytweet2_scene = new ScrollMagic.Scene({
        triggerElement: "#s2-keytweet2"
      })
      .addTo(controller);

    keytweet2_scene.on("progress", function(event) {
      var dir = event.scrollDirection;
      if (dir === "FORWARD") {
        keytweet(54, 13, 1, "29 January");
      } else {
        d3.selectAll(".s2-tweet-18").transition().duration(500).style("opacity", 1);
        keytweet(15, 2, 1, "21 January");
      }
    });

    var keytweet3_scene = new ScrollMagic.Scene({
        triggerElement: "#s2-keytweet3"
      })
      .addTo(controller);

    keytweet3_scene.on("progress", function(event) {
      var dir = event.scrollDirection;
      if (dir === "FORWARD") {
        keytweet(72, 16, 1, "1 February");
      } else {
        keytweet(54, 13, 1, "29 January");
      }
    });

    var keytweet4_scene = new ScrollMagic.Scene({
        triggerElement: "#s2-keytweet4"
      })
      .addTo(controller);

    keytweet4_scene.on("progress", function(event) {
      var dir = event.scrollDirection;
      if (dir === "FORWARD") {
        keytweet(91, 17, 1, "4 February");
        d3.selectAll(".s2-tweet-95, .s2-tweet-96").transition().duration(500).style("opacity", 1);
      } else {
        keytweet(72, 16, 1, "1 February");
      }
    });

    var keytweet5_scene = new ScrollMagic.Scene({
        triggerElement: "#s2-keytweet5"
      })
      .addTo(controller);

    keytweet5_scene.on("progress", function(event) {
      var dir = event.scrollDirection;
      if (dir === "FORWARD") {
        keytweet(443, "none", 1, "21 April");
      } else {
        keytweet(91, 17, 1, "4 February");
      }
    });

    var secondtranslateHeight = s2height + 25;

    var timings_scene = new ScrollMagic.Scene({
        triggerElement: "#timings"
      })
      .addTo(controller);

    timings_scene.on("progress", function(event) {
      var dir = event.scrollDirection;
      if (dir === "FORWARD") {
        tweets.transition().style("opacity", 1);
        tweets.transition().delay(100).attr("y", function(d) {
          return y(hmsToSecondsOnly(parseTime(parseDateTime(d.created_at)))) - 12;
        });
        xaxis.transition().delay(100).attr("transform", "translate(0," + secondtranslateHeight + ")");
        yaxis1.style("display", "block").transition().delay(200).style("opacity", 1);
        yaxis2.style("display", "block").transition().delay(200).style("opacity", 1);
        yaxis3.style("display", "block").transition().delay(200).style("opacity", 1);
        yaxis4.style("display", "block").transition().delay(200).style("opacity", 1);
        d3.selectAll(".yaxislabel").style("display", "block").transition().delay(200).style("opacity", 1);
        eventsTitle.transition().style("opacity", 0).style("display", "none");
        tweetsTitle.transition().delay(100).attr("x", -200).text("Hours of the day");
        d3.selectAll(".s2-event").transition().style("opacity", 0).style("display", "none");
        d3.selectAll(".s2annotationDot").transition().style("opacity", 0).style("display", "none");
        keytweetline.transition().style("opacity", 0).style("display", "none");
        keytweetdate.transition().style("opacity", 0).style("display", "none");
      } else {
        tweets.attr("y", 100);
        xaxis.transition().attr("transform", "translate(0," + translateHeight + ")")
        yaxis1.transition().style("opacity", 0).style("display", "none");
        yaxis2.transition().style("opacity", 0).style("display", "none");
        yaxis3.transition().style("opacity", 0).style("display", "none");
        yaxis4.transition().style("opacity", 0).style("display", "none");
        d3.selectAll(".yaxislabel").transition().style("opacity", 1).style("display", "none");
        keytweet(443, "none", 1, "21 April");
        eventsTitle.style("display", "block").transition().style("opacity", 1);
        tweetsTitle.transition().attr("x", -112).text("tweets");
        d3.selectAll(".s2-event").transition().style("display", "block").style("opacity", 1);
        d3.selectAll(".s2annotationDot").style("display", "block").style("opacity", 1);
        keytweetline.style("display", "none").transition().style("opacity", 0);
        keytweetdate.style("display", "none").transition().style("opacity", 0);
      }
    });

    var timings_election_scene = new ScrollMagic.Scene({
        triggerElement: "#timings-election"
      })
      .addTo(controller);

    timings_election_scene.on("progress", function(event) {
      var dir = event.scrollDirection;
      if (dir === "FORWARD") {
        d3.selectAll(".s2-tweet").classed("isshown", false);
        d3.selectAll(".s2-tweet").transition().style("opacity", 0).style("display", "none");
        d3.selectAll(".s2-tweet-election").classed("isshown", true);
        d3.selectAll(".isshown").transition().style("display", "block").style("opacity", 1);
        $("#filter-election").prop("checked", true);
      } else {
        d3.selectAll(".s2-tweet").classed("isshown", false);
        d3.selectAll(".s2-tweet").style("display", "block").transition().style("opacity", 1);
        $("#filter-all").prop("checked", true);
      }
    });

    var timings_muslimban_scene = new ScrollMagic.Scene({
        triggerElement: "#timings-muslimban"
      })
      .addTo(controller);

    timings_muslimban_scene.on("progress", function(event) {
      var dir = event.scrollDirection;
      if (dir === "FORWARD") {
        d3.selectAll(".s2-tweet").classed("isshown", false);
        d3.selectAll(".s2-tweet").transition().style("opacity", 0).style("display", "none");
        d3.selectAll(".s2-tweet-immigrationBan").classed("isshown", true);
        d3.selectAll(".isshown").transition().style("display", "block").style("opacity", 1);
        $("#filter-immigrationBan").prop("checked", true);
      } else {
        d3.selectAll(".s2-tweet").classed("isshown", false);
        d3.selectAll(".s2-tweet").transition().style("opacity", 0).style("display", "none");
        d3.selectAll(".s2-tweet-election").classed("isshown", true);
        d3.selectAll(".isshown").transition().style("display", "block").style("opacity", 1);
        $("#filter-election").prop("checked", true);
      }
    });

    var timings_fakenews_scene = new ScrollMagic.Scene({
        triggerElement: "#timings-fakenews"
      })
      .addTo(controller);

    timings_fakenews_scene.on("progress", function(event) {
      var dir = event.scrollDirection;
      if (dir === "FORWARD") {
        d3.selectAll(".s2-tweet").classed("isshown", false);
        d3.selectAll(".s2-tweet").transition().style("opacity", 0).style("display", "none");
        d3.selectAll(".s2-tweet-fakeNews").classed("isshown", true);
        d3.selectAll(".isshown").transition().style("display", "block").style("opacity", 1);
        $("#filter-fakeNews").prop("checked", true);
      } else {
        d3.selectAll(".s2-tweet").classed("isshown", false);
        d3.selectAll(".s2-tweet").transition().style("opacity", 0).style("display", "none");
        d3.selectAll(".s2-tweet-immigrationBan").classed("isshown", true);
        d3.selectAll(".isshown").transition().style("display", "block").style("opacity", 1);
        $("#filter-immigrationBan").prop("checked", true);
      }
    });

    var sources_scene = new ScrollMagic.Scene({
        triggerElement: "#sources"
      })
      .addTo(controller);

    sources_scene.on("progress", function(event) {
      var dir = event.scrollDirection;
      if (dir === "FORWARD") {
        d3.selectAll(".s2-tweet").classed("isshown", false);
        d3.selectAll(".s2-tweet").style("display", "block").transition().style("opacity", 1);

        d3.selectAll(".s2-tweet").transition().style("opacity", .05);
        d3.selectAll(".s2-tweet-android").transition().style("opacity", 1);

        $("#showiPhone").removeClass("isselected");
        $("#showandroid").addClass("isselected");
        $("#showBoth").removeClass("isselected");

        $("#filter-all").prop("checked", true);

      } else {
        d3.selectAll(".s2-tweet-fakeNews").classed("isshown", true);
        d3.selectAll(".isshown").transition().style("display", "block").style("opacity", 1);
        $("#filter-fakeNews").prop("checked", true);
      }
    });


    d3.select("#s2-keytweet15").on("click", function() {
      tweetClick(data[17]);
    });
    d3.select("#s2-keytweet45").on("click", function() {
      tweetClick(data[94]);
    });
    d3.select("#s2-keytweet46").on("click", function() {
      tweetClick(data[95]);
    });

    function keytweet(tweetNum, eventNum, eventDay, date) {
      tweetClick(data[tweetNum])
      d3.selectAll(".s2-eventOutline").transition().style("opacity", 0);
      d3.selectAll(".s2-eventOutline-" + eventNum).style("display", "block").transition().style("opacity", 1);

      d3.selectAll(".s2-tweet").style("display", "block").transition().duration(500).style("opacity", 0);
      d3.selectAll(".s2-tweet-" + tweetNum).transition().style("opacity", 1);

      keytweetline.style("display", "block").transition().attr("x1", function(d) {
          return x(parseDateTime(data[tweetNum].created_at));
        })
        .attr("x2", function(d) {
          return x(parseDateTime(data[tweetNum].created_at));
        })
        .style("opacity", 1);

      keytweetdate.style("display", "block").transition().attr("x", function(d) {
          return x(parseDateTime(data[tweetNum].created_at));
        })
        .style("opacity", 1)
        .text(date);
    };





    $("#section2tweet").html("<div class='s2tb_wrapper'><div class='s2tb_header'><div class='s2tb_author'><div class='s2tb_image'></div><div class='s2tb_user'><span class='s2tb_name'>Donald J. Trump<div class='s2tb_verified'></div></span></br><span class='s2tb_username'>@realDonaldTrump</span></div></div><div class='s2tb_follow'><a href='http://twitter.com/realDonaldTrump' class='a_follow'><i class='fa fa-twitter' aria-hidden='true'></i>&nbsp; Follow</a></div></div><div class='s2tb_text'>" + data[0].text + "</div><div class='s2tb_footer'>" + data[0].created_at + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class='fa fa-retweet' aria-hidden='true'></i>&nbsp; " + data[0].retweet_count + "</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class='fa fa-heart' aria-hidden='true'></i>&nbsp; " + data[0].favorite_count + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='inline-legend legend-" + camelize(data[0].topic) + "''>" + data[0].topic + "</a></div></div>")

    var tweets = s2svg.selectAll("tweets")
      .data(data)
      .enter().append("rect")
      .attr("class", function(d) {
        return "s2-tweet s2-tweet-" + camelize(d.topic) + " s2-tweet-" + d.tweet_number + " s2-tweet-" + d.source + " isshown";
      })
      .attr("x", function(d) {
        return x(parseDateTime(d.created_at));
      })
      .attr("y", 100)
      .attr("width", function(d) {
        return w(d.text.length);
      })
      .attr("height", 25)
      .on("mouseover", function(d) {
        tweets.transition().style("opacity", .25);
        d3.select(this).transition().style("opacity", 1);
      })
      .on("click", function(d) {
        tweetClick(d);
      })
      .on("mouseout", function(d) {
        tweets.transition().style("opacity", 1);
      });


  });

  function tweetClick(d) {
    $("#tweetNumberTitle").html(ordinalInWord(d.tweet_number));
    $("#section2tweet").html("<div class='s2tb_wrapper'><div class='s2tb_header'><div class='s2tb_author'><div class='s2tb_image'></div><div class='s2tb_user'><span class='s2tb_name'>Donald J. Trump<div class='s2tb_verified'></div></span></br><span class='s2tb_username'>@realDonaldTrump</span></div></div><div class='s2tb_follow'><a href='http://twitter.com/realDonaldTrump' class='a_follow'><i class='fa fa-twitter' aria-hidden='true'></i>&nbsp; Follow</a></div></div><div class='s2tb_text'>" + d.text + "</div><div class='s2tb_footer'>" + d.created_at + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class='fa fa-retweet' aria-hidden='true'></i>&nbsp; " + d.retweet_count + "</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class='fa fa-heart' aria-hidden='true'></i>&nbsp; " + d.favorite_count + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='inline-legend legend-" + camelize(d.topic) + "''>" + d.topic + "</a></div></div>")
  }

  d3.json("js/data/100days_events.json", function(data) {

    var eventtip = d3.tip()
      .attr('class', 'd3-tip')
      .offset([-10, 0])
      .html(function(d) {
        return "<span class='s2-event-date'>" + parseDate(parseDateTime(d.date)) + "</span>&nbsp;&nbsp;" + d.desc + "</br><span class='s2-event-source'>" + d.source + "</span>";
      })

    s2svg.call(eventtip);

    var eventsOutlined = s2svg.selectAll("events")
      .data(data)
      .enter().append("circle")
      .attr("class", function(d) {
        return "s2-eventOutline s2-eventOutline-" + d.event_number;
      })
      .attr("cx", function(d) {
        return x(parseDateTime(d.date));
      })
      .attr("cy", function(d) {
        return 175 + (d.daily_number * 4);
      })
      .attr("r", 5);

    var events = s2svg.selectAll("events")
      .data(data)
      .enter().append("circle")
      .attr("class", function(d) {
        return "s2-event s2-event-" + camelize(d.category);
      })
      .attr("cx", function(d) {
        return x(parseDateTime(d.date));
      })
      .attr("cy", function(d) {
        return 175 + (d.daily_number * 4);
      })
      .attr("r", 3)
      .on('mouseover', eventtip.show)
      .on('mouseout', eventtip.hide);


  });

  // FILTER BUTTONS
  d3.select("#section2chart").append("div").attr("class", "s2filters").attr("id", "full-container").style("width", s2w + "px").style("left", margin.left + 25 + "px").html('<div class="arrow left"><i class="fa fa-angle-left scrollButton fa-3x" id="scrollRight" aria-hidden="true"></i></div><div id="wrapper"><div id="content" class="s2filters-content"></div></div><div class="arrow right"><i class="fa fa-angle-right scrollButton fa-3x" id="scrollRight" aria-hidden="true"></i></div>');
  d3.select("#section2chart").append("div").attr("class", "s2filters2").style("width", s2w - margin.right + "px").style("left", margin.left + 25 + "px").html("Show tweets from&nbsp;&nbsp;<span class='sourceFilter' id='showiPhone'>iPhone</span><span class='sourceFilter' id='showandroid'>Android</span><span class='sourceFilter isselected' id='showBoth'>Both</span>")

  d3.select("#showiPhone").on("click", function(d) {
    showsource("iPhone");
  });
  d3.select("#showandroid").on("click", function(d) {
    showsource("android");
  });
  d3.select("#showBoth").on("click", function(d) {
    $("#showandroid").removeClass("isselected");
    $("#showiPhone").removeClass("isselected");
    $("#showBoth").addClass("isselected");
    d3.selectAll(".s2-tweet").transition().style("opacity", 1);
  });

  function showsource(device) {
    d3.selectAll(".s2-tweet").transition().style("opacity", .05);
    d3.selectAll(".s2-tweet-" + device).filter(".isshown").transition().style("opacity", 1);


    $("#showandroid").removeClass("isselected");
    $("#showiPhone").removeClass("isselected");
    $("#show" + device).toggleClass("isselected");
    $("#showBoth").removeClass("isselected");
  }

  d3.select(".s2filters-content").append("span")
    .attr("class", function(d) {
      return "filterbutton all-filter"
    })
    .html('<input type="radio" id="filter-all" name="radio-group" checked><label for="filter-all"><span class="all-text">All</span></label>')
    .on("click", function(d) {
      d3.selectAll(".s2-tweet").classed("isshown", true);
      d3.selectAll(".s2-tweet").style("display", "block").transition().style("opacity", 1);
    });

  d3.json("js/data/cats.json", function(data) {
    var filters = d3.select(".s2filters-content").selectAll("filters")
      .data(data)
      .enter().append("span")
      .attr("class", function(d) {
        return "filterbutton " + d.catClass + "-filter";
      })
      .html(function(d) {
        return '<input type="radio" id="filter-' + d.catClass + '" name="radio-group"><label for="filter-' + d.catClass + '"><span class="' + d.catClass + '-text">' + d.label + '</span></label>'
      })
      .on("click", function(d) {
        $("#showandroid").removeClass("isselected");
        $("#showiPhone").removeClass("isselected");
        $("#showBoth").addClass("isselected");
        d3.selectAll(".s2-tweet").style("display", "none").transition().style("opacity", 0);
        d3.selectAll(".s2-tweet").classed("isshown", false);
        d3.selectAll(".s2-tweet-" + d.catClass).classed("isshown", true);
        d3.selectAll(".isshown").transition().style("display", "block").style("opacity", 1);
      });
  });
  var content = $('#content'),
    arrows = $('.arrow'),
    wrapper = $('#wrapper').scroll(function() {
      //check edges

      // handle left arrow
      if (this.scrollLeft > 0) {
        arrows.filter('.left').addClass('visible');
      } else {
        arrows.filter('.left').removeClass('visible');
      };

      // handle right arrow
      if (content.outerWidth() - this.scrollLeft > wrapper.width()) {
        arrows.filter('.right').addClass('visible');
      } else {
        arrows.filter('.right').removeClass('visible');
      };

    });

  arrows.on('click', function() {
    if ($(this).is('.left')) {
      wrapper[0].scrollLeft -= 200;
    } else {
      wrapper[0].scrollLeft += 200;
    }
    return false;
  });

  // initialize
  wrapper.trigger('scroll');


}

function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
    return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
  }).replace(/\s+/g, '');
}

function hmsToSecondsOnly(str) {
  var p = str.split(':'),
    s = 0,
    m = 1;

  while (p.length > 0) {
    s += m * parseInt(p.pop(), 10);
    m *= 60;
  }

  return s;
}


// function distanceBetweenElems(elem1, elem2) {
//   var e1Rect = elem1.getBoundingClientRect();
//   var e2Rect = elem2.getBoundingClientRect();
//   var dx = (e1Rect.left + (e1Rect.right - e1Rect.left) / 2) - (e2Rect.left + (e2Rect.right - e2Rect.left) / 2);
//   var dy = (e1Rect.top + (e1Rect.bottom - e1Rect.top) / 2) - (e2Rect.top + (e2Rect.bottom - e2Rect.top) / 2);
//   var dist = Math.sqrt(dx * dx + dy * dy);
//   return dist;
// }



function getPosition(element) {
  var xPosition = 0;
  var yPosition = 0;

  while (element) {
    xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
    yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
    element = element.offsetParent;
  }

  return {
    x: xPosition,
    y: yPosition
  };
}


function ordinalInWord(cardinal) {
  var ordinals = ['zeroth', 'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth', 'thirtheenth', 'fourteenth', 'fifteenth', 'sixteenth', 'seventeenth', 'eighteenth', 'nineteenth', 'twentieth', /* and so on up to "twentieth" */ ];
  var tens = {
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'one-hundred',
    200: 'two-hundred',
    300: 'three-hundred',
    400: 'four-hundred',
    500: 'five-hundred'
  };
  var ordinalTens = {
    30: 'thirtieth',
    40: 'fortieth',
    50: 'fiftieth',
    60: 'sixtieth',
    70: 'seventieth',
    80: 'eightieth',
    90: 'ninetieth',
    100: 'one-hundredth',
    200: 'two-hundredth',
    300: 'three-hundredth',
    400: 'four-hundredth',
    500: 'five-hundredth'
  };

  // LESS THAN/EQUAL TO ONE HUNDRED
  if (cardinal <= 20) {
    return ordinals[cardinal];
  }
  if (cardinal <= 100 && cardinal % 10 === 0) {
    return ordinalTens[cardinal];
  }
  if (cardinal <= 100) {
    return tens[cardinal - (cardinal % 10)] + ordinals[cardinal % 10];
  }
  // BETWEEN 101 AND 200
  if (cardinal > 100 && cardinal <= 120) {
    return "one-hundred" + " and " + ordinals[cardinal - 100];
    //	return cardinal
  }
  if (cardinal > 120 && cardinal < 200 && cardinal % 10 === 0) {
    return "one-hundred and " + ordinalTens[cardinal - 100];
  }
  if (cardinal < 200) {
    return "one-hundred and " + tens[(cardinal - 100) - ((cardinal - 100) % 10)] + ordinals[(cardinal - 100) % 10];
  }
  // BETWEEN 200 AND 300
  if (cardinal === 200) {
    return ordinalTens[cardinal];
  }
  if (cardinal > 200 && cardinal <= 220) {
    return "two-hundred" + " and " + ordinals[cardinal - 200];
    //	return cardinal
  }
  if (cardinal > 220 && cardinal < 300 && cardinal % 10 === 0) {
    return "two-hundred and " + ordinalTens[cardinal - 200];
  }
  if (cardinal < 300) {
    return "two-hundred and " + tens[(cardinal - 200) - ((cardinal - 200) % 10)] + ordinals[(cardinal - 200) % 10];
  }
  // BETWEEN 300 AND 400
  if (cardinal === 300) {
    return ordinalTens[cardinal];
  }
  if (cardinal > 300 && cardinal <= 320) {
    return "three-hundred" + " and " + ordinals[cardinal - 300];
    //	return cardinal
  }
  if (cardinal > 320 && cardinal < 400 && cardinal % 10 === 0) {
    return "three-hundred and " + ordinalTens[cardinal - 300];
  }
  if (cardinal < 400) {
    return "three-hundred and " + tens[(cardinal - 300) - ((cardinal - 300) % 10)] + ordinals[(cardinal - 300) % 10];
  }
  // BETWEEN 400 AND 500
  if (cardinal === 400) {
    return ordinalTens[cardinal];
  }
  if (cardinal > 400 && cardinal <= 420) {
    return "four-hundred" + " and " + ordinals[cardinal - 400];
    //	return cardinal
  }
  if (cardinal > 420 && cardinal < 500 && cardinal % 10 === 0) {
    return "four-hundred and " + ordinalTens[cardinal - 400];
  }
  if (cardinal < 500) {
    return "four-hundred and " + tens[(cardinal - 400) - ((cardinal - 400) % 10)] + ordinals[(cardinal - 400) % 10];
  }
  // BETWEEN 500 AND 600
  if (cardinal === 500) {
    return ordinalTens[cardinal];
  }
  if (cardinal > 500 && cardinal <= 520) {
    return "five-hundred" + " and " + ordinals[cardinal - 500];
    //	return cardinal
  }
  if (cardinal > 520 && cardinal < 600 && cardinal % 10 === 0) {
    return "five-hundred and " + ordinalTens[cardinal - 500];
  }
  if (cardinal < 600) {
    return "five-hundred and " + tens[(cardinal - 500) - ((cardinal - 500) % 10)] + ordinals[(cardinal - 500) % 10];
  }
}
