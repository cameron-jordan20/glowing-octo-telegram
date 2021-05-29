const cheerio = require('cheerio');
const request = require('request');
let price = null;

function scrapeSPX(){
  request('https://www.marketwatch.com/investing/index/spx', function(error, Response, html){
    if (!error && Response.statusCode ==200){
      const $ = cheerio.load(html);
      price = $('.intraday__price ').children('bg-quote').text();
      console.log(price);
    }
  });
}

scrapeSPX();
// document.getElementById("insert").innerHTML = scrapeSPX();
