var str="";
$.ajax({
    type:"get",
    url:"bag_data.json",
    datatype:"json",
    success:function(res){
        res.forEach( obj => {
            str+=`<div class="list_img_box">
                    <div class="list_imgandp">
                        <a class="list_img" href="#">
                            <img src="${obj.src}" alt="">
                        </a>
                        <div class="list_p">
                            <p>${obj.p}</p>
                        </div>
                    </div>
                </div>`;
        });
        $(".list_content").html(str);

    }
})

