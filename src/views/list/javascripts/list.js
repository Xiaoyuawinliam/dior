require('./modules/bag.js')
//搜索框动画
var $txt=$("#txt");
$txt.bind("focus",function(){
    $txt.animate({width:200},500)
}).bind("blur",function(){
    $txt.animate({width:126},100)
})
//吸顶效果
var oTop=document.getElementsByClassName("top")[0];
window.onscroll=function(){
    var nav=document.querySelector("#head-nav");
    var dior=document.querySelector("#head-logo");
    var sTop=document.documentElement.scrollTop || document.body.scrollTop;
	if( sTop>52 ){
		nav.style.position="fixed";
		nav.style.zIndex=1000;
		nav.style.left=0;
        nav.style.top=0;
        oTop.style.display="block";
	}else{
        nav.style.position="static";
        oTop.style.display="none";
    }
}
oTop.onclick=function(){
    $("body,html").animate({"scrollTop":0},1000);
}
//国家选择
$(".changeli").bind("click",function(e){
	e.stopPropagation?e.stopPropagation():e.cancelBubble=true;
	$(".changeli").find("p").css("text-decoration","underline");
})
$(".btn1").bind("click",function(){//事件委托
	$("#countries").addClass("active");
})
$(document).click(function(){
	$(".changeli").find("p").css("text-decoration","none");
	$("#countries").removeClass("active");
})
$("#countries").children().click(function(){
	var index=$(this).index();
	var str=$("#countries").children().eq(index).html();
	$(".changeli").find("p").html(str);
})
//鼠标滑过出下滑线
var foot=document.getElementsByClassName("foot_nav");
for( let i = 0 ; i < foot.length ; i++ ){
	foot[i].onmouseenter=function(){
		this.style.textDecoration="underline";
	}
	foot[i].onmouseleave=function(){
		this.style.textDecoration="none";
	}
}