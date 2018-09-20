// 鼠标移入移除点击左右翻页
//轮播
var timer=null;
var index=0;
var ulist = document.getElementsByClassName("ulist");
var timer=setInterval(autoplay,3000);
ulist[0].className="ulist active";
function autoplay(){
	ulist[0].className="ulist active";
    index++;
    
    for( var i = 0 ; i < ulist.length ; i++ ){
		   ulist[i].style.zIndex=0;
		   ulist[i].className="ulist";
    }
    if( index==ulist.length ){
        index=0;
    }
	   ulist[index].style.zIndex=1;
	   ulist[index].className="ulist active";
}
//鼠标移入移除点击左右翻页
//左
 $(".zuo").bind("mouseenter",function(){
     $(this).css("left",22)
}).bind("mouseleave",function(){
	$(this).css("left",20)
}).bind("click",function(){
	clearInterval(timer);
	var $list=$(".ulist").filter(".active")
	index=$list.index();
	index-=2;
	if( index < -1 ){
		index=3;
    }
    autoplay()
	timer=setInterval(autoplay,3000);
})
//右
$(".you").bind("mouseover",function(){
    $(this).css("right",22)
}).bind("mouseleave",function(){
	$(this).css("right",20)
}).bind("click",function(){
	clearInterval(timer);
	var $list=$(".ulist").filter(".active")
	index=$list.index();
	
	if( index > 4 ){
       index = -1;
	}
	autoplay();
	timer=setInterval(autoplay,3000);
})