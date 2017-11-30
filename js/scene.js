var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}

$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};


var QueryString = function () {
  // This function is anonymous, is executed immediately and
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
        // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
        // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
      query_string[pair[0]] = arr;
        // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  }
  return query_string;
}();



function copyMap(m){
  var newMap = {};
  for (var i in m)
  newMap[i] = m[i];
  return newMap;
}

function clearDialog(effect){
  if (effect === undefined) effect = "fadeOut";
  function clear(){
    $('#dialogbox').html("");
  }
  function fadeAll(effect, clear){
    $("#dialogbox div").each(function(){
      $(this).animateCss(effect);
    })
    clear();
  };
  fadeAll(effect, clear);
}

function addDialog(line, effect, clear){
   if (effect === undefined) effect = "fadeIn"
   if (clear !== undefined && clear == true){
     clearDialog();
   }

   html = $('#dialogbox').html();
   $('#dialogbox').html(html + "<div class=\"last\">"
      + line+ "</div>");
   $(".last").animateCss(effect);
   $(".last").removeClass("last");
}

function addLink(text, vars, id){
  var newtable = copyMap(vartable);
  for (var i in vars)
    newtable[i] = vars[i];
  console.log(newtable)
  b64 = unescape(encodeURIComponent(Base64.encode(JSON.stringify(newtable))))
  line = "<div><span>"+text+"</span></div> <br><div class=\"gobtn\"><a href=\"?f="+scenefile+"&d="+b64+"\">Go.</a></div>";

  $("div#choice"+id).html(line);
  $("div#choice"+id).addClass("choice")
  $('#choice'+id).animateCss('fadeIn');
}

function playSequence(sequence, i){
  if (i===undefined){
    i=0;
  }

  var accelerate = false;
  interval = sequence[i][1]
  if (accelerate == true) interval = 1000;
  sequence[i][0]();
  if (i<sequence.length-1){
    window.setTimeout(
      function(){
        playSequence(sequence, i+1)
      }, interval);
  }
}

function displayChoice(choices, i, interval){
  if (i===undefined){
    i=0;
  }
  if (interval ===undefined){
    interval = 300;
  }
  addLink(choices[i][0], choices[i][1], i+1);
  if (i<choices.length-1){
    window.setTimeout(
      function(){
        displayChoice(choices, i+1)
      }, interval);
  }
}

function initChoice(choices){
  var nb=choices.length;
  availChoices = [];
  for (var i=1;i<nb+1;i++){
    if (choices[i-1].length == 2 || choices[i-1][2]() == true){
      availChoices.push(choices[i-1]);
      html = $('#choicebox').html();
      j = availChoices.length;
      html = html + "<div id=\"choice"+ j +"\"></div>";
      $('#choicebox').html(html);
    }
  }
  displayChoice(availChoices)
}

function displayImage(img){
  html = "<img src=\"./images/"+img+".jpg\">"

  $("#imagebox").html(html);
  adjustimg();
  $("#imagebox img").animateCss("fadeIn")

}

function loadScene(scene){
  scene['storylet'](function(){
    addDialog("&nbsp");
    console.log($("#choice1"));
    // add three choices
    if (scene['choices'] !== undefined){
      initChoice(scene['choices']);
    }
  })
}

function update_cards(){
  for (var i=0;i<storylets.length;i++){
    if (storylets[i]['qualities']() == true) {
       cards_to_play.push(i);
    }
  }
}

function loadScript(url, callback)
{
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}

function run_machine() {
  update_cards();

  console.log(cards_to_play)
  if (cards_to_play.length != 0){
    random = Math.floor((Math.random() * cards_to_play.length));
    console.log(random)
    card = storylets[cards_to_play[random]];
    loadScene(card)
    cards_to_play.splice(random, 1);
  }
}


// MAIN FUNCTION

$( document ).ready(function() {
  var f = QueryString.f;
  var b64 = QueryString.d;
  console.log('file ' + f)
  if (b64 !== undefined){
    d = Base64.decode(decodeURIComponent(escape(b64)));
    d = d.replaceAll('\0', '')
    console.log(d)
    vartable = JSON.parse(d);
  }
  if (f===undefined){ f = 'vallter'}
  scenefile = f;

  loadScript('md/'+f+'.js', run_machine)
});
