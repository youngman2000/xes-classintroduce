function logo(){$(".logo").append("<a></a>"),$(".logo a").attr("href","http://ssh.speiyou.com"),$(".logo a").css({width:"100%",height:"100%",display:"block"})}function changeLastPage(){$(".last-section .col-xs-5:nth-child(1)").hide(),$(".last-section .row.back .col-xs-5:nth-child(1)").show(),$(".btn.xc").after("<div class='btn app fadeinleft'><a href='http://app.speiyou.com/sp-andior-ios.html'>用学而思APP&nbsp;&nbsp;报班不排队<i class='fa fa-caret-right'></i></a></div>"),$(".btn.app").css({background:"#4EBEC1"}),$(".btn.xb").removeClass(".fadeinleft").addClass("fadeinright"),$(".section").append(" <i class='fa fa-home backhome backfirst'></i> ")}function addlink(){var e={one:"http://ssh.speiyou.com/e/20151027/562f2c6d82388.shtml",two:"http://ssh.speiyou.com/e/20151027/562f4380953d6.shtml",three:" http://ssh.speiyou.com/e/20151027/562f4c38bf3fa.shtml ",threechinese:" http://v.qq.com/page/v/n/f/v0170lj6knf.html ",four:" http://ssh.speiyou.com/e/20151027/562f4f636f160.shtml ",five:" http://ssh.speiyou.com/e/20151027/562f51cadd708.shtml ",six:" http://ssh.speiyou.com/e/20151028/56306da671b15.shtml ",seven:" http://ssh.speiyou.com/e/20151028/5630703543cd8.shtml ",eight:" http://ssh.speiyou.com/e/20151028/56307d84931d6.shtml ",nine:"  http://ssh.speiyou.com/e/20151028/563082753dbdf.shtml",ten:" http://ssh.speiyou.com/e/20151028/563085e11281c.shtml ",eleven:" http://ssh.speiyou.com/e/20151028/56308b990d2e0.shtml "},t={width:"100%",height:"100%",display:"block",color:"#fff"};$(".one .one-1 ul li:last-child a").attr("href",e.one).css(t),$(".two .two-1 .col-xs-6:last-child a").attr("href",e.two).css(t),$(".three .three-1 ul li:nth-child(2) a").attr("href",e.three).css(t),$(".there-chinese .there-chinese-5 .there-chinese-top-left a").attr("href",e.threechinese).css(t),$(".four .four-1 ul li:last-child a").attr("href",e.four).css(t),$(".five .five-1 ul li:nth-child(4) a").attr("href",e.five).css(t),$(".six .six-1 ul li:nth-child(4) a").attr("href",e.six).css(t),$(".seven .seven-1 .col-xs-6:nth-child(4) a").attr("href",e.seven).css(t),$(".eight .eight-1 .col-xs-6:nth-child(9) a").attr("href",e.eight).css(t),$(".nine .nine-1 .nine-con a").attr("href",e.nine).css(t),$(".ten .ten-15 .col-xs-4:nth-child(3) a").attr("href",e.ten).css(t),$(".ten.eleven .ten-15 .col-xs-4:nth-child(3) a").attr("href",e.eleven).css(t)}function mkmeta(){var e=document.createElement("meta");e.setAttribute("name","Author"),e.setAttribute("content","duanyong"),$("head").append(e)}function mkup(){var e=document.createElement("div");e.setAttribute("class","up fa fa-2x fa-chevron-circle-down"),$(".section").append(e)}function checkDirect(){return document.documentElement.clientHeight>=document.documentElement.clientWidth?"portrait":"landscape"}function orientNotice(){var e=checkDirect();"portrait"==e?$(".vertical").addClass("none"):$(".vertical").removeClass("none")}function init(){orientNotice(),window.addEventListener("onorientationchange"in window?"orientationchange":"resize",function(){setTimeout(orientNotice,200)})}window.onload=function(){$(".content").show()},$(".content").css("margin-left","-"+.5*$(".content").width()+"px"),$(".btn.zc a").attr("href","http://ssh.speiyou.com/z2015/2016zhongce/index.html"),$(".btn.xc a").attr("href","http://ssh.speiyou.com/z2015/2016xince/index.html"),$(".btn.xb a").attr("href","http://ssh.speiyou.com/z2015/2016xbquestion/index.html"),logo(),changeLastPage(),addlink(),mkmeta(),mkup();var orientLayer=document.getElementById("vertical");init(),$(document).ready(function(){$("#garde").fullpage({anchors:["1","2","3","4","5","6","7","8","9","10","11"],verticalCentered:!1,css3:!0,scrollingSpeed:1e3,autoScrolling:!0,slidesNavigation:!0,slidesNavPosition:"top",scrollBar:!1,easing:"easeIn",easingcss3:"cubic-bezier(0.65, 0.05, 0.36, 1)",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,scrollOverflow:!1,touchSensitivity:15,normalScrollElementTouchThreshold:5,onLeave:function(e,t,n){$(this);1==e&&($(".up").show(),$(".backhome").show()),2==e&&($(".up").show(),$(".backhome").show(),$.fn.fullpage.setAllowScrolling(!0,"down"))},afterLoad:function(e,t){1==t&&($(".up").hide(),$(".backhome").hide()),2==t&&($(".up").hide(),$(".backhome").hide(),$.fn.fullpage.setAllowScrolling(!1,"down"))},afterSlideLoad:function(e,t,n,o){$(this);2==t&&($(".modal-backdrop").hide(),$(".modal").hide())}}),$("#six-btn-2").click(function(){$.fn.fullpage.moveTo(2,0)}),$("#six-btn-3").click(function(){$.fn.fullpage.moveTo(6,0)}),$(".backfirst").click(function(){$.fn.fullpage.moveTo(1,0)}),$(".mathcommon").click(function(){$.fn.fullpage.moveTo(3,0)}),$("#oneenglish").click(function(){$.fn.fullpage.moveTo(6,0)}),$("#twoenglish").click(function(){$.fn.fullpage.moveTo(6,0)}),$("#threeenglish").click(function(){$.fn.fullpage.moveTo(6,0)}),$("#fourenglish").click(function(){$.fn.fullpage.moveTo(6,0)}),$("#fiveenglish").click(function(){$.fn.fullpage.moveTo(6,0)}),$("#sixenglish").click(function(){$.fn.fullpage.moveTo(7,0)}),$("#sevenenglish").click(function(){$.fn.fullpage.moveTo(7,0)}),$("#eightphy").click(function(){$.fn.fullpage.moveTo(6,0)}),$("#eightenglish").click(function(){$.fn.fullpage.moveTo(8,0)}),$("#ninephy").click(function(){$.fn.fullpage.moveTo(7,0)}),$("#ninechem").click(function(){$.fn.fullpage.moveTo(9,0)}),$(document).on("click",".nextpage",function(){$.fn.fullpage.moveTo(2,0)}),$(document).on("click",".prepage",function(){$.fn.fullpage.moveSectionUp()})}),$(".btn.newstudent").on("click",function(){$(".old").addClass("none"),$(".new").removeClass("none")}),$(".btn.oldstudent").on("click",function(){$(".old").removeClass("none"),$(".new").addClass("none")}),$("#onetime").html("11月30日一年级数学9:00  <br/>一年级英语9:30"),$("#onenewtime").html("12月7日一年级数学9:00  <br/>一年级英语9:30"),$("#twotime").html("11月30日二年级数学10:00 <br/> 二年级英语10:30"),$("#twonewtime").html("12月7日二年级数学10:00  <br/>二年级英语10:30"),$("#there-time").html("11月30日三年级数学11:00  <br/>三年级英语11:30"),$("#there-new-time").html("12月7日三年级数学9:00 <br />英语9:30 <br />10月26日三年级语文"),$("#four-time").html("11月30日四年级数学13:00 <br/> 四年级英语13:30"),$("#four-new-time").html("12月7日四年级数学10:00 <br/> 四年级英语10:30"),$("#five-time").html("11月30日五年级数学14:00 <br/> 五年级英语14:30"),$("#five-new-time").html("12月7日五年级数学11:00 <br/> 五年级英语11:30"),$("#sixtime").html("12月1日六年级数学9:00 <br/> 六年级英语9:30"),$("#sixnewtime").html("12月7日六年级数学13:00 <br/> 六年级英语13:30"),$("#seventime").html("12月1日七年级数学10:00 <br/> 七年级英语10:30"),$("#sevennewtime").html("12月7日七年级数学11:00  <br/>七年级英语11:30"),$("#eighttime").html("12月1日数学11:00 <br/> 英语11:30&nbsp;物理12:00"),$("#eightnewtime").html("12月7日数学13:00 <br/> 物理14:00&nbsp;英语13:30"),$("#ninetime").html("12月1日数学13:00 <br/> 物理13:30&nbsp;化学14:00"),$("#ninenewtime").html("12月7日数学14:30 <br/> 物理15:00&nbsp;化学15:30"),$("#tentime").html("12月1日数学14:30 <br/> 物理15:00&nbsp;化学15:30"),$("#tennewtime").html("12月7日数学14:30 <br/> 物理15:00&nbsp;化学15:30"),$("#eleventime").html("12月1日数学14:30 <br/> 物理15:00&nbsp;化学15:30"),$("#elevennewtime").html("12月7日数学14:30 <br/> 物理15:00&nbsp;化学15:30");