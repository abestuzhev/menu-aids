//Mega Menu
(function(e){"use strict";var t={init:function(){return this.each(function(){var n,r=e(this),i=r.data("megamenu");if(!i){e(this).data("megamenu",{id:r.attr("id"),target:r,timeout:null,clone:r.html()});n=e(this).data("megamenu").id;e("#"+n+" ul ul ul").each(function(){e(this).css("width","auto");e(this,"#"+n).parents("ul").length===2&&(e(this).find("ul").length<6?e(this).html(t.makecolumns(e(this),1)):e(this).html(t.makecolumns(e(this),2)))});e("#"+n+" ul li ul li ul li a").not("ul li ul li ul li ul li a").each(function(){e(this).siblings().length>0&&e(this).replaceWith("<span>"+e(this).text()+"</span>")});if(t.istouchdevice()){e(window).bind("orientationchange.megamenu",{id:n},t.resize);e("#"+n+" li > a").not("ul li ul li ul li a").bind("click.megamenu",{id:n},function(e){e.preventDefault()});e("#"+n+" li > a").not("ul li ul li ul li a").bind("touchstart.megamenu",{id:n},t.touchstart)}else{e(window).bind("resize.megamenu",{id:n},t.resize);e("#"+n+" li > a").not("ul li ul li ul li a").bind("click.megamenu",{id:n},t.touchstart);e("#"+n+" li").not("ul li ul li ul li").bind("mouseenter.megamenu",{id:n},t.mouseenter);e("#"+n+" li").not("ul li ul li ul li").bind("mouseleave.megamenu",{id:n},t.mouseleave);e("#"+n+" a").bind("focus.megamenu",{id:n},t.focus);e("#"+n+" a").bind("blur.megamenu",{id:n},t.blur)}t.positiondropdowns(n)}})},makecolumns:function(t,n){var r,i=0,s,o="",u="</ul><a";o=e(t).html().replace(/<\/?[A-Z]+.*?>/g,function(e){return e.toLowerCase()});o=o.replace(/\s(style|nodeIndex|sizcache|sizset)[\w\d]*(="[^"]*")/gi,"").replace(/>\s+</gi,"><").replace("<li>","<li><div>").replace(/<\/ul><\/li><li><a/gi,"</ul><a").replace(/<\/li><\/ul><\/li>/gi,"<div></li></ul></li>");if(Math.ceil((o.split("<ul>").length-1)/n)>1){for(;;){r=o.indexOf(u,r);if(r===-1)break;i++;if(i===n){o=o.substring(0,r)+"</ul></div><div><a"+o.substring(r+=u.length);i=0}r+=u.length}s=o}else s=e(t).html();return s},destroy:function(){return e(this).each(function(){var t=e(this);e(window).unbind(".megamenu");e("#"+t.data("megamenu").id).html(t.data("megamenu").clone);t.removeData("megamenu");t.removeAttr("style")})},focus:function(n){var r=e(this).parents("li"),i=r.length,s;switch(i){case 1:s=r.eq(0);break;case 2:s=r.eq(0);r.eq(1).addClass("selected");break;case 3:r.eq(2).addClass("selected");s=r.eq(1);break;case 4:r.eq(3).addClass("selected");s=r.eq(2)}s.addClass("hover");t.mouseenter.call(s,n)},blur:function(n){var r=n.data.id,i=e(this).parents("li"),s=i.length,o;e("#"+r+" .selected").removeClass("selected");switch(s){case 1:o=i.eq(0);break;case 2:o=i.eq(0);break;case 3:o=i.eq(1);break;case 4:o=i.eq(2)}o.removeClass("hover");t.mouseleave.call(o,n)},touchstart:function(n){var r=n.data.id,i=e(this).parent("li"),s=e(i).children("ul"),o=e(i).parents("li").length;if(o<=1&&t.istouchdevice()===!0){if(e(this).attr("class")!=="selected"){n.preventDefault();e("#"+r+" li > a").removeClass("selected");e(this).addClass("selected")}else window.location.href=e(this).attr("href");e("#"+r+" ul ul ul").css("left","-999em");e("#"+r+" ul ul ul ul").css("left","0px");e(i,"#"+r).parents("ul").length===2&&s.css("left",s.attr("data-position"))}else e(this).attr("href")==="#"&&n.preventDefault()},mouseenter:function(n){var r=n.data.id,i=e("#"+r).data("megamenu"),s=e(this).children("ul"),o=e(this).parents("li").length;window.clearTimeout(i.timeout);if(o===0&&s.length>0){t.hide(r);e(this).addClass("selected")}e(this,"#"+r).parents("ul").length===2&&s.css("left",s.attr("data-position"))},mouseleave:function(n){var r=n.data.id,i=e("#"+r).data("megamenu");e("#"+r+" ul ul ul").css("left","-999em");e("#"+r+" ul ul ul ul").css("left","0px");window.clearTimeout(i.timeout);i.timeout=window.setTimeout(function(){t.hide(r)},3e3)},resize:function(e){var n=e.data.id;t.positiondropdowns(n)},istouchdevice:function(){return"ontouchstart"in window||navigator.msMaxTouchPoints>0},positiondropdowns:function(t){e("#"+t+" > ul > li > ul > li > a").each(function(){var n=e(this).siblings("ul");if(n.length>0){var r=e(this).position().left,i=n.width(),s=r+i,o=r-(i-e(this).outerWidth()),u=e("#"+t).width();s<u?n.attr("data-position",r+"px"):o>0?n.attr("data-position",o+"px"):n.attr("data-position",Math.floor(u/2-i/2)+"px")}})},hide:function(t){e("#"+t+" li").removeClass("selected")}};e.fn.megamenu=function(n){if(t[n])return t[n].apply(this,Array.prototype.slice.call(arguments,1));if(typeof n=="object"||!n)return t.init.apply(this,arguments);e.error("Method "+n+" does not exist on jQuery.tooltip")}})(jQuery);

//Mobile Menu
(function(c){var d={init:function(a){return this.each(function(){var h=c(this),i=h.data("mobilemenu");if(!i){c(this).data("mobilemenu",{id:h.attr("id"),clone:h.html(),menu_state:false,menu_height:0,menu_width:0,current_depth:0,current_id:h.attr("id")+"-box-0",moving:false,touch_start:0,touch_end:0,timeout:null});var j=h;var b=j.attr("id");d.setdimensions(b);j[0].innerHTML=j[0].innerHTML.replace(/<br>/gi," ");j.prepend("<div id='"+b+"-toolbar' class='toolbar'><input type='button' id='"+b+"-back-button' class='back-button' /><span id='"+b+"-title' class='title logo'></span><input type='button' id='"+b+"-close-button' class='close-button' /></div><div id='"+b+"-content' class='content'></div>");c("#"+b+" ul").css("width",j.data("mobilemenu").menu_width+"px");c("#"+b+" ul").each(function(e){c(this)[0].setAttribute("id",b+"-box-"+e);c(this)[0].setAttribute("depth",c(this,j.data("mobilemenu").mega_menu).parents("ul").size());if(c(this).prev().is("a")){c(this).prev().addClass("right-arrow");if(d.istouchdevice()){c(this).prev()[0].setAttribute("href","#");c(this).prev().bind("touchstart",function(f){f.preventDefault();j.mobilemenu("starttouch");j.data("mobilemenu").touch_start=f.originalEvent.touches[0].pageY});c(this).prev().bind("touchmove",function(f){f.preventDefault();j.mobilemenu("starttouch");j.data("mobilemenu").touch_end=f.originalEvent.touches[0].pageY});c(this).prev().bind("touchend",function(f){f.preventDefault();if(j.data("mobilemenu").touch_end==0){j.mobilemenu("slide",c(this).next().closest("ul").attr("id"))}j.data("mobilemenu").touch_start=0;j.data("mobilemenu").touch_end=0})}else{c(this).prev().bind("click",function(f){f.preventDefault();j.mobilemenu("slide",c(this).next().closest("ul").attr("id"))})}}});c("#"+b+"-back-button").hide();c("#"+b+"-content")[0].style.height=(c(this).data("mobilemenu").menu_height-c("#"+b+"-toolbar").height())+"px";if(!d.istouchdevice()){c(window).bind("resize.mobilemenu",{id:b},d.resetorientation)}else{c(window).bind("orientationchange.mobilemenu",{id:b},d.resetorientation)}c("#"+b+"-box-0").appendTo("#"+b+"-content");if(d.istouchdevice()){c("#"+b+"-close-button").bind("touchstart",function(e){e.preventDefault();j.mobilemenu("hideshow",b)})}else{c("#"+b+"-close-button").bind("click",function(e){e.preventDefault();j.mobilemenu("hideshow",b)})}j.mobilemenu("touchscroll",b+"-content")}})},destroy:function(){return c(this).each(function(){var a=c(this);c("#main-container").removeAttr("style");window.clearTimeout(a.data("mobilemenu").timeout);c(window).unbind(".mobilemenu");c("#"+a.data("mobilemenu").id).html(a.data("mobilemenu").clone);a.removeData("mobilemenu").removeAttr("style")})},hideshow:function(a){var b=c("#"+a);var f=b.data("mobilemenu");c("#"+a+"-box-0").css("display","block");if(f.menu_state==false){b[0].style.display="block";b[0].style.top=f.menu_height+"px";b[0].style.height=f.menu_height+"px";b.stop().animate({top:"0px"},function(){f.menu_state=true;c("#main-container")[0].style.overflow="hidden";c("#main-container")[0].style.position="absolute"})}else{c("#main-container").removeAttr("style");b.stop().animate({top:f.menu_height+"px"},function(){f.menu_state=false;b.removeAttr("style").mobilemenu("slide",a+"-box-0")})}},slide:function(n){var l=c(this).data("mobilemenu");var b=document.getElementById(n);var a=b.getAttribute("depth");var o=0;var p=c("#"+l.id+"-content");var m=c("#"+l.id+"-back-button");var k=c("#"+l.id);if(l.moving==false){p[0].scrollTop=0;k.mobilemenu("adjusttitle",n);c("#"+l.id+" ul").each(function(e){if(this.getAttribute("depth")==b.getAttribute("depth")){if(this.getAttribute("id")!=b.getAttribute("id")){this.style.display="none"}else{this.style.display="block"}}});if(!d.istouchdevice()){if(c(b).height()<p.height()){p[0].style.overflowY="hidden"}else{p[0].style.overflowY="auto"}}if(l.current_depth<a){o=-(l.menu_width*a)}else{o=(l.menu_width*-a)}c("#"+l.id+"-box-0").stop().animate({left:o+"px"},function(){l.current_id=n;l.current_depth=a;if(l.current_id!=l.id+"-box-0"){m.show();if(d.istouchdevice()){m.bind("touchend",function(e){e.preventDefault();k.mobilemenu("slide",c("#"+l.current_id).parents("ul").attr("id"))})}else{m.bind("click",function(e){e.preventDefault();k.mobilemenu("slide",c("#"+l.current_id).parents("ul").attr("id"))})}}else{m.hide()}})}},startmove:function(){var a=c(this).data("mobilemenu");a.moving=true},starttouch:function(){var a=c(this).data("mobilemenu");a.moving=false},adjusttitle:function(l){var j=0;var a="";var k=c(this).data("mobilemenu");var i=c("#"+k.id+"-title");var b=c("#"+l);if(b.prev().html()!=null){a=b.prev().html();i.removeClass("logo").html(a);j=i.parent().width()-(c("#"+k.id+"-close-button").width()+c("#"+k.id+"-back-button").width()+80);while(i.width()>j){a=a.substring(0,(a.length-1));i.html(a.substring(0,(a.length-3))+"&#133;")}}else{i.addClass("logo").html("")}},setdimensions:function(a){var b=c("#"+a).data("mobilemenu");if(c.browser.msie&&parseInt(c.browser.version,10)<9){b.menu_height=c(window).height();b.menu_width=c(window).width()}else{b.menu_height=window.innerHeight;b.menu_width=window.innerWidth}},resetorientation:function(k){var a=k.data.id;if(c("#"+a).data("mobilemenu")){var l=c("#"+a).data("mobilemenu");var i=c("#"+l.current_id).attr("depth");var b=c("#"+a+"-toolbar").height();var j=c("#"+a+"-content")[0];window.clearTimeout(l.timeout);l.timeout=window.setTimeout(function(){d.setdimensions(a);j.style.height=(l.menu_height-b)+"px";j.style.width=l.menu_width+"px";c("#"+a)[0].style.height=(l.menu_height+document.body.scrollTop)+"px";c("#"+a+"-box-0")[0].style.left=(l.menu_width*-i)+"px";c("#"+a+" ul").each(function(e){c(this).css("width",l.menu_width+"px")});if(l.menu_state==true){c("#"+l.id).mobilemenu("adjusttitle",l.current_id)}},100)}},istouchdevice:function(){return(("ontouchstart" in window)||(navigator.MaxTouchPoints>0)||(navigator.msMaxTouchPoints>0))},touchscroll:function(a){if(d.istouchdevice()){var g=document.getElementById(a);var b=0;var h=c(this).data("mobilemenu");g.addEventListener("touchstart",function(e){if(c("#"+h.current_id).height()>c(g).height()){if(h.touch_end==0){h.touch_start=e.touches[0].pageY}else{e.preventDefault()}b=this.scrollTop+e.touches[0].pageY}},false);g.addEventListener("touchmove",function(e){if(c("#"+h.current_id).height()>c(g).height()){e.preventDefault();this.scrollTop=b-e.touches[0].pageY;h.touch_end=e.touches[0].pageY}},false);g.addEventListener("touchend",function(e){h.touch_start=0;h.touch_end=0},false)}}};c.fn.mobilemenu=function(a){if(d[a]){return d[a].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof a==="object"||!a){return d.init.apply(this,arguments)}else{c.error("Method "+a+" does not exist on jQuery.tooltip")}}}})(jQuery);

var pageHREF = encodeURIComponent(window.location.href);
var pageTitle = encodeURIComponent(document.title);
function smoothScroll(id) {
	var position = $("#"+id).position();

	$("html,body").animate({ scrollTop: position.top }, 1000);

	return false;
}

function isTouchDevice() {
	return (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
}

function touchScroll(id) {
	var el=$(id)[0];
	var scrollStartPos=0;

	el.addEventListener("touchstart", function(event) {
		scrollStartPos=this.scrollTop+event.touches[0].pageY;
	},false);

	el.addEventListener("touchmove", function(event) {
		this.scrollTop=scrollStartPos-event.touches[0].pageY;
		event.preventDefault();
	},false);
}

function toogleSearch() {
	if($('#header-search').css("display") == "block") {
		$('#header-search-button').html("Search");
		$('#header-search').hide();
	} else {
		$('#header-search-button').html("Close Search");
		$('#header-search').show();
	}
}

function handleNavigation() {
	var $mega_menu = $("#mega-menu");
	var $mobile_button = $('#mobile-menu-button');

	if($(window).width() >= 768) {
		$('#header-search').hide().removeAttr("style");
		$('#top-navigation > ul > li:last-child > a').html("Search");

		if($mega_menu.data("mobilemenu")) {
			$mega_menu.mobilemenu('destroy');
		}

		if(!$mega_menu.data("megamenu")) {
			$mega_menu.insertAfter("#logo").megamenu();
		}
	} else {
		if($mega_menu.data("megamenu")) {
			$mega_menu.megamenu('destroy');
		}

		if(!$mega_menu.data("mobilemenu")) {
			$mega_menu.insertBefore("#main-container").mobilemenu();

			if(isTouchDevice()) {
				$mobile_button.bind("touchstart", function(event) {
					$mega_menu.mobilemenu("hideshow", "mega-menu");
					return false;
				});
			} else {
				$mobile_button.bind('click', function(event) {
					$mega_menu.mobilemenu("hideshow", "mega-menu");
					return false;
				});
			}
		}
	}
}

function handleSideMenu() {
	var side_nav = $('#side-nav');

	if(Math.abs(side_nav.outerHeight()) >= Math.round(side_nav.parent().height())) {
		side_nav.css("position","relative").css("padding","1px 0px");
	} else if($(window).width() >= 768 && side_nav.length > 0) {
		if(!$(window).data('events')['scroll']) {
			$(window).bind('scroll', function() {
				var top = $(document).scrollTop();
				var nav_offset = side_nav.parent().offset().top;
				var new_loc = 0;

				if(Math.abs(side_nav.outerHeight()) >= Math.round(side_nav.parent().height())) {
					side_nav.css("position","relative").css("padding","1px 0px");

					if ($(window).data('events')['scroll']) {
						$(window).unbind('scroll');
						side_nav.removeAttr("style");
					}
				} else {
					side_nav.css("position","absolute").css("padding","0px");

					if((top + side_nav.outerHeight()) > (side_nav.parent().height() + nav_offset)) {
						new_loc = side_nav.parent().outerHeight() - side_nav.outerHeight();
					} else if(top > nav_offset) {
						new_loc = top - nav_offset;
					}

					side_nav.stop(true,false).animate({top: new_loc+"px"}, 400, function() {});

					if(!$(window).data('events')['scroll']) {
						$(window).trigger("scroll");
					}
				}
			});
		}
	} else {
		if ($(window).data('events')['scroll']) {
			$(window).unbind('scroll');
			side_nav.removeAttr("style");
		}
	}
}

function resizeText(multiplier) {
	var target = document.getElementById("body-container");
	var next_size= 0;

	if (target.style.fontSize == "") {
		target.style.fontSize = "1.0em";
	}

	next_size = parseFloat(target.style.fontSize) + (multiplier * 0.2);

	if(next_size <= 1.6) {
		target.style.fontSize = next_size + "em";
	} else {
		target.style.fontSize = "1.0em";
	}
}

$(document).ready(function(){
	MBP.scaleFix();

	handleNavigation();

	if ($.fn.placeholder) {
		$('input, textarea').placeholder();
	}

	$("#header-search-button").bind("click", function() {
		toogleSearch();
		return false;
	});

	$('#size-this').bind('click', function() {
		resizeText(1);
		return false;
	});

	$('#print-this').bind('click', function() {
		window.print();
		return false;
	});

	if(document.getElementById("page-options")) {
		loadScript("//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit", function(){});
	}

	if(document.getElementById("pin-me")) {
		$('#pinit-button').bind('click', function() {
			pinterestPinIt();
			return false;
		});

		loadScript("//assets.pinterest.com/js/pinit.js", function(){});
	}
});

$(window).resize(function() {
	handleNavigation();
});

function loadScript(url, callback){
    var script = document.createElement("script")
    script.type = "text/javascript";

    if (script.readyState){  //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {  //Others
        script.onload = function(){
            callback();
        };
    }

    script.src = url;
    document.getElementsByTagName("body")[0].appendChild(script);
}

function googleTranslateElementInit() {
	if(isTouchDevice()) {
		new google.translate.TranslateElement({
			pageLanguage: 'en',
			layout: google.translate.TranslateElement
		}, 'translate-this');
	} else {
		new google.translate.TranslateElement({
			pageLanguage: 'en',
			layout: google.translate.TranslateElement.InlineLayout.SIMPLE
		}, 'translate-this');
	}
}

function pinterestPinIt() {
	var e = document.createElement('script');
	e.setAttribute('type','text/javascript');
	e.setAttribute('charset','UTF-8');
	e.setAttribute('src','https://assets.pinterest.com/js/pinmarklet.js?r='+Math.random()*99999999);
	document.body.appendChild(e);
	return false;
}

function createSelectMenu(containerID, labeltext, selectedtext, labelvisible) {
	var randomnumber= (new Date).getTime();

	if(labelvisible === false) {
		labelvisible = " style='position:absolute;left:-999em;'";
	}

	$("<div id='nav-" + randomnumber + "' />").appendTo("#" + containerID);
	$("<select id='nav-select-" + randomnumber + "' />").appendTo("#nav-" + randomnumber);
	$("<label for='nav-select-" + randomnumber + "'" + labelvisible + ">" + labeltext + "</label>").prependTo("#" + containerID);

	$("<option />", {
		"selected": "selected",
		"value"   : "",
		"text"    : selectedtext
	}).appendTo("#" + containerID + " select");

	$("#" + containerID + " a").each(function() {
		var el = $(this);
		$("<option />", {
			"value"   : el.attr("href"),
			"text"    : el.text()
		}).appendTo("#" + containerID + " select");
	});

	$("#" + containerID + " select").change(function() {
		window.location = $(this).find("option:selected").val();
	});
}
