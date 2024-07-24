/*JQuery Rules: 
 *=======$("slector").action(fucntion(){});==========
 *======= selector can htmltag,class or id===========
 *=== We also need $(document).ready() function to load all js before loading=====
*/   

$(document).ready(function(){

    $("h2").click(function(){
        $(this).hide();
    });
    
    $("#btn1").click(function(){
        $(".heading-1").show();
    });
    
    //Button Hide and Show Example
    $(".hide").click(function(){
        $(".para-1").hide(1000);
    });
    $(".show").click(function(){
        $(".para-1").show(1000);
    });


    //Fade In and out Example
    $("#btn-fade").click(function(){
        $(".div1").fadeIn(2000);
        $(".div2").fadeIn(3000);
        $(".div3").fadeIn(4000);
    });
    $("#btn-hide").click(function(){
        $(".div1").fadeOut(4000);
        $(".div2").fadeOut(3000);
        $(".div3").fadeOut(2000);
    })

    //Slide Example
    $("#btn-slide").click(function(){
        $(".div4").slideDown(2000);
    });
    $("#btn-slide-hide").click(function(){
        $(".div4").slideUp(2000);
    });

    //Add and Remove Class Example
    $("#btn-addcl").click(function(){
        $(".oldclass").addClass("newclass");
    });


})

