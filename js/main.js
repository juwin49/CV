
$(document).ready(function() {
    //手机模式菜单栏
    $('#navBox').click(function() {
        $('.headbar').toggleClass('openNav');
    });
    $('#menu a').click(function() {
        $('.headbar').removeClass('openNav');
    });

    if(!isMobile()) {
		$(window).scroll(function() {
	       scrollBanner();
		});
	  }

  });

  // //js原生实现jq$(document).ready(function() {}
  // (function () {
  //    var ie = !!(window.attachEvent && !window.opera);
  //    var wk = /webkit\/(\d+)/i.test(navigator.userAgent) && (RegExp.$1 < 525);
  //    var fn = [];
  //    var run = function () { for (var i = 0; i < fn.length; i++) fn[i](); };
  //    var d = document;
  //    d.ready = function (f) {
  //       if (!ie && !wk && d.addEventListener)
  //       return d.addEventListener('DOMContentLoaded', f, false);
  //       if (fn.push(f) > 1) return;
  //       if (ie)
  //          (function () {
  //             try { d.documentElement.doScroll('left'); run(); }
  //             catch (err) { setTimeout(arguments.callee, 0); }
  //          })();
  //       else if (wk)
  //       var t = setInterval(function () {
  //          if (/^(loaded|complete)$/.test(d.readyState))
  //          clearInterval(t), run();
  //       }, 0);
  //    };
  // })();
  //
  // document.ready(function(){
  //
  // });

  //文件下载
  function myBrowser(){
      var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
      var isOpera = userAgent.indexOf("Opera") > -1;
      if (isOpera) {
          return "Opera"
      }; //判断是否Opera浏览器
      if (userAgent.indexOf("Firefox") > -1) {
          return "FF";
      } //判断是否Firefox浏览器
      if (userAgent.indexOf("Chrome") > -1){
          return "Chrome";
      }
      if (userAgent.indexOf("Safari") > -1) {
          return "Safari";
      } //判断是否Safari浏览器
      if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
          return "IE";
      }; //判断是否IE浏览器
      if (userAgent.indexOf("Trident") > -1) {
          return "Edge";
      } //判断是否Edge浏览器
  }

  function oDownLoad(url,id) {
      if (myBrowser()==="IE" || myBrowser()==="Edge"){
          var oPop = window.open(url,"","width=1, height=1, top=5000, left=5000");
          for(; oPop.document.readyState != "complete"; )
          {
              if (oPop.document.readyState == "complete")break;
          }
          oPop.document.execCommand("SaveAs");
          oPop.close();
      }else{
          //!IE
          var odownLoad=document.getElementById(id);
          odownLoad.href=url;
          odownLoad.download="";
      }
  }

  //判断是否手机
  function isMobile(){
    return (
        (navigator.userAgent.match(/Android/i)) ||
		(navigator.userAgent.match(/webOS/i)) ||
		(navigator.userAgent.match(/iPhone/i)) ||
		(navigator.userAgent.match(/iPod/i)) ||
		(navigator.userAgent.match(/iPad/i)) ||
		(navigator.userAgent.match(/BlackBerry/))
    );
}
//随着滚动字体变大
function scrollBanner() {
  //  var scrollPos = $(this).scrollTop();
  //  var clientHeight=$(window).height();
  //   console.log($('.b_2').clientHeight);
  //  // console.log("scrollPos:"+scrollPos);
  //  // console.log(clientHeight);
  // if(scrollPos<1000){
  //   $('.b_2 h1').css({
  //   'font-size' : (40+(scrollPos)/2)+"px" ,
  //   'opacity' : 0+(scrollPos/50)
  //   });
  // }
  // $(".b_2").scroll(function() {
  //   $('.b_2 h1').css({
  //     'font-size' : (40+(scrollPos)/2)+"px" ,
  //     'opacity' : 0+(scrollPos/50)
  //     });
  //  });
     // $(".aboutT").fadeIn("normal");
  // $(this).empty();
  //滚动字体渐现
     $('.timeRow ').each(function() {
         var imagePos = $(this).offset().top;

         var topOfWindow = $(window).scrollTop();
          //console.log("imagePos:"+imagePos);
        //  console.log("topOfWindow:"+topOfWindow);
         if (imagePos < topOfWindow + 950) {
             $(this).addClass('fadeInUp');
              // $(this).css({
              //   'font-size' : (topOfWindow/100)+"px" ,
              //   'opacity' : 0+(topOfWindow/50)
              //   });
              setTimeout(function(){
                 $(this).removeClass('fadeInUp');
              }, 1000);
         }

     });

 }

  //swiper自定义模式
  var swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      autoplay: 2000,
      loop:true,
      autoplayDisableOnInteraction:false,
      paginationClickable:true,
      coverflow: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows : true
      }
  });
