
require('./nav')
//搜索框 动画
// var oTxt=document.getElementById("txt");
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
//搜索框动画
var $txt=$("#txt");
$txt.bind("focus",function(){
    $txt.animate({width:200},500)
}).bind("blur",function(){
    $txt.animate({width:126},100)
})

