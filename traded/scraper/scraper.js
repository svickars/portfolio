var url = "http://www.hockey-reference.com/players/h/hamrlro01.html";


var fs = require('fs');
var cheerio = require('cheerio'); // npm install cheerio

var content = fs.readFileSync(url);
var result = [];

var $ = cheerio.load(content);

$('tbody').find('tr').each(function(i, elem) {
  result.push($(elem).find('td').eq(0).html().split('<br>')[2].trim());
});

// console.log(meetings.length); // print number of meetings in meetings array
// fs.writeFileSync('/home/ubuntu/workspace/data/meetingsArray.txt', JSON.stringify(meetings));




// $('#convert-table').click( function() {
//   var table = $('#example-table').tableToJSON();
//   console.log(table);
//   alert(JSON.stringify(table));
// });
