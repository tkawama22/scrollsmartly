/* mousetrap v1.4.2 craig.is/killing/mice */
(function(){function r(a,b,d){a.addEventListener?a.addEventListener(b,d,!1):a.attachEvent("on"+b,d)}function y(a){if("keypress"==a.type){var b=String.fromCharCode(a.which);a.shiftKey||(b=b.toLowerCase());return b}return j[a.which]?j[a.which]:z[a.which]?z[a.which]:String.fromCharCode(a.which).toLowerCase()}function s(a){a=a||{};var b=!1,d;for(d in n)a[d]?b=!0:n[d]=0;b||(t=!1)}function A(a,b,d,c,e,f){var g,k,h=[],j=d.type;if(!l[a])return[];"keyup"==j&&u(a)&&(b=[a]);for(g=0;g<l[a].length;++g)if(k=l[a][g],
c||!(k.seq&&n[k.seq]!=k.level))if(j==k.action&&("keypress"==j&&!d.metaKey&&!d.ctrlKey||b.sort().join(",")===k.modifiers.sort().join(","))){var m=c&&k.seq==c&&k.level==f;(!c&&k.combo==e||m)&&l[a].splice(g,1);h.push(k)}return h}function G(a){var b=[];a.shiftKey&&b.push("shift");a.altKey&&b.push("alt");a.ctrlKey&&b.push("ctrl");a.metaKey&&b.push("meta");return b}function v(a,b,d){if(!m.stopCallback(b,b.target||b.srcElement,d)&&!1===a(b,d))b.preventDefault&&b.preventDefault(),b.stopPropagation&&b.stopPropagation(),
b.returnValue=!1,b.cancelBubble=!0}function w(a){"number"!==typeof a.which&&(a.which=a.keyCode);var b=y(a);b&&("keyup"==a.type&&x===b?x=!1:m.handleKey(b,G(a),a))}function u(a){return"shift"==a||"ctrl"==a||"alt"==a||"meta"==a}function B(a,b){var d,c,e,f=[];d="+"===a?["+"]:a.split("+");for(e=0;e<d.length;++e)c=d[e],C[c]&&(c=C[c]),b&&("keypress"!=b&&D[c])&&(c=D[c],f.push("shift")),u(c)&&f.push(c);d=c;e=b;if(!e){if(!p){p={};for(var g in j)95<g&&112>g||j.hasOwnProperty(g)&&(p[j[g]]=g)}e=p[d]?"keydown":
"keypress"}"keypress"==e&&f.length&&(e="keydown");return{key:c,modifiers:f,action:e}}function E(a,b,d,c,e){q[a+":"+d]=b;a=a.replace(/\s+/g," ");var f=a.split(" ");if(1<f.length){var g=a;a=function(a){return function(){t=a;++n[g];clearTimeout(F);F=setTimeout(s,1E3)}};c=function(a){v(b,a,g);"keyup"!==d&&(x=y(a));setTimeout(s,10)};for(e=n[g]=0;e<f.length;++e){var h=e+1===f.length?c:a(d||B(f[e+1]).action);E(f[e],h,d,g,e)}}else f=B(a,d),l[f.key]=l[f.key]||[],A(f.key,f.modifiers,{type:f.action},c,a,e),
l[f.key][c?"unshift":"push"]({callback:b,modifiers:f.modifiers,action:f.action,seq:c,level:e,combo:a})}for(var j={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},z={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},D={"~":"`","!":"1","@":"2",
"#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},C={option:"alt",command:"meta","return":"enter",escape:"esc",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},p,l={},q={},n={},F,x=!1,t=!1,h=1;20>h;++h)j[111+h]="f"+h;for(h=0;9>=h;++h)j[h+96]=h;r(document,"keypress",w);r(document,"keydown",w);r(document,"keyup",w);var m={bind:function(a,b,d){a=a instanceof Array?a:[a];for(var c=0;c<a.length;++c)E(a[c],b,d);
return this},unbind:function(a,b){return m.bind(a,function(){},b)},trigger:function(a,b){if(q[a+":"+b])q[a+":"+b]({},a);return this},reset:function(){l={};q={};return this},stopCallback:function(a,b){return-1<(" "+b.className+" ").indexOf(" mousetrap ")?!1:"INPUT"==b.tagName||"SELECT"==b.tagName||"TEXTAREA"==b.tagName||b.contentEditable&&"true"==b.contentEditable},handleKey:function(a,b,d){b=A(a,b,d);var c,e={},f=0,g=!1;for(c=0;c<b.length;++c)b[c].seq&&(f=Math.max(f,b[c].level));for(c=0;c<b.length;++c)b[c].seq?
b[c].level==f&&(g=!0,e[b[c].seq]=1,v(b[c].callback,d,b[c].combo)):g||v(b[c].callback,d,b[c].combo);d.type==t&&!u(a)&&s(e)}};window.Mousetrap=m;"function"===typeof define&&define.amd&&define(m)})();
/*
 * Copyright (c) 2012-2013 Shinnosuke Watanabe
 * https://github.com/shinnn
*/

//TODO: ref: https://developer.mozilla.org/ja/docs/DOM/Using_full-screen_mode
$(function(){
  function toggleFullscreen(){
    if(document.webkitIsFullScreen){
      document.webkitCancelFullScreen();
    }else{
      var body = document.body;
      if(body.webkitRequestFullScreen){
        console.log("\"webkitRequestFullScreen()\"");
        body.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      }else if(body.mozRequestFullScreen){
        console.log("\"mozRequestFullScreen()\"");
        body.mozRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      }else{
        console.log("\"requestFullScreen()\"");
        body.requestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    }
  }

  Mousetrap.bind(['f', 'F'], toggleFullscreen);
});

(function() {
  smartly.set({
    position: 'center',
    marginLeft: 150,
    easing: 5
  });

  smartly.all();

  $(function() {
    $('.to-about').css('cursor', 'pointer').on('click', function() {
      return smartly.scroll(a0, a1);
    });
    $('.to-start').css('cursor', 'pointer').on('click', function() {
      return smartly.scroll(b0, b1);
    });
    $('.to-method').css('cursor', 'pointer').on('click', function() {
      return smartly.scroll(c0, c1);
    });
    return $('.to-property').css('cursor', 'pointer').on('click', function() {
      return smartly.scroll(i0, i1);
    });
  });

}).call(this);

/*
//@ sourceMappingURL=main.js.map
*/