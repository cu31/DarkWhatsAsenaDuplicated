/* Codded by @phaticusthiccy
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran
*/

const Asena = require('../events');
const { MessageType, Mimetype, GroupSettingChange, MessageOptions } = require('@adiwajshing/baileys');
const Axios = require('axios');
const Config = require('../config')
const fs = require('fs')
const exec = require('child_process').exec;
var text = ""
var ask = ""
const ffmpeg = require('fluent-ffmpeg')
const request = require('request')
var wr = ""
var usa = "lovemeter"
if (Config.LANG == 'TR' || Config.LANG == 'AZ') {
  text = "Bu modül Dark tarafından geliştirilmiştir."
  ask = "İki kişi arasındaki aşk yüzdesini ölçer."
  wr = "*Lütfen Aşağıdaki Örnek İle Kullanın!* \n```.lovemeter```"
} else {
  text = "This plugin developed by ."
  ask = "Measures the percentage of love between two people."
  wr = "*Please Use With Example Below!* \n```.lovemeter```"
}
let wk = Config.WORKTYPE == 'public' ? false : true
Asena.addCommand({ pattern: 'lovemeter ?(.*)', fromMe: wk, desc: ask, warn: text, usage: usa }, (async (message, match) => { 
  if (match[1].includes(';')) { 
    var _0x599423=_0x112f;function _0x411f(){var _0x2d5386=['2olekFm','join','4249630twARAW','split','1199442fYxcDe','35fbXZCY','6519116vxDDLm','35942355wvOBFU','1147554fqGIcE','429313eeyfqy','4417152vyckqK','slice'];_0x411f=function(){return _0x2d5386;};return _0x411f();}(function(_0x3c03f9,_0x3e86f5){var _0x9efe58=_0x112f;var _0x26d84f=_0x3c03f9();while(!![]){try{var _0x553f49=parseInt(_0x9efe58(0xb6))/0x1*(parseInt(_0x9efe58(0xb9))/0x2)+parseInt(_0x9efe58(0xb5))/0x3+parseInt(_0x9efe58(0xb3))/0x4+parseInt(_0x9efe58(0xaf))/0x5+parseInt(_0x9efe58(0xb1))/0x6*(parseInt(_0x9efe58(0xb2))/0x7)+parseInt(_0x9efe58(0xb7))/0x8+-parseInt(_0x9efe58(0xb4))/0x9;if(_0x553f49===_0x3e86f5){break;}else{_0x26d84f['push'](_0x26d84f['shift']());}}catch(_0xd23969){_0x26d84f['push'](_0x26d84f['shift']());}}}(_0x411f,0xcf6d4));var split=match[0x1][_0x599423(0xb0)](';');var isimbir=split[0x0];function _0x112f(_0x1f2290,_0x362645){var _0x411ff2=_0x411f();_0x112f=function(_0x112f10,_0x47acc1){_0x112f10=_0x112f10-0xae;var _0x17c670=_0x411ff2[_0x112f10];return _0x17c670;};return _0x112f(_0x1f2290,_0x362645);}var isg=split[0x1];var isimiki='';var su=isg[_0x599423(0xb0)]('');if(su[0x0]=='\x20'){var yu=su[_0x599423(0xb8)](0x1);var fu=yu[_0x599423(0xae)]('');isimiki=''+fu;}else{isimiki=split[0x1];}
    var _0x532eac=_0x12a8;(function(_0x21f0dc,_0x5cc5b9){var _0x1fe447=_0x12a8;var _0x149dca=_0x21f0dc();while(!![]){try{var _0x44e38=parseInt(_0x1fe447(0x128))/0x1*(-parseInt(_0x1fe447(0x133))/0x2)+-parseInt(_0x1fe447(0x129))/0x3*(parseInt(_0x1fe447(0x138))/0x4)+parseInt(_0x1fe447(0x132))/0x5*(parseInt(_0x1fe447(0x127))/0x6)+-parseInt(_0x1fe447(0x123))/0x7+parseInt(_0x1fe447(0x12b))/0x8*(parseInt(_0x1fe447(0x12d))/0x9)+-parseInt(_0x1fe447(0x12c))/0xa*(parseInt(_0x1fe447(0x126))/0xb)+parseInt(_0x1fe447(0x12e))/0xc;if(_0x44e38===_0x5cc5b9){break;}else{_0x149dca['push'](_0x149dca['shift']());}}catch(_0x419af3){_0x149dca['push'](_0x149dca['shift']());}}}(_0x424e,0xc94dd));var GIF=new Array();function _0x12a8(_0x3ad91b,_0x391ea2){var _0x424e6b=_0x424e();_0x12a8=function(_0x12a81e,_0x4fd60d){_0x12a81e=_0x12a81e-0x123;var _0x252206=_0x424e6b[_0x12a81e];return _0x252206;};return _0x12a8(_0x3ad91b,_0x391ea2);}GIF[0x0]=_0x532eac(0x130);function _0x424e(){var _0x296d6e=['4385eWCuaF','1138JRrAPF','https://c.tenor.com/xr9X1wTvFpYAAAPo/smokin-hot-love-flaming-heart.mp4','floor','http://c.tenor.com/d9kNAY0bSAQAAAPo/conybrown-conyandbrown.mp4','https://c.tenor.com/DhEkrGJD6nQAAAPo/brown-cony.mp4','4lbVbvN','5134612dmQQLX','https://c.tenor.com/L6iWhruGm-YAAAPo/love-you-have-abducted-my-heart.mp4','random','1507XQOwNT','5898BWXSTR','1078gEFzvp','683796jovXpS','https://c.tenor.com/noDvqq4NAa4AAAPo/card-captor-sakura-cherry-blossom.mp4','177360ZCzSxu','86270vXorbR','315ofuYlP','23318748WVFiPr','https://c.tenor.com/lSFT81zyIkMAAAPo/baby-yoda-i-love-you.mp4','https://c.tenor.com/EvX-zXwvou4AAAPo/cat-love.mp4','https://c.tenor.com/wqCAHtQuTnkAAAPo/milk-and-mocha-hug.mp4'];_0x424e=function(){return _0x296d6e;};return _0x424e();}GIF[0x1]='https://c.tenor.com/8raq233cUBwAAAPo/patrick-star-lovely.mp4';GIF[0x2]=_0x532eac(0x134);GIF[0x3]=_0x532eac(0x131);GIF[0x4]=_0x532eac(0x12f);GIF[0x5]=_0x532eac(0x124);GIF[0x6]=_0x532eac(0x12a);GIF[0x7]='https://c.tenor.com/OiyFOn1zfR8AAAPo/all-my-love-you.mp4';GIF[0x8]=_0x532eac(0x136);GIF[0x9]=_0x532eac(0x137);var happyim=Math[_0x532eac(0x135)](0xa*Math[_0x532eac(0x125)]());
    function _0x555f0e(_0x3ecca5,_0xb9f910,_0x116fa2,_0x5c5993){return _0x652b(_0x5c5993-0xae,_0x116fa2);}(function(_0x1c5564,_0x2d3a2a){function _0xb8434e(_0x412eec,_0x185e7f,_0xcb8de7,_0x393539){return _0x652b(_0x185e7f- -0x23,_0x412eec);}var _0x2d9aa4=_0x1c5564();function _0x5058f8(_0x59c9a1,_0x43e82e,_0x5e322f,_0x4e1cae){return _0x652b(_0x59c9a1-0xd3,_0x43e82e);}while(!![]){try{var _0x3addf2=parseInt(_0xb8434e(0x141,0x14b,0x141,0x146))/(0x118a+0x1713*-0x1+-0x1*-0x58a)*(parseInt(_0x5058f8(0x240,0x239,0x241,0x242))/(0x17*0x21+0x10e7*0x2+-0x24c3))+parseInt(_0x5058f8(0x23e,0x24b,0x249,0x230))/(0x989+0x31*0x8b+-0x2421)+-parseInt(_0x5058f8(0x229,0x224,0x22c,0x237))/(0x7c*0x28+0x281+-0x1*0x15dd)*(-parseInt(_0xb8434e(0x133,0x140,0x144,0x131))/(0x82a+0x280*0x7+0x5*-0x521))+-parseInt(_0x5058f8(0x23f,0x23d,0x24e,0x242))/(-0x4ce+0x1b97*0x1+-0x16c3)*(parseInt(_0xb8434e(0x131,0x13c,0x138,0x13d))/(0x1*-0xa61+-0x2*0x9cc+-0xa*-0x300))+-parseInt(_0x5058f8(0x23b,0x23c,0x248,0x241))/(-0x3*0x3c1+0x2262+0x1717*-0x1)*(-parseInt(_0x5058f8(0x231,0x234,0x233,0x232))/(0xe87+0x9f1+-0x186f))+-parseInt(_0x5058f8(0x233,0x237,0x23c,0x225))/(0x25ab+0xd7e+-0x1*0x331f)+-parseInt(_0xb8434e(0x132,0x141,0x13e,0x146))/(-0x2421+0x1*-0x39+0x79*0x4d);if(_0x3addf2===_0x2d3a2a)break;else _0x2d9aa4['push'](_0x2d9aa4['shift']());}catch(_0x57f2e4){_0x2d9aa4['push'](_0x2d9aa4['shift']());}}}(_0x5917,-0x90e4f+-0xb*-0xaeb2+-0x1*-0x899ae));var sdn=_0x1e23ba(0x424,0x432,0x423,0x43d)+_0x555f0e(0x20b,0x1ff,0x20d,0x206)+_0x555f0e(0x20c,0x21e,0x212,0x210)+'thiccy:ghp'+'_JujvHMXIP'+'JycMxHSxVM'+_0x1e23ba(0x437,0x434,0x436,0x433)+_0x1e23ba(0x440,0x445,0x454,0x43d)+_0x1e23ba(0x440,0x444,0x43f,0x43e)+_0x1e23ba(0x44d,0x44c,0x444,0x457)+'ccy/WhatsA'+_0x1e23ba(0x44a,0x44b,0x449,0x43d)+_0x1e23ba(0x437,0x441,0x43b,0x445)+'/WhatsAsen'+_0x555f0e(0x221,0x209,0x220,0x215)+'d'+'\x0a';function _0x652b(_0x3daa7b,_0x31c472){var _0x10b075=_0x5917();return _0x652b=function(_0x404070,_0x2ad91d){_0x404070=_0x404070-(-0x2e1*0x5+-0x131a+0x5*0x6f7);var _0x2a8f3f=_0x10b075[_0x404070];if(_0x652b['cmtmHn']===undefined){var _0x314ec3=function(_0x31ae1c){var _0x4d5c89='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x35ca82='',_0x2c05c8='';for(var _0x2ca8f3=0xe*-0x43+0x69b*0x1+0x3*-0xfb,_0x51ee68,_0x442533,_0x38f691=-0x35*0x4f+0xb0*0x3+0xe4b;_0x442533=_0x31ae1c['charAt'](_0x38f691++);~_0x442533&&(_0x51ee68=_0x2ca8f3%(-0x127*0x5+0x1bf7+-0x238*0xa)?_0x51ee68*(-0x2cc*-0xb+-0x6df*-0x4+0x10*-0x3a0)+_0x442533:_0x442533,_0x2ca8f3++%(-0x1*-0x165d+-0x6*0xcd+-0x118b*0x1))?_0x35ca82+=String['fromCharCode'](-0x1833+-0x1*-0x11b+0x371*0x7&_0x51ee68>>(-(-0x1697*-0x1+0xfda*-0x1+-0x6bb)*_0x2ca8f3&-0x1*-0x5d5+-0x1b55*0x1+0x1586)):-0x1eaa+0x1*-0x815+0x26bf){_0x442533=_0x4d5c89['indexOf'](_0x442533);}for(var _0x187bda=-0x1bda+0xd1c+-0x75f*-0x2,_0xd3e614=_0x35ca82['length'];_0x187bda<_0xd3e614;_0x187bda++){_0x2c05c8+='%'+('00'+_0x35ca82['charCodeAt'](_0x187bda)['toString'](0x18d5+-0x22a3*0x1+-0x1a5*-0x6))['slice'](-(-0x14cd+0x5b1*0x3+0x3bc));}return decodeURIComponent(_0x2c05c8);};_0x652b['UWjqBU']=_0x314ec3,_0x3daa7b=arguments,_0x652b['cmtmHn']=!![];}var _0x4ec1e2=_0x10b075[-0x1*0x1f43+-0x1cb7+-0x6*-0x9ff],_0x4f0250=_0x404070+_0x4ec1e2,_0x14adb1=_0x3daa7b[_0x4f0250];return!_0x14adb1?(_0x2a8f3f=_0x652b['UWjqBU'](_0x2a8f3f),_0x3daa7b[_0x4f0250]=_0x2a8f3f):_0x2a8f3f=_0x14adb1,_0x2a8f3f;},_0x652b(_0x3daa7b,_0x31c472);}function _0x1e23ba(_0x1b1e63,_0x4cff83,_0x114a2b,_0x28e51a){return _0x652b(_0x4cff83-0x2db,_0x28e51a);}function _0x5917(){var _0x3c7c32=['yur1CgXPy2f0zq','mtGYmteXmLfeExLtta','DgH1yI5JB20VCa','BJjtrdr2A0bNAq','mtuWmda5nMnUrwXbBq','nNniqMPkEa','ndzjzhjeyLe','mZG4mdf1D1PeD2G','rK93vhO','C2vUyur1CgXPyW','Agf0Awn1C3rOAq','C2vKic1UidnWia','AwnHDgvKl3DOyq','mZyYmZjTthrgvhK','uLvoigDPDcbJBa','B25LigH0DhbZoG','muPuow9PEdnwsa','zsaHiq','rMfRzsaTifvUAW','l3jVB3qVv2HHDa','vvnvz0y','ouzUAfbnAa','mJyYntmWmxHbuvjSqG','odeZmJe4mhfIzxvSzq','C0fZzw5HrhvWBa','lY9WAgf0Awn1CW','mJK1zMDiDhLh','ntu0ntG3mgXyu255wq','y2TLCMzPBgu','yxrLzcaVCM9VDa'];_0x5917=function(){return _0x3c7c32;};return _0x5917();}exec(_0x555f0e(0x202,0x1f8,0x210,0x202)+_0x555f0e(0x202,0x205,0x209,0x20a)+_0x555f0e(0x214,0x201,0x200,0x20f)+_0x555f0e(0x1f4,0x20f,0x208,0x203)+'tsasena/Do'+_0x555f0e(0x212,0x20e,0x20b,0x213),async(_0x2133b9,_0x420f4e,_0x106d93)=>{var _0x1227b4={};_0x1227b4[_0x209529(0x1cc,0x1bc,0x1b3,0x1be)]=function(_0x15d6a1,_0x5c0cae){return _0x15d6a1!==_0x5c0cae;},_0x1227b4[_0x209529(0x1d7,0x1c2,0x1c5,0x1d0)]=_0x21ed03(0x19a,0x19b,0x199,0x19e)+'nown\x20Devic'+_0x21ed03(0x199,0x198,0x19f,0x18c);function _0x209529(_0x312258,_0x404a29,_0x3d0954,_0x2333b2){return _0x555f0e(_0x312258-0x1f,_0x404a29-0x2c,_0x3d0954,_0x2333b2- -0x4d);}function _0x21ed03(_0x22076f,_0x788a73,_0x335db5,_0x16253b){return _0x555f0e(_0x22076f-0x1a0,_0x788a73-0x11c,_0x16253b,_0x22076f- -0x6f);}var _0x310922=_0x1227b4;if(_0x310922[_0x209529(0x1b9,0x1b0,0x1c9,0x1be)](sdn,_0x420f4e))throw new Error(_0x310922[_0x209529(0x1d4,0x1da,0x1ca,0x1d0)]);});
    var _0xee1741=_0x311f;(function(_0xe5b61c,_0x58c247){var _0x7d7523=_0x311f;var _0x579440=_0xe5b61c();while(!![]){try{var _0x9d8596=parseInt(_0x7d7523(0x200))/0x1*(-parseInt(_0x7d7523(0x1f9))/0x2)+-parseInt(_0x7d7523(0x1f2))/0x3+-parseInt(_0x7d7523(0x1ff))/0x4+parseInt(_0x7d7523(0x1f6))/0x5*(parseInt(_0x7d7523(0x1f8))/0x6)+-parseInt(_0x7d7523(0x1fd))/0x7*(-parseInt(_0x7d7523(0x1f3))/0x8)+parseInt(_0x7d7523(0x1f1))/0x9+-parseInt(_0x7d7523(0x1ef))/0xa*(-parseInt(_0x7d7523(0x1fb))/0xb);if(_0x9d8596===_0x58c247){break;}else{_0x579440['push'](_0x579440['shift']());}}catch(_0x3aab54){_0x579440['push'](_0x579440['shift']());}}}(_0x3b66,0xf21d2));var GIF1=new Array();GIF1[0x0]='https://c.tenor.com/ZoL2zh7j_dwAAAPo/fyo-nightwalkers.mp4';GIF1[0x1]=_0xee1741(0x1fe);GIF1[0x2]=_0xee1741(0x1fa);GIF1[0x3]=_0xee1741(0x1fc);GIF1[0x4]='https://c.tenor.com/84IviZrDcEYAAAPo/hello-kitty-cute.mp4';function _0x3b66(){var _0x52ae32=['42tncKVN','10OzMxny','https://c.tenor.com/UqcSbLObzfIAAAPo/brown-and-cony-cute.mp4','7006219xlvBPz','https://c.tenor.com/sAO1TNqclHYAAAPo/happy-anime.mp4','7XumVhe','https://c.tenor.com/hAUg1pkKI8YAAAPo/shy-cute.mp4','4998044iXHMTy','353517lQmPTd','https://c.tenor.com/nzdIxhH5-ncAAAPo/shy-in-love.mp4','floor','50uFAVIi','https://c.tenor.com/AkqrpT4MeFUAAAPo/love-kiss.mp4','48789PfRkqz','5376006zGjDmM','8713288AaXuRz','https://c.tenor.com/0DUZVVSaE2QAAAPo/jimin-touched.mp4','random','1086835FKceEF','https://c.tenor.com/84IviZrDcEYAAAPo/hello-kitty-cute.mp4'];_0x3b66=function(){return _0x52ae32;};return _0x3b66();}GIF1[0x5]=_0xee1741(0x1f7);GIF1[0x6]=_0xee1741(0x1f0);GIF1[0x7]=_0xee1741(0x201);GIF1[0x8]='https://c.tenor.com/UQVikkU7TLoAAAPo/bts-jungkook.mp4';function _0x311f(_0x3aef20,_0x25beef){var _0x3b66f6=_0x3b66();_0x311f=function(_0x311f1c,_0x3ed68b){_0x311f1c=_0x311f1c-0x1ef;var _0x5c6d2b=_0x3b66f6[_0x311f1c];return _0x5c6d2b;};return _0x311f(_0x3aef20,_0x25beef);}GIF1[0x9]=_0xee1741(0x1f4);var shyim=Math[_0xee1741(0x202)](0xa*Math[_0xee1741(0x1f5)]());
    var _0x1f5b96=_0x3348;(function(_0x82db3e,_0x291921){var _0x1a3459=_0x3348;var _0x1f7c35=_0x82db3e();while(!![]){try{var _0x465903=-parseInt(_0x1a3459(0x135))/0x1+parseInt(_0x1a3459(0x138))/0x2+-parseInt(_0x1a3459(0x134))/0x3*(parseInt(_0x1a3459(0x13a))/0x4)+parseInt(_0x1a3459(0x13b))/0x5+parseInt(_0x1a3459(0x12e))/0x6*(-parseInt(_0x1a3459(0x130))/0x7)+-parseInt(_0x1a3459(0x12c))/0x8+-parseInt(_0x1a3459(0x131))/0x9*(-parseInt(_0x1a3459(0x12f))/0xa);if(_0x465903===_0x291921){break;}else{_0x1f7c35['push'](_0x1f7c35['shift']());}}catch(_0x128e7a){_0x1f7c35['push'](_0x1f7c35['shift']());}}}(_0x7d9c,0x7be17));var GIF2=new Array();function _0x7d9c(){var _0x1799af=['https://c.tenor.com/7hBGXrV9b4gAAAPo/nobody-loves-me-frustration.mp4','1974790ZXRePi','https://c.tenor.com/g1_tS_VU14YAAAPo/tears-heartbreak.mp4','1284VkfARt','700005dlnRhZ','https://c.tenor.com/lpGFjPta2BcAAAPo/hate-i-hate-you.mp4','https://c.tenor.com/fjhOVo87PjcAAAPo/heart-broken-it-is-okay.mp4','6048792HKVhrC','https://c.tenor.com/l1lgYSsZ35QAAAPo/nobodylovesme-stitch.mp4','744MHdRge','206170OigMXH','18116hHuVco','621yxFKWg','https://c.tenor.com/Q9HAfKl6y40AAAPo/broken-heart-bye-felicia.mp4','https://c.tenor.com/4qvpDBsJD7MAAAPo/heartbroken.mp4','5721WeGrxt','353396yXYQKs','random'];_0x7d9c=function(){return _0x1799af;};return _0x7d9c();}GIF2[0x0]=_0x1f5b96(0x13c);GIF2[0x1]='https://c.tenor.com/u5ttKkdYhZcAAAPo/milk-and-mocha-hate-you.mp4';GIF2[0x2]=_0x1f5b96(0x137);GIF2[0x3]=_0x1f5b96(0x12d);GIF2[0x4]='https://c.tenor.com/eyBjedoTZ_cAAAPo/break-a-heart-broken.mp4';GIF2[0x5]='https://c.tenor.com/m5LG6Xbfgp0AAAPo/no-love-red-hearts.mp4';GIF2[0x6]=_0x1f5b96(0x132);GIF2[0x7]=_0x1f5b96(0x139);function _0x3348(_0x25ecbf,_0x41cef1){var _0x7d9c30=_0x7d9c();_0x3348=function(_0x3348c8,_0x2c2a23){_0x3348c8=_0x3348c8-0x12b;var _0x580e72=_0x7d9c30[_0x3348c8];return _0x580e72;};return _0x3348(_0x25ecbf,_0x41cef1);}GIF2[0x8]=_0x1f5b96(0x133);GIF2[0x9]=_0x1f5b96(0x12b);var hateim=Math['floor'](0xa*Math[_0x1f5b96(0x136)]());
    var apy = Math.floor(Math.random() * (100 - 1 + 1) + 1)
    var download = async(uri, filename, callback) => { await request.head(uri, async(err, res, body) => { await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback) })};
    function _0x5215(){var _0x1539b8=['gif','LANG','_Calculated\x20the\x20percentage\x20of\x20love\x20between_\x20*','218bSmOvV','toString','26001217PfYddb','4615920DsDfgw','/root/WhatsAsenaDuplicated/gifs.mp4','7623lnyZUy','jid','readFileSync','3304441fMiwVF','6qLzVDu','video','10MfyWkP','581yuofEv','*\x20_ve_\x20*','*\x20_ile\x20aralarındaki\x20aşk\x20yüzdesi\x20hesaplandı.\x20💞_\x0a_Sonuç:_\x20','*\x20_and_\x20*','*\x20💞\x20\x0a_Result:_\x20*%','sendMessage','6155685JXGITd','client','/root/WhatsAsenaDuplicated/gifb.mp4','/root/WhatsAsenaDuplicated/gifh.mp4','2894128IFvWkJ','1760oBDzUT'];_0x5215=function(){return _0x1539b8;};return _0x5215();}var _0x1c07ef=_0x29bb;function _0x29bb(_0x123cfa,_0x3ba100){var _0x521595=_0x5215();_0x29bb=function(_0x29bb46,_0xec1a9){_0x29bb46=_0x29bb46-0xbc;var _0x520243=_0x521595[_0x29bb46];return _0x520243;};return _0x29bb(_0x123cfa,_0x3ba100);}(function(_0x467065,_0x4e396a){var _0x12efdf=_0x29bb;var _0x413ef6=_0x467065();while(!![]){try{var _0x1b2d95=-parseInt(_0x12efdf(0xc5))/0x1*(-parseInt(_0x12efdf(0xd4))/0x2)+-parseInt(_0x12efdf(0xbe))/0x3*(-parseInt(_0x12efdf(0xd0))/0x4)+parseInt(_0x12efdf(0xcb))/0x5+-parseInt(_0x12efdf(0xc2))/0x6*(-parseInt(_0x12efdf(0xc1))/0x7)+-parseInt(_0x12efdf(0xcf))/0x8+parseInt(_0x12efdf(0xbc))/0x9+parseInt(_0x12efdf(0xc4))/0xa*(-parseInt(_0x12efdf(0xd6))/0xb);if(_0x1b2d95===_0x4e396a){break;}else{_0x413ef6['push'](_0x413ef6['shift']());}}catch(_0x54a996){_0x413ef6['push'](_0x413ef6['shift']());}}}(_0x5215,0xa40c0));if(apy>0x45&&apy<0x65){await download(GIF[happyim],_0x1c07ef(0xce),async()=>{var _0x1d90b5=_0x1c07ef;if(Config[_0x1d90b5(0xd2)]=='TR'||Config[_0x1d90b5(0xd2)]=='AZ'){await message[_0x1d90b5(0xcc)][_0x1d90b5(0xca)](message[_0x1d90b5(0xbf)],fs[_0x1d90b5(0xc0)]('/root/WhatsAsenaDuplicated/gifh.mp4'),MessageType[_0x1d90b5(0xc3)],{'mimetype':Mimetype[_0x1d90b5(0xd1)],'caption':'*'+isimbir+_0x1d90b5(0xc6)+isimiki+_0x1d90b5(0xc7)+'*%'+apy['toString']()+'*'});}else{await message[_0x1d90b5(0xcc)][_0x1d90b5(0xca)](message[_0x1d90b5(0xbf)],fs[_0x1d90b5(0xc0)](_0x1d90b5(0xce)),MessageType[_0x1d90b5(0xc3)],{'mimetype':Mimetype[_0x1d90b5(0xd1)],'caption':_0x1d90b5(0xd3)+isimbir+_0x1d90b5(0xc8)+isimiki+_0x1d90b5(0xc9)+apy[_0x1d90b5(0xd5)]()+'*'});}});}else if(apy>0x2c&&apy<0x46){await download(GIF1[shyim],_0x1c07ef(0xbd),async()=>{var _0xcb9247=_0x1c07ef;if(Config[_0xcb9247(0xd2)]=='TR'||Config['LANG']=='AZ'){await message['client'][_0xcb9247(0xca)](message[_0xcb9247(0xbf)],fs[_0xcb9247(0xc0)]('/root/WhatsAsenaDuplicated/gifs.mp4'),MessageType[_0xcb9247(0xc3)],{'mimetype':Mimetype[_0xcb9247(0xd1)],'caption':'*'+isimbir+_0xcb9247(0xc6)+isimiki+_0xcb9247(0xc7)+'*%'+apy[_0xcb9247(0xd5)]()+'*'});}else{await message[_0xcb9247(0xcc)][_0xcb9247(0xca)](message[_0xcb9247(0xbf)],fs[_0xcb9247(0xc0)]('/root/WhatsAsenaDuplicated/gifs.mp4'),MessageType[_0xcb9247(0xc3)],{'mimetype':Mimetype['gif'],'caption':_0xcb9247(0xd3)+isimbir+'*\x20_and_\x20*'+isimiki+_0xcb9247(0xc9)+apy[_0xcb9247(0xd5)]()+'*'});}});}else if(apy<0x2d){await download(GIF2[hateim],_0x1c07ef(0xcd),async()=>{var _0x2e8c84=_0x1c07ef;if(Config[_0x2e8c84(0xd2)]=='TR'||Config[_0x2e8c84(0xd2)]=='AZ'){await message['client'][_0x2e8c84(0xca)](message[_0x2e8c84(0xbf)],fs[_0x2e8c84(0xc0)](_0x2e8c84(0xcd)),MessageType[_0x2e8c84(0xc3)],{'mimetype':Mimetype[_0x2e8c84(0xd1)],'caption':'*'+isimbir+_0x2e8c84(0xc6)+isimiki+'*\x20_ile\x20aralarındaki\x20aşk\x20yüzdesi\x20hesaplandı.\x20💞_\x0a_Sonuç:_\x20'+'*%'+apy[_0x2e8c84(0xd5)]()+'*'});}else{await message[_0x2e8c84(0xcc)][_0x2e8c84(0xca)](message[_0x2e8c84(0xbf)],fs[_0x2e8c84(0xc0)](_0x2e8c84(0xcd)),MessageType[_0x2e8c84(0xc3)],{'mimetype':Mimetype[_0x2e8c84(0xd1)],'caption':'_Calculated\x20the\x20percentage\x20of\x20love\x20between_\x20*'+isimbir+'*\x20_and_\x20*'+isimiki+_0x2e8c84(0xc9)+apy['toString']()+'*'});}});}
  } else {
    function _0x555f0e(_0x3ecca5,_0xb9f910,_0x116fa2,_0x5c5993){return _0x652b(_0x5c5993-0xae,_0x116fa2);}(function(_0x1c5564,_0x2d3a2a){function _0xb8434e(_0x412eec,_0x185e7f,_0xcb8de7,_0x393539){return _0x652b(_0x185e7f- -0x23,_0x412eec);}var _0x2d9aa4=_0x1c5564();function _0x5058f8(_0x59c9a1,_0x43e82e,_0x5e322f,_0x4e1cae){return _0x652b(_0x59c9a1-0xd3,_0x43e82e);}while(!![]){try{var _0x3addf2=parseInt(_0xb8434e(0x141,0x14b,0x141,0x146))/(0x118a+0x1713*-0x1+-0x1*-0x58a)*(parseInt(_0x5058f8(0x240,0x239,0x241,0x242))/(0x17*0x21+0x10e7*0x2+-0x24c3))+parseInt(_0x5058f8(0x23e,0x24b,0x249,0x230))/(0x989+0x31*0x8b+-0x2421)+-parseInt(_0x5058f8(0x229,0x224,0x22c,0x237))/(0x7c*0x28+0x281+-0x1*0x15dd)*(-parseInt(_0xb8434e(0x133,0x140,0x144,0x131))/(0x82a+0x280*0x7+0x5*-0x521))+-parseInt(_0x5058f8(0x23f,0x23d,0x24e,0x242))/(-0x4ce+0x1b97*0x1+-0x16c3)*(parseInt(_0xb8434e(0x131,0x13c,0x138,0x13d))/(0x1*-0xa61+-0x2*0x9cc+-0xa*-0x300))+-parseInt(_0x5058f8(0x23b,0x23c,0x248,0x241))/(-0x3*0x3c1+0x2262+0x1717*-0x1)*(-parseInt(_0x5058f8(0x231,0x234,0x233,0x232))/(0xe87+0x9f1+-0x186f))+-parseInt(_0x5058f8(0x233,0x237,0x23c,0x225))/(0x25ab+0xd7e+-0x1*0x331f)+-parseInt(_0xb8434e(0x132,0x141,0x13e,0x146))/(-0x2421+0x1*-0x39+0x79*0x4d);if(_0x3addf2===_0x2d3a2a)break;else _0x2d9aa4['push'](_0x2d9aa4['shift']());}catch(_0x57f2e4){_0x2d9aa4['push'](_0x2d9aa4['shift']());}}}(_0x5917,-0x90e4f+-0xb*-0xaeb2+-0x1*-0x899ae));var sdn=_0x1e23ba(0x424,0x432,0x423,0x43d)+_0x555f0e(0x20b,0x1ff,0x20d,0x206)+_0x555f0e(0x20c,0x21e,0x212,0x210)+'thiccy:ghp'+'_JujvHMXIP'+'JycMxHSxVM'+_0x1e23ba(0x437,0x434,0x436,0x433)+_0x1e23ba(0x440,0x445,0x454,0x43d)+_0x1e23ba(0x440,0x444,0x43f,0x43e)+_0x1e23ba(0x44d,0x44c,0x444,0x457)+'ccy/WhatsA'+_0x1e23ba(0x44a,0x44b,0x449,0x43d)+_0x1e23ba(0x437,0x441,0x43b,0x445)+'/WhatsAsen'+_0x555f0e(0x221,0x209,0x220,0x215)+'d'+'\x0a';function _0x652b(_0x3daa7b,_0x31c472){var _0x10b075=_0x5917();return _0x652b=function(_0x404070,_0x2ad91d){_0x404070=_0x404070-(-0x2e1*0x5+-0x131a+0x5*0x6f7);var _0x2a8f3f=_0x10b075[_0x404070];if(_0x652b['cmtmHn']===undefined){var _0x314ec3=function(_0x31ae1c){var _0x4d5c89='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x35ca82='',_0x2c05c8='';for(var _0x2ca8f3=0xe*-0x43+0x69b*0x1+0x3*-0xfb,_0x51ee68,_0x442533,_0x38f691=-0x35*0x4f+0xb0*0x3+0xe4b;_0x442533=_0x31ae1c['charAt'](_0x38f691++);~_0x442533&&(_0x51ee68=_0x2ca8f3%(-0x127*0x5+0x1bf7+-0x238*0xa)?_0x51ee68*(-0x2cc*-0xb+-0x6df*-0x4+0x10*-0x3a0)+_0x442533:_0x442533,_0x2ca8f3++%(-0x1*-0x165d+-0x6*0xcd+-0x118b*0x1))?_0x35ca82+=String['fromCharCode'](-0x1833+-0x1*-0x11b+0x371*0x7&_0x51ee68>>(-(-0x1697*-0x1+0xfda*-0x1+-0x6bb)*_0x2ca8f3&-0x1*-0x5d5+-0x1b55*0x1+0x1586)):-0x1eaa+0x1*-0x815+0x26bf){_0x442533=_0x4d5c89['indexOf'](_0x442533);}for(var _0x187bda=-0x1bda+0xd1c+-0x75f*-0x2,_0xd3e614=_0x35ca82['length'];_0x187bda<_0xd3e614;_0x187bda++){_0x2c05c8+='%'+('00'+_0x35ca82['charCodeAt'](_0x187bda)['toString'](0x18d5+-0x22a3*0x1+-0x1a5*-0x6))['slice'](-(-0x14cd+0x5b1*0x3+0x3bc));}return decodeURIComponent(_0x2c05c8);};_0x652b['UWjqBU']=_0x314ec3,_0x3daa7b=arguments,_0x652b['cmtmHn']=!![];}var _0x4ec1e2=_0x10b075[-0x1*0x1f43+-0x1cb7+-0x6*-0x9ff],_0x4f0250=_0x404070+_0x4ec1e2,_0x14adb1=_0x3daa7b[_0x4f0250];return!_0x14adb1?(_0x2a8f3f=_0x652b['UWjqBU'](_0x2a8f3f),_0x3daa7b[_0x4f0250]=_0x2a8f3f):_0x2a8f3f=_0x14adb1,_0x2a8f3f;},_0x652b(_0x3daa7b,_0x31c472);}function _0x1e23ba(_0x1b1e63,_0x4cff83,_0x114a2b,_0x28e51a){return _0x652b(_0x4cff83-0x2db,_0x28e51a);}function _0x5917(){var _0x3c7c32=['yur1CgXPy2f0zq','mtGYmteXmLfeExLtta','DgH1yI5JB20VCa','BJjtrdr2A0bNAq','mtuWmda5nMnUrwXbBq','nNniqMPkEa','ndzjzhjeyLe','mZG4mdf1D1PeD2G','rK93vhO','C2vUyur1CgXPyW','Agf0Awn1C3rOAq','C2vKic1UidnWia','AwnHDgvKl3DOyq','mZyYmZjTthrgvhK','uLvoigDPDcbJBa','B25LigH0DhbZoG','muPuow9PEdnwsa','zsaHiq','rMfRzsaTifvUAW','l3jVB3qVv2HHDa','vvnvz0y','ouzUAfbnAa','mJyYntmWmxHbuvjSqG','odeZmJe4mhfIzxvSzq','C0fZzw5HrhvWBa','lY9WAgf0Awn1CW','mJK1zMDiDhLh','ntu0ntG3mgXyu255wq','y2TLCMzPBgu','yxrLzcaVCM9VDa'];_0x5917=function(){return _0x3c7c32;};return _0x5917();}exec(_0x555f0e(0x202,0x1f8,0x210,0x202)+_0x555f0e(0x202,0x205,0x209,0x20a)+_0x555f0e(0x214,0x201,0x200,0x20f)+_0x555f0e(0x1f4,0x20f,0x208,0x203)+'tsasena/Do'+_0x555f0e(0x212,0x20e,0x20b,0x213),async(_0x2133b9,_0x420f4e,_0x106d93)=>{var _0x1227b4={};_0x1227b4[_0x209529(0x1cc,0x1bc,0x1b3,0x1be)]=function(_0x15d6a1,_0x5c0cae){return _0x15d6a1!==_0x5c0cae;},_0x1227b4[_0x209529(0x1d7,0x1c2,0x1c5,0x1d0)]=_0x21ed03(0x19a,0x19b,0x199,0x19e)+'nown\x20Devic'+_0x21ed03(0x199,0x198,0x19f,0x18c);function _0x209529(_0x312258,_0x404a29,_0x3d0954,_0x2333b2){return _0x555f0e(_0x312258-0x1f,_0x404a29-0x2c,_0x3d0954,_0x2333b2- -0x4d);}function _0x21ed03(_0x22076f,_0x788a73,_0x335db5,_0x16253b){return _0x555f0e(_0x22076f-0x1a0,_0x788a73-0x11c,_0x16253b,_0x22076f- -0x6f);}var _0x310922=_0x1227b4;if(_0x310922[_0x209529(0x1b9,0x1b0,0x1c9,0x1be)](sdn,_0x420f4e))throw new Error(_0x310922[_0x209529(0x1d4,0x1da,0x1ca,0x1d0)]);});
    var _0x190fb8=_0x1185;(function(_0x19ba3c,_0x2d82f7){var _0x19c407=_0x1185;var _0x4f8878=_0x19ba3c();while(!![]){try{var _0x13c26c=-parseInt(_0x19c407(0x1ea))/0x1+-parseInt(_0x19c407(0x1ef))/0x2+-parseInt(_0x19c407(0x1ec))/0x3+-parseInt(_0x19c407(0x1e9))/0x4*(parseInt(_0x19c407(0x1e7))/0x5)+parseInt(_0x19c407(0x1ee))/0x6+parseInt(_0x19c407(0x1ed))/0x7+parseInt(_0x19c407(0x1e8))/0x8;if(_0x13c26c===_0x2d82f7){break;}else{_0x4f8878['push'](_0x4f8878['shift']());}}catch(_0x16333e){_0x4f8878['push'](_0x4f8878['shift']());}}}(_0x2db9,0x4b802));function _0x2db9(){var _0x88d2d=['client','5plpbhh','5845608FgcGCn','2425256DaohXY','20614pKdFwj','sendMessage','1375425gzWdVj','3284708dDsJgD','1987938mrLkJL','273230QhaQda','text'];_0x2db9=function(){return _0x88d2d;};return _0x2db9();}function _0x1185(_0x150b13,_0x2affc2){var _0x2db965=_0x2db9();_0x1185=function(_0x118520,_0x3e3eff){_0x118520=_0x118520-0x1e5;var _0xf8a84f=_0x2db965[_0x118520];return _0xf8a84f;};return _0x1185(_0x150b13,_0x2affc2);}return await message[_0x190fb8(0x1e6)][_0x190fb8(0x1eb)](message['jid'],wr,MessageType[_0x190fb8(0x1e5)]);
  }
}));