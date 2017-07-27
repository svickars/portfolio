var code = 'yashial01',
  url = 'http://widgets.sports-reference.com/wg.fcgi?css=1&site=hr&url=%2Fplayers%2Fy%2Fyashial01.html&div=div_stats_basic_nhl',
  url1 = 'http://widgets.sports-reference.com/wg.fcgi?css=1&site=hr&url=%2Fplayers%2Fy%2Fyashial01.html&div=div_skaters_advanced',
  url2 = 'http://widgets.sports-reference.com/wg.fcgi?css=1&site=hr&url=%2Fplayers%2Fy%2Fyashial01.html&div=div_stats_misc_nhl',
  draftYear = 1992,
  pos = 'C';
var data = [{
    "code": "hamrlro01",
    "url": "http://www.hockey-reference.com/players/h/hamrlro01.html",
    "url1": "http://widgets.sports-reference.com/wg.fcgi?css=1&site=hr&url=%2Fplayers%2Fh%2Fhamrlro01.html&div=div_skaters_advanced",
    "url2": "http://widgets.sports-reference.com/wg.fcgi?css=1&site=hr&url=%2Fplayers%2Fh%2Fhamrlro01.html&div=div_stats_misc_nhl",
    "draftYear": 1992,
    "pos": "D"
  },
  {
    "code": "yashial01",
    "url": "http://www.hockey-reference.com/players/y/yashial01.html",
    "url1": "http://widgets.sports-reference.com/wg.fcgi?css=1&site=hr&url=%2Fplayers%2Fy%2Fyashial01.html&div=div_skaters_advanced",
    "url2": "http://widgets.sports-reference.com/wg.fcgi?css=1&site=hr&url=%2Fplayers%2Fy%2Fyashial01.html&div=div_stats_misc_nhl",
    "draftYear": 1992,
    "pos": "C"
  },
  {
    "code": "rathjmi01",
    "url": "http://www.hockey-reference.com/players/r/rathjmi01.html",
    "url1": "http://widgets.sports-reference.com/wg.fcgi?css=1&site=hr&url=%2Fplayers%2Fr%2Frathjmi01.html&div=div_skaters_advanced",
    "url2": "http://widgets.sports-reference.com/wg.fcgi?css=1&site=hr&url=%2Fplayers%2Fr%2Frathjmi01.html&div=div_stats_misc_nhl",
    "draftYear": 1992,
    "pos": "D"
  },
  {
    "code": "warrito01",
    "url": "http://www.hockey-reference.com/players/w/warrito01.html",
    "url1": "http://widgets.sports-reference.com/wg.fcgi?css=1&site=hr&url=%2Fplayers%2Fw%2Fwarrito01.html&div=div_skaters_advanced",
    "url2": "http://widgets.sports-reference.com/wg.fcgi?css=1&site=hr&url=%2Fplayers%2Fw%2Fwarrito01.html&div=div_stats_misc_nhl",
    "draftYear": 1992,
    "pos": "LW"
  },
  {
    "code": "kaspada01",
    "url": "http://www.hockey-reference.com/players/k/kaspada01.html",
    "url1": "http://widgets.sports-reference.com/wg.fcgi?css=1&site=hr&url=%2Fplayers%2Fk%2Fkaspada01.html&div=div_skaters_advanced",
    "url2": "http://widgets.sports-reference.com/wg.fcgi?css=1&site=hr&url=%2Fplayers%2Fk%2Fkaspada01.html&div=div_stats_misc_nhl",
    "draftYear": 1992,
    "pos": "D"
  },
  {
    "code": "stillco01",
    "url": "http://www.hockey-reference.com/players/s/stillco01.html",
    "url1": "http://widgets.sports-reference.com/wg.fcgi?css=1&site=hr&url=%2Fplayers%2Fs%2Fstillco01.html&div=div_skaters_advanced",
    "url2": "http://widgets.sports-reference.com/wg.fcgi?css=1&site=hr&url=%2Fplayers%2Fs%2Fstillco01.html&div=div_stats_misc_nhl",
    "draftYear": 1992,
    "pos": "LW"
  }
]

