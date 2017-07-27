var data = [];

var set = 1;






// $TART ZE $CRAPEZ!

var fs = require('fs');
var cheerio = require('cheerio'); // npm install cheerio
var http = require('http');
var request = require('request');

var delay = Number(Math.random(1000, 100000));


var advancedStats = [];

for (n in data) {

  // variables for use in scrape
  var firstURL = data[n].url,
    secondURL = data[n].url1,
    thirdURL = data[n].url2,
    player = data[n].code,
    firstseason = data[n].draftYear,
    pos = data[n].pos;

  if (pos != 'G') {
    // getSkaterData(player, firstseason, pos, firstURL, secondURL, thirdURL, function(thisGuy) {
    //   writeSkaterData(thisGuy);
    // });
    setTimeout(getSkaterData(n, player, firstseason, pos, firstURL, secondURL, thirdURL), delay * 1000);
  }

}





function getSkaterData(n, player, firstseason, pos, firstURL, secondURL, thirdURL) {

  // empty object for this particular player
  var thisGuy = {};

  // add player meta to object
  thisGuy.playerCode = player;
  thisGuy.firstSeason = firstseason;
  thisGuy.position = pos;

  // send request to first url
  skaterSectionOne(firstURL, function(n, thisGuy) {
    writeSkaterData(n, thisGuy);
  });

  function skaterSectionOne(firstURL, callback) {
    request(firstURL, function(error, response, body) {

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



      if (body) {
        var $ = cheerio.load(body);

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




          if (year < firstseason + 5 && league === 'NHL') {
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

        thisGuy.gamesPlayed_c = gamesPlayed_c;
        thisGuy.goals_c = goals_c;
        thisGuy.assists_c = assists_c;
        thisGuy.points_c = points_c;
        thisGuy.plusMinus_c = plusMinus_c;
        thisGuy.pim_c = pim_c;
        thisGuy.evG_c = evG_c;
        thisGuy.ppG_c = ppG_c;
        thisGuy.shG_c = shG_c;
        thisGuy.gwG_c = gwG_c;
        thisGuy.evA_c = evA_c;
        thisGuy.ppA_c = ppA_c;
        thisGuy.shA_c = shA_c;
        thisGuy.shots_c = shots_c;
        thisGuy.shotPer_c = goals_c / shots_c;
        thisGuy.tsa_c = tsa_c;
        thisGuy.toi_c = toi_c;
        thisGuy.atoi_c = toi_c / gamesPlayed_c;
        thisGuy.fow_c = fow_c;
        thisGuy.fol_c = fol_c;
        thisGuy.foPer_c = fow_c / (fow_c + fol_c);
        thisGuy.hit_c = hit_c;
        thisGuy.blk_c = blk_c;
        thisGuy.take_c = take_c;
        thisGuy.give_c = give_c;

        thisGuy.gamesPlayed_f = gamesPlayed_f;
        thisGuy.goals_f = goals_f;
        thisGuy.assists_f = assists_f;
        thisGuy.points_f = points_f;
        thisGuy.plusMinus_f = plusMinus_f;
        thisGuy.pim_f = pim_f;
        thisGuy.evG_f = evG_f;
        thisGuy.ppG_f = ppG_f;
        thisGuy.shG_f = shG_f;
        thisGuy.gwG_f = gwG_f;
        thisGuy.evA_f = evA_f;
        thisGuy.ppA_f = ppA_f;
        thisGuy.shA_f = shA_f;
        thisGuy.shots_f = shots_f;
        thisGuy.shotPer_f = shotPer_f / 5;
        thisGuy.tsa_f = tsa_f;
        thisGuy.toi_f = toi_f;
        thisGuy.atoi_f = atoi_f / 5;
        thisGuy.fow_f = fow_f;
        thisGuy.fol_f = fol_f;
        thisGuy.foPer_f = foPer_f / 5;
        thisGuy.hit_f = hit_f;
        thisGuy.blk_f = blk_f;
        thisGuy.take_f = take_f;
        thisGuy.give_f = give_f;

        callback(thisGuy, n);

      } else {
        console.log('skipped' + n);
      }
    });
  }

};


function writeSkaterData(thisGuy, n) {
  advancedStats.push(thisGuy);
  fs.writeFile("advancedStats" + set + ".json", JSON.stringify(advancedStats), (err) => {
    if (err) {
      console.error(err);
      return;
    };
    console.log("success " + n + "/" + data.length);
  });
};
