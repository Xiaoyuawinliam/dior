

// index中要放banner和header

// 引入banner 因为banner并没有暴露一些东西给index用，所以就用下面的方法引入进来就可以了
//鼠标移入移除点击左右翻页
require('./modules/banner')
require('./modules/header')

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
//首页邮箱验证
// var oFrom=document.getElementsByClassName("index_emile");
// var conP=document.getElementsByClassName("con")[0];
// var oTxt=document.getElementById("index_emile_txt")
// oTxt.onkeyup=function(){
// 	var reg=/^\w+@\w+\.\w+$/;
// 	var str=oTxt.value;
// 	if(reg.test(str)){
// 		conP.innerHtml="正确";
// 	}else{
// 		conP.innerHtml="无效的邮箱";
// 	}
// }
//导航点击样式
var unav=document.getElementById("nav_click");
unav.onclick=function(e){
	var e = e || event;
	var target = e.target || e.srcElement ;
	if( target.tagName=="A" ){
		$(target).css("textDecoration","underline");
		$(target).parent().siblings().find("a").css("textDecoration","none")
		target.parentNode.style.background="white";
		target.style.color="black";
		$(target).parent().siblings().css("background","black");
		$(target).parent().siblings().find("a").css("color","white")
	}
}
var foot=document.getElementsByClassName("foot_nav");
for( let i = 0 ; i < foot.length ; i++ ){
	foot[i].onmouseenter=function(){
		this.style.textDecoration="underline";
	}
	foot[i].onmouseleave=function(){
		this.style.textDecoration="none";
	}
}