var fs = require('fs');
var cheerio = require('cheerio'); // npm install cheerio
var http = require('http');
var request = require('request');
var strip = require('strip-comments');

var advancedStats = [];



for (n in data) {
  var first = data[n].url,
    second = data[n].url1,
    third = data[n].url2,
    player = data[n].code,
    firstseason = data[n].draftYear,
    pos = data[n].pos;

  var thisGuy = {};

  var numSeasons = 0;

  var gamesPlayed_f = 0,
    goals_f = 0,
    assists_f = 0,
    points_f = 0,
    plusMinus_f = 0,
    pim_f = 0,
    evG_f = 0,
    ppG_f = 0,
    shG_f = 0,
    gwG_f = 0,
    evA_f = 0,
    ppA_f = 0,
    shA_f = 0,
    shots_f = 0,
    shotPer_f = 0,
    tsa_f = 0,
    toi_f = 0,
    atoi_f = 0,
    fow_f = 0,
    fol_f = 0,
    foPer_f = 0,
    hit_f = 0,
    blk_f = 0,
    take_f = 0,
    give_f = 0;
  var corsiF_f = 0,
    corsiA_f = 0,
    corsiFper_f = 0,
    corsiFperRel_f = 0,
    fenF_f = 0,
    fenA_f = 0,
    fenFper_f = 0,
    fenFperRel_f = 0,
    oiSHper_f = 0,
    oiSVper_f = 0,
    pdo_f = 0,
    oZSper_f = 0,
    dZSper_f = 0;
  var goalsCreated_f = 0,
    goalsCreated_pg_f = 0,
    shots_pg_f = 0,
    ops_f = 0,
    dps_f = 0,
    ps_f = 0;
  var gamesPlayed_c = 0,
    goals_c = 0,
    assists_c = 0,
    points_c = 0,
    plusMinus_c = 0,
    pim_c = 0,
    evG_c = 0,
    ppG_c = 0,
    shG_c = 0,
    gwG_c = 0,
    evA_c = 0,
    ppA_c = 0,
    shA_c = 0,
    shots_c = 0,
    shotPer_c = 0,
    tsa_c = 0,
    toi_c = 0,
    atoi_c = 0,
    fow_c = 0,
    fol_c = 0,
    foPer_c = 0,
    hit_c = 0,
    blk_c = 0,
    take_c = 0,
    give_c = 0;
  var corsiF_c = 0,
    corsiA_c = 0,
    corsiFper_c = 0,
    corsiFperRel_c = 0,
    fenF_c = 0,
    fenA_c = 0,
    fenFper_c = 0,
    fenFperRel_c = 0,
    oiSHper_c = 0,
    oiSVper_c = 0,
    pdo_c = 0,
    oZSper_c = 0,
    dZSper_c = 0;
  var goalsCreated_c = 0,
    goalsCreated_pg_c = 0,
    shots_pg_c = 0,
    ops_c = 0,
    dps_c = 0,
    ps_c = 0;


  if (pos != 'G') {
    sendRequest(first, second, third, player, firstseason);
  }
}

