const cheerio = require('cheerio');
const request = require('request');

let spx = null;
function scrapeSPX(){
  request('http://www.marketwatch.com/investing/index/spx', function(error, Response, html){
    if (!error && Response.statusCode ==200){
      const $ = cheerio.load(html);
      spx = $('.intraday__price ').children('.value').text();
      console.log('S&P 500 ' + spx);
    }
  });
}

let comp = null;
function scrapeCOMP(){
  request('https://www.marketwatch.com/investing/index/comp', function(error, Response, html){
    if (!error && Response.statusCode ==200){
      const $ = cheerio.load(html);
      comp = $('.intraday__price ').children('.value').text();
      console.log('Nasdaq ' + comp);
    }
  });
}

let djia = null;
function scrapeDJIA(){
  request('https://www.marketwatch.com/investing/index/djia', function(error, Response, html){
    if (!error && Response.statusCode ==200){
      const $ = cheerio.load(html);
      djia = $('.intraday__price ').children('.value').text();
      console.log('Dow Jones Industrial Average ' + djia);
    }
  });
}

scrapeSPX();
scrapeCOMP();
scrapeDJIA();
