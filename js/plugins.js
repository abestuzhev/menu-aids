/*! http://mths.be/placeholder v2.0.7 by @mathias */
;(function(f,h,$){var a='placeholder' in h.createElement('input'),d='placeholder' in h.createElement('textarea'),i=$.fn,c=$.valHooks,k,j;if(a&&d){j=i.placeholder=function(){return this};j.input=j.textarea=true}else{j=i.placeholder=function(){var l=this;l.filter((a?'textarea':':input')+'[placeholder]').not('.placeholder').bind({'focus.placeholder':b,'blur.placeholder':e}).data('placeholder-enabled',true).trigger('blur.placeholder');return l};j.input=a;j.textarea=d;k={get:function(m){var l=$(m);return l.data('placeholder-enabled')&&l.hasClass('placeholder')?'':m.value},set:function(m,n){var l=$(m);if(!l.data('placeholder-enabled')){return m.value=n}if(n==''){m.value=n;if(m!=h.activeElement){e.call(m)}}else{if(l.hasClass('placeholder')){b.call(m,true,n)||(m.value=n)}else{m.value=n}}return l}};a||(c.input=k);d||(c.textarea=k);$(function(){$(h).delegate('form','submit.placeholder',function(){var l=$('.placeholder',this).each(b);setTimeout(function(){l.each(e)},10)})});$(f).bind('beforeunload.placeholder',function(){$('.placeholder').each(function(){this.value=''})})}function g(m){var l={},n=/^jQuery\d+$/;$.each(m.attributes,function(p,o){if(o.specified&&!n.test(o.name)){l[o.name]=o.value}});return l}function b(m,n){var l=this,o=$(l);if(l.value==o.attr('placeholder')&&o.hasClass('placeholder')){if(o.data('placeholder-password')){o=o.hide().next().show().attr('id',o.removeAttr('id').data('placeholder-id'));if(m===true){return o[0].value=n}o.focus()}else{l.value='';o.removeClass('placeholder');l==h.activeElement&&l.select()}}}function e(){var q,l=this,p=$(l),m=p,o=this.id;if(l.value==''){if(l.type=='password'){if(!p.data('placeholder-textinput')){try{q=p.clone().attr({type:'text'})}catch(n){q=$('<input>').attr($.extend(g(this),{type:'text'}))}q.removeAttr('name').data({'placeholder-password':true,'placeholder-id':o}).bind('focus.placeholder',b);p.data({'placeholder-textinput':q,'placeholder-id':o}).before(q)}p=p.removeAttr('id').hide().prev().attr('id',o).show()}p.addClass('placeholder');p[0].value=p.attr('placeholder')}else{p.removeClass('placeholder')}}}(this,document,jQuery));

/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 0.5.0
 * 
 */
(function(d){jQuery.fn.extend({slimScroll:function(o){var a=ops=d.extend({wheelStep:20,width:"auto",height:"250px",size:"7px",color:"#000",position:"right",distance:"1px",start:"top",opacity:0.4,alwaysVisible:!1,railVisible:!1,railColor:"#333",railOpacity:"0.2",railClass:"slimScrollRail",barClass:"slimScrollBar",wrapperClass:"slimScrollDiv",allowPageScroll:!1,scroll:0},o);this.each(function(){function h(a,d,e){var f=a;d&&(f=parseInt(c.css("top"))+a*B/100*c.outerHeight(),d=b.outerHeight()-c.outerHeight(),
f=Math.min(Math.max(f,0),d),c.css({top:f+"px"}));k=parseInt(c.css("top"))/(b.outerHeight()-c.outerHeight());f=k*(b[0].scrollHeight-b.outerHeight());e&&(f=a,a=f/b[0].scrollHeight*b.outerHeight(),c.css({top:a+"px"}));b.scrollTop(f);p();i()}function w(){q=Math.max(b.outerHeight()/b[0].scrollHeight*b.outerHeight(),o);c.css({height:q+"px"})}function p(){w();clearTimeout(x);l=C&&k==~~k;q>=b.outerHeight()?l=!0:(c.stop(!0,!0).fadeIn("fast"),y&&g.stop(!0,!0).fadeIn("fast"))}function i(){m||(x=setTimeout(function(){!r&&
!s&&(c.fadeOut("slow"),g.fadeOut("slow"))},1E3))}var t,r,s,x,q,k,o=30,l=!1,B=parseInt(a.wheelStep),j=a.width,z=a.height,e=a.size,D=a.color,E=a.position,A=a.distance,u=a.start,F=a.opacity,m=a.alwaysVisible,y=a.railVisible,G=a.railColor,H=a.railOpacity,C=a.allowPageScroll,n=a.scroll,b=d(this);if(b.parent().hasClass("slimScrollDiv"))n&&(c=b.parent().find(".slimScrollBar"),g=b.parent().find(".slimScrollRail"),h(b.scrollTop()+parseInt(n),!1,!0));else{n=d("<div></div>").addClass(a.wrapperClass).css({position:"relative",
overflow:"hidden",width:j,height:z});b.css({overflow:"hidden",width:j,height:z});var g=d("<div></div>").addClass(a.railClass).css({width:e,height:"100%",position:"absolute",top:0,display:m&&y?"block":"none","border-radius":e,background:G,opacity:H,zIndex:90}),c=d("<div></div>").addClass(a.barClass).css({background:D,width:e,position:"absolute",top:0,opacity:F,display:m?"block":"none","border-radius":e,BorderRadius:e,MozBorderRadius:e,WebkitBorderRadius:e,zIndex:99}),j="right"==E?{right:A}:{left:A};
g.css(j);c.css(j);b.wrap(n);b.parent().append(c);b.parent().append(g);c.draggable({axis:"y",containment:"parent",start:function(){s=!0},stop:function(){s=!1;i()},drag:function(){h(0,d(this).position().top,!1)}});g.hover(function(){p()},function(){i()});c.hover(function(){r=!0},function(){r=!1});b.hover(function(){t=!0;p();i()},function(){t=!1;i()});var v=function(a){if(t){var a=a||window.event,b=0;a.wheelDelta&&(b=-a.wheelDelta/120);a.detail&&(b=a.detail/3);h(b,!0);a.preventDefault&&!l&&a.preventDefault();
l||(a.returnValue=!1)}};(function(){window.addEventListener?(this.addEventListener("DOMMouseScroll",v,!1),this.addEventListener("mousewheel",v,!1)):document.attachEvent("onmousewheel",v)})();w();"bottom"==u?(c.css({top:b.outerHeight()-c.outerHeight()}),h(0,!0)):"object"==typeof u&&(h(d(u).position().top,null,!0),m||c.hide())}});return this}});jQuery.fn.extend({slimscroll:jQuery.fn.slimScroll})})(jQuery);