function sendRequest(url, url1, url2, code, draftYear) {
  request(url, function(error, response, body) {

    var $ = cheerio.load(body);

    thisGuy.playerCode = code;

    gamesPlayed_c += parseFloat($('table').find('tfoot').find('tr:last-child').find('td:nth-child(5)').text());
    goals_c += parseFloat($('table').find('tfoot').find('tr:last-child').find('td:nth-child(6)').text());
    assists_c += parseFloat($('table').find('tfoot').find('tr:last-child').find('td:nth-child(7)').text());
    points_c += parseFloat($('table').find('tfoot').find('tr:last-child').find('td:nth-child(8)').text());
    plusMinus_c += parseFloat($('table').find('tfoot').find('tr:last-child').find('td:nth-child(9)').text());
    pim_c += parseFloat($('table').find('tfoot').find('tr:last-child').find('td:nth-child(10)').text());
    evG_c += parseFloat($('table').find('tfoot').find('tr:last-child').find('td:nth-child(11)').text());
    ppG_c += parseFloat($('table').find('tfoot').find('tr:last-child').find('td:nth-child(12)').text());
    shG_c += parseFloat($('table').find('tfoot').find('tr:last-child').find('td:nth-child(13)').text());
    gwG_c += parseFloat($('table').find('tfoot').find('tr:last-child').find('td:nth-child(14)').text());
    evA_c += parseFloat($('table').find('tfoot').find('tr:last-child').find('td:nth-child(15)').text());
    ppA_c += parseFloat($('table').find('tfoot').find('tr:last-child').find('td:nth-child(16)').text());
    shA_c += parseFloat($('table').find('tfoot').find('tr:last-child').find('td:nth-child(17)').text());
    shots_c += parseFloat($('table').find('tfoot').find('tr:last-child').find('td:nth-child(18)').text());
    shotPer_c = parseFloat($('table').find('tfoot').find('tr:last-child').find('td:nth-child(19)').text());
    if (isNaN(parseFloat($('table').find('tfoot').find('tr:last-child').find('td:nth-child(20)').text())) === false) {
      tsa_c += parseFloat($('table').find('tfoot').find('tr:last-child').find('td:nth-child(20)').text());
    };
    if (isNaN(parseFloat($('table').find('tfoot').find('tr:last-child').find('td:nth-child(21)').text())) === false) {
      toi_c += parseFloat($('table').find('tfoot').find('tr:last-child').find('td:nth-child(21)').text());
    };
    if (isNaN(parseFloat($('table').find('tfoot').find('tr:last-child').find('td:nth-child(22)').text())) === false) {
      atoi_c += parseFloat($('table').find('tfoot').find('tr:last-child').find('td:nth-child(22)').text());
    };
    if (isNaN(parseFloat($('table').find('tfoot').find('tr:last-child').find('td:nth-child(23)').text())) === false) {
      fow_c += parseFloat($('table').find('tfoot').find('tr:last-child').find('td:nth-child(23)').text());
    };
    if (isNaN(parseFloat($('table').find('tfoot').find('tr:last-child').find('td:nth-child(24)').text())) === false) {
      fol_c += parseFloat($('table').find('tfoot').find('tr:last-child').find('td:nth-child(24)').text());
    };
    if (isNaN(parseFloat($('table').find('tfoot').find('tr:last-child').find('td:nth-child(25)').text())) === false) {
      foPer_c += parseFloat($('table').find('tfoot').find('tr:last-child').find('td:nth-child(25)').text());
    };
    if (isNaN(parseFloat($('table').find('tfoot').find('tr:last-child').find('td:nth-child(26)').text())) === false) {
      hit_c += parseFloat($('table').find('tfoot').find('tr:last-child').find('td:nth-child(26)').text());
    };
    if (isNaN(parseFloat($('table').find('tfoot').find('tr:last-child').find('td:nth-child(27)').text())) === false) {
      blk_c += parseFloat($('table').find('tfoot').find('tr:last-child').find('td:nth-child(27)').text());
    };
    if (isNaN(parseFloat($('table').find('tfoot').find('tr:last-child').find('td:nth-child(28)').text())) === false) {
      take_c += parseFloat($('table').find('tfoot').find('tr:last-child').find('td:nth-child(28)').text());
    };
    if (isNaN(parseFloat($('table').find('tfoot').find('tr:last-child').find('td:nth-child(29)').text())) === false) {
      give_c += parseFloat($('table').find('tfoot').find('tr:last-child').find('td:nth-child(29)').text());
    };



    for (var i = 0; i < 5; i++) {

      var year = $('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('th').text().split('-')[0];
      var league = $('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(4)').text();




      if (year < draftYear + 5 && league === 'NHL') {
        gamesPlayed_f += parseFloat($('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(5)').text());
        goals_f += parseFloat($('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(6)').text());
        assists_f += parseFloat($('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(7)').text());
        points_f += parseFloat($('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(8)').text());
        plusMinus_f += parseFloat($('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(9)').text());
        pim_f += parseFloat($('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(10)').text());
        evG_f += parseFloat($('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(11)').text());
        ppG_f += parseFloat($('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(12)').text());
        shG_f += parseFloat($('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(13)').text());
        gwG_f += parseFloat($('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(14)').text());
        evA_f += parseFloat($('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(15)').text());
        ppA_f += parseFloat($('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(16)').text());
        shA_f += parseFloat($('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(17)').text());
        shots_f += parseFloat($('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(18)').text());
        shotPer_f = parseFloat($('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(19)').text());
        if (isNaN(parseFloat($('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(20)').text())) === false) {
          tsa_f += parseFloat($('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(20)').text());
        };
        if (isNaN(parseFloat($('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(21)').text())) === false) {
          toi_f += parseFloat($('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(21)').text());
        };
        if (isNaN(parseFloat($('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(22)').text())) === false) {
          atoi_f += parseFloat($('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(22)').text());
        };
        if (isNaN(parseFloat($('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(23)').text())) === false) {
          fow_f += parseFloat($('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(23)').text());
        };
        if (isNaN(parseFloat($('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(24)').text())) === false) {
          fol_f += parseFloat($('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(24)').text());
        };
        if (isNaN(parseFloat($('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(25)').text())) === false) {
          foPer_f += parseFloat($('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(25)').text());
        };
        if (isNaN(parseFloat($('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(26)').text())) === false) {
          hit_f += parseFloat($('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(26)').text());
        };
        if (isNaN(parseFloat($('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(27)').text())) === false) {
          blk_f += parseFloat($('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(27)').text());
        };
        if (isNaN(parseFloat($('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(28)').text())) === false) {
          take_f += parseFloat($('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(28)').text());
        };
        if (isNaN(parseFloat($('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(29)').text())) === false) {
          give_f += parseFloat($('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(29)').text());
        };
      }
    };

  });

  request(url1, function(error, response, body) {
    var $ = cheerio.load(body);
    numSeasons = $('#skaters_advanced').find('tbody tr').length;

    corsiF_c += parseFloat($('table').find('tfoot').find('tr:last-child').find('td:nth-child(7)').text());
    corsiA_c += parseFloat($('table').find('tfoot').find('tr:last-child').find('td:nth-child(8)').text());
    corsiFper_c += parseFloat($('table').find('tfoot').find('tr:last-child').find('td:nth-child(9)').text());
    corsiFperRel_c += parseFloat($('table').find('tfoot').find('tr:last-child').find('td:nth-child(10)').text());
    fenF_c += parseFloat($('table').find('tfoot').find('tr:last-child').find('td:nth-child(11)').text());
    fenA_c += parseFloat($('table').find('tfoot').find('tr:last-child').find('td:nth-child(12)').text());
    fenFper_c += parseFloat($('table').find('tfoot').find('tr:last-child').find('td:nth-child(13)').text());
    fenFperRel_c += parseFloat($('table').find('tfoot').find('tr:last-child').find('td:nth-child(14)').text());
    oiSHper_c += parseFloat($('table').find('tfoot').find('tr:last-child').find('td:nth-child(15)').text());
    oiSVper_c += parseFloat($('table').find('tfoot').find('tr:last-child').find('td:nth-child(16)').text());
    pdo_c += parseFloat($('table').find('tfoot').find('tr:last-child').find('td:nth-child(17)').text());
    oZSper_c += parseFloat($('table').find('tfoot').find('tr:last-child').find('td:nth-child(18)').text());
    dZSper_c += parseFloat($('table').find('tfoot').find('tr:last-child').find('td:nth-child(19)').text());

    for (var i = 0; i < numSeasons; i++) {
      var year2 = $('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('th').text().split('-')[0];

      if (year2 < draftYear + 5) {
        corsiF_f += parseFloat($('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(7)').text());
        corsiA_f += parseFloat($('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(8)').text());
        corsiFper_f += parseFloat($('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(9)').text());
        corsiFperRel_f += parseFloat($('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(10)').text());
        fenF_f += parseFloat($('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(11)').text());
        fenA_f += parseFloat($('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(12)').text());
        fenFper_f += parseFloat($('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(13)').text());
        fenFperRel_f += parseFloat($('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(14)').text());
        oiSHper_f += parseFloat($('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(15)').text());
        oiSVper_f += parseFloat($('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(16)').text());
        pdo_f += parseFloat($('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(17)').text());
        oZSper_f += parseFloat($('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(18)').text());
        dZSper_f += parseFloat($('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(19)').text());
      }
    };
  })


  request(url2, function(error, response, body) {
    var $ = cheerio.load(body);

    goalsCreated_c += parseFloat($('table').find('tfoot').find('tr:last-child').find('td:nth-child(6)').text());
    goalsCreated_pg_c += parseFloat($('table').find('tfoot').find('tr:last-child').find('td:nth-child(10)').text());
    shots_pg_c += parseFloat($('table').find('tfoot').find('tr:last-child').find('td:nth-child(12)').text());
    ops_c += parseFloat($('table').find('tfoot').find('tr:last-child').find('td:nth-child(23)').text());
    dps_c += parseFloat($('table').find('tfoot').find('tr:last-child').find('td:nth-child(24)').text());
    ps_c += parseFloat($('table').find('tfoot').find('tr:last-child').find('td:nth-child(25)').text());


    for (var i = 0; i < numSeasons; i++) {
      var year3 = $('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('th').text().split('-')[0];

      if (year3 < draftYear + 5) {
        goalsCreated_f += parseFloat($('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(6)').text());
        goalsCreated_pg_f += parseFloat($('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(10)').text());
        shots_pg_f += parseFloat($('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(12)').text());
        ops_f += parseFloat($('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(23)').text());
        dps_f += parseFloat($('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(24)').text());
        ps_f += parseFloat($('table').find('tbody').find('tr:nth-child(' + (i + 1) + ')').find('td:nth-child(25)').text());

      }
    };
  });

  // end requests
  // console.log(thisGuy);
  setTimeout(updateJSON(code, goalsCreated_c), 25000);


}


function updateJSON(code, gc_c) {
  thisGuy.code = code;
  // thisGuy.gamesPlayed_f = gamesPlayed_f;
  // thisGuy.goals_f = goals_f;
  // thisGuy.assists_f = assists_f;
  // thisGuy.points_f = points_f;
  // thisGuy.plusMinus_f = plusMinus_f;
  // thisGuy.pim_f = pim_f;
  // thisGuy.evG_f = evG_f;
  // thisGuy.ppG_f = ppG_f;
  // thisGuy.shG_f = shG_f;
  // thisGuy.gwG_f = gwG_f;
  // thisGuy.evA_f = evA_f;
  // thisGuy.ppA_f = ppA_f;
  // thisGuy.shA_f = shA_f;
  // thisGuy.shots_f = shots_f;
  // thisGuy.shotPer_f = shotPer_f / 5;
  // thisGuy.tsa_f = tsa_f;
  // thisGuy.toi_f = toi_f;
  // thisGuy.atoi_f = atoi_f / 5;
  // thisGuy.fow_f = fow_f;
  // thisGuy.fol_f = fol_f;
  // thisGuy.foPer_f = foPer_f / 5;
  // thisGuy.hit_f = hit_f;
  // thisGuy.blk_f = blk_f;
  // thisGuy.take_f = take_f;
  // thisGuy.give_f = give_f;
  //
  // thisGuy.corsiF_f = corsiF_f;
  // thisGuy.corsiA_f = corsiA_f;
  // thisGuy.corsiFper_f = corsiF_f / (corsiF_f + corsiA_f);
  // thisGuy.corsiFperRel_f = corsiFperRel_f;
  // thisGuy.fenF_f = fenF_f;
  // thisGuy.fenA_f = fenA_f;
  // thisGuy.fenFper_f = fenF_f / (fenF_f + fenA_f);
  // thisGuy.fenFper_f = fenFper_f;
  // thisGuy.fenFperRel_f = fenFperRel_f;
  // thisGuy.oiSHper_f = oiSHper_f / 5;
  // thisGuy.oiSVper_f = oiSVper_f / 5;
  // thisGuy.pdo_f = pdo_f / 5;
  // thisGuy.oZSper_f = oZSper_f / 5;
  // thisGuy.dZSper_f = dZSper_f / 5;
  //
  // thisGuy.goalsCreated_f = goalsCreated_f;
  // thisGuy.goalsCreated_pg_f = goalsCreated_pg_f;
  // thisGuy.shots_pg_f = shots_pg_f;
  // thisGuy.ops_f = ops_f;
  // thisGuy.dps_f = dps_f;
  // thisGuy.ps_f = ps_f;
  //
  // thisGuy.gamesPlayed_c = gamesPlayed_c;
  // thisGuy.goals_c = goals_c;
  // thisGuy.assists_c = assists_c;
  // thisGuy.points_c = points_c;
  // thisGuy.plusMinus_c = plusMinus_c;
  // thisGuy.pim_c = pim_c;
  // thisGuy.evG_c = evG_c;
  // thisGuy.ppG_c = ppG_c;
  // thisGuy.shG_c = shG_c;
  // thisGuy.gwG_c = gwG_c;
  // thisGuy.evA_c = evA_c;
  // thisGuy.ppA_c = ppA_c;
  // thisGuy.shA_c = shA_c;
  // thisGuy.shots_c = shots_c;
  // thisGuy.shotPer_c = goals_c / shots_c;
  // thisGuy.tsa_c = tsa_c;
  // thisGuy.toi_c = toi_c;
  // thisGuy.atoi_c = toi_c / gamesPlayed_c;
  // thisGuy.fow_c = fow_c;
  // thisGuy.fol_c = fol_c;
  // thisGuy.foPer_c = fow_c / (fow_c + fol_c);
  // thisGuy.hit_c = hit_c;
  // thisGuy.blk_c = blk_c;
  // thisGuy.take_c = take_c;
  // thisGuy.give_c = give_c;
  //
  // thisGuy.corsiF_c = corsiF_c;
  // thisGuy.corsiA_c = corsiA_c;
  // thisGuy.corsiFper_c = corsiFper_c;
  // thisGuy.corsiFperRel_c = corsiFperRel_c;
  // thisGuy.fenF_c = fenF_c;
  // thisGuy.fenA_c = fenA_c;
  // thisGuy.fenFper_c = fenFper_c;
  // thisGuy.fenFperRel_c = fenFperRel_c;
  // thisGuy.oiSHper_c = oiSHper_c;
  // thisGuy.oiSVper_c = oiSVper_c;
  // thisGuy.pdo_c = pdo_c;
  // thisGuy.oZSper_c = oZSper_c;
  // thisGuy.dZSper_c = dZSper_c;
  //
  thisGuy.goalsCreated_c = gc_c;
  // thisGuy.goalsCreated_pg_c = goalsCreated_pg_c;
  // thisGuy.shots_pg_c = shots_pg_c;
  // thisGuy.ops_c = ops_c;
  // thisGuy.dps_c = dps_c;
  // thisGuy.ps_c = ps_c;

  thisGuysStats = JSON.stringify(thisGuy);
  advancedStats.push(thisGuysStats);
  fs.writeFileSync('advancedStats.json', advancedStats);
  console.log("success");
};
