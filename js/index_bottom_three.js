var three = document.querySelector(".top_all");
var three_quo1=document.querySelector(".down_quo_one");
var three_quo2=document.querySelector(".down_quo_two");
var three_quo3=document.querySelector(".down_quo_three");
var op=0;
function three_() {
    var opact=setInterval(() => {
        op+=0.05;
        three.style.opacity= op;
        if(op>=1){
            clearInterval(opact);
        }
    }, 100);
    function thid(){

    }
    $(three_quo1).animate({
        left:"0.4rem"
    },2000,"linear",function(){
        setInterval(() => {
            $(three_quo1).animate({
                bottom:"4.36rem"
            },1000,function(){
                $(three_quo1).animate({
                    bottom:"4.16rem"
                },1000)
            })
        }, 2000);
    })
    $(".down_quo_two").animate({
        width:"2.1rem"
    },2000,function(){
        $(".down_quo_g").css("display","block")
        setInterval(() => {
        $(".down_quo_two").animate({
            bottom:"5.74rem"
        },1000,function(){

            $(".down_quo_two").animate({
                bottom:"5.64rem"
            },1000)
        })
        }, 2000);
   
    })
    three_quo1.style.transform="rotate(360deg)";
    $(three_quo3).animate({
        right: "0.3rem"
    },2000,"linear",function(){
        setInterval(() => {
            $(three_quo3).animate({
                bottom:"4.84rem"
            },1000,function(){
                $(three_quo3).animate({
                    bottom:"4.74rem"
                },1000)
            })
        }, 2000);
     } )
    three_quo3.style.transform="rotate(-360deg)";

}