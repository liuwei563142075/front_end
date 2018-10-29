(function(e){"use strict";var t=function(){var t="mdn.search";var a=["key","data"];var n=function(e){return t+"."+e};return{flush:function(){var t=this;e.each(a,function(e,a){t.removeItem(a)})},serialize:function(e){return JSON.stringify(e)},deserialize:function(e){if(typeof e!=="string"){return undefined}try{return JSON.parse(e)}catch(t){return e||undefined}},getItem:function(e){return this.deserialize(sessionStorage.getItem(n(e)))},setItem:function(e,t){return sessionStorage.setItem(n(e),this.serialize(t))},removeItem:function(e){return sessionStorage.removeItem(n(e))}}}();if(e("body").hasClass("search-navigator-flush")){t.flush()}e.fn.mozSearchResults=function(a){var n=t.getItem("key");var i=e(".from-search-next");var r=e(".from-search-previous");var s;var o;var c;if(!n&&!a){return}var l=function(t){if(!t||!t.documents||!t.documents.length){return}var a=e("body").data("slug");var n=document.createDocumentFragment();var c;var l;if(t.query){e("#main-q").attr("data-value",t.query)}e.each(t.documents,function(){if(this.slug===a){c=this.slug}});if(!c)return;e(".from-search-navigate-wrap").removeClass("hidden");l=e(".from-search-toc ol");l.on("click","a",function(){mdn.analytics.trackEvent({category:"Search README.md navigator",action:"Click",label:e(this).attr("href"),value:c})});e.each(t.documents,function(c,l){var d=e("<a>",{text:l.title,href:l.url});if(l.slug===a){d.addClass("current");s=t.documents[c+1];if(s){i.attr("href",s.url).on("click",function(){mdn.analytics.trackEvent({category:"Search README.md navigator",action:"Click next",label:s.url,value:s.id})}).removeClass("disabled")}else{i.attr("title",i.attr("data-empty-title"))}o=t.documents[c-1];if(o){r.attr("href",o.url).on("click",function(){mdn.analytics.trackEvent({category:"Search README.md navigator",action:"Click previous",label:o.url,value:o.id})}).removeClass("disabled")}else{r.attr("title",i.attr("data-empty-title"))}}n.appendChild(e("<li></li>").append(d).get(0))});l.append(n);e("#wiki-document-head").addClass("from-search")};if(!a){if(n){a=n}}else{t.setItem("key",a)}c=t.getItem("data");if(!c){e.ajax({url:a,dataType:"json",success:function(e){t.setItem("data",e);l(e)},error:function(e,t,n){console.error(a,t,n.toString())}})}else{l(c)}return this}})(jQuery);(function(e,t,a){"use strict";a(".toggleable").mozTogglers();(function(){var e=a("#quick-links");r(e.find("> ul > li, > ol > li"));e.find(".toggleable").mozTogglers();var t=a("#wiki-column-container");var n=a("#wiki-controls .quick-links");var i=a("#wiki-left").get(0);if(i){var s=i.parentNode}a("#quick-links-toggle, #show-quick-links").on("click",function(e){e.preventDefault();a(i).toggleClass("column-closed");t.toggleClass("wiki-left-closed");n.toggleClass("hidden");if(a(i).hasClass("column-closed")){s.removeChild(i)}else{s.appendChild(i)}mdn.analytics.trackEvent({category:"Wiki",action:"Sidebar",label:this.id==="quick-links-toggle"?"Hide":"Show"})})})();a(".subnav").each(function(){var e=a(this);var n=e.find(" > ol");var i=a(".zone-landing-header-preview-base").length?l:c;if(!n.length)return;r(n.find("li"));n.find(".toggleable").mozTogglers({slideCallback:i});var s=[];var o=n.find('a[href$="'+t.location.pathname+'"]');o.each(function(){var e=this;var t=a(this).parents(".toggleable").find(".toggler");t.each(function(){if(a.contains(a(this).parent("li").get(0),e)&&s.indexOf(this)===-1){a(this).trigger("mdn:click");s.push(this)}})}).parent().addClass("current");n.addClass("accordion");function c(){}function l(){if(a(".zone-landing-header-preview-base").css("position")==="absolute"){a(".wiki-main-content").css("min-height",e.height())}}i()});var n=a(".from-search-navigate");if(n.length){var i=a(".from-search-toc");n.mozMenu({submenu:i,brickOnClick:true,onOpen:function(){mdn.analytics.trackEvent({category:"Search README.md navigator",action:"Open on hover"})},onClose:function(){mdn.analytics.trackEvent({category:"Search README.md navigator",action:"Close on blur"})}});i.find("ol").mozKeyboardNav()}a(".page-watch a").on("click",function(e){e.preventDefault();var t=a(this);if(t.hasClass("disabled"))return;var n=t.closest("form");var i=mdn.Notifier.growl(t.data("subscribe-status"),{duration:0});t.addClass("disabled");a.ajax(n.attr("action"),{cache:false,method:"post",data:n.serialize()}).done(function(e){var a;e=JSON.parse(e);if(Number(e.status)===1){t.text(t.data("unsubscribe-text"));a=t.data("subscribe-message")}else{t.text(t.data("subscribe-text"));a=t.data("unsubscribe-message")}i.success(a,2e3);t.removeClass("disabled")})});function r(e){e.each(function(){var e=a(this);var t=e.find("> ul, > ol");if(t.length){e.addClass("toggleable closed");e.find("> a").addClass("toggler").prepend('<i aria-hidden="true" class="icon-caret-up"></i>');t.addClass("toggle-container")}})}a(".external").each(function(){var e=a(this);if(!e.find("img").length)e.addClass("external-icon")});if(a("article pre").length&&"querySelectorAll"in t)(function(){var e=t.createElement("script");e.setAttribute("data-manual","");e.async="true";e.src=mdn.mediaPath+"js/syntax-prism-min.js?build="+mdn.build;t.body.appendChild(e)})();(function(){var e={css:{link:"/docs/Web/CSS/Value_definition_syntax",title:gettext("How to read CSS syntax."),urlTest:"/docs/Web/CSS/",classTest:"brush:css"},html:{urlTest:"/docs/Web/HTML/",classTest:"brush:html"},js:{urlTest:"/docs/Web/JavaScript/",classTest:"brush:js"},api:{urlTest:"/docs/Web/API/",classTest:"brush:js"}};var t=a(".syntaxbox, .twopartsyntaxbox");if(t.length){var n=false;var i;for(var r in e){var s=e[r].link;var o=e[r].urlTest;if(window.location.href.indexOf(s)>-1){n=true}if(window.location.href.indexOf(o)>-1){i=e[r]}}if(!n){t.each(function(){var t=a(this);var n;if(t.hasClass("twopartsyntaxbox")){n=e.css}for(var r in e){var s=e[r].classTest;if(t.hasClass(s)){n=e[r]}}if(!n&&i){n=i}if(n){if(n.link&&n.title){var o=n.link;var c=n.title;var l=a('<a href="'+o+'" class="syntaxbox-help icon-only" lang="en"><i aria-hidden="true" class="icon-question-sign"></i><span>'+c+"</span></a>");t.before(l);t.on("mouseenter",function(){l.addClass("isOpaque")});t.on("mouseleave",function(){l.removeClass("isOpaque")})}}})}}})();(function(){var e=a(".bc-table");if(!e.length)return;a("<link />").attr({href:"/media/css/wiki-compat-tables-min.css",type:"text/css",rel:"stylesheet"}).on("load",function(){a.ajax({url:"/media/js/wiki-compat-tables-min.js",dataType:"script",cache:true}).then(function(){e.mozCompatTable()})}).appendTo(t.head)})();a("#toc").on("click","a",function(){var e=a(this);mdn.analytics.trackEvent({category:"TOC Links",action:e.text(),label:e.attr("href")})});(function(){var n=a("#toc");var i=n.offset();var r=n.find("> .toggler");var o="fixed";var c=a("#wiki-right");var l=a(".page-buttons");var d=l.offset();var u=l.attr("data-sticky")==="true";var f=a("html").attr("dir")==="rtl"?"left":"right";var h=s(function(s){var c=a(t).scrollTop();var h=0;var v=a(".wiki-main-content");var m=r.css("pointer-events");if(!s||s.type==="resize"){if(f==="right"){d.right=a(e).width()-v.offset().left-v.innerWidth()}if(n.length){if(m==="auto"||r.find("i").css("display")!=="none"){if(!n.attr("data-closed")&&!r.attr("data-clicked")){r.trigger("mdn:click")}}else if(n.attr("data-closed")){r.trigger("mdn:click")}}}if(u){h=l.innerHeight();if(c>d.top){l.addClass(o);if(l.css("position")==="fixed"){l.css("min-width",l.css("width"));l.css(f,d[f])}}else{l.removeClass(o)}}if(!n.length)return;var p=e.innerHeight-parseInt(n.css("padding-top"),10)-parseInt(n.css("padding-bottom"),10)-h;if(c+h>i.top&&m==="none"){n.css({width:n.css("width"),top:h,maxHeight:p});n.addClass(o)}else{n.css({width:"auto",maxHeight:"none"});n.removeClass(o)}},15);if(n.length||u){h();a(e).on("scroll resize",h)}})();a(".htab").each(function(e){var t=a(this);var n=t.find(">ul>li");t.append(a("div[id=compat-desktop]")[e]);t.append(a("div[id=compat-mobile]")[e]);n.find("a").on("click mdn:click",function(e){var i=a(this);if(e){e.preventDefault();e.stopPropagation()}n.removeClass("selected");i.parent().addClass("selected");t.find(">div").hide().eq(n.index(i.parent())).show()}).eq(0).trigger("mdn:click")});a(".wiki-l10n").on("change",function(){if(this.value){e.location=this.value}});a("body[contextmenu=edit-history-menu]").mozContextMenu(function(e,t){var n=t.find("menuitem");var i=a("body");var r=!document.getSelection().isCollapsed;var s=a(e).is("a")||a(e).parents().is("a");var o=a(e).is("img");if(s||r||o){i.attr("contextmenu","")}t.on("click",function(e){location.href=a(e.target).data("action")+"?src=context"})});a(".kserrors-details-toggle").toggleMessage({toggleCallback:function(){a(".kserrors-details").toggleClass("hidden")}});a(".stack-form").html('<form action="http://stackoverflow.com/search"><i class="stack-icon" aria-hidden="true"></i><label for="stack-search" class="offscreen">'+gettext("Search Stack Overflow")+'</label><input id="stack-search" placeholder="'+gettext("Search Stack Overflow")+'" /><button type="submit" class="offscreen">Submit Search</button></form>').find("form").on("submit",function(t){t.preventDefault();var n=a(this).find("#stack-search").val();if(n!==""){e.location="http://stackoverflow.com/search?q=[firefox]+or+[firefox-os]+or+[html5-apps]+"+n}});(function(){var t="hidden";var n=a(".contributor-avatars");var i;var r;function s(e){return n.find(e).mozLazyloadImage()}s("li.shown noscript");if(n.data("has-hidden")){r=a('<button type="button" class="transparent">'+n.data("all-text")+"</button>");r.on("click",function(e){e.preventDefault();mdn.analytics.trackEvent({category:"Top Contributors",action:"Show all"});i=n.find("li."+t);i.removeClass(t);s("noscript");a(i.get(0)).find("a").get(0).focus();a(this).remove()});r.appendTo(n)}n.on("click","a",function(t){var n=t.metaKey||t.ctrlKey;var i=this.href;var r=a(this).parent().index()+1;var s={category:"Top Contributors",action:"Click position",label:r};if(n){mdn.analytics.trackEvent(s)}else{t.preventDefault();mdn.analytics.trackEvent(s,function(){e.location=i})}});n.find("ul").on("focusin focusout",function(e){a(this)[(e.type==="focusin"?"add":"remove")+"Class"]("focused")})})();if(a("math").length)(function(){var e=a('<div class="offscreen"><math xmlns="http://www.w3.org/1998/Math/MathML"><mspace height="23px" width="77px"/></math></div>').appendTo(document.body);var n=e.get(0).firstChild.firstChild.getBoundingClientRect();e.remove();var i=Math.abs(n.height-23)<=1&&Math.abs(n.width-77)<=1;if(!i){a('<link href="/media/css/libs/mathml.css" rel="stylesheet" type="text/css" />').appendTo(t.head);a("#wikiArticle").prepend('<div class="notice"><p>'+gettext("Your browser does not support MathML. A CSS fallback has been used instead.")+"</p></div>")}})();a.extend({parseQuerystring:function(e){var t={};var n=(e||location.search).replace("?","");var i=n.split("&");a.each(i,function(e,a){var n=a.split("=");t[n[0]]=n[1]});return t},slugifyString:function(e,t,a){var n=new RegExp("[?&\"'#*$"+(t?"":"/")+" +?]","g");var i=e.replace(n,"_").replace(/\$/g,"");if(!a){i=i.replace(/_+/g,"_")}return i}});(function(){var t=a(".revision-list-controls .link-btn");if(t.length){var n=t.offset().top;a(e).on("scroll",function(){var e=t;var i=a(this).scrollTop();e.toggleClass("fixed",i>=n)})}})();function s(e,t,a){var n;return function(){var i=this,r=arguments;var s=function(){n=null;if(!a)e.apply(i,r)};var o=a&&!n;clearTimeout(n);n=setTimeout(s,t);if(o)e.apply(i,r)}}(function(){var n=a('iframe[src*="youtube.com/embed"]');var i=[];var r=1;var s;function o(){var e;r=1;a.each(i,function(t,a){if(a.getPlayerState()!==1)return;r=0;e=a.getCurrentTime()/a.getDuration();if(!a.checkpoint){a.checkpoint=.1+Math.round(e*10)/10}if(e>a.checkpoint){mdn.analytics.trackEvent({category:"YouTube",action:"Percent Completed",label:a.getVideoUrl(),value:Math.round(a.checkpoint*100)});a.checkpoint+=.1}});if(r){if(s)clearTimeout(s)}else{s=setTimeout(o,6e3)}}if(!n.length)return;var c=e.location.protocol+"//"+e.location.hostname+(e.location.port?":"+e.location.port:"");n.each(function(){a(this).attr("src",function(e,t){return t+(t.split("?")[1]?"&":"?")+"&enablejsapi=1&origin="+c})});var l=t.createElement("script");l.async="true";l.src="//www.youtube.com/iframe_api";t.body.appendChild(l);e.onYouTubeIframeAPIReady=function(t){n.each(function(t){i[t]=new YT.Player(a(this).get(0));i[t].addEventListener("onStateChange",function(e){var a;switch(e.data){case 0:a="Finished";break;case 1:a="Play";if(r){o()}break;case 2:a="Pause";break;case 3:a="Buffering";break;default:return}mdn.analytics.trackEvent({category:"YouTube",action:a,label:i[t].getVideoUrl()})});i[t].addEventListener("onPlaybackQualityChange",function(e){var a;switch(e.data){case"small":a=240;break;case"medium":a=360;break;case"large":a=480;break;case"hd720":a=720;break;case"hd1080":a=1080;break;case"highres":a=1440;break;default:a=0}mdn.analytics.trackEvent({category:"YouTube",action:"Playback Quality",label:i[t].getVideoUrl(),value:a})});i[t].addEventListener("onError",function(t){mdn.analytics.trackError("YouTube Error: "+t.data,e.location.href)})})}})();function o(){var e=function(e){var t=e.createElement("details");var a;var n;var i;if(!("open"in t)){return false}n=e.body||function(){var t=e.documentElement;a=true;return t.insertBefore(e.createElement("body"),t.firstElementChild||t.firstChild)}();t.innerHTML="<summary>a</summary>b";t.style.display="block";n.appendChild(t);i=t.offsetHeight;t.open=true;i=i!=t.offsetHeight;n.removeChild(t);if(a){n.parentNode.removeChild(n)}return i}(document);if(e)return;a("details").addClass("no-details").each(function(){var e=a(this);var n=a("summary",e);var i=e.children(":not(summary)");var r=e.contents(":not(summary)");if(!n.length){n=a(t.createElement("summary")).text(gettext("Details")).prependTo(e)}if(i.length!==r.length){r.filter(function(){return this.nodeType===3&&/[^\t\n\r ]/.test(this.data)}).wrap("<span>");i=e.children(":not(summary)")}if(typeof e.attr("open")!=="undefined"){e.addClass("open");i.show()}else{i.hide()}n.attr("tabindex",0).attr("role","button").on("click",function(){n.focus();if(typeof e.attr("open")!=="undefined"){e.removeAttr("open");n.attr("aria-expanded","false")}else{e.attr("open","open");n.attr("aria-expanded","true")}i.slideToggle();e.toggleClass("open")}).on("keyup",function(e){if(32==e.keyCode||13==e.keyCode){e.preventDefault();n.click()}})})}if(a("details").length){o()}})(window,document,jQuery);(function(e,t,a){if(!e.waffle||!e.waffle.flag_is_active("wiki_samples"))return;var n=["codepen","jsfiddle"];var i="frame_".length;var r=a("link[rel=canonical]").attr("href")||e.location.href.split("#")[0];var s="<!-- Learn about this code on MDN: "+r+" -->\n\n";var o='<input type="hidden" name="utm_source" value="mdn" />'+'<input type="hidden" name="utm_medium" value="code-sample" />'+'<input type="hidden" name="utm_campaign" value="external-samples" />';a(".sample-code-frame").each(function(){var e=a(this);var t=e.parents(".sample-code-table").get(0);var n=e.attr("id").substring(i);a(t||e).after(function(){return u(n)})});a("#wikiArticle").on("click","button.open-in-host",function(){var e=a(this);var t=e.attr("data-section");var n=e.attr("data-host");mdn.analytics.trackEvent({category:"Samples",action:"open-"+n,label:t});e.attr("disabled","disabled");a.get(r+"?section="+t+"&raw=1").then(function(i){var r=a("<div />").append(i);var s=r.find("pre[class*=html]").text();var o=r.find("pre[class*=css]").text();var c=r.find("pre[class*=js]").text();var l=r.find("h2[name="+t+"]").text();d(n,l,s,o,c);e.removeAttr("disabled")})});function c(e,n,i,r){var c=a('<form method="post" action="https://jsfiddle.net/api/mdn/" class="hidden">'+'<input type="hidden" name="html" />'+'<input type="hidden" name="css" />'+'<input type="hidden" name="js" />'+'<input type="hidden" name="title" />'+'<input type="hidden" name="wrap" value="b" />'+o+'<input type="submit" />'+"</form>").appendTo(t.body);c.find("input[name=html]").val(s+n);c.find("input[name=css]").val(i);c.find("input[name=js]").val(r);c.find("input[name=title]").val(e);c.get(0).submit()}function l(e,n,i,r){var c=a('<form method="post" action="https://codepen.io/pen/define" class="hidden">'+'<input type="hidden" name="data">'+o+'<input type="submit" />'+"</form>").appendTo(t.body);var l={title:e,html:s+n,css:i,js:r};c.find("input[name=data]").val(JSON.stringify(l));c.get(0).submit()}function d(e,t,a,n,i){if(e==="jsfiddle"){c(t,a,n,i)}else if(e==="codepen"){l(t,a,n,i)}}function u(e){var t=a("<div />");a.each(n,function(){var a=this.toLowerCase();t.append('<button class="open-in-host" data-host="'+a+'" data-section="'+e+'"><i aria-hidden="true" class="icon-'+a+'"></i> Open in '+this+"</button>")});return t}})(window,document,jQuery);